import React from 'react';
import { useTranslation } from 'react-i18next';
import { M3eIconButton } from '@m3e/react/icon-button';
import Icon from './Icon';

// Stacked-card alert used by SuccessScreen and the in-card error banner
// (Figma "MD_Stacked card_info" / "Alert state=Error|Success").
const Alert = ({ kind = 'success', icon, title, children, onClose }) => {
    const { t } = useTranslation();
    // Une erreur interrompt l'utilisateur (role="alert", donc assertif) : elle
    // survient en réaction à une action qui vient d'échouer et la suite du
    // parcours en dépend — et un role="alert" inséré dans le DOM est énoncé.
    // Pas de role="status" sur un succès : une région live polie insérée déjà
    // remplie reste muette. L'appelant l'annonce via <Announcer />
    // (cf. SuccessScreen).
    const isError = kind === 'error';
    return (
    <div className={`alert alert--${kind}`} role={isError ? 'alert' : undefined}>
        <div className="alert__header">
            <Icon name={icon} className="alert__icon" />
            <p className="alert__title">{title}</p>
            {onClose && (
                <M3eIconButton
                    className="alert__close"
                    onClick={onClose}
                    aria-label={t('common.close')}
                >
                    <Icon name="close" />
                </M3eIconButton>
            )}
        </div>
        <div className="alert__content">{children}</div>
    </div>
    );
};

export default Alert;
