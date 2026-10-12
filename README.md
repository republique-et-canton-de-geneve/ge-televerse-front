# GE-Televerse

Application mobile de téléversement de documents pour les formulaires en ligne de l'État de Genève.

> **Ce dépôt porte le code source de l'application et son build.** La chaîne
> d'intégration et l'image de production, qui décrivent l'infrastructure de l'État,
> vivent dans un dépôt interne qui référence celui-ci comme sous-module — cf.
> [Où vit la chaîne de build](CONTRIBUTING.md#où-vit-la-chaîne-de-build). L'absence de
> fichier de pipeline ici n'est pas un oubli.

## Principe

Cette application est ouverte sur le téléphone de l'usager après qu'il a scanné un QR code affiché dans un formulaire en ligne sur son ordinateur. Elle permet de photographier ou sélectionner un document, de l'envoyer au backend (qui le convertit en PDF), puis de signaler que le téléversement est terminé.

Le flux utilisateur est le suivant :

1. L'usager scanne le QR code → le téléphone ouvre `/scan/{token}`
2. L'application charge la session et affiche les boutons de capture
3. L'usager prend une ou plusieurs photos ou sélectionne des fichiers
4. Chaque fichier est envoyé au backend et ajouté au PDF composite
5. L'usager appuie sur **Terminer** → le backend notifie le formulaire sur l'ordinateur via SSE
6. L'usager voit une confirmation et peut fermer la page

## Stack technique

| Composant | Technologie |
|---|---|
| Framework | React 19 |
| State management | Zustand |
| Data fetching | TanStack Query + Axios |
| UI components | M3E (Material 3 Expressive web components) |
| Design tokens | État de Genève M3 theme (`static.app.ge.ch/theme/css/theme.css`) |
| Internationalisation | i18next + react-i18next (fr, en, de, it, pt) |
| Bundler | Rsbuild 2 (Rspack) |
| Styles | SCSS avec CSS custom properties M3 |
| Mocks de développement | MSW (Mock Service Worker) |

## Structure du projet

```
rsbuild.config.mjs          # Build : entrées, gabarits HTML, define, serveur de dev
static/                     # Recopié tel quel à la racine du build (favicon, manifeste, robots)
static-dev/                 # Idem, mais NON recopié au build — service worker de MSW
src/
├── index.html              # GABARIT HTML de l'application (sans balise de script : cf. rsbuild.config.mjs)
├── index.js                # Entrée : bootstrap React, thème M3E, i18n, démarrage des mocks
├── api/
│   ├── client.js           # Instance Axios avec baseURL et timeout
│   └── endpoints.js        # Session, upload, édition de page, finalisation
├── assets/                 # Illustrations SVG (fond armorié)
├── components/
│   ├── App.jsx             # m3e-theme, QueryClient, routage par URL (sans routeur)
│   ├── UploadPage.jsx      # Page principale : capture, liste, finalisation
│   ├── FileCapture.jsx     # Caméra (capture="environment"), sélecteur, glisser-déposer
│   ├── PageList.jsx        # Liste des pages : progression, réordonnancement, suppression
│   ├── PageEditor.jsx      # Édition d'une page (rotation, recadrage)
│   ├── PdfPreview.jsx      # Aperçu plein écran du PDF assemblé
│   ├── SessionCreator.jsx  # Création de session (voie legacy sans token)
│   ├── OpenedSession.jsx   # Session déjà créée par l'hôte, ouverte par token
│   ├── StatusView.jsx      # Écrans d'état (chargement, expiré, erreur)
│   └── SuccessScreen.jsx   # Confirmation finale
├── demo/                   # Page hôte de démonstration (poste de travail)
├── hooks/                  # useSession, useUpload, useSseSync, usePageEdit, …
├── i18n/                   # Configuration i18next et traductions (fr/en/de/it/pt)
├── mocks/                  # Handlers MSW, SSE simulée, progression d'upload simulée
├── store/
│   └── uploadStore.js      # Zustand — session, pages[], machine à états
└── styles/
    └── main.scss           # Styles utilisant les tokens M3 du thème GE
```

## Composants M3E utilisés

| Composant | Usage |
|---|---|
| `m3e-theme` | Thème applicatif (scheme auto light/dark, motion expressive) |
| `m3e-app-bar` | Barre de titre en haut de page |
| `m3e-button` | Boutons « Prendre une photo », « Choisir un fichier », « Terminer » |
| `m3e-card` | Conteneur pour les pages uploadées et les écrans d'état |
| `m3e-icon` | Icônes Material Symbols (photo_camera, attach_file, check_circle, etc.) |
| `m3e-progress-indicator` | Barre de progression par page |
| `m3e-loading-indicator` | Spinner de chargement |

Tous les styles utilisent les design tokens M3 (`--md-sys-color-*`, `--md-sys-typescale-*`) définis par le thème GE, sans couleur en dur.

## Machine à états

```
loading → ready → finalizing → finalized
   ↓        ↓         ↓
 error    expired    error
```

- **loading** — session en cours de chargement
- **ready** — session active, l'usager peut uploader
- **finalizing** — appel à `/finalize` en cours
- **finalized** — backend notifié, l'usager peut fermer la page
- **expired** — session expirée (TTL dépassé ou 404 du backend)
- **error** — erreur réseau ou serveur

## Développement

### Prérequis

- Node.js 20.19+ ou 22.12+ (exigence de Rsbuild 2)
- Yarn 1.22 (*classic*) — le projet est verrouillé sur yarn ; `package-lock.json` est ignoré

### Installation

```bash
yarn install
```

Hors de l'infrastructure de l'État, les dépendances se résolvent depuis le registre
npm public : le [`yarn.lock`](yarn.lock) de ce dépôt pointe `registry.yarnpkg.com`.

### Lancer en mode mock

```bash
yarn start
```

Ouvre `http://localhost:1234/scan/mock-token-123` (port imposé : `strictPort`, cf. [`rsbuild.config.mjs`](rsbuild.config.mjs)) avec l'émulation mobile de Chrome DevTools pour tester le flux complet. L'API est simulée par MSW (*Mock Service Worker*), avec une SSE et une progression d'upload simulées — aucun backend n'est nécessaire.

La page hôte de démonstration (poste de travail) est servie sur la même origine, à `http://localhost:1234/demo/`.

### Lancer sans mocks (avec backend réel)

```bash
yarn start:nomock
```

Nécessite un backend [GE-Televerse-Back](https://github.com/republique-et-canton-de-geneve/ge-televerse-back) accessible sur `/api` (le serveur de développement proxifie `/api` vers `http://localhost:8080`, cf. `server.proxy` dans [`rsbuild.config.mjs`](rsbuild.config.mjs)).

### Build de production

```bash
yarn build
```

Génère le bundle dans `./build/` sans source maps : l'application à la racine, la
page de démonstration sous `demo/`, les actifs sous `static/`.

```bash
yarn preview
```

Sert ce bundle tel quel, sans serveur de développement — utile pour vérifier ce qui
sera réellement déployé. Le bouchon MSW n'y a pas cours : son service worker est
volontairement exclu du build (cf. `static-dev/`).

### Lancer en conteneur

```bash
yarn build
docker build -t ge-televerse-front:dev .
docker run --rm -p 8080:8080 ge-televerse-front:dev
```

Le [`Dockerfile`](Dockerfile) de ce dépôt est une **image de développement**, sur base
nginx publique. Ce n'est pas le livrable déployé : l'image de production part d'une
base durcie et est construite par la chaîne d'intégration interne.

## Configuration

| Variable d'environnement | Description | Défaut |
|---|---|---|
| `MOCK_API` | Active les mocks MSW (`true`/`false`) | `false` |
| `API_BASE_URL` | URL de base de l'API backend | `/api` |

`yarn start` pose `MOCK_API=true` via `cross-env`. Les deux variables sont figées à
la compilation par `source.define` : rsbuild ne remplace que ce qui y est nommé — en
lire une autre depuis le code donnerait `undefined` à l'exécution, sans erreur de
build.

## Capture mobile

L'accès à la caméra utilise les capacités natives HTML5 :

- `<input type="file" accept="image/*" capture="environment">` — ouvre la caméra arrière sur iOS et Android (prise unique)
- `<input type="file" accept="image/jpeg,image/png,image/webp,application/pdf" multiple>` — ouvre le sélecteur de fichiers, sélection multi-fichiers activée par défaut

Sur poste de travail, la zone de glisser-déposer accepte également plusieurs fichiers en une seule fois. Chaque fichier valide est ajouté à la session ; les types non supportés sont ignorés silencieusement.

## Paramètres d'URL (intégration hôte)

Dans le contrat actuel, le composant web hôte crée lui-même la session (`POST /sessions` depuis la page hôte, profil de taille dérivé de l'Origin côté serveur) puis ouvre l'application avec le **token opaque** en query. Il pilote l'application via des paramètres ajoutés à l'URL ouverte (ils sont repropagés dans le QR code généré pour la passation au téléphone) :

| Paramètre | Description | Défaut |
|---|---|---|
| `token` | Jeton de session opaque renvoyé par `POST /sessions` — désigne la session déjà créée par l'hôte | — |
| `callbackId` | Identifiant fourni par l'hôte pour la poignée de main / notification `postMessage` finale | — |
| `origin` | Origine de la page hôte, déclarée par le composant web. Sert de `targetOrigin` à tous les messages émis vers l'ouvreur — la SPA ne diffuse jamais en `'*'`. Absent ou mal formé : pas de poignée de main, et la notification de fin est omise. Jamais repropagé dans le QR (le téléphone n'a pas d'ouvreur) | — |
| `join` | Présence seule — indique que ce client est un téléphone secondaire rattaché via QR | absent |
| `multiple` | `false` force le mode mono-fichier (utile pour les démarches simples) ; toute autre valeur ou absence laisse la sélection multi-fichiers | `true` |
| `lang` | Langue de l'interface : `fr`, `en`, `de`, `it` ou `pt` | `fr` |

Exemple : `…/scan/{token}?multiple=false` ouvre l'application en mode mono-fichier ; le drapeau est repris dans l'URL du QR (`?join&multiple=false`) pour que le téléphone secondaire en hérite.

La langue transite par l'URL et n'est **pas** persistée côté client : un appareil réutilisé ne doit jamais rester bloqué sur une langue obsolète, et le poste de travail et le téléphone ne doivent pas se désynchroniser.

> **Déprécié — `sizeProfile`.** L'ancien contrat laissait l'hôte passer `?sizeProfile=S|M|L|XL` et la SPA créait la session avec ce profil. Le profil est désormais dérivé côté serveur de l'Origin du formulaire hôte (whitelist), infalsifiable côté usager. Le paramètre est encore toléré sur la voie legacy sans token (transition de déploiement) mais **sans effet** : ne plus l'émettre.

## API consommée

| Méthode | Endpoint | Description |
|---|---|---|
| `GET` | `/api/sessions/{token}` | Charge les détails de la session |
| `POST` | `/api/upload/{token}` | Téléverse un fichier (multipart/form-data) |
| `POST` | `/api/sessions/{token}/finalize` | Signale la fin du téléversement |

Voir le README du backend ([GE-Televerse-Back](https://github.com/republique-et-canton-de-geneve/ge-televerse-back)) pour la documentation complète de l'API.

## Contact & Support

* **Questions générales :** Écrivez-nous à [opensource@etat.ge.ch](mailto:opensource@etat.ge.ch).
* **Failles de sécurité :** N'ouvrez pas d'issue publique. Veuillez vous référer aux consignes de sécurité décrites dans le fichier [SECURITY.md](SECURITY.md).

## Gouvernance et documents associés

- [LICENSE](LICENSE) — licence Apache 2.0, licence par défaut de l'État pour le code.
- [NOTICE](NOTICE) — attributions des travaux tiers redistribués et des artefacts vendorés.
- [CONTRIBUTING.md](CONTRIBUTING.md) — signaler un bug, proposer une évolution, conventions de code et de commit.
- [CHANGELOG.md](CHANGELOG.md) — évolutions par version, au format Keep a Changelog.
- [SECURITY.md](SECURITY.md) — versions supportées, signalement de vulnérabilité, traitement des correctifs, gestion des secrets, SAST/SCA/SBOM.
- [charte_open_source.md](charte_open_source.md) — copie de la charte open source de la
  République et canton de Genève, à laquelle l'équipe s'engage pour la publication de ce code.
