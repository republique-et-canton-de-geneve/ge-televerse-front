import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Document, Page, pdfjs } from 'react-pdf';
import { useVirtualizer } from '@tanstack/react-virtual';
import { M3eButton } from '@m3e/react/button';
import { M3eCircularProgressIndicator } from '@m3e/react/progress-indicator';
import Icon from './Icon';

// Worker pdf.js en build LEGACY, comme la bibliothèque elle-même (cf. l'alias
// `pdfjs-dist` de rsbuild.config.mjs, qui explique pourquoi : le build moderne
// casse l'aperçu sur tout iPhone sous iOS 26.2).
//
// Créé à la PREMIÈRE ouverture de l'aperçu, pas au chargement du module : ce
// module est importé statiquement par l'application, un worker créé ici au
// niveau supérieur téléchargeait ~390 Ko gzip au démarrage de chaque téléphone,
// aperçu ouvert ou non. rspack reconnaît `new Worker(new URL(…))` et en fait un
// chunk `.js` — servi précompressé et avec le bon type MIME, là où un `.mjs`
// brut ne l'est pas par l'image nginx.
//
// Appelé pendant le rendu, et pas dans un effet : <Document> lance `getDocument`
// depuis son propre effet, et les effets d'un enfant passent avant ceux de son
// parent — un effet d'ici arriverait après. Idempotent, le double rendu du mode
// strict est sans conséquence.
let workerStarted = false;
const ensurePdfWorker = () => {
    if (workerStarted || typeof Worker === 'undefined') return;
    workerStarted = true;
    try {
        pdfjs.GlobalWorkerOptions.workerPort = new Worker(
            new URL('pdfjs-dist/legacy/build/pdf.worker.min.mjs', import.meta.url),
            { type: 'module' },
        );
    } catch {
        // Repli : pdf.js tente lui-même le worker depuis cette URL, puis se
        // replie sur le thread principal.
        pdfjs.GlobalWorkerOptions.workerSrc = new URL(
            'pdfjs-dist/legacy/build/pdf.worker.min.mjs',
            import.meta.url,
        ).toString();
    }
};

// A4-portrait aspect (height / width), used only to reserve scroll space before
// a page's real dimensions are measured — keeps the scrollbar and virtualization
// estimates stable. Real heights replace it once each page renders.
const PAGE_ASPECT = 842 / 595;
const MAX_PAGE_WIDTH = 900; // don't blow a portrait page up to full desktop width
const H_MARGIN = 8;         // breathing room on each side of a page
const GAP = 12;             // vertical space between pages

// aria-hidden : le texte de chargement qui l'accompagne porte déjà le message,
// l'indicateur n'ajouterait qu'une « barre de progression » sans valeur.
const Spinner = () => <M3eCircularProgressIndicator indeterminate aria-hidden="true" />;

// Only the pages near the viewport are mounted (react-pdf renders each to a
// canvas), so a 20+ page document stays light. Unmounted pages keep an
// estimated height so the scrollbar doesn't jump as the user scrolls.
const PdfPreviewContent = ({ fileUrl, onOpenExternal }) => {
    ensurePdfWorker();
    const { t } = useTranslation();
    const scrollRef = useRef(null);
    const [numPages, setNumPages] = useState(0);
    const [width, setWidth] = useState(0);
    const [failed, setFailed] = useState(false);

    // Measure the scroll container so pages render at its width. useLayoutEffect
    // seeds the initial value before paint to avoid a first frame at width 0.
    useLayoutEffect(() => {
        const el = scrollRef.current;
        if (!el) return undefined;
        setWidth(el.clientWidth);
        const ro = new ResizeObserver((entries) => setWidth(entries[0].contentRect.width));
        ro.observe(el);
        return () => ro.disconnect();
    }, []);

    const pageWidth = Math.max(0, Math.min(width - H_MARGIN * 2, MAX_PAGE_WIDTH));
    const estimatedPageHeight = pageWidth * PAGE_ASPECT;

    const virtualizer = useVirtualizer({
        count: numPages,
        getScrollElement: () => scrollRef.current,
        estimateSize: () => estimatedPageHeight,
        gap: GAP,
        overscan: 2,
    });

    // Page canvases scale with container width; drop cached measurements so
    // estimates and positions recompute on resize / orientation change.
    useEffect(() => {
        virtualizer.measure();
    }, [pageWidth]); // eslint-disable-line react-hooks/exhaustive-deps

    // react-pdf reloads the document whenever `file` changes identity; keep it
    // stable across renders.
    const file = useMemo(() => fileUrl, [fileUrl]);

    if (failed) {
        return (
            <div className="pdf-preview__fallback">
                <p>{t('pdfPreview.fallback')}</p>
                <M3eButton variant="filled" onClick={onOpenExternal}>
                    <Icon slot="icon" name="open_in_new" />
                    {t('common.openNewTab')}
                </M3eButton>
            </div>
        );
    }

    return (
        // tabIndex : une zone défilante doit pouvoir l'être au clavier seul.
        // La mise en garde qui suit est le seul moyen honnête de signaler que
        // ces pages sont des images de canvas — le contenu textuel du PDF n'est
        // pas restitué ici, et la sortie vers la visionneuse du navigateur (qui,
        // elle, l'expose) est à un bouton de distance dans la barre de titre.
        <div
            ref={scrollRef}
            className="pdf-preview__scroll"
            tabIndex={0}
            role="region"
            aria-label={t('a11y.pdfRegion', { count: numPages })}
        >
            <p className="sr-only">{t('a11y.pdfNotReadable')}</p>
            {/* suspense={false} : react-pdf 11 passe par défaut en Suspense +
                périmètre d'erreur, et cette application n'a ni l'un ni l'autre.
                Sans lui, l'aperçu ne s'ouvrait qu'une fois le PDF fusionné,
                téléchargé et analysé — rien à l'écran d'ici là, pas même
                l'indicateur ci-dessous — et toute erreur (429 MERGE_BUSY, 504 du
                routeur, coupure réseau, page illisible) était relancée au rendu
                après `onLoadError` : l'application entière se démontait, écran
                vide. En mode effet, `loading` / `onLoadError` et le repli
                ci-dessus reprennent la main ; les <Page> héritent du réglage. */}
            <Document
                suspense={false}
                file={file}
                onLoadSuccess={({ numPages: n }) => setNumPages(n)}
                onLoadError={() => setFailed(true)}
                loading={null}
                error={null}
                noData={null}
            >
                {width > 0 && numPages > 0 && (
                    <div className="pdf-preview__pages" style={{ height: virtualizer.getTotalSize() }}>
                        {virtualizer.getVirtualItems().map((item) => (
                            <div
                                key={item.key}
                                data-index={item.index}
                                ref={virtualizer.measureElement}
                                className="pdf-preview__page"
                                role="img"
                                aria-label={t('a11y.pdfPage', {
                                    page: item.index + 1,
                                    total: numPages,
                                })}
                                style={{
                                    transform: `translateY(${item.start}px)`,
                                    minHeight: estimatedPageHeight,
                                }}
                            >
                                <Page
                                    pageNumber={item.index + 1}
                                    width={pageWidth}
                                    renderTextLayer={false}
                                    renderAnnotationLayer={false}
                                    loading={<Spinner />}
                                />
                            </div>
                        ))}
                    </div>
                )}
            </Document>

            {!failed && numPages === 0 && (
                <div className="pdf-preview__overlay" role="status">
                    <Spinner />
                    <span className="sr-only">{t('a11y.pdfLoading')}</span>
                </div>
            )}
        </div>
    );
};

export default PdfPreviewContent;
