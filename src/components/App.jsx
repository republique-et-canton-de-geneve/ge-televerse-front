import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import UploadPage from './UploadPage';
import SessionCreator from './SessionCreator';
import OpenedSession from './OpenedSession';
import StatusView from './StatusView';
import Announcer from './Announcer';
import useUploadStore from '../store/uploadStore';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: { refetchOnWindowFocus: false },
    },
});

const getTokenFromUrl = () => {
    const match = window.location.pathname.match(/\/scan\/([^/]+)/);
    return match?.[1] || null;
};

// Le webcomponent <ge-televerse> crée la session puis ouvre ce popup avec le
// token en query (`?token=...`). Le téléphone, lui, arrive par le chemin
// `/scan/{token}` (cf. getTokenFromUrl).
const getQueryToken = () => new URLSearchParams(window.location.search).get('token');

// Origine de la page hôte, déclarée par le webcomponent dans l'URL du popup
// (`?origin=`). Elle sert de targetOrigin dès le PREMIER message de la poignée
// de main, de sorte que la SPA ne diffuse jamais en '*' (cf.
// useOpenerHandshake). Elle n'a pas à être de confiance — le navigateur impose
// la cible — mais elle doit être une origine BIEN FORMÉE, sans quoi postMessage
// lèverait et la poignée de main mourrait sans bruit : absente ou mal formée,
// on ne l'entame pas.
const getOpenerOrigin = (params) => {
    const raw = params.get('origin');
    if (!raw) return null;
    try {
        return new URL(raw).origin === raw ? raw : null;
    } catch {
        return null;
    }
};

const getCallbackParams = () => {
    const params = new URLSearchParams(window.location.search);
    const callbackId = params.get('callbackId');
    if (!callbackId) return null;
    return {
        callbackId,
        sizeProfile: params.get('sizeProfile') || 'M',
        openerOrigin: getOpenerOrigin(params),
    };
};

const isSecondaryDevice = () => {
    const params = new URLSearchParams(window.location.search);
    return params.has('join');
};

// Host webcomponent opts into single-file mode by appending `?multiple=false`
// to the URL it opens (and to the QR URL it generates for phone hand-off).
// Default is multi-select.
const getAllowMultipleFromUrl = () => {
    const params = new URLSearchParams(window.location.search);
    return params.get('multiple') !== 'false';
};

// Marquage « appareil secondaire », posé UNE fois à l'import, avant le premier
// rendu. Il vivait dans la branche Flow B de AppContent, donc DANS le rendu :
// écrire dans le magasin pendant qu'on rend est un effet de bord que React
// n'autorise pas — en rendu concurrent il peut être rejoué ou jeté. Le
// compilateur React le refuse d'ailleurs net et renonce alors à compiler tout
// AppContent.
//
// La condition est exactement celle qu'elle remplace : la branche Flow B est la
// seule atteignable avec `?join` (la première exige `!secondary`, la deuxième
// `!token`), donc « un jeton ET ?join ». Le drapeau ne dépend que de l'URL, qui
// ne change pas sous nos pieds : le calculer à l'import donne le même résultat,
// et il est posé avant que useSession ne le lise (`getState().isSecondary`).
if ((getTokenFromUrl() || getQueryToken()) && isSecondaryDevice()) {
    useUploadStore.getState().setSecondary();
}

const AppContent = () => {
    const { t } = useTranslation();
    const token = getTokenFromUrl() || getQueryToken();
    const callbackParams = getCallbackParams();
    const secondary = isSecondaryDevice();
    const allowMultiple = getAllowMultipleFromUrl();

    // Flow A (nouveau) : session déjà créée par le webcomponent, ouverte dans ce
    // popup avec token + callbackId. On câble la poignée de main opener + le
    // cleanup beforeunload autour du token (cf. OpenedSession). Le secondaire
    // (téléphone via QR) n'a jamais de callbackId : il passe en Flow B.
    if (token && callbackParams && !secondary) {
        return (
            <OpenedSession
                token={token}
                callbackId={callbackParams.callbackId}
                openerOrigin={callbackParams.openerOrigin}
                allowMultiple={allowMultiple}
            />
        );
    }

    // Flow A (legacy) : ancien webcomponent qui ouvre SANS token → la SPA crée
    // la session elle-même. Conservé pour la transition de déploiement ; le
    // profil sizeProfile transmis est désormais ignoré côté serveur (dérivé de
    // l'Origin), donc cette voie ne permet plus d'escalade. Un hôte de cette
    // génération ne déclare pas non plus `origin` : la poignée de main n'a pas
    // lieu et la notification de fin est omise (cf. useOpenerHandshake).
    if (!token && callbackParams) {
        return (
            <SessionCreator
                callbackId={callbackParams.callbackId}
                sizeProfile={callbackParams.sizeProfile}
                openerOrigin={callbackParams.openerOrigin}
                allowMultiple={allowMultiple}
            />
        );
    }

    // Flow B: /scan/{token} — existing session (téléphone secondaire ou lien direct)
    if (token) {
        return <UploadPage token={token} allowMultiple={allowMultiple} />;
    }

    // No matching route
    return (
        <StatusView
            icon="qr_code_scanner"
            title={t('status.notFound.title')}
            message={t('status.notFound.message')}
        />
    );
};

const App = () => {
    // Filet de sécurité global : empêche le navigateur d'ouvrir un fichier
    // déposé dans un nouvel onglet, sur TOUTES les pages — y compris les écrans
    // terminaux et « Fusion en cours » où FileCapture (donc useFileDrop) n'est
    // pas monté. Volontairement preventDefault seul, sans toucher au curseur
    // (dropEffect) : le retour visuel copier/interdit de la zone de dépôt reste
    // géré par useFileDrop, qui pose dropEffect sans être écrasé par ce filet.
    useEffect(() => {
        const prevent = (e) => {
            if (Array.from(e.dataTransfer?.types ?? []).includes('Files')) {
                e.preventDefault();
            }
        };
        window.addEventListener('dragover', prevent);
        window.addEventListener('drop', prevent);
        return () => {
            window.removeEventListener('dragover', prevent);
            window.removeEventListener('drop', prevent);
        };
    }, []);

    return (
        <QueryClientProvider client={queryClient}>
            {/* Hors de AppContent : la région live doit rester dans le DOM à
                travers les changements d'écran, sans quoi les lecteurs
                d'écran cessent de l'observer. */}
            <Announcer />
            <AppContent />
        </QueryClientProvider>
    );
};

export default App;
