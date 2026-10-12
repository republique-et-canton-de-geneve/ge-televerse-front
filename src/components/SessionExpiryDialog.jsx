import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useMutation } from '@tanstack/react-query';
import { M3eButton } from '@m3e/react/button';
import { M3eHeading } from '@m3e/react/heading';
import Icon from './Icon';
import { keepAlive, getSession } from '../api/endpoints';
import { serverNow } from '../api/client';
import useUploadStore from '../store/uploadStore';
import useFocusTrap from '../hooks/useFocusTrap';

// Show the warning dialog when the session is this close to expiring.
const WARN_THRESHOLD_MS = 2 * 60 * 1000;

const formatMmSs = (ms) => {
    const total = Math.max(0, Math.ceil(ms / 1000));
    const mm = String(Math.floor(total / 60)).padStart(2, '0');
    const ss = String(total % 60).padStart(2, '0');
    return `${mm}:${ss}`;
};

// Le dialogue est un vrai modal : il est extrait de l'arbre de UploadPage
// (rendu dans <body>) et signale son ouverture à celle-ci via `onOpenChange`,
// qui rend le reste de la page `inert`. Sans cela, la tabulation continuerait
// de circuler derrière le voile, sur des commandes que l'utilisateur ne peut
// pas voir.
const SessionExpiryDialog = ({ token, onOpenChange }) => {
    const { t } = useTranslation();
    const session = useUploadStore((s) => s.session);
    const status = useUploadStore((s) => s.status);
    const updateExpiry = useUploadStore((s) => s.updateExpiry);
    const setExpired = useUploadStore((s) => s.setExpired);

    // serverNow() : expiresAt vient du serveur, le comparer à l'horloge
    // locale ferait expirer trop tôt (ou avertir trop tard) sur un appareil
    // à l'heure décalée.
    const expiresAt = session?.expiresAt ? new Date(session.expiresAt).getTime() : null;
    const [now, setNow] = useState(() => serverNow());

    const extend = useMutation({
        mutationFn: () => keepAlive(token),
        onSuccess: (data) => {
            if (data?.expiresAt) updateExpiry(data.expiresAt);
        },
    });

    // Tick once a second while the session is active. Cheap — a single state
    // update per second and a handful of cheap comparisons downstream.
    useEffect(() => {
        if (status !== 'ready' || !expiresAt) return undefined;
        const id = setInterval(() => setNow(serverNow()), 1000);
        return () => clearInterval(id);
    }, [status, expiresAt]);

    const remaining = expiresAt != null ? expiresAt - now : null;

    // L'expiresAt local peut être périmé : l'autre appareil de la session
    // (bureau ↔ téléphone) renouvelle le TTL par ses propres requêtes sans que
    // cet appareil en soit toujours informé (le secondaire n'écoute pas le flux
    // SSE, le keep-alive n'émet aucun événement). Avant d'alerter ou d'expirer,
    // on re-vérifie donc l'échéance réelle auprès du serveur — une fois posé,
    // le statut 'expired' est terminal et irrécupérable, il ne doit jamais
    // l'être sur la seule foi d'une donnée locale. Une vérification par
    // franchissement de zone, réarmée quand l'échéance est repoussée.
    const verifiedZoneRef = useRef('active');

    useEffect(() => {
        if (status !== 'ready' || remaining == null) return;
        const zone = remaining <= 0 ? 'expired'
            : remaining <= WARN_THRESHOLD_MS ? 'warning' : 'active';
        if (zone === verifiedZoneRef.current) return;
        verifiedZoneRef.current = zone;
        if (zone === 'active') return;
        getSession(token).then((data) => {
            const confirmed = new Date(data.expiresAt).getTime();
            if (confirmed > serverNow()) {
                // Session encore vivante : resynchronise l'échéance (no-op si
                // elle n'a pas bougé — updateExpiry est monotone — et le
                // compte à rebours reprend simplement).
                updateExpiry(data.expiresAt);
            } else {
                setExpired(true);
            }
        }).catch((err) => {
            // 404 : la session n'existe plus côté serveur — expiration
            // confirmée. Toute autre erreur (réseau, 5xx) ne permet pas de
            // trancher : en zone d'avertissement le compte continue (nouvelle
            // vérification à zéro) ; à zéro, on retombe sur l'expiration
            // locale NON confirmée plutôt que de geler l'écran.
            if (err.response?.status === 404) {
                setExpired(true);
            } else if (zone === 'expired') {
                setExpired(false);
            }
        });
    }, [status, remaining, token, updateExpiry, setExpired]);

    const open = status === 'ready' && !!expiresAt && remaining > 0 && remaining <= WARN_THRESHOLD_MS;

    return open ? <ExpiryDialogView remaining={remaining} extend={extend} onOpenChange={onOpenChange} /> : (
        <ClosedExpiryDialog onOpenChange={onOpenChange} />
    );
};

// Prévient UploadPage que le dialogue s'est fermé (ou n'a jamais été ouvert)
// pour qu'elle lève l'inertie du reste de la page. Rendu vide : le seul rôle
// de ce composant est son effet.
const ClosedExpiryDialog = ({ onOpenChange }) => {
    useEffect(() => {
        onOpenChange?.(false);
    }, [onOpenChange]);
    return null;
};

const ExpiryDialogView = ({ remaining, extend, onOpenChange }) => {
    const { t } = useTranslation();
    const dialogRef = useRef(null);
    useFocusTrap(dialogRef);

    useEffect(() => {
        onOpenChange?.(true);
    }, [onOpenChange]);

    const totalSeconds = Math.max(0, Math.ceil(remaining / 1000));

    return (
        <div
            className="session-expiry"
            ref={dialogRef}
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            aria-labelledby="session-expiry-title"
            aria-describedby="session-expiry-question"
        >
            <div className="session-expiry__card">
                <div className="session-expiry__content">
                    <div className="session-expiry__header">
                        {/* L'`id` va sur un <span> de lumière, non sur
                            <m3e-heading> : le nom du dialogue se calcule à
                            partir du contenu de l'élément référencé, que tous
                            les lecteurs d'écran ne savent pas suivre à travers
                            le Shadow DOM du composant. */}
                        <M3eHeading
                            variant="label"
                            size="large"
                            level={2}
                            className="session-expiry__title"
                        >
                            <span id="session-expiry-title">{t('sessionExpiry.title')}</span>
                        </M3eHeading>
                        {/* Le compte à rebours battait la seconde dans une
                            région live : un lecteur d'écran énonçait « 01:59 »,
                            « 01:58 »… en continu, couvrant tout le reste et
                            rendant le dialogue inutilisable. Il n'est plus
                            annoncé de lui-même — la durée restante est lisible
                            à la demande, en toutes lettres (« 01:59 » se
                            vocalise mal), et l'ouverture du dialogue suffit à
                            alerter. */}
                        <div className="session-expiry__timer">
                            <Icon name="timer" />
                            <span aria-hidden="true">{formatMmSs(remaining)}</span>
                            <span className="sr-only">
                                {t('a11y.timeRemaining', {
                                    minutes: Math.floor(totalSeconds / 60),
                                    seconds: totalSeconds % 60,
                                })}
                            </span>
                        </div>
                    </div>
                    <div className="session-expiry__body">
                        <p id="session-expiry-question">{t('sessionExpiry.question')}</p>
                    </div>
                </div>
                <div className="session-expiry__actions">
                    <M3eButton
                        variant="filled"
                        disabled={extend.isPending}
                        onClick={() => extend.mutate()}
                    >
                        {t('sessionExpiry.stay')}
                        <Icon slot="trailing-icon" name="arrow_right_alt" />
                    </M3eButton>
                </div>
            </div>
        </div>
    );
};

export default SessionExpiryDialog;
