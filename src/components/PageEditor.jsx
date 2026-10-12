import React, { useState, useCallback, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { M3eHeading } from '@m3e/react/heading';
import { M3eIconButton } from '@m3e/react/icon-button';
import { M3eButton } from "@m3e/react/button";
import { M3eCircularProgressIndicator } from '@m3e/react/progress-indicator';
import { M3eFab } from '@m3e/react/fab';
import { M3eSnackbar } from '@m3e/react/snackbar';
import Icon from './Icon';
import usePageEdit from '../hooks/usePageEdit';
import { editFailureKind } from '../api/endpoints';
import useIsMobile from '../hooks/useIsMobile';
import useFocusTrap from '../hooks/useFocusTrap';

const FEEDBACK_DURATION = 2000;

// Conduite à tenir renvoyée par editFailureKind -> clé de message. Une table
// plutôt qu'une cascade de if : la liste des issues est fermée et vient du back.
const EDIT_ERROR_KEYS = {
    busy: 'pageEditor.feedback.errorBusy',
    network: 'pageEditor.feedback.errorNetwork',
    server: 'errors.server',
    conflict: 'pageEditor.feedback.errorConflict',
    finalizing: 'errors.sessionFinalizing',
    notEditable: 'pageEditor.feedback.errorNotEditable',
    tooLarge: 'pageEditor.feedback.errorTooLarge',
    generic: 'pageEditor.feedback.errorGeneric',
};

// Extrait en composant à part pour que son piège de focus soit monté et
// démonté avec lui : à l'ouverture le focus entre dans la bulle, à la
// fermeture il revient sur le bouton « Aide ». Imbriqué dans l'overlay de
// PageEditor, son écouteur clavier est atteint en premier — le piège extérieur
// s'efface devant lui (cf. le garde defaultPrevented de useFocusTrap).
const HelpDialog = ({ actions, onClose }) => {
    const { t } = useTranslation();
    const dialogRef = useRef(null);
    useFocusTrap(dialogRef, { onEscape: onClose });

    return (
        <div
            className="page-editor__help"
            ref={dialogRef}
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            aria-labelledby="page-editor-help-title"
        >
            {/* Voile de fermeture au clic. Retiré du parcours clavier et de
                l'arbre d'accessibilité : un bouton plein écran placé AVANT le
                contenu du dialogue s'interposerait à chaque tabulation, alors
                que la croix et Échap offrent déjà la même sortie. */}
            <div
                className="page-editor__help-scrim"
                aria-hidden="true"
                onClick={onClose}
            />
            <div className="page-editor__help-bubble">
                <div className="page-editor__help-header">
                    {/* L'`id` va sur un <span> de lumière, non sur
                        <m3e-heading> : le nom du dialogue se calcule à partir
                        du contenu de l'élément référencé, que tous les
                        lecteurs d'écran ne savent pas suivre à travers le
                        Shadow DOM du composant. */}
                    <M3eHeading
                        variant="headline"
                        size="small"
                        level={2}
                        className="page-editor__help-title"
                    >
                        <span id="page-editor-help-title">{t('pageEditor.helpTitle')}</span>
                    </M3eHeading>
                    <M3eIconButton onClick={onClose} aria-label={t('pageEditor.closeHelp')}>
                        <Icon name="close" />
                    </M3eIconButton>
                </div>
                <p className="page-editor__help-note">
                    {t('pageEditor.helpNote')}
                </p>
                <M3eHeading variant="title" size="medium" level={3} className="page-editor__help-subtitle">
                    {t('pageEditor.helpSubtitle')}
                </M3eHeading>
                {/* Rôles explicites : WebKit retire la sémantique de liste d'un
                    <ul> dépourvu de puces (list-style: none), et Chrome celle
                    d'un <li> dont le `display` n'est pas `list-item` — ces
                    lignes sont des conteneurs flex. */}
                <ul className="page-editor__help-actions" role="list">
                    {actions.map(({ icon, label, description }) => (
                        <li key={icon} role="listitem">
                            <Icon name={icon} />
                            <div>
                                <strong>{label}</strong>
                                <p>{description}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

// Déclaré comme dialogue modal : l'overlay recouvre la page d'envoi sans la
// retirer du DOM. UploadPage rend celle-ci `inert` pendant ce temps, et le
// piège de focus amène le focus ici puis le rend à la ligne d'origine à la
// fermeture — sans quoi l'utilisateur repartirait du haut de la page.
const PageEditor = ({ token, page, onClose }) => {
    const { t } = useTranslation();
    const dialogRef = useRef(null);

    const HELP_ACTIONS = [
        { icon: 'rotate_right', label: t('pageEditor.actions.rotateRight.label'), description: t('pageEditor.actions.rotateRight.description') },
        { icon: 'rotate_left', label: t('pageEditor.actions.rotateLeft.label'), description: t('pageEditor.actions.rotateLeft.description') },
        { icon: 'crop', label: t('pageEditor.actions.crop.label'), description: t('pageEditor.actions.crop.description') },
        { icon: 'wb_sunny', label: t('pageEditor.actions.whiteBalance.label'), description: t('pageEditor.actions.whiteBalance.description') },
        { icon: 'straighten', label: t('pageEditor.actions.deskew.label'), description: t('pageEditor.actions.deskew.description') },
    ];
    // { message, kind: 'info' | 'error' }. Les deux partagent la même zone et la
    // même région live, mais pas la même durée de vie : un message d'information
    // confirme une action déjà visible à l'écran et s'efface seul, une erreur dit
    // que RIEN n'a changé — la faire disparaître au bout de deux secondes la
    // rendrait manquable, juste après une attente qui a pu durer vingt secondes.
    const [feedback, setFeedback] = useState(null);
    const [helpOpen, setHelpOpen] = useState(false);
    // Undo is only offered for edits made in the current editor session — a
    // server-side previous version from a prior session is intentionally ignored
    // so reopening the editor starts clean. We count the session's applied edits
    // (not just a boolean) so « Annuler tout » can stay hidden while a single
    // edit makes it a duplicate of « Annuler dernière opération ».
    const [sessionEdits, setSessionEdits] = useState(0);
    // Was the page already resettable when the editor opened, i.e. did it carry
    // edits from a previous session? Captured once at mount so later store
    // updates don't move it. When true, even one new edit leaves ≥2 edits
    // between the image and its original, so « Annuler tout » stays meaningful.
    const [hadPriorEdits] = useState(() => page.resetAvailable);
    const [menuOpen, setMenuOpen] = useState(true);
    const isMobile = useIsMobile();

    // Sortie de l'éditeur — lien « Retour » comme touche Échap. Les opérations
    // sont appliquées et enregistrées au fil de l'eau (cf. helpNote), mais leur
    // seul écho — le bandeau posé sur l'aperçu — disparaît avec l'overlay : le
    // toast le redit une dernière fois sur la liste, où la vignette rafraîchie
    // est désormais la seule trace. Porté dans <body> par M3E, il survit donc au
    // démontage de l'éditeur.
    // Rien à confirmer si la session n'a appliqué aucune édition, ou si elles ont
    // toutes été annulées (sessionEdits retombe à 0) : le message serait faux.
    const handleClose = useCallback(() => {
        if (sessionEdits > 0) M3eSnackbar.open(t('pageEditor.changesApplied'));
        onClose();
    }, [sessionEdits, t, onClose]);

    // Déclaré APRÈS handleClose, dont il dépend : fermer par Échap doit passer
    // par le même chemin que le lien de retour, toast compris.
    useFocusTrap(dialogRef, { onEscape: handleClose });

    // Le minuteur d'effacement est gardé en référence pour être ANNULÉ à chaque
    // nouveau message. Sans cela, celui armé par un succès effacerait l'erreur
    // d'une opération lancée dans la foulée, avant même la fin de son délai.
    const feedbackTimerRef = useRef(null);

    const clearFeedback = useCallback(() => {
        clearTimeout(feedbackTimerRef.current);
        setFeedback(null);
    }, []);

    const showFeedback = useCallback((message) => {
        clearTimeout(feedbackTimerRef.current);
        setFeedback({ message, kind: 'info' });
        feedbackTimerRef.current = setTimeout(() => setFeedback(null), FEEDBACK_DURATION);
    }, []);

    const showError = useCallback((err) => {
        clearTimeout(feedbackTimerRef.current);
        const key = EDIT_ERROR_KEYS[editFailureKind(err)] ?? EDIT_ERROR_KEYS.generic;
        setFeedback({ message: t(key), kind: 'error' });
    }, [t]);

    // Un minuteur encore armé au démontage écrirait dans un composant disparu.
    useEffect(() => () => clearTimeout(feedbackTimerRef.current), []);

    // Branché APRÈS showError / clearFeedback, dont il dépend. `onStart` efface
    // le message précédent : sans cela une erreur resterait affichée pendant la
    // tentative suivante, et se lirait comme son résultat.
    const { rotate, whiteBalance, deskew, crop, undo, reset, isPending } = usePageEdit(
        token,
        page.pageId,
        { onStart: clearFeedback, onError: showError },
    );

    const handleSuccess = useCallback((data, defaultMsg) => {
        if (data.applied === false) {
            showFeedback(t('pageEditor.feedback.noDocument'));
        } else {
            setSessionEdits((n) => n + 1);
            showFeedback(data.message || defaultMsg);
        }
    }, [showFeedback, t]);

    const handleRotateCw = () => rotate.mutate('cw', {
        onSuccess: (data) => handleSuccess(data, t('pageEditor.feedback.rotationApplied')),
    });
    const handleRotateCcw = () => rotate.mutate('ccw', {
        onSuccess: (data) => handleSuccess(data, t('pageEditor.feedback.rotationApplied')),
    });
    const handleWhiteBalance = () => whiteBalance.mutate(undefined, {
        onSuccess: (data) => handleSuccess(data, t('pageEditor.feedback.whiteBalanceApplied')),
    });
    const handleDeskew = () => deskew.mutate(undefined, {
        onSuccess: (data) => handleSuccess(data, t('pageEditor.feedback.perspectiveCorrected')),
    });
    const handleCrop = () => crop.mutate(undefined, {
        onSuccess: (data) => handleSuccess(data, t('pageEditor.feedback.cropApplied')),
    });
    const handleUndo = () => undo.mutate(undefined, {
        onSuccess: () => {
            // Single-level undo consumes the last applied edit only.
            setSessionEdits((n) => Math.max(0, n - 1));
            showFeedback(t('pageEditor.feedback.editUndone'));
        },
    });
    const handleReset = () => reset.mutate(undefined, {
        onSuccess: () => {
            setSessionEdits(0);
            showFeedback(t('pageEditor.feedback.editsUndone'));
        },
    });

    // « rien à annuler » (état, indépendant de isPending) vs « désactivé »
    // (inclut isPending) : le premier retire le bouton du flux, le second grise
    // seulement en gardant la place pour éviter que la barre saute pendant un
    // traitement.
    const canUndo = sessionEdits >= 1 && page.undoAvailable;
    const undoDisabled = isPending || !canUndo;
    // « Annuler tout » suit l'état serveur (une version initiale existe), sans
    // la garde de l'undo simple : après un premier undo, la page peut rester
    // éditée et réinitialisable. Mais on le masque quand il ferait doublon avec
    // « Annuler dernière opération » : si une seule édition sépare l'image de
    // l'original (undo affiché, une seule édition dans la session, aucune
    // édition héritée d'une session précédente), annuler ce pas unique revient
    // déjà à tout annuler. Il ne réapparaît qu'à partir de la 2ᵉ opération.
    const resetIsDistinct = !canUndo || sessionEdits >= 2 || hadPriorEdits;
    const canReset = page.resetAvailable && resetIsDistinct;
    const resetDisabled = isPending || !canReset;

    const version = page.lastModifiedAt ? new Date(page.lastModifiedAt).getTime() : 0;
    const previewUrl = `/api/sessions/${token}/pages/${page.pageId}/thumbnail?preview=true&v=${version}`;

    // Les deux annulations sont sorties de la pile de FAB : ce sont des boutons
    // contour, en bout de ligne de titre au-dessus du seuil mobile et empilés
    // sous l'aperçu en dessous (cf. maquette). Rendus une seule fois, à l'un ou
    // l'autre emplacement — jamais aux deux. Le libellé visible porte seul le
    // nom accessible : plus de FAB étendu à compléter par un aria-label.
    const undoActions = (canUndo || canReset) && (
        <div className="page-editor__undo">
            {canUndo && (
                <M3eButton variant="outlined" onClick={handleUndo} disabled={undoDisabled}>
                    <Icon name="undo" slot="icon" />{t('pageEditor.undoLast')}
                </M3eButton>
            )}
            {canReset && (
                <M3eButton variant="outlined" onClick={handleReset} disabled={resetDisabled}>
                    <Icon name="restart_alt" slot="icon" />{t('pageEditor.undoAll')}
                </M3eButton>
            )}
        </div>
    );

    return (
        <div
            className="page-editor"
            ref={dialogRef}
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            aria-labelledby="page-editor-title"
        >
            {/* La sortie de l'éditeur est un lien de retour en tête de page, et
                non plus une croix « Fermer » en haut à droite d'une barre
                d'application (cf. maquette) : même action, place attendue. Le
                libellé long ne tient pas sous le seuil mobile, où il se réduit
                à « Retour ».
                Un <header> s'annoncerait ici en repère `banner` — comme
                l'ancienne m3e-app-bar, que son role="none" neutralisait : une
                barre de titre interne à un dialogue n'en est pas un. */}
            <div className="page-editor__header">
                <M3eButton id="page-editor-close" className="page-editor__back" variant="text" onClick={handleClose}>
                    <Icon name="arrow_back" slot="icon" />
                    {isMobile ? t('pageEditor.back') : t('pageEditor.backToList')}
                </M3eButton>

                <div className="page-editor__title-row">
                    {/* <span> porteur de l'`id`, cf. le titre de l'aide. */}
                    <M3eHeading
                        variant="headline"
                        size={isMobile ? 'small' : 'medium'}
                        level={1}
                        className="page-editor__title"
                    >
                        <span id="page-editor-title">
                            {t('pageEditor.editing', { fileName: page.fileName })}
                        </span>
                    </M3eHeading>
                    {!isMobile && undoActions}
                </div>
            </div>

            <div className="page-editor__preview">
                <img
                    src={previewUrl}
                    alt={page.fileName}
                    className="page-editor__image"
                    draggable={false}
                />

                {isPending && (
                    <div className="page-editor__loading" role="status">
                        <M3eCircularProgressIndicator indeterminate aria-hidden="true" />
                        <span className="sr-only">{t('a11y.processing')}</span>
                    </div>
                )}

                {/* Doublon visible de la région live ci-dessous, calé sur
                    l'aperçu : au bas de l'overlay, il recouvrirait les boutons
                    d'annulation sous le seuil mobile. */}
                {feedback && (
                    <div
                        className={`page-editor__feedback page-editor__feedback--${feedback.kind}`}
                        aria-hidden="true"
                    >
                        {feedback.message}
                    </div>
                )}

                {/* La pile de FAB est ancrée sur l'aperçu, et non plus sur tout
                    l'overlay : sous le seuil mobile, les boutons d'annulation
                    occupent le bas de l'écran, que la pile recouvrirait. */}
                <div className="page-editor__fab">
                    {menuOpen && (
                        <div
                            className="page-editor__fab-actions"
                            id="page-editor-fab-actions"
                            role="group"
                            aria-label={t('a11y.editActions')}
                        >
                            {/* Aide en tête de liste : action non destructive,
                                volontairement pas désactivée pendant un traitement
                                (isPending) — l'aide doit rester consultable à tout
                                moment. */}
                            <M3eFab id="fab-help" variant="tertiary-container" size="small" extended={!isMobile} onClick={() => setHelpOpen(true)} aria-label={t('pageEditor.help')}>
                                <Icon name="help" />
                                {!isMobile && <span slot="label">{t('pageEditor.help')}</span>}
                            </M3eFab>
                            <M3eFab variant="primary-container" size="small" extended={!isMobile} disabled={isPending} onClick={handleRotateCw} aria-label={t('pageEditor.actions.rotateRight.label')}>
                                <Icon name="rotate_right" />
                                {!isMobile && <span slot="label">{t('pageEditor.actions.rotateRight.label')}</span>}
                            </M3eFab>
                            <M3eFab variant="primary-container" size="small" extended={!isMobile} disabled={isPending} onClick={handleRotateCcw} aria-label={t('pageEditor.actions.rotateLeft.label')}>
                                <Icon name="rotate_left" />
                                {!isMobile && <span slot="label">{t('pageEditor.actions.rotateLeft.label')}</span>}
                            </M3eFab>
                            <M3eFab variant="primary-container" size="small" extended={!isMobile} disabled={isPending} onClick={handleCrop} aria-label={t('pageEditor.actions.crop.label')}>
                                <Icon name="crop" />
                                {!isMobile && <span slot="label">{t('pageEditor.actions.crop.label')}</span>}
                            </M3eFab>
                            <M3eFab variant="primary-container" size="small" extended={!isMobile} disabled={isPending} onClick={handleWhiteBalance} aria-label={t('pageEditor.actions.whiteBalance.label')}>
                                <Icon name="wb_sunny" />
                                {!isMobile && <span slot="label">{t('pageEditor.actions.whiteBalance.label')}</span>}
                            </M3eFab>
                            <M3eFab variant="primary-container" size="small" extended={!isMobile} disabled={isPending} onClick={handleDeskew} aria-label={t('pageEditor.actions.deskew.label')}>
                                <Icon name="straighten" />
                                {!isMobile && <span slot="label">{t('pageEditor.actions.deskew.label')}</span>}
                            </M3eFab>
                        </div>
                    )}

                    <M3eFab
                        variant="primary-container"
                        size="small"
                        extended={menuOpen}
                        onClick={() => setMenuOpen((open) => !open)}
                        aria-label={menuOpen ? t('pageEditor.hideMenu') : t('pageEditor.showMenu')}
                        // Chaîne, et non booléen : React 19 écrit `true` sur un
                        // élément personnalisé en attribut VIDE (`aria-expanded=""`,
                        // cf. setAttribute(key, "") de son chemin custom element),
                        // valeur hors énumération que Chromium lit comme « non
                        // renseigné » — l'état disparaissait de l'arbre
                        // d'accessibilité à l'ouverture, là où `false` passait
                        // par le chemin ordinaire et s'écrivait bien. Le bouton
                        // s'annonçait donc « réduit », puis plus rien : rien ne
                        // disait au lecteur d'écran que le menu s'était ouvert.
                        aria-expanded={menuOpen ? 'true' : 'false'}
                        // Désigne le groupe que ce bouton déplie, pour que
                        // aria-expanded porte sur quelque chose de nommé.
                        aria-controls="page-editor-fab-actions"
                    >
                        {/* Chevron vers le haut (fermé) : le menu se déploie au-dessus
                            de ce bouton ; vers le bas (ouvert) : il se replie vers le
                            bas. Libellé visible seulement à l'ouverture. */}
                        <Icon name={menuOpen ? 'keyboard_arrow_down' : 'keyboard_arrow_up'} />
                        {menuOpen && <span slot="label">{t('pageEditor.hideMenu')}</span>}
                    </M3eFab>
                </div>
            </div>

            {isMobile && undoActions}

            {/* Seul retour d'une opération d'édition : sans région live, une
                rotation appliquée ou un « aucun document détecté » resterait
                muet — l'image change, mais rien ne le dit. Monté en permanence
                pour que le message soit bien vu comme une MISE À JOUR de la
                région (cf. Announcer). */}
            <div className="sr-only" role="status">
                {feedback?.message ?? ''}
            </div>

            {helpOpen && (
                <HelpDialog actions={HELP_ACTIONS} onClose={() => setHelpOpen(false)} />
            )}
        </div>
    );
};

export default PageEditor;
