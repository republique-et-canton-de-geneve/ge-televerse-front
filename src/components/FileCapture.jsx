import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import QRCode from 'qrcode/lib/browser.js';
import { M3eButton } from '@m3e/react/button';
import { M3eDivider } from '@m3e/react/divider';
import Icon from './Icon';
import useUploadBatch from '../hooks/useUploadBatch';

// Fallback used while the /upload/formats query is still in flight, so the
// file picker isn't blank on a cold load. Matches the back's DEFAULT_FORMATS.
const DEFAULT_FORMATS = ['pdf', 'jpg', 'jpeg', 'png', 'tiff'];

const QR_OPTIONS = {
    width: 100,
    margin: 2,
    color: { dark: '#000000', light: '#ffffff' },
    errorCorrectionLevel: 'M',
};

// Le QR code se scanne, il ne se clique pas : un simple dessin, ni cliquable
// ni focusable. Illisible pour une technologie d'assistance, il est masqué —
// c'est la phrase `sr-only` voisine qui en dit la fonction.
//
// `aria-hidden` suffirait à l'écarter de l'arbre d'accessibilité ; `role="none"`
// l'accompagne pour que le décor soit dit sur le nœud lui-même plutôt que
// déduit d'un mapping implicite — Chromium expose un `<canvas>` nu en rôle
// `Canvas`, ce qu'un audit lit volontiers comme une image sans alternative.
const QrCanvas = ({ url }) => {
    const canvasRef = useRef(null);
    useEffect(() => {
        if (canvasRef.current && url) {
            QRCode.toCanvas(canvasRef.current, url, QR_OPTIONS);
        }
    }, [url]);
    return (
        <canvas
            ref={canvasRef}
            className="file-capture__qr-canvas"
            role="none"
            aria-hidden="true"
        />
    );
};

// Les deux traits n'encadrent le « ou » que par esthétique : exposés en
// séparateurs, ils feraient annoncer deux fois une frontière déjà portée par
// le mot lui-même.
const OrDivider = () => {
    const { t } = useTranslation();
    return (
        <div className="file-capture__or">
            <M3eDivider className="file-capture__or-line" role="none" />
            <span className="file-capture__or-label">{t('common.or')}</span>
            <M3eDivider className="file-capture__or-line" role="none" />
        </div>
    );
};

const FileCapture = ({
    onFileSelected,
    disabled,
    hasCamera = true,
    qrUrl = null,
    multiple = true,
    allowedFormats,
    remainingSlots = Infinity,
    onBatchTrimmed,
}) => {
    const { t } = useTranslation();
    const cameraRef = useRef(null);
    const fileRef = useRef(null);

    const formats = allowedFormats?.length ? allowedFormats : DEFAULT_FORMATS;
    const acceptAttr = formats.map((ext) => `.${ext}`).join(',');

    // Le second champ sert les deux mises en page ; son étiquette suit donc le
    // bouton qui l'ouvre.
    const fileInputLabel = hasCamera
        ? t('fileCapture.chooseFile')
        : t('fileCapture.selectFiles');

    // Sélection via boutons. Le glisser-déposer (et son overlay plein-carte,
    // le curseur interdit hors zone, le blocage de la navigation) est géré au
    // niveau de UploadPage, qui partage cette même logique d'envoi par lot.
    const uploadBatch = useUploadBatch({
        onFileSelected,
        multiple,
        remainingSlots,
        onBatchTrimmed,
    });

    const handleChange = async (e) => {
        const selected = Array.from(e.target.files ?? []);
        e.target.value = '';
        await uploadBatch(selected);
    };

    // Les deux champs restent `hidden` : c'est le bouton voisin qui les
    // déclenche, et un champ masqué ne figure ni dans l'ordre de tabulation ni
    // dans l'arbre d'accessibilité. Ils portent malgré tout le libellé de ce
    // bouton — un champ de formulaire sans étiquette reste un défaut de
    // balisage, relevé quel que soit l'état masqué, et le nom est déjà le bon
    // si le champ vient à être révélé.
    const hiddenInputs = (
        <>
            <input
                ref={cameraRef}
                type="file"
                accept="image/*"
                capture="environment"
                onChange={handleChange}
                aria-label={t('fileCapture.takePhoto')}
                hidden
            />
            <input
                ref={fileRef}
                type="file"
                accept={acceptAttr}
                multiple={multiple}
                onChange={handleChange}
                aria-label={fileInputLabel}
                hidden
            />
        </>
    );

    if (hasCamera) {
        return (
            <div className="file-capture file-capture--compact">
                {hiddenInputs}
                <M3eButton
                    variant="filled"
                    disabled={disabled}
                    onClick={() => cameraRef.current?.click()}
                >
                    <Icon slot="icon" name="photo_camera" />
                    {t('fileCapture.takePhoto')}
                </M3eButton>
                <M3eButton
                    variant="tonal"
                    disabled={disabled}
                    onClick={() => fileRef.current?.click()}
                >
                    <Icon slot="icon" name="attach_file" />
                    {t('fileCapture.chooseFile')}
                </M3eButton>
            </div>
        );
    }

    return (
        <div className="file-capture file-capture--desktop">
            {hiddenInputs}

            <div className="file-capture__drop">
                <Icon name="file_upload" className="file-capture__drop-icon" />
                <p className="file-capture__drop-label">
                    {t('fileCapture.dragDrop')}
                </p>
            </div>

            <OrDivider />

            <M3eButton
                variant="filled"
                disabled={disabled}
                onClick={() => fileRef.current?.click()}
            >
                <Icon slot="icon" name="file_upload" />
                {t('fileCapture.selectFiles')}
            </M3eButton>

            {qrUrl && (
                <>
                    <OrDivider />
                    <div className="file-capture__phone">
                        <div className="file-capture__phone-heading">
                            <Icon name="smartphone" />
                            <span>{t('fileCapture.importOrPhoto')}</span>
                        </div>
                        {/* À quoi sert ce carré noir et blanc : sans cette
                            phrase, rien n'explique le QR code à qui ne le
                            voit pas. */}
                        <p className="sr-only">{t('a11y.qrHint')}</p>
                        <QrCanvas url={qrUrl} />
                    </div>
                </>
            )}
        </div>
    );
};

export default FileCapture;
