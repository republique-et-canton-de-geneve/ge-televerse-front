import React, { useRef } from 'react';
import { M3eCard } from '@m3e/react/card';
import { M3eHeading } from '@m3e/react/heading';
import { M3eCircularProgressIndicator } from '@m3e/react/progress-indicator';
import Icon from './Icon';
import useFocusOnMount from '../hooks/useFocusOnMount';

/**
 * Reusable status view for loading, expired, and error states.
 *
 * Ces écrans REMPLACENT toute la page (pas de routeur, cf. UploadPage) : le
 * titre est donc le titre de niveau 1 du document, et le focus vient s'y poser
 * au montage pour que le changement d'écran soit énoncé — sauf en chargement,
 * premier rendu de l'application, où voler le focus serait intrusif.
 *
 * @param {string} icon - Material Symbols icon name
 * @param {string} title
 * @param {string|string[]} message - body text; an array renders one paragraph per item
 * @param {boolean} loading - shows a loading indicator instead of the icon
 * @param {React.ReactNode} children - optional content rendered below the
 *        message (e.g. a recovery action button)
 */
const StatusView = ({ icon, title, message, loading = false, children }) => {
    const ref = useRef(null);
    useFocusOnMount(ref, !loading);

    return (
        <main className="status-view" ref={ref} tabIndex={-1}>
            <M3eCard variant="filled" className="status-view__card">
                <div className="status-view__content">
                    {loading
                        // Le titre affiché juste en dessous dit déjà « Chargement… » :
                        // laisser l'indicateur exposer sa barre de progression le
                        // ferait annoncer deux fois.
                        ? <M3eCircularProgressIndicator indeterminate aria-hidden="true" />
                        : <Icon name={icon} className="status-view__icon" />
                    }
                    {title && (
                        <M3eHeading variant="title" size="large" level={1} className="status-view__title">
                            {title}
                        </M3eHeading>
                    )}
                    {message && (Array.isArray(message)
                        ? message.map((paragraph, i) => (
                            <p key={i} className="status-view__message">{paragraph}</p>
                        ))
                        : <p className="status-view__message">{message}</p>)}
                    {children}
                </div>
            </M3eCard>
        </main>
    );
};

export default StatusView;
