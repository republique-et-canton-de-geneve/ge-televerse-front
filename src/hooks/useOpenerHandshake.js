import { useEffect } from 'react';
import useUploadStore from '../store/uploadStore';

// Re-post 'televerse-ready' until the opener answers: the one-shot version
// could lose the handshake if the host attached its listener late, and a
// lost handshake means finalize silently skips its postMessage (see below).
const READY_RETRY_MS = 500;
const READY_MAX_ATTEMPTS = 20; // ~10 s, puis on abandonne

// Poignée de main d'ouverture. L'hôte déclare son origine dans l'URL du popup
// (`?origin=`, cf. getOpenerOrigin dans App.jsx), ce qui donne à la SPA une
// targetOrigin stricte DÈS son premier message : le flux ne contient aucun
// postMessage(…, '*'). Déroulé :
//   1. La SPA installe un écouteur 'message'.
//   2. Elle poste 'televerse-ready' vers l'origine déclarée (le message ne
//      porte que le callbackId, déjà présent dans son URL), renvoyé toutes les
//      READY_RETRY_MS jusqu'à réponse ou épuisement de READY_MAX_ATTEMPTS.
//   3. L'hôte répond 'televerse-init' vers notre fenêtre.
//   4. On vérifie que la source est bien window.opener, que event.origin est
//      l'origine déclarée et que le callbackId correspond, puis on verrouille
//      l'origine dans le store — c'est elle qui servira de targetOrigin au
//      message de fin, qui porte le documentId.
//
// L'origine déclarée n'a pas besoin d'être « de confiance » : targetOrigin est
// imposée par le navigateur, qui ne livre rien si l'origine réelle de la
// fenêtre ne correspond pas. Une valeur falsifiée empêche la notification, elle
// ne la détourne pas. Sans `origin` dans l'URL (hôte qui n'implémente pas le
// contrat), aucune annonce n'est émise : openerOrigin reste null et finalize
// OMET le message de fin plutôt que de diffuser le documentId en '*'.
//
// Premier init gagnant : openerOrigin est la cible du televerse-complete
// (qui porte le documentId). L'hôte légitime répond dans les millisecondes
// suivant le chargement ; un document hostile arrivé plus tard dans l'onglet
// ouvreur (navigation de l'onglet hôte) ne doit pas pouvoir devenir la cible.
// La poignée de main est donc à usage unique : premier televerse-init valide
// retenu, puis écouteur retiré et renvois stoppés — openerOrigin ne change
// plus jusqu'à la fin de la session.
const useOpenerHandshake = (callbackId, declaredOrigin) => {
    const setOpenerOrigin = useUploadStore((s) => s.setOpenerOrigin);

    useEffect(() => {
        if (!callbackId || !declaredOrigin || !window.opener) return undefined;

        let interval;

        const postReady = () => {
            try {
                window.opener.postMessage({ type: 'televerse-ready', callbackId }, declaredOrigin);
            } catch {
                // Opener fermé entre-temps : plus personne à notifier.
                clearInterval(interval);
            }
        };

        const handleMessage = (event) => {
            if (event.source !== window.opener) return;
            // L'init doit venir de l'origine déclarée : seule elle a pu recevoir
            // notre 'televerse-ready', et c'est elle qui recevra le documentId.
            if (event.origin !== declaredOrigin) return;
            if (event.data?.type !== 'televerse-init') return;
            if (event.data?.callbackId !== callbackId) return;
            // Garde défensive (l'écouteur est retiré après le premier init,
            // mais un remontage de l'effet le ré-attacherait) : ne jamais
            // écraser une origin déjà verrouillée.
            if (useUploadStore.getState().openerOrigin) return;
            setOpenerOrigin(declaredOrigin);
            clearInterval(interval);
            window.removeEventListener('message', handleMessage);
        };

        window.addEventListener('message', handleMessage);
        postReady();
        let attempts = 1;
        interval = setInterval(() => {
            attempts += 1;
            if (attempts > READY_MAX_ATTEMPTS) {
                clearInterval(interval);
                return;
            }
            postReady();
        }, READY_RETRY_MS);

        return () => {
            clearInterval(interval);
            window.removeEventListener('message', handleMessage);
        };
    }, [callbackId, declaredOrigin, setOpenerOrigin]);
};

export default useOpenerHandshake;
