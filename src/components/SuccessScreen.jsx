import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { M3eHeading } from '@m3e/react/heading';
import useFocusOnMount from '../hooks/useFocusOnMount';
import useIsMobile from '../hooks/useIsMobile';
import Alert from './Alert';
import { announce } from './Announcer';

/**
 * Final "document saved" screen. Keeps the same page chrome as UploadPage
 * (GE header + H1 + intro) and replaces the upload card with a success alert.
 *
 * Écran terminal qui remplace toute la page : le focus s'y pose au montage
 * pour que le lecteur d'écran annonce la fin du parcours (cf. StatusView).
 *
 * Le résultat passe en plus par <Announcer /> : l'alerte ne peut pas porter
 * elle-même la région live, puisqu'elle naît avec l'écran ET avec son texte —
 * une région live insérée déjà remplie n'est pas annoncée. Seule la région
 * montée à la racine survit au changement d'écran.
 */
const SuccessScreen = ({ message }) => {
    const { t } = useTranslation();
    const ref = useRef(null);
    const isMobile = useIsMobile();
    useFocusOnMount(ref);
    useEffect(() => {
        announce(`${t('success.title')} ${message}`);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <main className="upload-page" ref={ref} tabIndex={-1}>
            <header className="upload-page__header">
                <M3eHeading variant="headline" size="large" level={1} className="upload-page__title">
                    {t('common.appName')}
                </M3eHeading>
                <p className="upload-page__intro">
                    {isMobile ? t('success.introShort') : t('success.intro')}
                </p>
            </header>

            <Alert kind="success" icon="check" title={t('success.title')}>
                <p>{message}</p>
            </Alert>
        </main>
    );
};

export default SuccessScreen;
