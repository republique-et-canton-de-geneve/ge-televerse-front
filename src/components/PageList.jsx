import React, { useEffect, useId, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { DragDropProvider, DragOverlay, PointerSensor } from '@dnd-kit/react';
import { useSortable } from '@dnd-kit/react/sortable';
import { M3eHeading } from '@m3e/react/heading';
import { M3eIconButton } from '@m3e/react/icon-button';
import { M3eLinearProgressIndicator } from '@m3e/react/progress-indicator';
import { M3eSkeleton } from '@m3e/react/skeleton';
import { M3eTooltip } from '@m3e/react/tooltip';
import Icon from './Icon';
import useUploadStore from '../store/uploadStore';
import { announce } from './Announcer';
import i18n from '../i18n';

// Uses the active i18n language for digit grouping/decimals and translated byte
// units (`o/Ko/Mo/Go` in FR, `B/KB/MB/GB` elsewhere). Called outside React
// render, so it reads the i18n singleton rather than the useTranslation hook.
const formatFileSize = (bytes) => {
    if (bytes == null || bytes < 0) return '';
    const fmt = (n) => new Intl.NumberFormat(i18n.language, { maximumFractionDigits: 1 }).format(n);
    if (bytes < 1024) return `${bytes} ${i18n.t('units.byte')}`;
    const ko = bytes / 1024;
    if (ko < 1024) return `${fmt(ko < 10 ? ko : Math.round(ko))} ${i18n.t('units.kilobyte')}`;
    const mo = ko / 1024;
    if (mo < 1024) return `${fmt(mo < 10 ? mo : Math.round(mo * 10) / 10)} ${i18n.t('units.megabyte')}`;
    return `${fmt(mo / 1024)} ${i18n.t('units.gigabyte')}`;
};

const Thumbnail = ({ page, thumbError, onError }) => {
    const { t } = useTranslation();
    const isComplete = page.status === 'complete';
    const isError = page.status === 'error';
    const hasUsableThumb = isComplete && page.thumbnailUrl && !thumbError;

    if (hasUsableThumb) {
        // draggable=false : sans cela l'`<img>` est glissable nativement, et
        // Chrome place l'image dans le dataTransfer comme un File. useFileDrop
        // (qui n'ignore que les drags dnd-kit, dépourvus du type `Files`) la
        // verrait alors comme un vrai fichier — overlay de dépôt allumé, puis
        // ré-upload de la vignette en nouvelle page au lâcher. Le réordonnancement
        // passe par la poignée, jamais par la vignette : la rendre non-glissable
        // n'enlève aucune fonctionnalité.
        return (
            <img
                src={page.thumbnailUrl}
                alt={t('a11y.thumbnailAlt', { name: page.fileName })}
                draggable={false}
                onError={onError}
            />
        );
    }
    if (isError) {
        return <Icon name="error" className="page-item__thumb-icon page-item__thumb-icon--error" />;
    }
    // Uploading, or complete but server hasn't returned a thumbnailUrl yet, or
    // the thumbnail failed to load. Skeleton fills the 56×56 square until the
    // image arrives.
    return <M3eSkeleton shape="square" />;
};

const PageItem = ({ page, index, total, onDelete, onEdit, onMove, actionsDisabled, isNew, moveHintId }) => {
    const { t } = useTranslation();
    const isComplete = page.status === 'complete';
    const isUploading = page.status === 'uploading';
    const isErrored = page.status === 'error';
    const showActions = isComplete && !actionsDisabled;
    const [thumbError, setThumbError] = useState(false);

    const handleRef = useRef(null);
    const disabled = !isComplete || actionsDisabled;
    // pageId est null tant que l'envoi n'est pas terminé : sans le repli sur
    // tempId, deux lignes en cours d'envoi porteraient le même id de poignée.
    const handleId = `page-item-drag-${page.pageId || page.tempId}`;

    // L'id DOIT être stable tant que le composant vit (même chaîne d'identité
    // que la `key` posée par PageList) : un id dérivé de l'index mute quand
    // une ligne en erreur est filtrée et que les indices glissent, et
    // @dnd-kit/react ré-enregistre alors le sortable sous le nouvel id SANS
    // désinscrire l'ancien — le droppable fantôme qui en reste casse
    // silencieusement le réordonnancement pour tout le reste de la session.
    const { ref, isDragSource } = useSortable({
        id: page.pageId || page.tempId || `page-${index}`,
        index,
        handle: handleRef,
        disabled,
    });

    const rowClass = [
        'page-item',
        isDragSource && 'page-item--dragging',
        isNew && 'page-item--entering',
    ].filter(Boolean).join(' ');

    // Réordonnancement au clavier. Le glisser-déposer de dnd-kit est purement
    // pointeur (son capteur clavier est débranché côté PageList, cf. `sensors`) :
    // sans ceci, l'ordre des pages serait inatteignable sans souris. Modèle
    // « déplacement immédiat » plutôt que « saisir / relâcher » — une flèche
    // = un rang, sans mode modal à mémoriser, et chaque pas est confirmé à
    // voix haute.
    const handleKeyDown = (e) => {
        if (disabled || e.defaultPrevented) return;
        let target = null;
        if (e.key === 'ArrowUp') target = index - 1;
        else if (e.key === 'ArrowDown') target = index + 1;
        else if (e.key === 'Home') target = 0;
        else if (e.key === 'End') target = total - 1;
        else return;
        // preventDefault même quand le déplacement est impossible (déjà en
        // bout de liste) : sinon la flèche fait défiler la page sous le doigt
        // de l'utilisateur, qui croit avoir déplacé la ligne.
        e.preventDefault();
        if (target === index || target < 0 || target >= total) return;
        // handleId : PageList devra rendre le focus à CETTE poignée une fois le
        // déplacement retombé (cf. moveByKeyboard) — sans quoi la première
        // flèche marcherait et les suivantes tomberaient dans le vide.
        onMove(index, target, handleId);
        announce(t('a11y.pageMoved', {
            name: page.fileName,
            position: target + 1,
            total,
        }));
    };

    let subtitle = null;
    if (isUploading) {
        subtitle = (
            <>
                <M3eLinearProgressIndicator
                    className="page-item__progress"
                    value={page.progress}
                    max={100}
                    aria-label={t('a11y.uploadProgress', { name: page.fileName })}
                />
                {page.retrying && (
                    <span className="page-item__retrying">{t('pageList.retrying')}</span>
                )}
            </>
        );
    } else if (isErrored) {
        subtitle = <span className="page-item__error">{page.error}</span>;
    } else if (page.fileSize != null) {
        subtitle = formatFileSize(page.fileSize);
    }

    return (
        // role="listitem" explicite : la ligne est un conteneur flex, et
        // Chrome retire le rôle implicite d'un <li> dont le `display` n'est
        // pas `list-item` — la liste se retrouve alors vide de ses éléments.
        <li className={rowClass} ref={ref} role="listitem">
            {/* La poignée est TOUJOURS rendue, même inerte. Sans elle,
                `handle` reste null et dnd-kit retombe sur la ligne entière :
                son greffon d'accessibilité transforme alors chaque ligne en
                cours d'envoi en bouton focusable « draggable ». Rendue
                désactivée et masquée aux technologies d'assistance, elle
                occupe la même gouttière de 20 px que l'ancien espaceur. */}
            <button
                type="button"
                id={handleId}
                ref={handleRef}
                className={`page-item__handle${showActions ? '' : ' page-item__handle--placeholder'}`}
                disabled={!showActions}
                aria-hidden={showActions ? undefined : 'true'}
                aria-label={t('a11y.moveHandle', {
                    name: page.fileName,
                    position: index + 1,
                    total,
                })}
                // Posé ici plutôt que laissé à dnd-kit : son greffon
                // d'accessibilité ne renseigne aria-describedby que si
                // l'attribut est absent, et son texte d'aide est en anglais.
                aria-describedby={moveHintId}
                onKeyDown={handleKeyDown}
            >
                <Icon name="drag_indicator" />
            </button>
            {showActions && (
                <M3eTooltip htmlFor={handleId}>{t('common.move')}</M3eTooltip>
            )}

            <div className="page-item__body">
                <div className="page-item__thumb">
                    <Thumbnail
                        page={page}
                        thumbError={thumbError}
                        onError={() => setThumbError(true)}
                    />
                </div>

                <div className="page-item__main">
                    <div className="page-item__title">{page.fileName}</div>
                    {subtitle != null && (
                        <div className="page-item__subtitle">{subtitle}</div>
                    )}

                    {showActions && (
                        <div className="page-item__actions">
                            <M3eIconButton
                                id={`page-item-edit-${page.pageId}`}
                                size="small"
                                aria-label={`${t('common.edit')} ${page.fileName}`}
                                onClick={() => onEdit(page.pageId)}
                            >
                                <Icon name="edit" />
                            </M3eIconButton>
                            <M3eTooltip htmlFor={`page-item-edit-${page.pageId}`}>{t('common.edit')}</M3eTooltip>
                            <M3eIconButton
                                id={`page-item-delete-${page.pageId}`}
                                size="small"
                                aria-label={`${t('common.delete')} ${page.fileName}`}
                                onClick={() => onDelete(page.pageId)}
                            >
                                <Icon name="delete" />
                            </M3eIconButton>
                            <M3eTooltip htmlFor={`page-item-delete-${page.pageId}`}>{t('common.delete')}</M3eTooltip>
                        </div>
                    )}
                </div>
            </div>
        </li>
    );
};

// Copie flottante suivant le curseur pendant un glisser : purement visuelle,
// et doublon de la ligne d'origine restée en place — masquée aux technologies
// d'assistance.
const OverlayItem = ({ page }) => {
    const [thumbError, setThumbError] = useState(false);
    return (
        <div className="page-item page-item--overlay" aria-hidden="true">
            <span className="page-item__handle-spacer" />
            <div className="page-item__body">
                <div className="page-item__thumb">
                    <Thumbnail
                        page={page}
                        thumbError={thumbError}
                        onError={() => setThumbError(true)}
                    />
                </div>
                <div className="page-item__content">
                    <div className="page-item__title">{page.fileName}</div>
                </div>
            </div>
        </div>
    );
};

// Capteur pointeur seul. Le capteur clavier de dnd-kit déplace l'élément par
// pas de 10 px (une dizaine de flèches pour franchir une ligne) et annonce ses
// mouvements en anglais, en citant l'identifiant technique de la page. Le
// clavier est donc géré par PageItem, qui déplace d'un rang par flèche et
// annonce dans la langue de l'utilisateur (cf. handleKeyDown).
const SENSORS = [PointerSensor];

const PageList = ({ onReorder, onDelete, onEdit, actionsDisabled }) => {
    const { t } = useTranslation();
    // Errored upload placeholders stay in the store (so PLAN could still pick
    // them up for debugging) but never render — the error banner above the
    // card is the user-facing signal.
    const pages = useUploadStore((s) => s.pages).filter((p) => p.status !== 'error');
    const [activeId, setActiveId] = useState(null);
    const [newPageIds, setNewPageIds] = useState(new Set());
    const prevPageIdsRef = useRef(new Set());
    const listRef = useRef(null);
    const itemsRef = useRef(null);
    const headingId = useId();
    const moveHintId = useId();
    // Poignée à laquelle rendre le focus après un déplacement au clavier.
    const pendingFocusRef = useRef(null);

    // Un déplacement fait perdre le focus deux fois : React déplace le nœud de
    // la ligne (Chrome défocalise tout élément détaché, fût-ce un instant),
    // puis `actionsDisabled` désactive la poignée le temps de l'aller-retour
    // serveur — et un bouton désactivé ne peut pas être focalisé. L'intention
    // est donc rejouée à chaque rendu jusqu'à ce que la poignée redevienne
    // active, plutôt qu'une seule fois juste après le déplacement.
    useEffect(() => {
        const id = pendingFocusRef.current;
        if (!id) return;
        const active = document.activeElement;
        // L'utilisateur est reparti ailleurs entre-temps : ne pas lui reprendre
        // le focus (le cas se produit si le réordonnancement échoue et que la
        // poignée ne se réactive jamais).
        if (active && active !== document.body && active.id !== id) {
            pendingFocusRef.current = null;
            return;
        }
        const handle = document.getElementById(id);
        if (!handle || handle.disabled) return; // encore en vol : on retentera
        pendingFocusRef.current = null;
        if (active !== handle) handle.focus();
    });

    // Track newly added rows for the enter animation and scroll-into-view —
    // at upload start, not completion. A row is born with only a tempId
    // (uploading placeholder), gains its pageId when the upload completes,
    // then the session refetch replaces it with a pageId-only copy. Each step
    // changes which ids the row carries, so a row only counts as new when
    // NONE of its ids has been seen — otherwise the scroll would re-fire on
    // completion and again on refetch.
    useEffect(() => {
        const prevIds = prevPageIdsRef.current;
        const currentIds = new Set();
        const added = new Set();
        for (const page of pages) {
            const ids = [page.pageId, page.tempId].filter(Boolean);
            if (ids.length > 0 && !ids.some((id) => prevIds.has(id))) {
                ids.forEach((id) => added.add(id));
            }
            ids.forEach((id) => currentIds.add(id));
        }
        prevPageIdsRef.current = currentIds;

        if (added.size > 0) {
            setNewPageIds(added);
            if (listRef.current) {
                listRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
            }
            // Desktop: items container is a scroll box (max-height + overflow);
            // bring the new bottom row into view inside it. No-op on mobile
            // where overflow-y is visible.
            if (itemsRef.current) {
                itemsRef.current.scrollTo({
                    top: itemsRef.current.scrollHeight,
                    behavior: 'smooth',
                });
            }
            const timer = setTimeout(() => setNewPageIds(new Set()), 350);
            return () => clearTimeout(timer);
        }
    }, [pages]);

    if (pages.length === 0) return null;

    const activePage = activeId != null
        ? pages.find((p) => p.pageId === activeId || p.tempId === activeId
            || `page-${pages.indexOf(p)}` === activeId)
        : null;

    // Les indices manipulés à l'écran vivent dans la liste FILTRÉE (sans les
    // lignes en erreur) alors que reorderPages splice le tableau complet du
    // store : retraduit par identité de page pour ne pas déplacer la mauvaise
    // ligne. Partagé par le glisser-déposer et le déplacement au clavier.
    const moveByVisibleIndex = (fromVisible, toVisible) => {
        const moved = pages[fromVisible];
        const target = pages[toVisible];
        if (!moved || !target) return;
        const idOf = (p) => p.pageId ?? p.tempId;
        const storePages = useUploadStore.getState().pages;
        const fromIndex = storePages.findIndex((p) => idOf(p) === idOf(moved));
        const toIndex = storePages.findIndex((p) => idOf(p) === idOf(target));
        if (fromIndex === -1 || toIndex === -1) return;
        onReorder(fromIndex, toIndex);
    };

    const moveByKeyboard = (fromVisible, toVisible, handleId) => {
        pendingFocusRef.current = handleId;
        moveByVisibleIndex(fromVisible, toVisible);
    };

    return (
        <div className="page-list" ref={listRef}>
            {/* L'`id` est porté par un <span> de lumière plutôt que par
                <m3e-heading> : le nom accessible de la liste se calcule à
                partir du CONTENU de l'élément référencé, et tous les lecteurs
                d'écran ne descendent pas dans le contenu distribué d'un
                composant à Shadow DOM. Même parade que le <span slot="title">
                de PdfPreview. */}
            <M3eHeading
                variant="title"
                size="small"
                level={3}
                className="page-list__heading"
            >
                <span id={headingId}>
                    {t('pageList.heading', { count: pages.length })}
                </span>
            </M3eHeading>
            {/* Mode d'emploi du déplacement au clavier, référencé par
                aria-describedby depuis chaque poignée : énoncé une fois, à la
                prise de focus, plutôt que répété dans chaque libellé. */}
            <p id={moveHintId} className="sr-only">{t('a11y.moveHandleHint')}</p>
            <DragDropProvider
                sensors={SENSORS}
                onDragStart={(event) => {
                    setActiveId(event.operation.source?.id ?? null);
                }}
                onDragEnd={(event) => {
                    setActiveId(null);
                    if (event.canceled) return;
                    const { source } = event.operation;
                    if (!source || source.initialIndex === source.index) return;
                    moveByVisibleIndex(source.initialIndex, source.index);
                }}
            >
                {/* role="list" explicite : WebKit retire la sémantique de liste
                    d'un <ul> dépourvu de puces (list-style: none). Voir aussi
                    le role="listitem" de chaque ligne. */}
                <ul
                    className="page-list__items"
                    ref={itemsRef}
                    role="list"
                    aria-labelledby={headingId}
                >
                    {pages.map((page, index) => (
                        <PageItem
                            key={page.pageId || page.tempId || index}
                            page={page}
                            index={index}
                            total={pages.length}
                            onDelete={onDelete}
                            onEdit={onEdit}
                            onMove={moveByKeyboard}
                            actionsDisabled={actionsDisabled}
                            isNew={newPageIds.has(page.pageId ?? page.tempId)}
                            moveHintId={moveHintId}
                        />
                    ))}
                </ul>
                <DragOverlay>
                    {activePage && <OverlayItem page={activePage} />}
                </DragOverlay>
            </DragDropProvider>
        </div>
    );
};

export default PageList;
