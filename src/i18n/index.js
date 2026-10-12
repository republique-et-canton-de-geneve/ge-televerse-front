import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import fr from './locales/fr/translation.json';
import en from './locales/en/translation.json';
import de from './locales/de/translation.json';
import it from './locales/it/translation.json';
import pt from './locales/pt/translation.json';

// French is the default and the fallback. The desktop webcomponent and the QR
// hand-off always append an explicit `?lang=...`, so language flows through the
// URL rather than being persisted — hence no localStorage caching (a reused
// device must never stick to a stale language, and desktop/phone must not desync).
export const SUPPORTED_LANGUAGES = ['fr', 'en', 'de', 'it', 'pt'];
export const DEFAULT_LANGUAGE = 'fr';

// Resources are bundled (static JSON imports), so init resolves synchronously —
// no async backend, no first-paint flash, no <Suspense> needed.
i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            fr: { translation: fr },
            en: { translation: en },
            de: { translation: de },
            it: { translation: it },
            pt: { translation: pt },
        },
        supportedLngs: SUPPORTED_LANGUAGES,
        fallbackLng: DEFAULT_LANGUAGE,
        load: 'languageOnly', // `?lang=fr-CH` → `fr`
        detection: {
            order: ['querystring'],
            lookupQuerystring: 'lang',
            caches: [],
        },
        interpolation: {
            escapeValue: false, // React already escapes
        },
        returnNull: false,
        react: {
            useSuspense: false,
        },
    });

// Keep <html lang> in sync so assistive tech and the browser announce the right
// language. Clamp to a supported base tag, defaulting to French.
const resolveLang = (lng) => {
    const base = (lng || DEFAULT_LANGUAGE).split('-')[0];
    return SUPPORTED_LANGUAGES.includes(base) ? base : DEFAULT_LANGUAGE;
};

export const currentLang = () => resolveLang(i18n.language);

const applyDocumentLang = (lng) => {
    document.documentElement.lang = resolveLang(lng);
};

// Le titre du document reprend le <h1> de la page : l'onglet, l'entrée
// d'historique et l'annonce du lecteur d'écran nomment alors la même tâche.
// index.html porte la version française pour la peinture initiale ; ceci la
// retraduit dans la langue détectée.
const applyDocumentTitle = () => {
    document.title = i18n.t('upload.title');
};

applyDocumentLang(i18n.language);
applyDocumentTitle();
i18n.on('languageChanged', (lng) => {
    applyDocumentLang(lng);
    applyDocumentTitle();
});

export default i18n;
