import { useCallback } from 'react';

// Envoi d'un lot de fichiers, partagé par la sélection via boutons
// (FileCapture) et le dépôt par glisser-déposer (overlay de UploadPage), pour
// que les deux chemins se comportent à l'identique :
//   - limite le lot au mode single (multiple=false) ;
//   - tronque au quota de pages restant (remainingSlots) — tout envoyer
//     laisserait le serveur rejeter le surplus en 429, une bannière écrasant
//     l'autre sans que l'utilisateur sache quels fichiers ont été ignorés ;
//   - signale après coup les fichiers écartés (onBatchTrimmed), car chaque
//     début d'envoi efface la bannière (addPage) : la poser avant la perdrait.
// Pas de pré-filtrage d'extension : useUpload valide et pose une bannière pour
// les rejets, plus aimable qu'un dépôt silencieusement ignoré.
const useUploadBatch = ({
    onFileSelected,
    multiple = true,
    remainingSlots = Infinity,
    onBatchTrimmed,
}) =>
    useCallback(async (incoming) => {
        const files = multiple ? incoming : incoming.slice(0, 1);
        let batch = files;
        if (Number.isFinite(remainingSlots) && files.length > remainingSlots) {
            batch = files.slice(0, remainingSlots);
        }
        await Promise.all(
            batch.map(async (file) => {
                try {
                    await onFileSelected(file);
                } catch {
                    // useUpload pose déjà la bannière d'échec en haut de carte ;
                    // un fichier en échec ne doit pas interrompre le reste du lot.
                }
            }),
        );
        if (batch.length < files.length) {
            onBatchTrimmed?.(files.slice(batch.length));
        }
    }, [onFileSelected, multiple, remainingSlots, onBatchTrimmed]);

export default useUploadBatch;
