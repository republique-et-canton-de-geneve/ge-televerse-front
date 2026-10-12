import { useEffect } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import useUploadStore from '../store/uploadStore';

const HEARTBEAT_INTERVAL_MS = 15000;
const WATCHDOG_TIMEOUT_MS = 35000;

const useSseSync = (token) => {
    const queryClient = useQueryClient();
    const { setPhoneConnected, setFinalized } = useUploadStore();

    useEffect(() => {
        if (!token) return;

        const url = `/api/sessions/${token}/events`;
        let es;
        let watchdog;

        const refetchSession = () => {
            queryClient.invalidateQueries({ queryKey: ['session', token] });
        };

        const arm = () => {
            clearTimeout(watchdog);
            watchdog = setTimeout(reconnect, WATCHDOG_TIMEOUT_MS);
        };

        const wrap = (handler) => (event) => {
            arm();
            handler?.(event);
        };

        const connect = () => {
            es = new EventSource(url);
            arm();

            es.addEventListener('heartbeat', wrap(null));
            es.addEventListener('upload-complete', wrap(refetchSession));
            es.addEventListener('page-deleted', wrap(refetchSession));
            // Le refetch rafraîchit les vignettes retouchées ET l'expiresAt :
            // les éditions renouvellent le TTL côté serveur, et sans cette
            // resynchronisation le compte à rebours local de cet appareil
            // expirerait une session que l'autre appareil maintient en vie.
            es.addEventListener('page-edited', wrap(refetchSession));
            es.addEventListener('pages-reordered', wrap(refetchSession));
            es.addEventListener('phone-connected', wrap(() => setPhoneConnected(true)));
            es.addEventListener('phone-disconnected', wrap(() => {
                setPhoneConnected(false);
                refetchSession();
            }));
            // Transition directe : refetcher une session terminée peut
            // répondre 404 et n'apprend rien. Le verrou des statuts terminaux
            // du store neutralise le cas où un autre état final est déjà posé.
            es.addEventListener('session-complete', wrap(() => setFinalized()));
        };

        const reconnect = () => {
            es.close();
            connect();
            // SSE ne rejoue pas les événements manqués : tout ce qui a été
            // émis pendant la coupure (upload-complete, page-deleted...) est
            // perdu — resynchronise l'état complet depuis le serveur.
            refetchSession();
        };

        connect();

        return () => {
            clearTimeout(watchdog);
            es.close();
        };
    }, [token]);
};

export default useSseSync;
