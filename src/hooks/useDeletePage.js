import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deletePage, isServerError, isSessionConflict } from '../api/endpoints';
import useUploadStore from '../store/uploadStore';
import { announce } from '../components/Announcer';
import i18n from '../i18n';

// `silent` : suppression que l'utilisateur n'a pas demandée page par page
// (pages de démo de la visite guidée) — l'appelant annonce lui-même, une fois.
const useDeletePage = (token, { silent = false } = {}) => {
    const { removePage, updateLimits, setLastError } = useUploadStore();
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (pageId) => {
            // Lu AVANT la suppression : après, la ligne n'est plus dans le
            // store et l'annonce ne pourrait plus nommer le fichier retiré.
            const deleted = useUploadStore.getState().pages.find((p) => p.pageId === pageId);
            const result = await deletePage(token, pageId);
            removePage(pageId);
            // La disparition d'une ligne n'a aucun écho sonore : sans cette
            // annonce, un lecteur d'écran ne signale rien après l'activation
            // du bouton « Supprimer ».
            if (!silent) announce(i18n.t('a11y.pageDeleted', { name: deleted?.fileName ?? '' }));
            if (result.totalBytes != null) {
                updateLimits({ totalBytes: result.totalBytes, maxTotalBytes: result.maxTotalBytes });
            }
            return result;
        },
        // Sans ce rappel, un échec ne laissait aucune trace : la ligne restait (elle
        // n'est retirée qu'au succès), sans un mot. Un 409 — enregistrement du
        // document en cours sur l'autre appareil — rend en plus l'affichage périmé.
        // Suppression silencieuse (pages de démo) : l'appelant gère lui-même.
        onError: (err) => {
            if (isSessionConflict(err)) queryClient.invalidateQueries({ queryKey: ['session', token] });
            if (silent) return;
            let message = i18n.t('errors.deleteFailedMessage');
            if (isServerError(err)) message = i18n.t('errors.server');
            else if (isSessionConflict(err)) message = i18n.t('errors.sessionFinalizing');
            setLastError({ title: i18n.t('errors.deleteFailedTitle'), message });
        },
        onSuccess: () => {
            // Primary devices receive a `page-deleted` SSE event that
            // invalidates the session query — invalidating again here would
            // cancel that fetch and start a duplicate one. Secondary devices
            // have no SSE listener, so they still need the manual invalidate.
            if (useUploadStore.getState().isSecondary) {
                queryClient.invalidateQueries({ queryKey: ['session', token] });
            }
        },
    });
};

export default useDeletePage;
