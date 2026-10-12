import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginSass } from '@rsbuild/plugin-sass';

// `.mjs` et non `.js` : le `package.json` ne déclare pas `"type": "module"`,
// donc un `.js` serait lu comme du CommonJS et l'`export default` échouerait.
// Même convention que ge-ocr-front, l'autre application rsbuild de la famille.

export default defineConfig({
    plugins: [
        // JSX par SWC, Fast Refresh en développement, et le compilateur React —
        // par la voie Rust du greffon (rsbuild >= 2.1.0), donc pas de Babel dans
        // la chaîne. Il mémoïse à la compilation en SUPPOSANT les règles de React
        // tenues : pas d'effet de bord au rendu, pas de lecture de ref au rendu,
        // pas de mutation d'un objet déjà rendu. Une entorse passe le build sans
        // un mot et se voit à l'écran — d'où le contrôle en navigateur, écran par
        // écran, à chaque fois qu'on touche à un composant.
        //
        // Son activation (2026-09-16) a mis au jour DEUX entorses réelles, toutes
        // deux corrigées et commentées sur place : une écriture dans le magasin
        // pendant le rendu (App.jsx) et une ref lue pendant le rendu alors qu'elle
        // décidait d'une branche d'affichage (SessionCreator.jsx, passée en état).
        // Le compilateur ne les a pas « cassées » : il a refusé de compiler ces
        // deux composants, et c'est en cherchant pourquoi qu'on les a trouvées.
        //
        // TROIS modules qu'il saute, volontairement, et qu'il faut laisser tels
        // quels — sauter est sa soupape, le module garde alors son comportement
        // d'origine, simplement non mémoïsé :
        //   - PdfPreviewContent.jsx : `useVirtualizer` (@tanstack/react-virtual)
        //     est déclaré « bibliothèque incompatible », elle rend des fonctions
        //     qui ne se mémoïsent pas sans risque d'affichage périmé ;
        //   - useFileDrop.js et useFocusTrap.js : l'idiome « ref de la dernière
        //     valeur » (`ref.current = props` au rendu). Leur ref n'est lue que
        //     dans des écouteurs DOM, donc après la peinture : inoffensif ici, et
        //     le déplacer dans un effet changerait le moment de la mise à jour
        //     pour rien.
        //
        // POUR RÉAUDITER cette liste : `reactCompiler: { panicThreshold: "all_errors" }`
        // transforme chaque abandon silencieux en erreur de build, avec le fichier
        // et la ligne. C'est un OUTIL DE DIAGNOSTIC, à ne jamais livrer : en
        // livraison, l'abandon silencieux est précisément ce qu'on veut.
        pluginReact({ reactCompiler: true }),
        // `src/styles/main.scss`. sass-embedded, API moderne.
        pluginSass(),
    ],

    source: {
        // Deux pages, deux entrées — ce que `targets` décrivait côté Parcel.
        // Une ENTRÉE est du JavaScript : le HTML n'est plus qu'un gabarit
        // (cf. `html.template`).
        entry: {
            // L'application. Nommée `index` pour que le bundle s'appelle
            // `index.<empreinte>.js` : Parcel le nommait `public.<empreinte>.js`,
            // d'après le répertoire du dépôt, et aucun de ses réglages ne
            // permettait d'en changer.
            index: './src/index.js',
            // La page de démonstration (poste de travail). Son ordre de
            // chargement est un contrat, décrit dans `src/demo/index.js`.
            demo: './src/demo/index.js',
        },

        // Parcel remplaçait `process.env.X` à la compilation sans rien déclarer.
        // rsbuild ne remplace que ce qu'on nomme ici — ces deux lignes sont tout
        // ce que le code applicatif lit de l'environnement. En ajouter une dans
        // le code sans l'ajouter ici donne `undefined` à l'exécution, sans la
        // moindre erreur de build.
        define: {
            // Drapeau du bouchon MSW (`yarn start`). Figé à la compilation :
            // c'est ce qui permet à `startMocks` de sortir immédiatement et au
            // bundle de production de ne pas emporter msw.
            'process.env.MOCK_API': JSON.stringify(process.env.MOCK_API || 'false'),
            // Figée au démarrage de la commande : `API_BASE_URL=… yarn start`
            // vise un autre hôte sans toucher au code.
            'process.env.API_BASE_URL': JSON.stringify(process.env.API_BASE_URL || '/api'),
        },
    },

    resolve: {
        // pdf.js en build LEGACY, pour l'aperçu du document (react-pdf). Le build
        // « moderne » que `pdfjs-dist` expose par défaut vise la dernière version
        // de chaque navigateur, sans aucun repli : pdf.js 6 y appelle en direct
        // `Uint8Array#toHex` (Safari 18.2, Chrome 140), `Promise.try` (Safari
        // 18.2), `Map#getOrInsertComputed` et `Math.sumPrecise` (Safari 26.2,
        // Chrome 147). Sur tout iPhone sous iOS 26.2 — dont tous les XS / XR,
        // bloqués en iOS 18 — l'aperçu mourait : chargement jamais conclu avant
        // iOS 18.2, pages en échec au rendu de 18.2 à 26.1. Même sort pour Samsung
        // Internet et tout Chrome Android en retard de mise à jour. Le build
        // legacy embarque les polyfills core-js de ces API et tient jusqu'à
        // Safari 18 / Chrome 125, pour ~20 Ko gzip de plus côté page.
        //
        // Les DEUX entrées de react-pdf sont redirigées : `pdf_viewer.mjs` (son
        // LinkService) appelle lui aussi `getOrInsertComputed` dès sa
        // construction. Le worker, lui, est choisi dans PdfPreviewContent.jsx —
        // les trois doivent rester sur le même build. Le `$` borne l'alias au
        // spécifieur exact, sans quoi `pdfjs-dist/legacy/...` serait réécrit.
        alias: {
            'pdfjs-dist$': 'pdfjs-dist/legacy/build/pdf.mjs',
            'pdfjs-dist/web/pdf_viewer.mjs$': 'pdfjs-dist/legacy/web/pdf_viewer.mjs',
        },
    },

    html: {
        // Les deux gabarits. Ils ne portent AUCUNE balise `<script>` vers le
        // code : rsbuild injecte celle du bundle, avec son empreinte. C'est
        // l'inverse de Parcel, où le HTML était l'entrée et le `<script>`
        // désignait le code ; en remettre une à la main chargerait le bundle
        // deux fois.
        template: ({ entryName }) =>
            entryName === 'demo' ? './src/demo/index.html' : './src/index.html',
    },

    output: {
        // `build/` et non le `dist/` par défaut : c'est ce que recopie le `COPY`
        // du Dockerfile (des deux : celui d'ici et celui de production, dans le
        // dépôt de la chaîne de build) et ce que la chaîne partagée archive
        // (`ci-scripts`, `.frontend-build`, `${SOURCE_PREFIX}build/`). Le
        // renommer casserait les trois en silence — l'image se construirait vide.
        distPath: { root: 'build' },

        // Chemins absolus dans le HTML produit. Nécessaire pour les deux pages :
        // l'application est servie sous /scan/<jeton>, la démonstration sous
        // /demo/ — une URL d'actif relative y serait résolue contre le
        // répertoire de la page, donc à côté.
        assetPrefix: '/',
    },

    server: {
        // Port historique du projet, et `strictPort` pour qu'il le reste. Sans
        // lui, rsbuild glisse au port libre suivant quand 1234 est pris — par
        // ge-ocr-front, par exemple, qui écoute sur le même. L'application
        // démarrerait alors sur une AUTRE origine, ce qui ne se voit pas dans la
        // page mais change la clé que le service lit : le profil de taille d'une
        // session est dérivé de l'`Origin` de l'appelant (liste blanche
        // `app.session-create`). Mieux vaut un refus de démarrer qu'une session
        // silencieusement retombée sur le profil par défaut. `parcel -p 1234`
        // échouait déjà ainsi.
        port: 1234,
        strictPort: true,

        // Deux répertoires statiques, pour une raison. `static/` part dans le
        // bundle (robots.txt, favicon, manifeste) ; `static-dev/` non. Le
        // service worker de MSW doit être servi à la RACINE du site pour
        // intercepter (`/mockServiceWorker.js`) — il ne peut donc pas vivre dans
        // les sources — mais il n'a rien à faire en production, où personne ne
        // l'enregistre. `copyOnBuild: false` le sert en développement et
        // l'exclut du build. `npx msw init` doit viser `static-dev/` : c'est ce
        // que déclare `msw.workerDirectory` dans le package.json.
        //
        // ge-ocr-front nomme ces deux répertoires `public/` et `public-dev/`.
        // Ici `public/` est déjà le nom sous lequel CE dépôt est monté en
        // sous-module dans la chaîne de build : un `public/public/` serait
        // illisible. Le nom change, le partage ne change pas.
        publicDir: [
            { name: 'static' },
            { name: 'static-dev', copyOnBuild: false },
        ],

        // Relais de l'API en développement, ce que faisait `.proxyrc.json`. En
        // production c'est le reverse proxy de la plateforme qui sert /api.
        proxy: {
            '/api': 'http://localhost:8080',
        },

        // L'application n'a pas de routeur : c'est App.jsx qui lit le jeton dans
        // `location.pathname`. Sans ce repli, ouvrir /scan/<jeton> sur le serveur
        // de développement donne un 404 — le pendant du `try_files` de nginx
        // (cf. docker/nginx.conf), qu'il faut donc garder d'accord avec lui.
        historyApiFallback: {
            index: '/index.html',
            rewrites: [
                // Plus spécifique d'abord : /demo/... retombe sur l'index de la
                // démonstration, pas sur celui de l'application.
                { from: /^\/demo(?:\/|$)/, to: '/demo/index.html' },
                { from: /./, to: '/index.html' },
            ],
        },
    },

    tools: {
        rspack: {
            // Le bundle figé de <ge-televerse> tente un `import(<variable>)` vers
            // le CDN de l'État pour ses points de rupture, avec repli sur
            // matchMedia (cf. src/demo/vendor/README.md). rspack ne sait pas
            // résoudre une expression à la compilation et le signale en
            // « Critical dependency ». C'est sans objet ici : cet import échoue
            // DÉJÀ en production, où la CSP interdit ce chargement, et le repli
            // s'en charge. On tait ce warning-là, nommément, pour que les autres
            // restent lisibles — pas `ignoreWarnings: [() => true]`.
            ignoreWarnings: [
                /Critical dependency: the request of a dependency is an expression/,
            ],
        },

        // La démonstration sort en `build/demo/index.html`, pas en `demo.html` à
        // la racine : c'est l'arborescence que servent nginx (`location /demo/`)
        // et le repli ci-dessus, et c'est ce que Parcel produisait avec sa cible
        // `demo`.
        htmlPlugin(config, { entryName }) {
            if (entryName === 'demo') {
                config.filename = 'demo/index.html';
            }
        },
    },
});
