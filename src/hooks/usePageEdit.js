import { useMutation, useQueryClient } from '@tanstack/react-query';
import {
    rotatePage, whiteBalancePage, deskewPage, cropPage, undoPage, resetPage, isSessionConflict,
} from '../api/endpoints';
import useUploadStore from '../store/uploadStore';

// `onStart` / `onError` sont fournis par l'appelant (PageEditor) et branchés sur
// les SIX mutations d'un coup.
//
// Jusqu'ici aucune n'avait de `onError` : un échec ne faisait qu'éteindre le
// spinner. L'utilisateur voyait l'image inchangée et rien d'autre — indiscernable
// d'un « aucun document détecté », alors que dans un cas l'opération a réussi
// sans rien trouver et dans l'autre elle n'a pas eu lieu. Le trou se voit surtout
// depuis que le back borne les éditions : un dépassement remonte désormais un
// 504 EDIT_TIMEOUT explicite, qui serait tombé dans le même silence.
//
// Le message n'est PAS choisi ici : l'éditeur est un overlay modal qui rend
// <main> inert, donc l'Alert du store (setLastError) y est invisible et
// inatteignable. Le rendu revient à PageEditor, seul à disposer d'une surface
// visible par-dessus l'overlay.
const usePageEdit = (token, pageId, { onStart, onError } = {}) => {
    const queryClient = useQueryClient();
    const updateLimits = useUploadStore((s) => s.updateLimits);
    const touchPage = useUploadStore((s) => s.touchPage);

    // Communes aux six mutations : react-query appelle ces rappels de niveau
    // mutation EN PLUS de ceux passés à mutate(), que PageEditor utilise déjà
    // pour ses messages de succès.
    // Un 409 (page supprimée ou retouchée ailleurs, enregistrement en cours) dit
    // que l'affichage est périmé : la session est relue, pour que l'usager
    // recommence — ou non — sur la page telle qu'elle est.
    const lifecycle = {
        onMutate: () => { onStart?.(); },
        onError: (err) => {
            if (isSessionConflict(err)) queryClient.invalidateQueries({ queryKey: ['session', token] });
            onError?.(err);
        },
    };

    const onSuccess = (data) => {
        if (data.totalBytes != null) {
            updateLimits({ totalBytes: data.totalBytes, maxTotalBytes: data.maxTotalBytes });
        }
        // deskew/crop return applied=false when no document is detected — in
        // that case the image is unchanged, so don't bust the cache.
        // An applied edit means the page now differs from its upload state, so
        // both undo (last op) and reset (to initial) become available.
        if (data.applied !== false) {
            touchPage(pageId, { undoAvailable: true, resetAvailable: true });
        }
        queryClient.invalidateQueries({ queryKey: ['session', token] });
    };

    const rotate = useMutation({
        mutationFn: (direction = 'cw') => rotatePage(token, pageId, direction),
        onSuccess,
        ...lifecycle,
    });

    const whiteBalance = useMutation({
        mutationFn: () => whiteBalancePage(token, pageId),
        onSuccess,
        ...lifecycle,
    });

    const deskew = useMutation({
        mutationFn: () => deskewPage(token, pageId),
        onSuccess,
        ...lifecycle,
    });

    const crop = useMutation({
        mutationFn: () => cropPage(token, pageId),
        onSuccess,
        ...lifecycle,
    });

    const undo = useMutation({
        mutationFn: () => undoPage(token, pageId),
        onSuccess: (data) => {
            if (data.totalBytes != null) {
                updateLimits({ totalBytes: data.totalBytes, maxTotalBytes: data.maxTotalBytes });
            }
            // Only the single-step undo is consumed here; resetAvailable is left
            // untouched (a multi-edit page is still resettable) and the session
            // refetch reconciles it from the server's initialVersion.
            touchPage(pageId, { undoAvailable: false });
            queryClient.invalidateQueries({ queryKey: ['session', token] });
        },
        ...lifecycle,
    });

    const reset = useMutation({
        mutationFn: () => resetPage(token, pageId),
        onSuccess: (data) => {
            if (data.totalBytes != null) {
                updateLimits({ totalBytes: data.totalBytes, maxTotalBytes: data.maxTotalBytes });
            }
            // Back to the initial upload state: nothing left to undo or reset.
            touchPage(pageId, { undoAvailable: false, resetAvailable: false });
            queryClient.invalidateQueries({ queryKey: ['session', token] });
        },
        ...lifecycle,
    });

    const isPending = rotate.isPending || whiteBalance.isPending
        || deskew.isPending || crop.isPending || undo.isPending || reset.isPending;

    return { rotate, whiteBalance, deskew, crop, undo, reset, isPending };
};

export default usePageEdit;
