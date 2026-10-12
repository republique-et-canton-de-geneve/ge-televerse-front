import { create } from 'zustand';

// Statuts terminaux : une fois atteints, plus aucune transition (hors reset).
// Les écrivains de statut sont nombreux et non coordonnés (échec de refetch
// dans useSession, 400 d'upload dans useUpload, compte à rebours du
// SessionExpiryDialog, mutations finalize/cancel) — sans ce verrou, un écran
// terminal peut être écrasé par un écrivain retardataire, p.ex. l'écran de
// succès remplacé par « Votre session a expiré » quand un refetch 404 après
// la finalisation.
export const TERMINAL_STATUSES = ['finalized', 'cancelled', 'expired', 'error'];
export const isTerminal = (status) => TERMINAL_STATUSES.includes(status);

// Transition de statut verrouillée : ignorée si un statut terminal est déjà
// en place. `extra` porte les champs associés (errorMessage...).
const transition = (set) => (status, extra = {}) => set((state) => (
    isTerminal(state.status) ? {} : { status, ...extra }
));

const useUploadStore = create((set, get) => ({
    session: null,
    pages: [],
    status: 'loading', // 'loading' | 'ready' | 'finalizing' | 'finalized' | 'cancelled' | 'expired' | 'error'
    errorMessage: null,
    expiredServerConfirmed: false,

    // Transient banner for the most recent non-blocking error (e.g. single file
    // too large). Cleared at the start of the next upload attempt.
    lastError: null, // { title, message } | null

    // Role & cross-device state
    callbackId: null,
    // Origin of window.opener — declared by the host in the popup URL
    // (`?origin=`) and confirmed by the handshake reply. Used as the
    // targetOrigin for the finalize postMessage. Null until the opener answers
    // — and if it never answers, finalize SKIPS the message rather than
    // broadcast the documentId with '*' (see useOpenerHandshake).
    openerOrigin: null,
    isSecondary: false,
    phoneConnected: false,

    // Storage limits (updated from session/upload/delete/edit responses).
    // maxPages : 0 = inconnu (pas encore reçu du serveur) — les consommateurs
    // gardent un garde `maxPages > 0`. Pas de valeur inventée côté client :
    // le serveur est la seule source des limites qu'il applique.
    totalBytes: 0,
    maxTotalBytes: 0,
    maxPages: 0,

    setSession: (session) => {
        const currentStatus = get().status;
        if (currentStatus !== 'loading' && currentStatus !== 'ready') return;

        const serverPages = (session.pages || []).map((p) => {
            // Cache-busts the thumbnail and full preview when the page is
            // edited: backend bumps lastModifiedAt on rotate/white-balance/
            // deskew/crop, so URLs change and the browser re-fetches.
            const lastModifiedAt = p.lastModifiedAt || p.uploadedAt || null;
            const version = lastModifiedAt ? new Date(lastModifiedAt).getTime() : 0;
            return {
                fileName: p.originalFilename,
                fileSize: p.fileSize ?? null,
                status: 'complete',
                progress: 100,
                documentId: session.documentId,
                pageId: p.pageId,
                lastModifiedAt,
                undoAvailable: p.previousVersion != null,
                resetAvailable: p.initialVersion != null,
                error: null,
                thumbnailUrl: p.thumbnailKey
                    ? `/api/sessions/${session.token}/pages/${p.pageId}/thumbnail?v=${version}`
                    : null,
            };
        });

        const localOnlyPages = currentStatus === 'ready'
            ? get().pages.filter((p) => !p.pageId)
            : [];

        set({
            session,
            status: 'ready',
            pages: [...serverPages, ...localOnlyPages],
            totalBytes: session.totalBytes ?? get().totalBytes,
            maxTotalBytes: session.maxTotalBytes ?? get().maxTotalBytes,
            maxPages: session.maxPages ?? get().maxPages,
            // Resynchronise le badge « Téléphone connecté » depuis l'état
            // serveur : l'événement SSE phone-connected n'est pas rejoué après
            // une reprise de session (rechargement) ni une reconnexion SSE.
            phoneConnected: session.phoneConnected ?? get().phoneConnected,
        });
    },
    setError: (message) => transition(set)('error', { errorMessage: message }),
    // serverConfirmed : true quand l'expiration a été constatée par le serveur
    // (404, 400 d'upload, expiresAt passé dans une réponse) — UploadPage
    // n'envoie alors le DELETE de libération qu'à coup sûr. Une expiration
    // purement locale (serveur injoignable au moment du compte à rebours)
    // reste false : supprimer sur cette seule foi pourrait tuer une session
    // que l'autre appareil maintient en vie.
    setExpired: (serverConfirmed = false) => transition(set)('expired', { expiredServerConfirmed: serverConfirmed }),
    setFinalizing: () => transition(set)('finalizing'),
    setFinalized: () => transition(set)('finalized'),
    setCancelled: () => transition(set)('cancelled'),

    // Role setters
    setCallbackId: (id) => set({ callbackId: id }),
    setOpenerOrigin: (origin) => set({ openerOrigin: origin }),
    setSecondary: () => set({ isSecondary: true }),
    setPhoneConnected: (val) => set({ phoneConnected: val }),

    // Expiry — monotone : une réponse retardataire (générée avant un
    // keep-alive parallèle, p.ex. un upload lent) porte un expiresAt plus
    // ancien ; l'appliquer ferait reculer l'échéance et le compte à rebours
    // pourrait expirer côté client une session encore vivante côté serveur.
    updateExpiry: (expiresAt) => {
        const session = get().session;
        if (!session) return;
        const next = new Date(expiresAt).getTime();
        const current = session.expiresAt ? new Date(session.expiresAt).getTime() : 0;
        if (!Number.isFinite(next) || next <= current) return;
        set({ session: { ...session, expiresAt } });
    },

    // Storage
    updateLimits: ({ totalBytes, maxTotalBytes }) => {
        const updates = {};
        if (totalBytes != null) updates.totalBytes = totalBytes;
        if (maxTotalBytes != null) updates.maxTotalBytes = maxTotalBytes;
        set(updates);
    },

    addPage: (fileName, fileSize = null) => {
        // Starting a new upload clears the prior error banner and sweeps any
        // leftover errored placeholder rows, so retrying doesn't accumulate.
        const cleaned = get().pages.filter((p) => p.status !== 'error');
        const tempId = `temp-${crypto.randomUUID?.() ?? `${Date.now()}-${Math.random().toString(36).slice(2)}`}`;
        const page = { fileName, fileSize, status: 'uploading', progress: 0, documentId: null, pageId: null, tempId, error: null, thumbnailUrl: null, retrying: null };
        set({ pages: [...cleaned, page], lastError: null });
        return tempId;
    },

    setLastError: (error) => set({ lastError: error }),
    clearLastError: () => set({ lastError: null }),

    setPageProgress: (tempId, progress) => {
        set({ pages: get().pages.map((p) => (p.tempId === tempId ? { ...p, progress } : p)) });
    },

    // Bulkhead 429 backoff: when retrying is true, the progress bar holds at
    // its last value and a "Nouvelle tentative…" caption appears below it.
    setPageRetrying: (tempId, retryState) => {
        const next = retryState?.retrying ? retryState : null;
        set({ pages: get().pages.map((p) => (p.tempId === tempId ? { ...p, retrying: next } : p)) });
    },

    setPageComplete: (tempId, { documentId, pageId, thumbnailUrl }) => {
        set({
            pages: get().pages.map((p) => (
                p.tempId === tempId
                    ? { ...p, status: 'complete', progress: 100, documentId, pageId, thumbnailUrl: thumbnailUrl || null }
                    : p
            )),
        });
    },

    setPageError: (tempId, error) => {
        set({ pages: get().pages.map((p) => (p.tempId === tempId ? { ...p, status: 'error', error } : p)) });
    },

    // Accepts either a real pageId (server-confirmed) or a tempId (optimistic placeholder).
    removePage: (idOrTempId) => {
        set({ pages: get().pages.filter((p) => p.pageId !== idOrTempId && p.tempId !== idOrTempId) });
    },

    // Optimistically bump a page's lastModifiedAt so its thumbnail/preview URLs
    // refresh immediately on edit success; the next session refetch confirms.
    // undoAvailable: true after an edit (a backup now exists), false after an
    // undo (the backup has been consumed). resetAvailable follows the initial
    // upload snapshot: set it explicitly to override, or omit to leave it as-is
    // (e.g. a single-step undo doesn't necessarily make the page resettable).
    touchPage: (pageId, { undoAvailable = true, resetAvailable } = {}) => {
        const now = new Date().toISOString();
        const version = new Date(now).getTime();
        set({
            pages: get().pages.map((p) => {
                if (p.pageId !== pageId) return p;
                const baseThumb = p.thumbnailUrl ? p.thumbnailUrl.split('?')[0] : null;
                return {
                    ...p,
                    lastModifiedAt: now,
                    undoAvailable,
                    ...(resetAvailable !== undefined ? { resetAvailable } : {}),
                    thumbnailUrl: baseThumb ? `${baseThumb}?v=${version}` : p.thumbnailUrl,
                };
            }),
        });
    },

    reorderPages: (fromIndex, toIndex) => {
        const pages = [...get().pages];
        const [moved] = pages.splice(fromIndex, 1);
        pages.splice(toIndex, 0, moved);
        set({ pages });
    },

    completedCount: () => get().pages.filter((p) => p.status === 'complete').length,

    reset: () => set({
        session: null, pages: [], status: 'loading', errorMessage: null,
        expiredServerConfirmed: false,
        lastError: null,
        callbackId: null, openerOrigin: null, isSecondary: false, phoneConnected: false,
        totalBytes: 0, maxTotalBytes: 0, maxPages: 0,
    }),
}));

export default useUploadStore;
