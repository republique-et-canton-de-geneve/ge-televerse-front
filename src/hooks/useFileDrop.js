import { useEffect, useRef, useState } from 'react';

// Câble le glisser-déposer natif de fichiers au niveau de la fenêtre, pour la
// variante bureau de FileCapture. Trois rôles :
//   1. Neutraliser l'action par défaut du navigateur (ouvrir le fichier déposé
//      dans un nouvel onglet) : il faut preventDefault sur `dragover` ET `drop`,
//      partout, sinon un fichier lâché hors de la zone navigue.
//   2. Guider l'utilisateur : la zone réelle s'illumine dès qu'un fichier
//      survole l'app (isDragging), et le curseur passe en « copier » au-dessus
//      d'elle, « interdit » ailleurs (via dataTransfer.dropEffect).
//   3. Ne téléverser que si le fichier est lâché à l'intérieur de la zone.
//
// `enabled` permet d'appeler le hook inconditionnellement (règles des hooks)
// tout en n'attachant les écouteurs que sur bureau. `disabled` reflète l'état
// envoi-en-cours / quota atteint : on continue de bloquer la navigation et le
// dépôt (curseur interdit), mais on remonte `isRefused` pour que l'appelant
// affiche un overlay explicatif au lieu de laisser l'utilisateur devant un
// simple curseur « interdit » sans explication.
//
// Renvoie { isDragging, isRefused } — états mutuellement exclusifs :
//   - isDragging : un fichier survole l'app et le dépôt est permis (overlay bleu) ;
//   - isRefused  : un fichier survole l'app mais le dépôt est bloqué (overlay
//                  « interdit »). `disabled` est réévalué à chaque dragover, si
//                  bien qu'une fin d'envoi ou un quota franchi en cours de
//                  survol fait basculer l'overlay en direct.
const useFileDrop = ({ zoneRef, onFiles, enabled = true, disabled = false }) => {
    // 'idle' | 'active' (dépôt permis) | 'refused' (dépôt bloqué).
    const [state, setState] = useState('idle');
    // Compteur enter/leave : dragenter/dragleave se déclenchent sur chaque
    // enfant survolé ; sans compteur, la surbrillance clignote au passage des
    // bords internes. Les +1/-1 s'équilibrent tant qu'on reste dans la fenêtre.
    const counter = useRef(0);
    // Évite de re-câbler les écouteurs à chaque rendu : ils lisent toujours la
    // dernière valeur de onFiles/disabled via cette ref.
    const latest = useRef({ onFiles, disabled });
    latest.current = { onFiles, disabled };

    useEffect(() => {
        if (!enabled) return undefined;

        const hasFiles = (e) =>
            Array.from(e.dataTransfer?.types ?? []).includes('Files');
        // Le retargeting d'évènement ramène e.target sur l'hôte du shadow DOM
        // (les <m3e-icon> enfants), qui reste contenu dans la zone en light DOM.
        const overZone = (e) => !!zoneRef.current?.contains(e.target);

        const onDragEnter = (e) => {
            if (!hasFiles(e)) return; // ignore les drags internes (réordonnancement dnd-kit)
            counter.current += 1;
            setState(latest.current.disabled ? 'refused' : 'active');
        };
        const onDragOver = (e) => {
            if (!hasFiles(e)) return;
            e.preventDefault(); // fait de la fenêtre une cible : pas de navigation au drop
            const isDisabled = latest.current.disabled;
            const allowed = !isDisabled && overZone(e);
            if (e.dataTransfer) e.dataTransfer.dropEffect = allowed ? 'copy' : 'none';
            // Suit un basculement de `disabled` en cours de survol (fin d'un
            // envoi, quota franchi par l'autre appareil…) — React ignore un
            // setState de valeur identique, donc pas de re-rendu superflu.
            if (counter.current > 0) setState(isDisabled ? 'refused' : 'active');
        };
        const onDragLeave = (e) => {
            if (!hasFiles(e)) return;
            counter.current = Math.max(0, counter.current - 1);
            if (counter.current === 0) setState('idle');
        };
        const onDrop = (e) => {
            if (!hasFiles(e)) return;
            e.preventDefault(); // toujours : un fichier lâché ne doit jamais naviguer
            counter.current = 0;
            setState('idle');
            const { onFiles: cb, disabled: isDisabled } = latest.current;
            if (isDisabled || !overZone(e)) return; // hors zone → ignoré en silence
            const files = Array.from(e.dataTransfer?.files ?? []);
            if (files.length) cb?.(files);
        };

        window.addEventListener('dragenter', onDragEnter);
        window.addEventListener('dragover', onDragOver);
        window.addEventListener('dragleave', onDragLeave);
        window.addEventListener('drop', onDrop);
        return () => {
            window.removeEventListener('dragenter', onDragEnter);
            window.removeEventListener('dragover', onDragOver);
            window.removeEventListener('dragleave', onDragLeave);
            window.removeEventListener('drop', onDrop);
        };
    }, [enabled, zoneRef]);

    return { isDragging: state === 'active', isRefused: state === 'refused' };
};

export default useFileDrop;
