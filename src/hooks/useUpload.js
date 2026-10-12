import { useMutation, useQueryClient } from '@tanstack/react-query';
import { uploadFile, MAX_FILE_BYTES, isServerError } from '../api/endpoints';
import useUploadStore from '../store/uploadStore';
import useAllowedFormats from './useAllowedFormats';
import { announce } from '../components/Announcer';
import i18n from '../i18n';

const extractExtension = (filename) => {
    if (!filename) return '';
    const dot = filename.lastIndexOf('.');
    if (dot < 0 || dot === filename.length - 1) return '';
    return filename.slice(dot + 1).toLowerCase();
};

const formatAllowedList = (formats) => formats.map((f) => `.${f}`).join(', ');

// Number/byte formatting follows the active language: digit grouping/decimals
// via Intl, and the byte unit (`Ko/Mo` in FR, `KB/MB` elsewhere) via `units.*`.
const numberFormat = (value) => new Intl.NumberFormat(i18n.language, { maximumFractionDigits: 1 }).format(value);
// Bare megabyte figure (no unit) — the caller appends a translated `units.megabyte`.
export const formatMb = (bytes) => numberFormat(bytes / (1024 * 1024));
// Adaptive byte formatter: Ko under 1 MB, Mo otherwise — keeps the displayed
// figure readable across the full S/M/L/XL spread of session caps.
const formatBytes = (bytes) => (bytes < 1024 * 1024
    ? `${numberFormat(bytes / 1024)} ${i18n.t('units.kilobyte')}`
    : `${formatMb(bytes)} ${i18n.t('units.megabyte')}`);

// Quota de taille de session : fichier refusé en bloc (413, qu'il ait une page
// ou plusieurs), ou `partial` quand seule une partie des pages d'un PDF a tenu
// dans le quota (200 « Upload partiel ») — titre et message propres. Dans les
// deux cas, `availableBytes` est la place restante après la réponse du back.
const sessionSizeBanner = (file, availableBytes, { partial = false } = {}) => ({
    title: i18n.t(partial ? 'errors.addPartiallyFailed' : 'errors.addFailed'),
    message: i18n.t(partial ? 'errors.sessionSizePartial' : 'errors.sessionSizeExceeded', {
        name: file.name,
        fileSize: formatBytes(file.size),
        available: formatBytes(Math.max(0, availableBytes)),
    }),
});

// Copy partagée entre le rejet 429 (PDF refusé en bloc), l'upload partiel
// 200 (course multi-sélection : une partie des pages attachée avant le cap)
// et le tronquage client d'une multi-sélection (UploadPage.handleBatchTrimmed,
// qui peut écarter plusieurs fichiers — d'où la liste et l'accord pluriel via
// `count`, indépendant du {{max}} de pages interpolé).
export const pageLimitBanner = (files, maxPages) => {
    const key = maxPages > 0 ? 'errors.pageLimitWithMax' : 'errors.pageLimitNoMax';
    return {
        title: i18n.t('errors.addFailed'),
        message: i18n.t(key, {
            count: files.length,
            names: files.map((f) => f.name).join(', '),
            max: maxPages,
        }),
    };
};

// Discriminateur d'erreur du back : les réponses ErrorResponse
// (GlobalExceptionHandler — CORRUPT_FILE, INFECTED_FILE, SESSION_SIZE_EXCEEDED…)
// l'exposent sous `error`, les réponses UploadResponse (415 INVALID_FILE_FORMAT,
// 429 PAGE_LIMIT_REACHED / PDF_TOO_MANY_PAGES, 200 partiel) sous `errorCode`.
const errorCodeOf = (data) => data?.error ?? data?.errorCode;

// Error → { title, message } banner copy. Titles come from the Figma design
// (see node 40:15165). Messages prefer the server-provided explanation.
const getErrorBanner = (err, file, allowedFormats, maxPages) => {
    const status = err.response?.status;
    const data = err.response?.data;
    const errorCode = errorCodeOf(data);
    const serverMessage = data?.message;
    // The server arbitrates the session cap on compressed bytes and signals
    // a rejection with `error: SESSION_SIZE_EXCEEDED`, including fresh totals
    // so we can recompute available room for the banner.
    if (errorCode === 'SESSION_SIZE_EXCEEDED' && data.maxTotalBytes != null) {
        return sessionSizeBanner(file, data.maxTotalBytes - (data.totalBytes ?? 0));
    }
    // Back's 415 INVALID_FILE_FORMAT (extension mismatch). The server message
    // exists but uses a different format than the design — rebuild it here so
    // the user sees the same copy whether the client or the back caught it.
    if (errorCode === 'INVALID_FILE_FORMAT' && allowedFormats?.length) {
        return {
            title: i18n.t('errors.addFailed'),
            message: i18n.t('errors.invalidFormat', { name: file.name, formats: formatAllowedList(allowedFormats) }),
        };
    }
    // Back's 422 CORRUPT_FILE: the content could not be decoded as a PDF or
    // image (truncated / malformed). Non-retryable — prompt the user to fix
    // the file and re-send. The server message is generic, so we rebuild it
    // here to name the file and match the design copy.
    if (errorCode === 'CORRUPT_FILE') {
        return {
            title: i18n.t('errors.addFailed'),
            message: i18n.t('errors.corrupt', { name: file.name }),
        };
    }
    // Back's 422 INFECTED_FILE: the antivirus (clamd) flagged the content.
    // Non-retryable — re-sending the same file is pointless, so steer the
    // user to a different document rather than a "try again".
    if (errorCode === 'INFECTED_FILE') {
        return {
            title: i18n.t('errors.addFailed'),
            message: i18n.t('errors.infected', { name: file.name }),
        };
    }
    // Back's 429 DUPLICATE_PAGE: a byte-identical page is already in the session
    // (anti-spam guard). Non-retryable as-is — re-sending the same bytes just
    // re-triggers it. The server message is French-only, so we rebuild it here to
    // localize and name the file. Deleting the existing page frees the fingerprint
    // and lets the same file be uploaded again.
    if (errorCode === 'DUPLICATE_PAGE') {
        return {
            title: i18n.t('errors.addFailed'),
            message: i18n.t('errors.duplicate', { name: file.name }),
        };
    }
    // Back's 429 page-limit rejections: PAGE_LIMIT_REACHED (the session is
    // already at maxPages — only reachable via a race since the UI disables
    // uploads at the cap) and PDF_TOO_MANY_PAGES (a multi-page PDF overflows
    // the remaining slots). Same user-facing cause, so they share one message.
    // maxPages is not in the error body — it comes from the store (session meta).
    if (errorCode === 'PAGE_LIMIT_REACHED' || errorCode === 'PDF_TOO_MANY_PAGES') {
        return pageLimitBanner([file], maxPages);
    }
    // Axios timeout (ECONNABORTED) carries an English message ("timeout of
    // ...ms exceeded") that would otherwise leak into the banner verbatim.
    if (err.code === 'ECONNABORTED') {
        return {
            title: i18n.t('errors.addFailed'),
            message: i18n.t('errors.timeout', { name: file.name }),
        };
    }
    // 5xx: server-side incident — surface a generic outage message rather
    // than the raw server payload (which is rarely user-friendly here).
    if (isServerError(err)) {
        return {
            title: i18n.t('errors.addFailed'),
            message: i18n.t('errors.server'),
        };
    }
    switch (status) {
        case 413:
            return {
                title: i18n.t('errors.addFailed'),
                message: serverMessage || i18n.t('errors.tooLarge413'),
            };
        case 429:
            return {
                title: i18n.t('errors.addFailed'),
                message: serverMessage || i18n.t('errors.maxPagesReached'),
            };
        default:
            return {
                title: i18n.t('errors.addFailed'),
                message: serverMessage || err.message || i18n.t('errors.uploadFailed'),
            };
    }
};

const useUpload = (token) => {
    const {
        addPage, setPageProgress, setPageComplete, setPageError,
        setPageRetrying, removePage, updateLimits, setLastError, setExpired, maxPages,
    } = useUploadStore();
    const queryClient = useQueryClient();
    const { data: allowedFormats } = useAllowedFormats();

    return useMutation({
        mutationFn: async (file) => {
            // Skip the extension check until the formats query has resolved —
            // the back will still reject with 415 if anything slips through.
            if (allowedFormats?.length) {
                const ext = extractExtension(file.name);
                if (!ext || !allowedFormats.includes(ext)) {
                    setLastError({
                        title: i18n.t('errors.addFailed'),
                        message: i18n.t('errors.invalidFormat', { name: file.name, formats: formatAllowedList(allowedFormats) }),
                    });
                    throw new Error('INVALID_FILE_FORMAT');
                }
            }

            if (file.size > MAX_FILE_BYTES) {
                setLastError({
                    title: i18n.t('errors.addFailed'),
                    message: i18n.t('errors.fileTooLarge', {
                        size: formatMb(file.size),
                        max: formatMb(MAX_FILE_BYTES),
                        unit: i18n.t('units.megabyte'),
                    }),
                });
                throw new Error('FILE_TOO_LARGE');
            }

            // No session-quota pre-check: the server caps on compressed bytes,
            // which we can't know client-side — we let it reject with
            // SESSION_SIZE_EXCEEDED instead.

            const tempId = addPage(file.name, file.size);
            // Début et fin d'envoi : la ligne qui apparaît puis sa barre de
            // progression qui cède la place à la taille du fichier sont des
            // changements purement visuels, qu'aucune région live ne couvre.
            announce(i18n.t('a11y.uploadStarted', { name: file.name }));
            try {
                const result = await uploadFile(
                    token,
                    file,
                    (progress) => setPageProgress(tempId, progress),
                    (retryState) => setPageRetrying(tempId, retryState),
                );

                if (result.pagesAdded > 1) {
                    // Multi-page PDF: drop the optimistic placeholder; the
                    // session refetch will populate the real pages.
                    removePage(tempId);
                } else {
                    setPageComplete(tempId, {
                        documentId: result.documentId,
                        pageId: result.pageId,
                        thumbnailUrl: result.thumbnailUrl,
                    });
                }

                if (result.totalBytes != null) {
                    updateLimits({ totalBytes: result.totalBytes, maxTotalBytes: result.maxTotalBytes });
                }

                announce(i18n.t('a11y.uploadDone', { name: file.name }));

                // 200 « Upload partiel » : sous concurrence (multi-sélection,
                // second appareil), le back attache ce qui tient dans la limite
                // puis refuse le reste sous le verrou et pose un errorCode sur
                // la réponse de succès. Sans bannière, l'utilisateur ne saurait
                // pas que son document n'a été pris qu'en partie.
                const partialError = errorCodeOf(result);
                if (partialError === 'PAGE_LIMIT_REACHED' || partialError === 'PDF_TOO_MANY_PAGES') {
                    setLastError(pageLimitBanner([file], maxPages));
                } else if (partialError === 'SESSION_SIZE_EXCEEDED') {
                    setLastError(sessionSizeBanner(
                        file, (result.maxTotalBytes ?? 0) - (result.totalBytes ?? 0), { partial: true },
                    ));
                }

                return result;
            } catch (err) {
                // A 400 on the upload endpoint means the session no longer
                // exists server-side (expired or invalid token — the only 400
                // this endpoint returns). Route it to the same terminal
                // "Session expirée" view as a 404 on the session fetch (see
                // useSession) rather than a transient per-file banner, whose
                // body would otherwise be the back's English "Session expired
                // or invalid" string.
                if (err.response?.status === 400) {
                    removePage(tempId);
                    setExpired(true);
                    throw err;
                }

                // Mark the placeholder as errored so PageList can exclude it,
                // and surface the error in the top-of-card banner.
                setPageError(tempId, err.message || i18n.t('errors.short'));

                // Refresh the store from any totals the server included with
                // the error. Important for SESSION_SIZE_EXCEEDED races so the
                // header progress bar matches the rejection reason.
                const errData = err.response?.data;
                if (errData?.totalBytes != null && errData?.maxTotalBytes != null) {
                    updateLimits({ totalBytes: errData.totalBytes, maxTotalBytes: errData.maxTotalBytes });
                }

                setLastError(getErrorBanner(err, file, allowedFormats, maxPages));

                // 429 with partial upload (multi-page PDF): some pages may have been stored
                if (err.response?.status === 429) {
                    queryClient.invalidateQueries({ queryKey: ['session', token] });
                }

                throw err;
            }
        },
        onSuccess: () => {
            // Primary devices receive an `upload-complete` SSE event that
            // invalidates the session query — invalidating again here would
            // cancel that fetch and start a duplicate one. Secondary devices
            // have no SSE listener, so they still need the manual invalidate
            // (notably to populate pages stored from a multi-page PDF, which
            // the optimistic placeholder is dropped for).
            if (useUploadStore.getState().isSecondary) {
                queryClient.invalidateQueries({ queryKey: ['session', token] });
            }
        },
    });
};

export default useUpload;
