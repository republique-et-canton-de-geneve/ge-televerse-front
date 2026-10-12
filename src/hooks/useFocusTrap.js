import { useEffect, useRef } from 'react';

// Les composants M3E ne sont pas des <button> natifs : le mixin `Focusable`
// pose un `tabindex="0"` sur l'hôte (et le retire quand l'élément est
// désactivé). Un sélecteur générique sur [tabindex] les capte donc aussi bien
// que les éléments natifs.
const FOCUSABLE_SELECTOR = [
    'a[href]',
    'button:not([disabled])',
    'input:not([disabled])',
    'select:not([disabled])',
    'textarea:not([disabled])',
    '[tabindex]:not([tabindex="-1"])',
].join(',');

// display:none / visibility:hidden (p.ex. .page-editor__fab-undo--hidden) et
// les sous-arbres inertes ne doivent pas recevoir le focus.
const isVisible = (el) => el.getClientRects().length > 0 && !el.closest('[inert]');

const focusablesOf = (root) =>
    Array.from(root.querySelectorAll(FOCUSABLE_SELECTOR)).filter(isVisible);

/**
 * Confine le focus clavier dans une boîte de dialogue tant qu'elle est montée.
 *
 * Trois responsabilités, qu'un `role="dialog" aria-modal="true"` seul ne couvre
 * pas : entrer le focus dans le dialogue à l'ouverture (sinon il reste sur un
 * déclencheur devenu inerte, ou retombe sur <body> et le lecteur d'écran ne
 * lit rien), boucler la tabulation sur son contenu, et RENDRE le focus au
 * déclencheur à la fermeture.
 *
 * Le focus initial va sur le conteneur lui-même (qui doit porter tabIndex={-1})
 * plutôt que sur son premier bouton : les lecteurs d'écran énoncent alors le
 * titre du dialogue avant ses actions. Les composants M3E ne sont de toute
 * façon pas encore « upgradés » (donc pas encore focusables) au moment de cet
 * effet.
 *
 * Imbrication : le dialogue d'aide de PageEditor vit DANS l'overlay PageEditor,
 * les deux pièges reçoivent donc le même keydown par bouillonnement. Le garde
 * `defaultPrevented` laisse le plus interne — atteint en premier — trancher.
 *
 * @param {React.RefObject<HTMLElement>} ref conteneur du dialogue
 * @param {{ onEscape?: () => void }} options
 */
const useFocusTrap = (ref, { onEscape } = {}) => {
    // Les appelants passent une flèche en ligne : la garder dans une ref évite
    // que l'effet ne se rejoue à chaque rendu — il ramènerait alors le focus
    // sur le conteneur en plein parcours clavier.
    const onEscapeRef = useRef(onEscape);
    onEscapeRef.current = onEscape;

    useEffect(() => {
        const container = ref.current;
        if (!container) return undefined;

        const previouslyFocused = document.activeElement;
        container.focus({ preventScroll: true });

        const onKeyDown = (e) => {
            if (e.defaultPrevented) return;
            if (e.key === 'Escape' && onEscapeRef.current) {
                e.preventDefault();
                onEscapeRef.current();
                return;
            }
            if (e.key !== 'Tab') return;
            const focusables = focusablesOf(container);
            if (focusables.length === 0) {
                e.preventDefault();
                container.focus({ preventScroll: true });
                return;
            }
            const first = focusables[0];
            const last = focusables[focusables.length - 1];
            // document.activeElement s'arrête à l'hôte du shadow DOM, ce qui est
            // exactement la granularité voulue : les composants M3E délèguent
            // leur focus interne mais restent l'élément « focusé » vu d'ici.
            const active = document.activeElement;
            if (e.shiftKey && (active === first || !container.contains(active))) {
                e.preventDefault();
                last.focus();
            } else if (!e.shiftKey && active === last) {
                e.preventDefault();
                first.focus();
            }
        };

        container.addEventListener('keydown', onKeyDown);
        return () => {
            container.removeEventListener('keydown', onKeyDown);
            // Rendu au tour suivant, et non immédiatement : la levée de
            // l'`inert` posé sur le reste de la page passe par un second rendu
            // (cf. SessionExpiryDialog → UploadPage). Redonner le focus avant
            // celui-ci viserait encore un sous-arbre inerte, où focus() ne fait
            // rien — l'utilisateur repartirait de <body>.
            requestAnimationFrame(() => {
                // Le déclencheur peut avoir disparu avec la fermeture (ligne
                // supprimée, écran terminal) — ne rien forcer dans ce cas.
                if (previouslyFocused instanceof HTMLElement && previouslyFocused.isConnected) {
                    previouslyFocused.focus({ preventScroll: true });
                }
            });
        };
    }, [ref]);
};

export default useFocusTrap;
