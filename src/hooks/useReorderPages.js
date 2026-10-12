import { useMutation, useQueryClient } from '@tanstack/react-query';
import { reorderPages as reorderPagesApi, isServerError, editFailureKind } from '../api/endpoints';
import useUploadStore from '../store/uploadStore';
import i18n from '../i18n';

const useReorderPages = (token) => {
    const { reorderPages, setLastError } = useUploadStore();
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async ({ fromIndex, toIndex }) => {
            // Un rafraîchissement de session peut être en vol, parti AVANT ce
            // déplacement (l'événement SSE `pages-reordered` du déplacement
            // précédent invalide la requête) : sa réponse porte l'ordre
            // d'AVANT et écraserait la mise à jour optimiste qui suit. Presque
            // invisible à la souris — un glisser vaut un déplacement — mais
            // criant au clavier, où chaque flèche en déclenche un et où les
            // déplacements s'enchaînent en rafale.
            await queryClient.cancelQueries({ queryKey: ['session', token] });

            // Mutation optimiste : réordonner localement d'abord
            reorderPages(fromIndex, toIndex);

            // Calculer le nouvel ordre des pageIds après le déplacement local
            const updatedPages = useUploadStore.getState().pages;
            const pageIds = updatedPages
                .filter((p) => p.pageId)
                .map((p) => p.pageId);

            return reorderPagesApi(token, pageIds);
        },
        // Le PDF final est assemblé dans l'ordre CONNU DU SERVEUR : si le PUT
        // échoue, l'ordre affiché doit revenir à l'ordre serveur, sinon le
        // document livré ne correspond pas à ce que l'utilisateur a vérifié
        // à l'écran. Déplacement inverse (plutôt qu'un snapshot) pour ne pas
        // écraser un upload terminé entre-temps, puis refetch pour réaligner
        // sur la vérité serveur.
        onError: (err, { fromIndex, toIndex }) => {
            reorderPages(toIndex, fromIndex);
            // 409 PAGES_CHANGED (page ajoutée ou retirée entre-temps) : le message
            // par défaut convient, le refetch ci-dessous montre la liste à jour.
            let message = i18n.t('errors.reorderFailedMessage');
            if (isServerError(err)) message = i18n.t('errors.server');
            else if (editFailureKind(err) === 'finalizing') message = i18n.t('errors.sessionFinalizing');
            setLastError({ title: i18n.t('errors.reorderFailedTitle'), message });
            queryClient.invalidateQueries({ queryKey: ['session', token] });
        },
        onSuccess: () => {
            // Primary devices receive a `pages-reordered` SSE event that
            // invalidates the session query — invalidating again here would
            // cancel that fetch and start a duplicate one. Secondary devices
            // have no SSE listener, so they still need the manual invalidate.
            if (useUploadStore.getState().isSecondary) {
                queryClient.invalidateQueries({ queryKey: ['session', token] });
            }
        },
    });
};

export default useReorderPages;
