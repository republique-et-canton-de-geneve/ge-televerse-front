import { useEffect, useRef, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import useUploadStore from '../store/uploadStore';
import useUpload from '../hooks/useUpload';
import useDeletePage from '../hooks/useDeletePage';
import { getSession } from '../api/endpoints';
import { announce } from './Announcer';
import demoPdfSource from '../assets/onboarding/demo-document.pdf';
import expiryImageSource from '../assets/onboarding/session-expiry.png';

const DEMO_FILE_PATH = demoPdfSource;
const DEMO_FILE_NAME = 'Exemple-Demo.pdf';
const EXPIRY_IMAGE_PATH = expiryImageSource;
const SHEPHERD_CDN_URL = 'https://static.app.ge.ch/webcomponents/ge-shepherd/1.latest/ge-shepherd.js';

const USE_LOCAL_VENDOR = true;

let shepherdModulePromise = null;

const loadShepherdModule = async () => {
    if (shepherdModulePromise) return shepherdModulePromise;

    shepherdModulePromise = (async () => {
        if (USE_LOCAL_VENDOR) {
            try {
                return await import('../vendor/ge-shepherd.js');
            } catch (err) {
                console.warn('[Onboarding] Échec import local, fallback CDN :', err);
                return await import(/* webpackIgnore: true */ SHEPHERD_CDN_URL);
            }
        }

        try {
            return await import(/* webpackIgnore: true */ SHEPHERD_CDN_URL);
        } catch (err) {
            console.warn('[Onboarding] Échec CDN, fallback local :', err);
            return await import('../vendor/ge-shepherd.js');
        }
    })();

    return shepherdModulePromise;
};

const waitForElement = (selector, timeoutMs = 8000) => {
    return new Promise((resolve) => {
        const start = Date.now();
        const check = () => {
            const el = typeof selector === 'function' ? selector() : document.querySelector(selector);
            if (el) return resolve(el);
            if (Date.now() - start >= timeoutMs) return resolve(null);
            requestAnimationFrame(check);
        };
        check();
    });
};

const waitForDemoReady = (timeoutMs = 8000) => {
    return new Promise((resolve) => {
        const start = Date.now();
        const check = () => {
            const hasPagesInStore = useUploadStore.getState().pages.length > 0;
            const domItem = document.querySelector('.page-item') || document.querySelector('.upload-page__grid-list');
            if (hasPagesInStore && domItem) return resolve(true);
            if (Date.now() - start >= timeoutMs) return resolve(false);
            requestAnimationFrame(check);
        };
        check();
    });
};

const getFirstDragHandle = () => {
    return (
        document.getElementById('page-item-drag-page-001') ||
        document.querySelector('[id^="page-item-drag-"]') ||
        document.querySelector('.page-item [id*="drag"]') ||
        document.querySelector('.page-item [data-action="drag"]') ||
        document.querySelector('.page-item .page-item__drag') ||
        document.querySelector('.page-item .drag-handle') ||
        document.querySelector('.page-item')
    );
};

const Onboarding = ({ 
    enabled = true, 
    autoStart = false, 
    token: propToken, 
    delayMs = 600,
    onComplete,
    onCancel,
}) => {
    const { t, i18n } = useTranslation();
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 600;
    const tourRef = useRef(null);
    const hasStartedRef = useRef(false);
    // Pages téléversées PAR la visite, et elles seules : c'est la liste que
    // cleanupDemoPages supprime. Jamais celles de l'utilisateur.
    const demoPageIdsRef = useRef([]);
    const unmountedRef = useRef(false);

    const storeToken = useUploadStore((s) => s.token || s.session?.token);
    const effectiveToken = useMemo(() => {
        if (propToken) return propToken;
        if (storeToken) return storeToken;
        return new URLSearchParams(window.location.search).get('token') || '';
    }, [propToken, storeToken]);

    const upload = useUpload(effectiveToken);
    const deletePage = useDeletePage(effectiveToken, { silent: true });

    const uploadRef = useRef(upload);
    uploadRef.current = upload;
    const deletePageRef = useRef(deletePage);
    deletePageRef.current = deletePage;

    const notifyHost = useCallback((eventType) => {
        if (window.opener) {
            const originParam = new URLSearchParams(window.location.search).get('origin');
            const targetOrigin = originParam ? new URL(originParam).origin : '*';
            const callbackId = new URLSearchParams(window.location.search).get('callbackId');

            window.opener.postMessage({ type: eventType, callbackId }, targetOrigin);
        }
    }, []);

    const closeEditor = useCallback(async () => {
        const helpCloseBtn = document.querySelector('.page-editor__help m3e-icon-button')
            || document.querySelector('.page-editor__help [aria-label*="Fermer"]')
            || document.querySelector('.page-editor__help-scrim');

        if (helpCloseBtn) {
            helpCloseBtn.click();
            await new Promise((r) => setTimeout(r, 150));
        }

        if (document.querySelector('.page-editor')) {
            const backBtn = document.getElementById('page-editor-close')
                || document.querySelector('.page-editor__back')
                || document.querySelector('.page-editor m3e-button');

            if (backBtn) backBtn.click();
            await waitForElement('.upload-page__card', 4000);
        }
    }, []);

    const openEditor = useCallback(async () => {
        const helpCloseBtn = document.querySelector('.page-editor__help m3e-icon-button');
        if (helpCloseBtn) {
            helpCloseBtn.click();
            await new Promise((r) => setTimeout(r, 150));
        }

        if (document.querySelector('.page-editor')) return;

        const editBtn = document.querySelector('[id^="page-item-edit-"]')
            || document.querySelector('[id*="edit"]')
            || document.querySelector('.page-item [data-action="edit"]')
            || document.querySelector('.page-item m3e-icon-button');

        if (editBtn) editBtn.click();
        await waitForElement('.page-editor', 6000);
    }, []);

    const simulateDragAndDrop = useCallback(async () => {
        const items = document.querySelectorAll('.page-item');
        if (items.length < 2) return;

        const firstItem = items[0];
        const secondItem = items[1];

        const firstRect = firstItem.getBoundingClientRect();
        const secondRect = secondItem.getBoundingClientRect();
        const deltaX = secondRect.left - firstRect.left;
        const deltaY = secondRect.top - firstRect.top;

        firstItem.style.position = 'relative';
        firstItem.style.zIndex = '1000';
        firstItem.style.transition = 'transform 0.4s cubic-bezier(0.2, 0, 0, 1), box-shadow 0.25s ease';
        firstItem.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.28)';
        firstItem.style.transform = 'scale(1.03) rotate(1.5deg)';

        await new Promise((r) => setTimeout(r, 200));

        firstItem.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(1.03) rotate(-1deg)`;
        secondItem.style.transition = 'transform 0.4s cubic-bezier(0.2, 0, 0, 1)';
        secondItem.style.transform = `translate(${-deltaX}px, ${-deltaY}px)`;

        await new Promise((r) => setTimeout(r, 800));

        firstItem.style.transform = 'scale(1)';
        firstItem.style.boxShadow = '';
        secondItem.style.transform = '';

        await new Promise((r) => setTimeout(r, 400));

        firstItem.style.position = '';
        firstItem.style.zIndex = '';
        firstItem.style.transition = '';
        firstItem.style.transform = '';
        secondItem.style.transition = '';
        secondItem.style.transform = '';
    }, []);

    const cleanupDemoPages = useCallback(async () => {
        const idsToDelete = demoPageIdsRef.current;
        demoPageIdsRef.current = [];
        // Visite détruite au démontage, donc sur un écran terminal : les pages
        // de démo partent avec la session (cf. l'effet de démontage plus bas).
        if (unmountedRef.current) return;

        await closeEditor();
        if (idsToDelete.length === 0) return;

        const results = await Promise.allSettled(
            idsToDelete.map((pageId) => deletePageRef.current.mutateAsync(pageId)),
        );
        results.forEach((result, i) => {
            if (result.status === 'rejected') {
                console.warn('[Onboarding] Échec suppression page démo :', idsToDelete[i], result.reason);
            }
        });
        // Une seule annonce pour le document de démo, en miroir de celle de
        // son ajout — et non une par page du PDF (cf. useDeletePage silent).
        if (results.some((result) => result.status === 'fulfilled')) {
            announce(t('a11y.pageDeleted', { name: DEMO_FILE_NAME }));
        }
    }, [closeEditor, t]);

    const safelyDestroyTour = useCallback(() => {
        const tour = tourRef.current;
        if (!tour) return;

        tourRef.current = null;

        try {
            if (typeof tour.isActive === 'function' && tour.isActive()) {
                tour.cancel();
            } else if (typeof tour.destroy === 'function') {
                tour.destroy();
            }
        } catch (err) {
            console.warn('[Onboarding] Destruction silencieuse ignorée :', err);
        }
    }, []);

    const uploadDemoFile = useCallback(async () => {
        if (!effectiveToken) {
            console.error('[Onboarding] Impossible de téléverser le document démo : aucun token disponible');
            return;
        }

        // Pages déjà présentes : la visite s'appuie dessus sans rien
        // téléverser — et sans les marquer comme démo, elles sont à
        // l'utilisateur.
        if (useUploadStore.getState().pages.length > 0) return;

        try {
            const response = await fetch(DEMO_FILE_PATH);
            if (!response.ok) throw new Error(`Fichier introuvable (${response.status})`);

            const blob = await response.blob();
            const demoFile = new File([blob], DEMO_FILE_NAME, { type: 'application/pdf' });

            // Les pages de démo sont celles que le serveur a gagnées pendant
            // l'envoi. Le store ne convient pas : un PDF multipage n'y apparaît
            // qu'au refetch de la session, et le lire trop tôt ne donnait que
            // la ligne provisoire, sans pageId — pages de démo jamais supprimées.
            const before = new Set((await getSession(effectiveToken)).pages.map((p) => p.pageId));
            await uploadRef.current.mutateAsync(demoFile);
            const after = (await getSession(effectiveToken)).pages;
            demoPageIdsRef.current = after.map((p) => p.pageId).filter((id) => !before.has(id));

            await waitForDemoReady(10000);
        } catch (error) {
            console.error('[Onboarding] Erreur lors du flux démo :', error);
        }
    }, [effectiveToken]);

    const getSteps = useCallback(() => [
        {
            id: 'intro',
            title: t('onboarding.steps.intro.title'),
            text: t('onboarding.steps.intro.text'),
            attachTo: { element: '.upload-page__card', on: 'bottom' },
        },
        {
            id: 'add-files',
            title: t('onboarding.steps.addFiles.title'),
            text: t('onboarding.steps.addFiles.text'),
            attachTo: { element: '.upload-page__grid-capture', on: 'bottom' },
        },
        {
            id: 'reorder-files',
            title: t('onboarding.steps.reorderFiles.title', 'Réorganisez les pages'),
            text: t('onboarding.steps.reorderFiles.text', 'Glissez-déposez les vignettes pour réordonner vos pages. Elles seront assemblées dans cet ordre précis dans le document PDF final.'),
            beforeShowPromise: async () => {
                await closeEditor();
                await uploadDemoFile();
            },
            attachTo: {
                element: () => getFirstDragHandle(),
                on: isMobile ? 'top' : 'left',
            },
            when: {
                async show() {
                    await new Promise((r) => setTimeout(r, 400));
                    await simulateDragAndDrop();
                },
            },
        },
        {
            id: 'manage-item-actions',
            title: t('onboarding.steps.itemActions.title', 'Modifier ou supprimer une page'),
            text: t('onboarding.steps.itemActions.text', 'Chaque vignette propose des actions rapides : lancez la retouche pour ajuster  ou supprimez une page si nécessaire.'),
            beforeShowPromise: closeEditor,
            attachTo: {
                element: () => document.querySelector('.page-item__actions') 
                    || document.querySelector('[id^="page-item-edit-"]')?.parentElement 
                    || '.page-item',
                on: 'bottom',
            },
        },
        {
            id: 'edit-file-tools',
            title: t('onboarding.steps.editTools.title', 'Mode édition'),
            text: t('onboarding.steps.editTools.text', 'Pivotez, ajustez les contrastes, redressez la perspective ou recadrez votre document pour garantir sa lisibilité.'),
            beforeShowPromise: openEditor,
            attachTo: {
                element: () => document.getElementById('page-editor-fab-actions') || document.querySelector('.page-editor__fab') || '.page-editor',
                on: isMobile ? 'top' : 'left',
            },
        },
        {
            id: 'edit-file-help',
            title: t('onboarding.steps.editHelp.title', 'Besoin d’aide pour retoucher ?'),
            text: t('onboarding.steps.editHelp.text', 'Le bouton d’aide vous guide avec des exemples et conseils pour chaque action de retouche.'),
            beforeShowPromise: openEditor,
            attachTo: {
                element: '#fab-help',
                on: isMobile ? 'bottom' : 'left',
            },
        },
        {
            id: 'preview-document',
            title: t('onboarding.steps.preview.title', 'Aperçu du document'),
            text: t('onboarding.steps.preview.text', 'Vérifiez le rendu global de votre document PDF fusionné avant de le valider.'),
            beforeShowPromise: closeEditor,
            attachTo: {
                element: () => document.getElementById('preview-btn') || document.querySelector('.upload-page__actions [id*="preview"]'),
                on: 'top',
            },
        },
                {
            id: 'session-expiry',
            title: t('onboarding.steps.sessionExpiry.title'),
            beforeShowPromise: closeEditor,
            text: `
                <div style="display: flex; flex-direction: column; gap: 12px;">
                    <p style="margin: 0;">${t('onboarding.steps.sessionExpiry.text')}</p>
                    <div style="width: 100%; display: flex; justify-content: center; border-radius: 8px; overflow: hidden; border: 1px solid #e0e2ec; background-color: #f7f9fc;">
                        <img 
                            src="${EXPIRY_IMAGE_PATH}" 
                            alt="${t('onboarding.steps.sessionExpiry.imageAlt', 'Alerte expiration de session')}" 
                            style="max-width: 100%; height: auto; display: block;" 
                            loading="lazy"
                        />
                    </div>
                </div>
            `,
        },
        {
            id: 'finalize',
            title: t('onboarding.steps.finalize.title', 'Finaliser le document'),
            text: t('onboarding.steps.finalize.text', 'Une fois satisfait du résultat, cliquez sur ce bouton pour enregistrer et transmettre votre document PDF.'),
            beforeShowPromise: closeEditor,
            attachTo: {
                element: () => document.getElementById('save-btn') || document.querySelector('.upload-page__actions [id*="save"]'),
                on: 'top',
           },
        }

    ], [t, isMobile, uploadDemoFile, openEditor, closeEditor, simulateDragAndDrop]);

    const startTour = useCallback(async () => {
        if (hasStartedRef.current) return;
        hasStartedRef.current = true;

        try {
            const mod = await loadShepherdModule();
            const createTour = mod.createTour || mod.default?.createTour;

            const supportedLocales = ['fr', 'en', 'de'];
            const locale = supportedLocales.includes(i18n.language) ? i18n.language : 'fr';

            safelyDestroyTour();

            const tour = createTour({
                useModalOverlay: true,
                exitOnEsc: true,
                showProgress: true,
                locale,
                steps: getSteps(),
            });

            tour.on('complete', () => {
                tourRef.current = null;
                cleanupDemoPages();
                notifyHost('televerse-onboarding-complete');
                onComplete?.();
            });

            tour.on('cancel', () => {
                tourRef.current = null;
                cleanupDemoPages();
                notifyHost('televerse-onboarding-dismissed');
                onCancel?.();
            });

            tourRef.current = tour;
            tour.start();
        } catch (error) {
            console.error('[Onboarding] Impossible de démarrer le tour :', error);
            await cleanupDemoPages();
            hasStartedRef.current = false;
        }
    }, [getSteps, i18n.language, cleanupDemoPages, safelyDestroyTour, notifyHost, onComplete, onCancel]);

    useEffect(() => {
        const currentStatus = useUploadStore.getState().status;

        if (hasStartedRef.current) return;
        if (!enabled || !autoStart || currentStatus !== 'ready' || !effectiveToken) {
            return;
        }

        const timer = setTimeout(startTour, delayMs);
        return () => clearTimeout(timer);
    }, [enabled, autoStart, delayMs, startTour, effectiveToken]);

    // Démontage = écran terminal (React ne démonte rien à la fermeture de
    // l'onglet). Seule la visite est détruite : UploadPage supprime alors la
    // session côté serveur, pages de démo comprises — la visite ne tourne que
    // sur le primaire. Supprimer ici page par page doublerait ce DELETE ; et
    // tant que la liste n'était pas bornée à la démo, cela visait les pages
    // de l'utilisateur : « photo.png supprimé du document » s'énonçait juste
    // après « Document enregistré ! ».
    useEffect(() => () => {
        unmountedRef.current = true;
        safelyDestroyTour();
    }, [safelyDestroyTour]);

    return null;
};

export default Onboarding;