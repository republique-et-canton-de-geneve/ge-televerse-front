import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useMutation } from '@tanstack/react-query';
import { M3eButton } from '@m3e/react/button';
import { createSession, getSession } from '../api/endpoints';
import { serverNow } from '../api/client';
import useUploadStore from '../store/uploadStore';
import useOpenerHandshake from '../hooks/useOpenerHandshake';
import useBeforeUnloadCleanup from '../hooks/useBeforeUnloadCleanup';
import i18n from '../i18n';
import UploadPage from './UploadPage';
import StatusView from './StatusView';

// Reads the existing-session expiry the back returns in the 409 body and
// formats it as a localized "HH:mm". Surfacing this lets the user choose
// between waiting it out and forcing a new session.
const formatExpiryTime = (epochMs) => {
    if (epochMs == null) return null;
    return new Intl.DateTimeFormat(i18n.language, { hour: '2-digit', minute: '2-digit' })
        .format(new Date(epochMs));
};

const isOriginatorBusy = (error) => error?.response?.status === 409
    && error?.response?.data?.error === 'ORIGINATOR_HAS_ACTIVE_SESSION';

// Empreinte de la session créée par CET onglet, mémorisée par callbackId.
// sessionStorage est par-onglet : après un rechargement, seule la fenêtre qui
// possédait la session retrouve son empreinte — une autre fenêtre (second clic
// sur le bouton de l'hôte) n'en a pas. `expiresAt` est l'expiry INITIAL
// renvoyé par la création : côté back, le binding originator conserve cette
// valeur figée (les renouvellements ne rafraîchissent que le TTL Hazelcast de
// l'entrée, cf. SessionService#refreshOriginatorTtl), si bien qu'un 409 dont
// l'expiresAt égale l'empreinte désigne précisément NOTRE session orpheline.
// `token` permet alors de tenter une REPRISE de cette session (pages
// conservées) avant de se résoudre à la remplacer.
const fingerprintKey = (callbackId) => `televerse-own-binding-${callbackId}`;

const readOwnFingerprint = (callbackId) => {
    try {
        const record = JSON.parse(sessionStorage.getItem(fingerprintKey(callbackId)));
        return record && typeof record === 'object' ? record : null;
    } catch (e) {
        return null;
    }
};

const storeOwnFingerprint = (callbackId, record) => {
    try {
        sessionStorage.setItem(fingerprintKey(callbackId), JSON.stringify(record));
    } catch (e) {
        // sessionStorage indisponible : l'auto-récupération est simplement
        // désactivée, l'écran manuel reste le repli.
    }
};

const SessionCreator = ({ callbackId, sizeProfile, openerOrigin, allowMultiple = true }) => {
    const { t } = useTranslation();
    const setCallbackId = useUploadStore((s) => s.setCallbackId);
    useOpenerHandshake(callbackId, openerOrigin);

    const mutation = useMutation({
        mutationFn: ({ force = false } = {}) => createSession(sizeProfile, { force }),
        onSuccess: (data) => storeOwnFingerprint(callbackId, { token: data.token, expiresAt: data.expiresAt }),
    });

    // Récupération de collision avec soi-même : après un rechargement
    // (pull-to-refresh, onglet déchargé puis restauré par l'OS mobile), le
    // DELETE de useBeforeUnloadCleanup peut ne jamais être parti et la
    // re-création tombe en 409 contre NOTRE propre session. Quand l'empreinte
    // le prouve, on sonde la session : encore vivante → on la REPREND telle
    // quelle (pages conservées) ; disparue/expirée ou sonde en échec → on
    // force une nouvelle session (on n'abandonne que notre propre orpheline).
    // Au moindre doute (pas d'empreinte, empreinte différente, second 409
    // d'affilée), repli sur l'écran manuel « autre fenêtre active ».
    const [recovery, setRecovery] = useState({ phase: 'idle' }); // 'idle' | 'probing' | 'resumed'
    // État, et non `useRef` : cette valeur est LUE PENDANT LE RENDU — c'est elle
    // qui fait retomber `ownOrphanBusy`, donc qui envoie un second 409 vers
    // l'écran manuel au lieu du voile d'attente. Lire `ref.current` au rendu est
    // précisément ce que React interdit (la lecture peut être périmée, et rien
    // ne provoque de nouveau rendu quand elle change) ; le compilateur React le
    // refuse et renonçait alors à compiler tout ce composant.
    const [recoveryTried, setRecoveryTried] = useState(false);

    useBeforeUnloadCleanup(recovery.phase === 'resumed' ? recovery.token : mutation.data?.token);

    const ownOrphanBusy = mutation.isError
        && !recoveryTried
        && isOriginatorBusy(mutation.error)
        && readOwnFingerprint(callbackId)?.expiresAt === mutation.error.response.data.expiresAt;

    useEffect(() => {
        if (!ownOrphanBusy) return;
        setRecoveryTried(true);
        const own = readOwnFingerprint(callbackId);
        if (!own?.token) {
            mutation.mutate({ force: true });
            return;
        }
        setRecovery({ phase: 'probing' });
        getSession(own.token)
            .then((session) => {
                if (new Date(session.expiresAt).getTime() > serverNow()) {
                    setRecovery({ phase: 'resumed', token: own.token });
                } else {
                    setRecovery({ phase: 'idle' });
                    mutation.mutate({ force: true });
                }
            })
            .catch(() => {
                setRecovery({ phase: 'idle' });
                mutation.mutate({ force: true });
            });
    }, [ownOrphanBusy]);

    useEffect(() => {
        setCallbackId(callbackId);
        mutation.mutate({});
    }, []);

    // Session reprise après rechargement : on entre directement dans la page
    // d'upload avec le token existant — useSession y refait foi (un 404
    // tardif y bascule sur l'écran « session expirée »).
    if (recovery.phase === 'resumed') {
        return <UploadPage token={recovery.token} allowMultiple={allowMultiple} />;
    }

    // ownOrphanBusy / probing : la récupération est en cours — garder le
    // spinner pour éviter un flash de l'écran « autre fenêtre active ».
    if (mutation.isPending || ownOrphanBusy || recovery.phase === 'probing') {
        return <StatusView loading title={t('sessionCreator.initTitle')} message={t('sessionCreator.initMessage')} />;
    }

    if (mutation.isError) {
        if (isOriginatorBusy(mutation.error)) {
            const expiry = formatExpiryTime(mutation.error.response.data.expiresAt);
            const message = expiry
                ? t('sessionCreator.busyWithTime', { time: expiry })
                : t('sessionCreator.busyNoTime');
            return (
                <StatusView icon="lock" message={message}>
                    <M3eButton variant="filled" onClick={() => mutation.mutate({ force: true })}>
                        {t('sessionCreator.startNew')}
                    </M3eButton>
                </StatusView>
            );
        }
        const message = mutation.error?.response?.data?.message || t('sessionCreator.createFailed');
        return <StatusView icon="error" title={t('status.error.title')} message={message} />;
    }

    if (mutation.isSuccess) {
        return <UploadPage token={mutation.data.token} allowMultiple={allowMultiple} />;
    }

    return null;
};

export default SessionCreator;
