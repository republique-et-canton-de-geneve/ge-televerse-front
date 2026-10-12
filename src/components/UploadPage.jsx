import React, { useState, useEffect, useRef, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { useTranslation } from 'react-i18next';
import { useMutation } from '@tanstack/react-query';
import { M3eButton } from '@m3e/react/button';
import { M3eCard } from '@m3e/react/card';
import { M3eDivider } from '@m3e/react/divider';
import { M3eHeading } from '@m3e/react/heading';
import { M3eCircularProgressIndicator, M3eLinearProgressIndicator } from '@m3e/react/progress-indicator';
import Icon from './Icon';
import useUploadStore, { isTerminal } from '../store/uploadStore';
import useSession from '../hooks/useSession';
import useUpload, { pageLimitBanner } from '../hooks/useUpload';
import useDeletePage from '../hooks/useDeletePage';
import useReorderPages from '../hooks/useReorderPages';
import useKeepAlive from '../hooks/useKeepAlive';
import useHasCamera from '../hooks/useHasCamera';
import useIsMobile from '../hooks/useIsMobile';
import useAllowedFormats from '../hooks/useAllowedFormats';
import useSseSync from '../hooks/useSseSync';
import useFileDrop from '../hooks/useFileDrop';
import useUploadBatch from '../hooks/useUploadBatch';
import { finalizeSession, cancelSession, phoneDisconnect, isServerError } from '../api/endpoints';
import FileCapture from './FileCapture';
import PageList from './PageList';
import PageEditor from './PageEditor';
import PdfPreview from './PdfPreview';
import StatusView from './StatusView';
import SuccessScreen from './SuccessScreen';
import SessionExpiryDialog from './SessionExpiryDialog';
import Alert from './Alert';
import Onboarding from './Onboarding';
import { announce } from './Announcer';

const UploadPage = ({ token, allowMultiple = true }) => {
    const { t, i18n } = useTranslation();
    const {
        status, errorMessage, pages, lastError, expiredServerConfirmed,
        callbackId, openerOrigin, isSecondary, phoneConnected,
        totalBytes, maxTotalBytes, maxPages,
        setFinalizing, setFinalized, setCancelled, setError, setLastError, clearLastError,
    } = useUploadStore();

    // Lecture du paramètre injecté par le Web Component <ge-televerse show-onboarding>
    const shouldStartOnboarding = useMemo(() => {
        const searchParams = new URLSearchParams(window.location.search);
        return searchParams.get('showOnboarding') === 'true';
    }, []);

    // Une fois un statut terminal atteint, le composant reste monté sur son
    // écran final : sans cette garde, keep-alive, SSE et beacon continueraient
    // de tourner contre une session supprimée/terminée (reconnexions 404 en
    // boucle, keep-alive qui prolonge une session que l'utilisateur a quittée).
    const live = !isTerminal(status);

    useSession(token);
    useKeepAlive(live ? token : null);
    const hasCamera = useHasCamera();
    const isMobile = useIsMobile();
    const { data: allowedFormats } = useAllowedFormats();
    const upload = useUpload(token);
    const deletePageMutation = useDeletePage(token);
    const reorderMutation = useReorderPages(token);

    // SSE sync for primary devices (desktop listening for phone changes)
    const isPrimary = !isSecondary;
    useSseSync(isPrimary && live ? token : null);

    // À l'arrivée sur un écran terminal, libère immédiatement la session côté
    // serveur (entrée Hazelcast, pages S3 restantes, vignettes, slot
    // originator et sink SSE) sans attendre le TTL. Primaire uniquement — le
    // secondaire ne possède pas la session.
    //  - Succès : la finalisation purge déjà les PDF de page et les vignettes,
    //    mais laisse l'entrée de session (finalisée, sans pages) vivre jusqu'au
    //    TTL. Le document fusionné, rangé sous son documentId, n'est pas concerné.
    //  - Erreur : l'écran est sans issue, les pages n'y serviront plus.
    //  - Session expirée : seulement si le serveur l'a confirmée (cf.
    //    setExpired) — un DELETE sur la seule foi du compte à rebours local
    //    pourrait tuer une session que l'autre appareil maintient en vie.
    //  - Annulation : absente, le DELETE est déjà la mutation elle-même.
    // Fire-and-forget, idempotent côté back (204 si déjà purgée).
    useEffect(() => {
        if (isSecondary || !token) return;
        const release = status === 'finalized'
            || status === 'error'
            || (status === 'expired' && expiredServerConfirmed);
        if (release) cancelSession(token).catch(() => {});
    }, [status, expiredServerConfirmed, isSecondary, token]);

    // Disconnect phone when the secondary tab closes. beforeunload alone ne
    // suffit pas : iOS Safari et Chrome mobile l'omettent souvent (onglet
    // balayé, app tuée par l'OS) — pagehide est l'événement fiable sur
    // mobile. Garde anti-doublon car les deux peuvent se déclencher, levée
    // sur pageshow (retour depuis le bfcache).
    useEffect(() => {
        if (!isSecondary || !token || !live) return undefined;
        const baseUrl = process.env.API_BASE_URL || '/api';
        let sent = false;
        const handleUnload = () => {
            if (sent) return;
            sent = true;
            navigator.sendBeacon(`${baseUrl}/sessions/${token}/phone-disconnect`);
        };
        const handlePageShow = () => { sent = false; };
        window.addEventListener('beforeunload', handleUnload);
        window.addEventListener('pagehide', handleUnload);
        window.addEventListener('pageshow', handlePageShow);
        return () => {
            window.removeEventListener('beforeunload', handleUnload);
            window.removeEventListener('pagehide', handleUnload);
            window.removeEventListener('pageshow', handlePageShow);
        };
    }, [isSecondary, token, live]);

    const finalize = useMutation({
        mutationFn: () => finalizeSession(token),
        onMutate: () => setFinalizing(),
        onSuccess: (data) => {
            setFinalized();
            // openerOrigin is captured by useOpenerHandshake when the host replies
            // to our 'televerse-ready'. The completion carries the documentId, so we
            // post it ONLY to that exact origin — never '*'. If the handshake never
            // completed (openerOrigin null), we skip the message rather than broadcast
            // the document reference to an unexpected opener.
            if (window.opener && callbackId && openerOrigin) {
                window.opener.postMessage({
                    type: 'televerse-complete',
                    callbackId,
                    documentId: data.documentId,
                }, openerOrigin);
            }
        },
        onError: (err) => setError(isServerError(err)
            ? t('errors.server')
            : err.response?.data?.message || t('errors.finalize')),
    });

    // Fin du flux d'annulation : écran terminal, notification de l'hôte
    // (Flow A — sans elle le formulaire bureau attendrait indéfiniment un
    // televerse-complete qui ne viendra jamais), puis tentative de fermeture.
    const finishCancel = () => {
        setCancelled();
        // Si une mutation concurrente a déjà posé un autre statut terminal
        // (le store verrouille les statuts terminaux), l'annulation n'a pas
        // eu lieu : ne pas notifier l'hôte ni fermer l'onglet.
        if (useUploadStore.getState().status !== 'cancelled') return;
        if (window.opener && callbackId && openerOrigin) {
            window.opener.postMessage({ type: 'televerse-cancelled', callbackId }, openerOrigin);
        }
        // Ne fonctionne que si l'onglet a été ouvert par script (Flow A) ;
        // sinon le navigateur l'ignore et l'écran "annulé" reste affiché.
        window.close();
    };

    const cancel = useMutation({
        // Secondaire (téléphone via QR) : la session appartient au bureau — on
        // se détache seulement, sans la supprimer, pour ne pas casser la vue
        // bureau. Primaire mobile : la session entière est supprimée côté
        // serveur, rien n'est conservé.
        mutationFn: () => (isSecondary ? phoneDisconnect(token) : cancelSession(token)),
        onSuccess: finishCancel,
        onError: (err) => {
            // Primaire : best-effort — l'utilisateur a choisi de sortir et le
            // TTL côté serveur nettoiera la session de toute façon.
            // Secondaire : la session du bureau reste vivante (entretenue par
            // les keep-alive du poste) — afficher « déconnecté » alors que le
            // bureau garde son badge « Téléphone connecté » serait mentir.
            if (!isSecondary) {
                finishCancel();
                return;
            }
            setLastError({
                title: t('errors.cancelFailedTitle'),
                message: isServerError(err)
                    ? t('errors.server')
                    : t('errors.cancelFailedMessage'),
            });
        },
    });

    const disconnect = useMutation({
        mutationFn: () => phoneDisconnect(token),
        onSuccess: () => setFinalized(),
        onError: (err) => setError(isServerError(err)
            ? t('errors.server')
            : err.response?.data?.message || t('errors.disconnect')),
    });

    const [editingPageId, setEditingPageId] = useState(null);
    const [previewOpen, setPreviewOpen] = useState(false);
    const [expiryOpen, setExpiryOpen] = useState(false);
    // Un dialogue modal ouvert doit rendre le reste de la page inatteignable —
    // pas seulement invisible : sans cela, la tabulation et le curseur virtuel
    // d'un lecteur d'écran continuent de parcourir les boutons masqués sous
    // l'overlay. `inert` sur le <main> les neutralise d'un coup ; les dialogues
    // eux-mêmes sont portés dans <body>, donc hors de sa portée.
    const modalOpen = Boolean(editingPageId) || previewOpen || expiryOpen;

    const handleFileSelected = (file) => upload.mutateAsync(file);
    const handleReorder = (fromIndex, toIndex) => reorderMutation.mutate({ fromIndex, toIndex });
    const handleDelete = (pageId) => deletePageMutation.mutate(pageId);
    const handleEdit = (pageId) => setEditingPageId(pageId);
    const handlePreview = () => setPreviewOpen(true);

    const completedCount = pages.filter((p) => p.status === 'complete').length;
    const hasUploading = pages.some((p) => p.status === 'uploading');
    const isFinalizing = status === 'finalizing';
    // « Fusion en cours » remplace tout le bloc d'actions : l'annonce passe par
    // la région live racine, le bloc affiché naissant avec son texte (cf. rendu).
    useEffect(() => {
        if (isFinalizing) announce(t('upload.finalizing'));
    }, [isFinalizing]); // eslint-disable-line react-hooks/exhaustive-deps
    const isBusy = hasUploading || deletePageMutation.isPending || reorderMutation.isPending;
    // cancel.isPending : un DELETE/disconnect d'annulation en vol exclut de
    // lancer une finalisation (et réciproquement, voir le bouton Annuler) —
    // sinon les deux mutations se courseraient pour l'état final.
    const canFinalize = completedCount > 0 && !isBusy && !isFinalizing && !cancel.isPending;
    // Les envois en cours comptent dans la limite : sans eux, une sélection
    // multiple au bord du quota lançait tout le lot et le serveur rejetait le
    // surplus en 429, chaque échec écrasant la bannière du précédent.
    const uploadingCount = pages.filter((p) => p.status === 'uploading').length;
    const isAtLimit = (maxTotalBytes > 0 && totalBytes >= maxTotalBytes)
        || (maxPages > 0 && completedCount + uploadingCount >= maxPages);
    // Approximation volontaire (un PDF multipage occupe plusieurs pages) :
    // le serveur reste l'arbitre, ceci évite juste les lots manifestement
    // au-dessus de la limite.
    const remainingSlots = maxPages > 0
        ? Math.max(0, maxPages - completedCount - uploadingCount)
        : Infinity;
    const handleBatchTrimmed = (droppedFiles) => {
        // Même copy que le rejet serveur (429 / upload partiel) pour qu'un
        // fichier écarté affiche le même message, qu'il ait été tronqué côté
        // client ou refusé par le back. Tous les fichiers écartés sont listés
        // dans une seule ligne, avec accord pluriel du message.
        setLastError(pageLimitBanner(droppedFiles, maxPages));
    };
    const usedPercent = maxTotalBytes > 0 ? Math.min(100, Math.round((totalBytes / maxTotalBytes) * 100)) : 0;
    const availablePercent = Math.max(0, 100 - usedPercent);

    // Glisser-déposer plein-carte (bureau). useFileDrop gère, au niveau de la
    // fenêtre : surbrillance de l'overlay dès qu'un fichier survole l'app,
    // curseur copier sur l'overlay / interdit ailleurs, et blocage de l'action
    // par défaut (ouvrir le fichier dans un onglet). Désactivé pendant un envoi,
    // au quota ou en fusion : on bloque toujours la navigation, mais le dépôt
    // est refusé. Même logique d'envoi par lot que les boutons de FileCapture.
    const dropOverlayRef = useRef(null);
    const uploadBatch = useUploadBatch({
        onFileSelected: handleFileSelected,
        multiple: allowMultiple,
        remainingSlots,
        onBatchTrimmed: handleBatchTrimmed,
    });
    const { isDragging, isRefused } = useFileDrop({
        zoneRef: dropOverlayRef,
        onFiles: uploadBatch,
        enabled: !hasCamera && live,
        disabled: isFinalizing || hasUploading || isAtLimit,
    });
    // Libellé de l'overlay « dépôt refusé » : miroir des bannières d'erreur du
    // sélecteur classique (cf. useUpload), en version générique — le fichier
    // survolé n'est pas connu tant qu'il n'est pas lâché, on ne peut donc pas
    // le nommer ni citer sa taille. L'ordre suit les raisons de `disabled`.
    const dropRefusalMessage = (() => {
        if (isFinalizing) return t('upload.drop.refusedFinalizing');
        if (hasUploading) return t('upload.drop.refusedUploading');
        if (maxTotalBytes > 0 && totalBytes >= maxTotalBytes) {
            return t('upload.drop.refusedSize');
        }
        return t('upload.drop.refusedPages', { count: maxPages });
    })();

    if (status === 'loading') {
        return <StatusView loading title={t('status.loading.title')} message={t('status.loading.message')} />;
    }
    if (status === 'expired') {
        return (
            <StatusView
                icon="timer_off"
                title={t('status.expired.title')}
                message={[
                    t('status.expired.line1'),
                    t('status.expired.line2'),
                ]}
            />
        );
    }
    if (status === 'error') {
        return <StatusView icon="error" title={t('status.error.title')} message={errorMessage} />;
    }
    if (status === 'cancelled') {
        // Le secondaire ne fait que se détacher : les pages déjà transmises
        // restent dans la session du bureau, ne pas annoncer leur perte.
        return (
            <StatusView
                icon="cancel"
                title={t('status.cancelled.title')}
                message={isSecondary
                    ? [t('status.cancelled.secondaryLine1'), t('common.closePage')]
                    : [t('status.cancelled.primaryLine1'), t('common.closePage')]}
            />
        );
    }
    if (status === 'finalized') {
        // Secondary (phone scanned into a desktop session) doesn't own the final
        // result — it just needs to tell the user it's safe to close.
        if (isSecondary) {
            return (
                <StatusView
                    icon="task_alt"
                    title={t('status.finalizedSecondary.title')}
                    message={t('common.closePage')}
                />
            );
        }
        // Primary device (desktop or standalone): show the final "document saved"
        // screen with the page chrome + success alert (Figma 5:11589).
        const message = callbackId
            ? t('success.savedWithCallback')
            : t('common.closePage');
        return <SuccessScreen message={message} />;
    }

    // QR code: shown on primary devices without camera (desktop). The phone
    // secondary inherits the host's multi/single choice via the same URL flag,
    // so the experience stays consistent across both devices in the session.
    // `lang` is carried over so the scanning phone opens in the same language
    // as the desktop (the language detector reads it from the query string).
    const showQrCode = isPrimary && !hasCamera;
    const qrUrl = showQrCode
        ? `${window.location.origin}/scan/${token}?join${allowMultiple ? '' : '&multiple=false'}&lang=${i18n.language}`
        : null;

    return (
        <>
            <main className="upload-page" aria-label={t('a11y.mainLabel')} inert={modalOpen || undefined}>
                <header className="upload-page__header">
                    <M3eHeading variant="headline" size="large" level={1} className="upload-page__title">
                        {t('upload.title')}
                    </M3eHeading>
                    <p className="upload-page__intro">
                        {isMobile ? t('upload.introShort') : t('upload.intro')}
                    </p>
                    {allowedFormats?.length > 0 && (
                        <span className="upload-page__formats-hint">
                            {t('upload.formatsHint', { formats: allowedFormats.join(', ') })}
                        </span>
                    )}
                </header>

                <M3eCard variant="elevated" className="upload-page__card">
                    <div className="upload-page__card-body">
                        <div className="upload-page__card-head">
                            <div className="upload-page__card-title-row">
                                <M3eHeading variant="headline" size="medium" level={2} className="upload-page__card-title">
                                    {t('upload.cardTitle')}
                                </M3eHeading>
                            </div>

                            {/* Le badge apparaît sur un événement SSE, sans aucune
                                action de l'utilisateur : il lui faut une région
                                live. Celle-ci est montée en permanence (une région
                                live insérée dans le DOM en même temps que son
                                contenu n'est pas annoncée de façon fiable) et
                                placée hors flux par .sr-only, pour ne pas ouvrir
                                une gouttière vide dans la colonne quand aucun
                                téléphone n'est connecté. Le badge visible n'en est
                                alors que le doublon décoratif. */}
                            <p className="sr-only" role="status">
                                {isPrimary && phoneConnected ? t('upload.phoneConnected') : ''}
                            </p>
                            {isPrimary && phoneConnected && (
                                <div className="upload-page__phone-badge" aria-hidden="true">
                                    <Icon name="smartphone" />
                                    {t('upload.phoneConnected')}
                                </div>
                            )}

                            {lastError && (
                                <Alert kind="error" icon="cancel" title={lastError.title} onClose={clearLastError}>
                                    <p>{lastError.message}</p>
                                </Alert>
                            )}

                            <div className="upload-page__grid">
                                {!isFinalizing && (
                                    <div className="upload-page__grid-capture">
                                        {/* Volontairement PAS isBusy : griser l'ajout
                                            pendant un delete/reorder faisait clignoter
                                            le bouton sans rien protéger (les mutations
                                            sont sérialisées sous verrou côté serveur,
                                            et un bot frapperait l'API directement).
                                            Seuls un envoi en cours et le quota
                                            désactivent l'ajout. */}
                                        <FileCapture
                                            onFileSelected={handleFileSelected}
                                            disabled={hasUploading || isAtLimit}
                                            hasCamera={hasCamera}
                                            qrUrl={qrUrl}
                                            multiple={allowMultiple}
                                            allowedFormats={allowedFormats}
                                            remainingSlots={remainingSlots}
                                            onBatchTrimmed={handleBatchTrimmed}
                                        />
                                    </div>
                                )}

                                <M3eDivider vertical className="upload-page__grid-divider" />

                                <div className="upload-page__grid-list">
                                    {pages.length > 0 && (
                                        <>
                                            {maxTotalBytes > 0 && (
                                                <div className={`upload-page__storage${isAtLimit ? ' upload-page__storage--full' : ''}`}>
                                                    {/* Une barre de progression sans nom
                                                        accessible n'est qu'un « 40 % »
                                                        sans objet : rattachée ici au
                                                        libellé qui la commente. */}
                                                    <M3eLinearProgressIndicator
                                                        value={usedPercent}
                                                        max={100}
                                                        aria-label={t('a11y.storageUsed')}
                                                    />
                                                    <span className="upload-page__storage-label">
                                                        {t('upload.storageRemaining', { percent: availablePercent })}
                                                    </span>
                                                </div>
                                            )}
                                        </>
                                    )}

                                    <PageList
                                        onReorder={handleReorder}
                                        onDelete={handleDelete}
                                        onEdit={handleEdit}
                                        actionsDisabled={isBusy || isFinalizing}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Pas de role="status" ici : ce bloc est inséré déjà
                            rempli, et une région live qui naît avec son texte
                            reste muette. L'annonce passe par <Announcer />
                            (cf. l'effet sur isFinalizing). L'indicateur est
                            masqué — le texte juste à côté dit déjà la même chose. */}
                        {isFinalizing && (
                            <div className="upload-page__finalizing">
                                <M3eCircularProgressIndicator indeterminate aria-hidden="true" />
                                <p>{t('upload.finalizing')}</p>
                            </div>
                        )}

                        {!isFinalizing && isPrimary && (
                            <div className="upload-page__actions">
                                {/* Mobile : tous les boutons secondaires gardent un
                                    fond (tonal) et la pleine largeur, cohérents avec
                                    « Choisir un fichier ». Desktop : bouton texte
                                    dans la rangée alignée à droite (Figma). */}
                                <M3eButton
                                    id="preview-btn"
                                    variant={isMobile ? 'tonal' : 'text'}
                                    disabled={!canFinalize}
                                    onClick={handlePreview}
                                >
                                    <Icon slot="icon" name="visibility" />
                                    {t('upload.preview')}
                                </M3eButton>
                                <M3eButton
                                    id="save-btn"
                                    variant="filled"
                                    disabled={!canFinalize}
                                    onClick={() => finalize.mutate()}
                                >
                                    {t('upload.save')}
                                </M3eButton>
                            </div>
                        )}

                        {!isFinalizing && isSecondary && canFinalize && (
                            <div className="upload-page__actions">
                                <M3eButton
                                    variant="filled"
                                    disabled={disconnect.isPending || cancel.isPending}
                                    onClick={() => disconnect.mutate()}
                                >
                                    <Icon slot="icon" name="check" />
                                    {t('upload.done')}
                                </M3eButton>
                            </div>
                        )}

                        {/* Mobile only (téléphone direct ou via QR code) : abandon
                            explicite. Primaire : supprime la session côté serveur ;
                            secondaire : déconnecte le téléphone de la session du
                            bureau. Placé sous tous les autres boutons. */}
                        {!isFinalizing && (hasCamera || isSecondary) && (
                            <div className="upload-page__cancel">
                                {/* Volontairement actif pendant un téléversement :
                                    l'utilisateur doit pouvoir abandonner sans
                                    attendre la fin d'un envoi (le verrou des
                                    statuts terminaux neutralise la course avec
                                    l'échec 400 de l'upload en vol). Tonal : ce
                                    bouton n'existe qu'en contexte mobile (caméra ou
                                    secondaire) — même aspect secondaire à fond que
                                    les autres boutons non primaires. */}
                                <M3eButton
                                    variant="tonal"
                                    disabled={cancel.isPending || disconnect.isPending}
                                    onClick={() => cancel.mutate()}
                                >
                                    <Icon slot="icon" name="close" />
                                    {t('common.cancel')}
                                </M3eButton>
                            </div>
                        )}

                        {/* Overlay de dépôt plein-carte (bureau). Toujours monté
                            pour servir de cible stable à useFileDrop, mais invisible
                            et traversable au repos. Un glisser le révèle : variante
                            --active (dépôt permis, zone de dépôt bleue) ou --refused
                            (dépôt bloqué — envoi/fusion/quota — icône « interdit » et
                            message expliquant le refus). */}
                        {!hasCamera && (
                            <div
                                ref={dropOverlayRef}
                                className={`upload-page__drop-overlay${isDragging ? ' upload-page__drop-overlay--active' : ''}${isRefused ? ' upload-page__drop-overlay--refused' : ''}`}
                                aria-hidden="true"
                            >
                                <Icon
                                    name={isRefused ? 'block' : 'upload_file'}
                                    className="upload-page__drop-overlay-icon"
                                />
                                <p className="upload-page__drop-overlay-label">
                                    {isRefused ? dropRefusalMessage : t('upload.drop.here')}
                                </p>
                            </div>
                        )}
                    </div>
                </M3eCard>
            </main>

            {/* Portés dans <body> et non dans le <main> : c'est ce dernier qui
                devient `inert` à leur ouverture, un dialogue rendu à l'intérieur
                se rendrait donc inatteignable lui-même. Tous sont en
                position: fixed — le déplacement n'a aucun effet visuel. */}
            {editingPageId && createPortal((() => {
                const editingPage = pages.find((p) => p.pageId === editingPageId);
                if (!editingPage) return null;
                return (
                    <PageEditor
                        token={token}
                        page={editingPage}
                        onClose={() => setEditingPageId(null)}
                    />
                );
            })(), document.body)}

            {previewOpen && createPortal(
                <PdfPreview token={token} onClose={() => setPreviewOpen(false)} />,
                document.body,
            )}

            {createPortal(
                <SessionExpiryDialog token={token} onOpenChange={setExpiryOpen} />,
                document.body,
            )}

            {/* Visite guidée de l'application (parcours primaire uniquement, desktop et mobile) */}
            <Onboarding
                enabled={!isSecondary && live}
                autoStart={shouldStartOnboarding}
                token={token}
            />
        </>
    );
};

export default UploadPage;