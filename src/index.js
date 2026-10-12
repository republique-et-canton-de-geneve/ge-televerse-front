import React from 'react';
import { createRoot } from 'react-dom/client';
import { startMocks } from './mocks/browser';
// i18n must initialize before any component renders — it reads the language from
// the `?lang=` query param and sets <html lang>. Bundled resources make init
// synchronous, so no loading flash / <Suspense> is needed.
import './i18n';
import App from './components/App';

// M3E theme registration (custom elements are registered by per-component React bindings)
import '@m3e/web/theme';

import 'material-symbols/outlined.css';
import './styles/main.scss';

startMocks().then(() => {
    const root = createRoot(document.getElementById('app'));
    root.render(<App />);
});