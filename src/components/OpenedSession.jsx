import React, { useEffect } from 'react';
import useUploadStore from '../store/uploadStore';
import useOpenerHandshake from '../hooks/useOpenerHandshake';
import useBeforeUnloadCleanup from '../hooks/useBeforeUnloadCleanup';
import UploadPage from './UploadPage';

// Flow A (nouveau) : la session a déjà été créée par le webcomponent
// <ge-televerse> — lui seul appelle POST /sessions, depuis la page hôte, pour
// que l'Origin de confiance gouverne le profil de taille côté serveur. Le
// webcomponent ouvre ce popup avec `?token=...&callbackId=...&origin=...`.
//
// Ce composant ne CRÉE rien : il câble autour du token reçu ce que SessionCreator
// faisait pour la session qu'il créait — la poignée de main `opener` (pour
// notifier l'hôte du documentId à la finalisation) et le DELETE de libération
// sur fermeture d'onglet — puis rend la page d'upload. La SPA n'a plus aucune
// capacité de création de session : tout part du webcomponent.
const OpenedSession = ({ token, callbackId, openerOrigin, allowMultiple = true }) => {
    const setCallbackId = useUploadStore((s) => s.setCallbackId);
    useOpenerHandshake(callbackId, openerOrigin);
    useBeforeUnloadCleanup(token);

    useEffect(() => {
        setCallbackId(callbackId);
    }, [callbackId, setCallbackId]);

    return <UploadPage token={token} allowMultiple={allowMultiple} />;
};

export default OpenedSession;
