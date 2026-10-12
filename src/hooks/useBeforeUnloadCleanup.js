import { useEffect } from 'react';

// Fire-and-forget DELETE on tab close so the backend releases the
// "one session per originator IP" slot immediately instead of waiting for
// TTL. Idempotent server-side (204 even if the session is already gone),
// so duplicate fires are harmless.
//
// fetch + keepalive:true is what survives document unload. sendBeacon is
// unsuitable — it forces POST and we need DELETE.
//
// Le DELETE part SANS condition, y compris sur un simple rechargement
// (beforeunload ne distingue pas F5 d'une fermeture) : un e-formulaire
// porte souvent plusieurs boutons de téléversement, et un emplacement
// originator non libéré bloquerait la session suivante derrière
// ORIGINATOR_HAS_ACTIVE_SESSION (le bouton « forcer » disparaît en
// production). Perdre la session sur un F5 est un compromis assumé —
// décision produit, ne pas « corriger ».
//
// Arm only in Flow A (the desktop tab opened by the webcomponent
// represents the session). On /scan/{token}, leaving the mobile view
// must NOT cancel the session — the user can come back to it.
const useBeforeUnloadCleanup = (token) => {
    useEffect(() => {
        if (!token) return undefined;
        const baseUrl = process.env.API_BASE_URL || '/api';
        // pagehide en plus de beforeunload : les navigateurs mobiles omettent
        // souvent beforeunload. Garde anti-doublon (les deux peuvent partir),
        // levée sur pageshow (retour depuis le bfcache).
        let sent = false;
        const handler = () => {
            if (sent) return;
            sent = true;
            fetch(`${baseUrl}/sessions/${token}`, { method: 'DELETE', keepalive: true });
        };
        const handlePageShow = () => { sent = false; };
        window.addEventListener('beforeunload', handler);
        window.addEventListener('pagehide', handler);
        window.addEventListener('pageshow', handlePageShow);
        return () => {
            window.removeEventListener('beforeunload', handler);
            window.removeEventListener('pagehide', handler);
            window.removeEventListener('pageshow', handlePageShow);
        };
    }, [token]);
};

export default useBeforeUnloadCleanup;
