import axios from 'axios';
import useUploadStore from '../store/uploadStore';

const api = axios.create({
    baseURL: process.env.API_BASE_URL || '/api',
    timeout: 30_000,
});

// Décalage horloge client/serveur estimé depuis l'en-tête Date des réponses.
// Précision de l'ordre de quelques secondes (granularité 1 s + latence),
// suffisante pour neutraliser une horloge de téléphone décalée de plusieurs
// minutes — sans quoi la comparaison expiresAt/heure locale expire la session
// trop tôt (horloge en avance) ou n'avertit jamais (horloge en retard).
let serverClockOffsetMs = 0;

// Heure « serveur » estimée : à utiliser pour toute comparaison avec un
// expiresAt émis par le back, à la place de Date.now().
export const serverNow = () => Date.now() + serverClockOffsetMs;

// Almost every mutation (upload, delete, reorder, rotate / white-balance /
// deskew / crop, phone-connect / disconnect, keep-alive) renews the
// Hazelcast TTL server-side and returns the refreshed `expiresAt`.
// Pulling that into the store here keeps individual hooks from having to
// plumb it through their onSuccess callbacks, and prevents the client
// view from drifting earlier than the server's actual TTL.
api.interceptors.response.use((response) => {
    const dateHeader = response?.headers?.date;
    if (dateHeader) {
        const serverTime = new Date(dateHeader).getTime();
        if (Number.isFinite(serverTime)) {
            serverClockOffsetMs = serverTime - Date.now();
        }
    }
    const expiresAt = response?.data?.expiresAt;
    if (expiresAt != null && expiresAt !== 0) {
        useUploadStore.getState().updateExpiry(expiresAt);
    }
    return response;
});

export default api;