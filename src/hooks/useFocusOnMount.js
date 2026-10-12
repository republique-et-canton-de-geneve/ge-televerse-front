import { useEffect } from 'react';

/**
 * Porte le focus sur un conteneur au montage.
 *
 * Cette application n'a pas de routeur : un changement de statut REMPLACE tout
 * l'arbre (l'écran d'envoi devient « session expirée », « document
 * enregistré »…). Le focus retombe alors sur <body> et le lecteur d'écran
 * n'annonce rien — l'utilisateur ignore que l'écran a changé sous lui. Poser
 * le focus sur le nouvel écran le fait lire, et remet le parcours clavier à
 * son début.
 *
 * Le conteneur doit porter tabIndex={-1} (focusable par script, hors de la
 * séquence de tabulation).
 *
 * @param {React.RefObject<HTMLElement>} ref conteneur de l'écran
 * @param {boolean} enabled false au tout premier rendu de l'application : voler
 *        le focus au chargement initial d'une page est un anti-patron.
 */
const useFocusOnMount = (ref, enabled = true) => {
    useEffect(() => {
        if (!enabled) return;
        ref.current?.focus({ preventScroll: true });
    }, [enabled]); // eslint-disable-line react-hooks/exhaustive-deps
};

export default useFocusOnMount;
