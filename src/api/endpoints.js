import api from './client';

// Per-file upload cap, mirrored from the backend's app.limits.multipart-ceiling
// (enforced by spring.webflux.multipart.max-disk-usage-per-part, 413 FILE_TOO_LARGE). Files bigger than this are rejected
// server-side — checking client-side avoids long mobile uploads doomed to fail.
export const MAX_FILE_BYTES = 50 * 1024 * 1024;

// Generic 5xx (server-side outage / incident) copy lives in the i18n catalogs
// under `errors.server`, reused across upload, session load, and
// finalize/disconnect so the user sees the same wording wherever a 5xx surfaces.

export const isServerError = (err) => {
    const status = err?.response?.status;
    return typeof status === 'number' && status >= 500 && status < 600;
};

// --- Admission control (429 "busy") retry ---

// The backend fronts its heavy paths with per-pod Resilience4j bulkheads that
// fast-fail with HTTP 429 + a body.error "busy" code when the concurrent cap is
// exceeded. These are TRANSIENT: a short backoff honouring the Retry-After
// header usually lands on a freed slot once the pod drains or scales out.
// Each path carries its own code so the origin is observable, but the client
// treats them uniformly — retry with backoff, then surface the error.
//   - UPLOAD_BUSY   : POST /upload/{token}
//   - EDIT_BUSY     : rotate / crop / deskew / white-balance
//   - FINALIZE_BUSY : POST /sessions/{token}/finalize
//   - MERGE_BUSY    : preview.pdf / on-the-fly thumbnail render — fetched by
//                     pdf.js and <img>, NOT axios, so it can't flow through this
//                     helper (see the notes in PdfPreviewContent / PageEditor).
//   - SESSION_BUSY  : verrou Hazelcast de session non acquis dans le délai
//                     imparti. Transversal, pas propre à un chemin : TOUTE
//                     mutation de session le prend (attache de page, édition,
//                     suppression, réordonnancement, keep-alive, phone-connect).
//                     Le back attendait ce verrou sans limite ; il le borne
//                     désormais (app.session-lock.wait) et rejette en 429 plutôt
//                     que de laisser la requête en vol — d'où ce nouveau code,
//                     qui décrit une contention passagère entre deux opérations
//                     sur la MÊME session, là où les autres décrivent la
//                     saturation d'un pod.
// Other 429s (page-cap reached, PDF too many pages) are REAL user errors and are
// NOT retried. See ge-televerse-back GlobalExceptionHandler.
const BUSY_CODES = new Set(['UPLOAD_BUSY', 'EDIT_BUSY', 'MERGE_BUSY', 'FINALIZE_BUSY', 'SESSION_BUSY']);
const MAX_BUSY_ATTEMPTS = 4; // initial attempt + 3 retries
const RETRY_AFTER_FALLBACK_SECONDS = 1;

const isBusy = (err) =>
    err?.response?.status === 429 && BUSY_CODES.has(err.response?.data?.error);

const parseRetryAfterMs = (err) => {
    const header = err.response?.headers?.['retry-after'];
    const seconds = parseInt(header, 10);
    const base = Number.isFinite(seconds) && seconds >= 0 ? seconds : RETRY_AFTER_FALLBACK_SECONDS;
    // Jitter so N saturated phones don't re-synchronize on the next pod.
    return base * 1000 + Math.floor(Math.random() * 500);
};

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Runs requestFn, retrying on a transient "busy" 429 with a Retry-After backoff.
// onRetryStateChange (optional) lets a caller surface a "retrying" indicator;
// callers that already show a spinner for the whole mutation (edits, finalize)
// can omit it and let the retry happen transparently under that spinner.
const withBusyRetry = async (requestFn, { onRetryStateChange } = {}) => {
    for (let attempt = 1; attempt <= MAX_BUSY_ATTEMPTS; attempt++) {
        try {
            return await requestFn();
        } catch (err) {
            if (!isBusy(err) || attempt === MAX_BUSY_ATTEMPTS) throw err;
            const retryAfterMs = parseRetryAfterMs(err);
            onRetryStateChange?.({ retrying: true, attempt, retryAfterMs });
            await sleep(retryAfterMs);
            onRetryStateChange?.({ retrying: false });
        }
    }
    // Unreachable: the loop either returns a response or throws on the last attempt.
    return undefined;
};

// --- Upload formats ---

// Returns the extensions (without leading dot) the backend will accept,
// e.g. ["pdf", "jpg", "jpeg", "png", "tiff"]. Sourced from the same
// app.upload.allowed-formats config the back uses to reject 415s, so the
// two stay aligned without duplicating the list in JS.
export const getAllowedFormats = async () => {
    const { data } = await api.get('/upload/formats');
    return data.allowedFormats;
};

// --- Session management ---

// `force=true` purges any prior originator binding on the same IP before
// creating the new session — recovery path for users who got stuck behind
// a stale ORIGINATOR_HAS_ACTIVE_SESSION (closed window without finalizing,
// browser crash, etc.). The query param is the back's public escape hatch.
export const createSession = async (sizeProfile, { force = false } = {}) => {
    const { data } = await api.post('/sessions', { sizeProfile }, {
        params: force ? { force: true } : undefined,
    });
    return data;
};

export const getSession = async (token) => {
    const { data } = await api.get(`/sessions/${token}`);
    // Backend wraps the UploadSession in a SessionView with limit metadata
    // alongside; the store expects a flat shape.
    const { session, ...meta } = data;
    return { ...session, ...meta };
};

// Volontairement PAS enveloppé dans withBusyRetry, contrairement aux autres
// mutations de session : le keep-alive est déclenché par l'activité de
// l'utilisateur et déjà limité à un envoi par minute (useKeepAlive), qui avale
// les échecs. Un SESSION_BUSY signifie qu'une autre opération tient le verrou
// — donc qu'elle vient elle-même de renouveler le TTL. Réessayer serait au
// mieux redondant, au pire trois sommeils dans un chemin « au mieux ».
export const keepAlive = async (token) => {
    const { data } = await api.post(`/sessions/${token}/keep-alive`);
    return data;
};

// La fusion est bornée côté back par app.finalize-timeout (2 min), au-delà duquel
// il répond 504 et rouvre la session. Le plafond global d'axios (30 s) coupait
// bien avant : toute fusion de plus de 30 s était abandonnée par le client — le
// back l'annule alors, la session est rouverte — et l'écran d'erreur qui suit
// supprime la session (cf. UploadPage), pages comprises. Plafond dédié, calé
// au-dessus du budget serveur. À garder cohérent avec app.finalize-timeout.
const FINALIZE_TIMEOUT_MS = 150_000;

// Wrapped in withBusyRetry: finalize has its own per-pod bulkhead on the back
// (FINALIZE_BUSY, separate from previews) — a saturated pod fast-fails, so we
// retry with the server's Retry-After under the 'finalizing' UI before giving up.
// Le même code signale une autre finalisation de la session déjà en cours (double
// clic, second onglet) : le rejeu obtient le documentId une fois celle-ci terminée
// — une finalisation rejouée sur une session finalisée rend le même documentId.
export const finalizeSession = async (token) => {
    const { data } = await withBusyRetry(() => api.post(
        `/sessions/${token}/finalize`,
        null,
        { timeout: FINALIZE_TIMEOUT_MS },
    ));
    return data;
};

// Explicit cancel from the mobile "Annuler" button (primary devices only —
// secondaries detach via phoneDisconnect instead). Same idempotent DELETE
// the beforeunload cleanup uses: the back releases the originator binding,
// closes the SSE sink and discards uploaded pages — nothing is saved.
// UploadPage also sends it once a primary reaches a terminal screen; after a
// finalize the merged document is untouched (stored under its documentId).
export const cancelSession = async (token) => {
    await api.delete(`/sessions/${token}`);
};

// Returns the URL (not a blob) so callers can hand it to window.open and let
// the browser stream/render the PDF inline. Backend sets Cache-Control:
// no-cache, so refreshing always reflects the current page set.
export const getPreviewUrl = (token) => `/api/sessions/${token}/preview.pdf`;

// --- Phone connection ---

// Enveloppés depuis que le back borne l'attente du verrou de session : ces deux
// appels le prennent et peuvent donc renvoyer 429 SESSION_BUSY. phoneConnect
// n'est tenté QU'UNE FOIS par session côté appelant (garde phoneConnectCalled
// dans useSession) et son échec est avalé : sans réessai, une contention d'une
// seconde au chargement priverait définitivement le poste de bureau du badge
// « téléphone connecté ».
export const phoneConnect = async (token) => {
    const { data } = await withBusyRetry(() => api.post(`/sessions/${token}/phone-connect`));
    return data;
};

export const phoneDisconnect = async (token) => {
    const { data } = await withBusyRetry(() => api.post(`/sessions/${token}/phone-disconnect`));
    return data;
};

// --- File upload ---

// Le timeout global du client (30 s) couvre l'envoi du corps de la requête :
// il tuerait tout fichier de plus de ~15 Mo sur un lien mobile typique alors
// que MAX_FILE_BYTES en autorise 50. Plafond dédié : 50 Mo à ~1 Mbit/s
// montant ≈ 7 min, arrondi à 10 min.
const UPLOAD_TIMEOUT_MS = 10 * 60 * 1000;

export const uploadFile = async (token, file, onProgress, onRetryStateChange) => {
    const formData = new FormData();
    formData.append('file', file);

    // Each retry restarts axios at 0%, but the file is still buffered locally —
    // hold the bar at the highest value we've reported so the UI doesn't snap back.
    let highestProgress = 0;
    const reportProgress = (next) => {
        if (next <= highestProgress) return;
        highestProgress = next;
        onProgress?.(next);
    };

    // onRetryStateChange drives the visible "server busy, retrying…" indicator
    // (uploads have no other spinner while the pod is saturated), unlike edits /
    // finalize which retry transparently under their own pending UI.
    const { data } = await withBusyRetry(
        () => api.post(`/upload/${token}`, formData, {
            timeout: UPLOAD_TIMEOUT_MS,
            headers: { 'Content-Type': 'multipart/form-data' },
            onUploadProgress: (event) => {
                if (event.total) {
                    reportProgress(Math.round((event.loaded / event.total) * 100));
                }
            },
        }),
        { onRetryStateChange },
    );
    return data;
};

// --- Page management ---

// Ces deux mutations n'ont pas de bulkhead dédié, mais elles prennent le verrou
// de session : depuis qu'il est borné côté back, elles peuvent échouer en 429
// SESSION_BUSY là où elles patientaient auparavant. Sans réessai, supprimer une
// page pendant qu'un upload attache la précédente remonterait une erreur à
// l'utilisateur pour une contention de quelques millisecondes — et un
// réordonnancement rejeté déclencherait en plus le déplacement inverse de
// useReorderPages, faisant sauter la ligne sous le doigt.
export const deletePage = async (token, pageId) => {
    const { data } = await withBusyRetry(() => api.delete(`/sessions/${token}/pages/${pageId}`));
    return data;
};

export const reorderPages = async (token, pageIds) => {
    const { data } = await withBusyRetry(() => api.put(`/sessions/${token}/pages/order`, { pageIds }));
    return data;
};

// --- Page editing ---

// rotate / crop / deskew / white-balance sit behind the back's per-pod `edit`
// bulkhead (EDIT_BUSY): each does S3 round-trips + a PDFBox render, so a
// saturated pod fast-fails. withBusyRetry retries with the server's Retry-After,
// transparently under the editor's pending spinner. Le rejeu est sûr : le back
// écrit chaque édition comme une version neuve, adoptée sous le verrou de
// session — une édition refusée n'a rien modifié, elle ne s'applique pas deux fois.
//
// undo/reset restent hors de ce bulkhead côté back — ils ne font que repointer la
// page sur une version conservée, sans passe OpenCV, et les faire concourir pour
// les mêmes permis les ferait rejeter à cause de deskews en cours. Ils ne
// renvoient donc jamais EDIT_BUSY. Ils sont malgré tout enveloppés : ils prennent
// le verrou de session et peuvent renvoyer SESSION_BUSY.

// Ces quatre éditions sont désormais bornées côté serveur (app.edit-timeout,
// 20 s par défaut) : au dépassement le back répond 504 EDIT_TIMEOUT au lieu de
// laisser la requête en vol. Encore faut-il que le client attende cette réponse.
// Le plafond global d'axios (30 s) ne laissait que ~10 s de marge réseau au-delà
// du budget serveur — marge la plus fragile précisément quand le lien mobile est
// dégradé, cas fortement corrélé à la lenteur qui déclenche le timeout serveur.
// Perdre cette course transforme un EDIT_TIMEOUT diagnosticable (code, log pod,
// compteur televerse.edit.timeouts) en un ECONNABORTED muet. Plafond dédié, sur
// le modèle d'UPLOAD_TIMEOUT_MS, calé nettement au-dessus du budget serveur.
// À garder cohérent avec app.edit-timeout dans ge-televerse-back.
const EDIT_TIMEOUT_MS = 35_000;

// Classe un échec d'édition en conduite à tenir, pour que l'éditeur choisisse un
// message sans avoir à connaître le vocabulaire de codes du back.
//   'busy'    : saturation ou contention passagère — réessayer plus tard. Le 504
//               EDIT_TIMEOUT y est rangé volontairement : la cause diffère (un
//               maillon aval trop lent, pas un permis manquant) mais la conduite
//               à tenir de l'utilisateur est identique, et les busy codes
//               arrivent ici déjà réessayés 4 fois par withBusyRetry.
//   'network' : aucune réponse reçue (coupure, abandon axios) — vérifier le lien.
//   'server'  : 5xx — incident côté service.
//   'conflict'    : 409 PAGE_GONE / PAGE_CHANGED — la page a été supprimée ou
//                   retouchée entre-temps (autre appareil, autre onglet). Rien n'a
//                   été modifié ; la session est à relire avant de recommencer.
//   'finalizing'  : 409 SESSION_FINALIZING / SESSION_FINALIZED — l'enregistrement
//                   du document a commencé, plus aucune modification possible.
//   'notEditable' : 422 PAGE_NOT_EDITABLE — recadrage, redressement ou balance des
//                   blancs sur une page de PDF portant du texte ou des tracés : la
//                   reconstruire depuis son image effacerait le reste.
//   'tooLarge'    : 413 SESSION_SIZE_EXCEEDED — la version retouchée ferait
//                   dépasser le quota de la session.
//   'generic' : le reste (4xx métier, réponse inattendue).
const CONFLICT_CODES = new Set(['PAGE_GONE', 'PAGE_CHANGED']);
const FINALIZING_CODES = new Set(['SESSION_FINALIZING', 'SESSION_FINALIZED']);

export const editFailureKind = (err) => {
    const status = err?.response?.status;
    const code = err?.response?.data?.error;
    if (status === 504 && code === 'EDIT_TIMEOUT') return 'busy';
    if (status === 429 && BUSY_CODES.has(code)) return 'busy';
    if (status === 409 && CONFLICT_CODES.has(code)) return 'conflict';
    if (status === 409 && FINALIZING_CODES.has(code)) return 'finalizing';
    if (status === 422 && code === 'PAGE_NOT_EDITABLE') return 'notEditable';
    if (status === 413 && code === 'SESSION_SIZE_EXCEEDED') return 'tooLarge';
    if (status == null) return 'network';
    if (isServerError(err)) return 'server';
    return 'generic';
};

// Vrai si la mutation a été refusée parce que la session a changé sous elle (page
// supprimée ou retouchée ailleurs, liste de pages modifiée, enregistrement en
// cours) : l'affichage est périmé, la session est à relire.
export const isSessionConflict = (err) => err?.response?.status === 409;

export const rotatePage = async (token, pageId, direction = 'cw') => {
    const { data } = await withBusyRetry(() => api.post(
        `/sessions/${token}/pages/${pageId}/rotate`,
        null,
        { params: { direction }, timeout: EDIT_TIMEOUT_MS },
    ));
    return data;
};

export const whiteBalancePage = async (token, pageId) => {
    const { data } = await withBusyRetry(() => api.post(
        `/sessions/${token}/pages/${pageId}/white-balance`,
        null,
        { timeout: EDIT_TIMEOUT_MS },
    ));
    return data;
};

export const deskewPage = async (token, pageId) => {
    const { data } = await withBusyRetry(() => api.post(
        `/sessions/${token}/pages/${pageId}/deskew`,
        null,
        { timeout: EDIT_TIMEOUT_MS },
    ));
    return data;
};

export const cropPage = async (token, pageId) => {
    const { data } = await withBusyRetry(() => api.post(
        `/sessions/${token}/pages/${pageId}/crop`,
        null,
        { timeout: EDIT_TIMEOUT_MS },
    ));
    return data;
};

export const undoPage = async (token, pageId) => {
    const { data } = await withBusyRetry(() => api.post(`/sessions/${token}/pages/${pageId}/undo`));
    return data;
};

// « Annuler tout » : restaure la page à son état d'upload initial (la version
// initiale conservée côté serveur depuis la première édition), par opposition à
// undoPage qui n'annule que la dernière opération.
export const resetPage = async (token, pageId) => {
    const { data } = await withBusyRetry(() => api.post(`/sessions/${token}/pages/${pageId}/reset`));
    return data;
};
