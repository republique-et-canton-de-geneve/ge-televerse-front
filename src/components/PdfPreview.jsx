import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { M3eAppBar } from '@m3e/react/app-bar';
import { M3eIconButton } from '@m3e/react/icon-button';
import { M3eTooltip } from '@m3e/react/tooltip';
import Icon from './Icon';
import { getPreviewUrl } from '../api/endpoints';
import useFocusTrap from '../hooks/useFocusTrap';
import PdfPreviewContent from './PdfPreviewContent';

// Full-screen overlay preview of the assembled PDF, mirroring PageEditor's
// pattern (fixed inset overlay + app bar with a trailing close button) so the
// user stays inside the app instead of being sent to a separate browser tab.
// The pages themselves are rendered by PdfPreviewContent (react-pdf → canvas,
// virtualized) which handles multi-page scrolling on every browser, iOS included.
//
// PdfPreviewContent is imported statically (not React.lazy). Under Parcel that
// was forced: a code-split chunk was loaded by an inline <script type=module>
// bootstrap, which the production CSP (script-src 'self', no unsafe-inline)
// blocks. rspack loads its chunks by injecting a <script src=…> instead, so the
// constraint is gone and React.lazy would work here — this stays static by
// choice, not by force. The heavy pdf.js worker still loads on demand — pdfjs
// spawns it as a Worker only when a preview is opened.
//
// Déclaré comme dialogue modal : l'overlay recouvre la page d'envoi sans la
// retirer du DOM, et sans `role="dialog"` + le `inert` posé par UploadPage un
// lecteur d'écran continuerait de parcourir la carte d'envoi cachée dessous.
const PdfPreview = ({ token, onClose }) => {
    const { t } = useTranslation();
    const previewUrl = getPreviewUrl(token);
    const dialogRef = useRef(null);

    // Remplace l'ancien écouteur `keydown` posé sur `document` : le piège de
    // focus gère Échap au niveau du dialogue, là où le focus se trouve.
    useFocusTrap(dialogRef, { onEscape: onClose });

    // Kept as a manual escape hatch (native viewer, print/download) even though
    // in-app rendering now works across browsers. C'est aussi la seule voie
    // vers un rendu LISIBLE par un lecteur d'écran : ici les pages sont
    // dessinées dans des canvas (cf. a11y.pdfNotReadable).
    const openInNewTab = () => window.open(previewUrl, '_blank', 'noopener,noreferrer');

    return (
        <div
            className="pdf-preview"
            ref={dialogRef}
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            aria-labelledby="pdf-preview-title"
        >
            {/* role="none" : m3e-app-bar s'annonce en repère `banner`, ce qu'une
                barre de titre interne à un dialogue n'est pas. */}
            <M3eAppBar size="small" role="none">
                <span slot="title" id="pdf-preview-title">{t('pdfPreview.title')}</span>
                <M3eIconButton
                    id="pdf-preview-open"
                    slot="trailing"
                    onClick={openInNewTab}
                    aria-label={t('common.openNewTab')}
                >
                    <Icon name="open_in_new" />
                </M3eIconButton>
                <M3eIconButton id="pdf-preview-close" slot="trailing" onClick={onClose} aria-label={t('common.close')}>
                    <Icon name="close" />
                </M3eIconButton>
            </M3eAppBar>
            <M3eTooltip htmlFor="pdf-preview-open">{t('common.openNewTab')}</M3eTooltip>
            <M3eTooltip htmlFor="pdf-preview-close">{t('common.close')}</M3eTooltip>

            <PdfPreviewContent fileUrl={previewUrl} onOpenExternal={openInNewTab} />
        </div>
    );
};

export default PdfPreview;
