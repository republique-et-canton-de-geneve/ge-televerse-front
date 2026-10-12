# Changelog

Toutes les évolutions notables de GE-Televerse sont consignées dans ce fichier.

Le format suit [Keep a Changelog](https://keepachangelog.com/fr/1.1.0/) et le
versionnage suit [SemVer](https://semver.org/lang/fr/). Les versions correspondent aux
tags `vX.Y.Z` du dépôt ; la version est calculée depuis ces tags par la chaîne
d'intégration et n'est jamais commitée dans `package.json`, qui porte le placeholder
`0.0.0-dev`.

> **Note sur l'antériorité.** Ce fichier est introduit au moment de la publication open
> source. Les entrées antérieures à `[Non publié]` résument chaque ligne de version
> plutôt que chaque patch : le détail commit par commit reste consultable dans
> l'historique Git, entre deux tags `vX.Y.Z`.

## [Non publié]

### Ajouté

- Fichiers de gouvernance open source : `CHANGELOG.md`, `CONTRIBUTING.md`,
  `SECURITY.md`, `NOTICE` et copie de la charte open source de l'État
  (`charte_open_source.md`).
- Sections « Contacts » et « Gouvernance » dans le README.
- `Dockerfile` public, sur base nginx, pour construire et exercer l'application en
  conteneur hors de l'infrastructure de l'État.

### Modifié

- **Message dédié à l'ajout partiel d'un document.** Quand le quota de taille de la
  session ne laisse passer qu'une partie des pages d'un PDF, la bannière l'indique
  — titre « L'ajout de fichier a partiellement échoué », message « Une partie de
  votre fichier n'a pu être ajoutée, car la limite disponible est de … » — au lieu
  d'annoncer le fichier refusé. Un fichier refusé en entier, qu'il ait une page ou
  plusieurs, garde le titre « L'ajout de fichier a échoué » et le message
  « Impossible de joindre votre fichier ».
- **Passage de Parcel à Rsbuild (Rspack).** Même sortie, même `build/`, même image :
  l'application à la racine, la page de démonstration sous `demo/`. Le build est
  configuré dans `rsbuild.config.mjs` — `.parcelrc`, `.proxyrc.json` et `.terserrc`
  disparaissent, ainsi que les fichiers `env.development` / `env.production`, que
  Parcel ne lisait pas (il ne charge que des fichiers commençant par un point). Rien
  ne change pour l'application ; ce qui change pour qui la construit :
  - `src/index.html` et `src/demo/index.html` sont des **gabarits**, plus des points
    d'entrée : ils ne portent plus de balise vers le code, que rsbuild injecte avec son
    empreinte. Les entrées sont `src/index.js` et `src/demo/index.js`.
  - L'ordre de chargement de la page de démonstration, jusqu'ici porté par la place
    des balises dans le HTML, est désormais celui des imports de `src/demo/index.js`.
  - `process.env.MOCK_API` et `process.env.API_BASE_URL` doivent être déclarés dans
    `source.define` : rsbuild ne remplace que ce qui y est nommé.
  - `favicon.ico` et le manifeste PWA sont servis tels quels depuis `static/` et ne
    portent plus d'empreinte ; le service worker de MSW passe dans `static-dev/`, qui
    n'est **pas** recopié au build — il ne partait en production que par accident.
  - Le bundle de l'application s'appelle `index.<empreinte>.js`, et non plus
    `public.<empreinte>.js` (Parcel le nommait d'après le répertoire du dépôt, sans
    moyen d'en changer).
  - `yarn preview` sert le bundle de production tel quel.
  - Le **compilateur React** est actif (voie Rust du greffon, pas de Babel). Il
    mémoïse à la compilation en supposant les règles de React tenues ; trois
    modules qu'il ne sait pas compiler sont sautés sans dommage (voir le
    commentaire de `rsbuild.config.mjs`, qui donne aussi le réglage de
    diagnostic pour réauditer cette liste).
- **Séparation du dépôt en vue de la publication.** Les sources, leur documentation et
  le build vivent désormais dans ce dépôt public ; la chaîne d'intégration et le
  Dockerfile de production restent dans un dépôt interne qui référence celui-ci comme
  sous-module. Aucun changement de comportement de l'application.
- `yarn.lock` résout les dépendances depuis le registre npm public
  (`registry.yarnpkg.com`) : l'installation est reproductible hors de l'infrastructure
  de l'État. La résolution interne est portée par le dépôt privé.
- README réaligné sur l'état réel du code : mocks MSW (et non plus intercepteurs
  Axios), internationalisation, arborescence `src/` à jour.

### Corrigé

- **Finalisation abandonnée au bout de 30 s.** L'enregistrement du document passait
  par le plafond global d'axios (30 s), alors que le back s'accorde 2 min
  (`app.finalize-timeout`) : une fusion plus longue était abandonnée par le client,
  et l'écran d'erreur qui suit supprimait la session, pages comprises. Plafond dédié
  de 150 s.
- **Refus de modification expliqués.** Le back refuse désormais une retouche, une
  suppression ou un déplacement quand la session a changé entre-temps (`409
  PAGE_GONE` / `PAGE_CHANGED` / `PAGES_CHANGED`), quand l'enregistrement du document
  a commencé (`409 SESSION_FINALIZING`), quand la page retouchée dépasserait le quota
  (`413 SESSION_SIZE_EXCEEDED`) ou quand recadrage, redressement et balance des
  blancs visent une page de PDF portant du texte (`422 PAGE_NOT_EDITABLE`). Chacun a
  son message dans l'éditeur, au lieu de « L'opération n'a pas abouti — réessayez »,
  et un conflit relit la session. Une suppression en échec affiche enfin un message
  — la ligne restait sans un mot.
- **Deux entorses aux règles de React**, mises au jour par l'activation du
  compilateur, qui refusait de compiler les composants concernés. Aucune des deux
  ne s'était manifestée à l'écran, mais toutes deux sont de celles qui se
  réveillent en rendu concurrent :
  - le marquage « appareil secondaire » écrivait dans le magasin **pendant le
    rendu** ; il est désormais posé une fois à l'import, avant le premier rendu,
    sous exactement la même condition ;
  - l'écran de création de session **lisait une ref pendant le rendu** alors que
    cette lecture décidait d'une branche d'affichage — un second 409 d'affilée
    doit passer à l'écran manuel plutôt que rester sur le voile d'attente. La
    valeur est passée en état, ce qui est sa place quand elle rend.

### Sécurité

- **Plus aucun `postMessage(…, '*')` dans les échanges avec la page hôte.** Le
  composant web déclare son origine dans l'URL du popup (`?origin=`) ; la SPA
  l'emploie comme `targetOrigin` dès son message d'annonce (`televerse-ready`) et
  n'accepte l'init que venant de cette origine. L'annonce ne peut donc plus livrer le
  `callbackId` — qui commande la poignée de main — à un document arrivé entre-temps
  dans l'onglet ouvreur. Sans ce paramètre, la poignée de main n'a pas lieu et la
  notification de fin est omise : le contrat d'URL (cf. README) suppose un hôte à jour.

## [1.1.0] — 2026-07-02 → [1.1.18] — 2026-07-29

### Ajouté

- **Internationalisation** — interface disponible en français, anglais, allemand,
  italien et portugais, pilotée par le paramètre d'URL `?lang=`. Le français reste la
  langue par défaut et de repli. La langue n'est pas persistée : elle est relue à
  chaque chargement, pour qu'un appareil réutilisé ne reste pas sur la langue de
  l'usager précédent et que le poste de travail et le téléphone ne se désynchronisent
  pas.
- **Passe d'accessibilité WAI-ARIA complète** — sémantique de liste, zones dynamiques
  annoncées, dialogues avec piège de focus, parcours clavier de bout en bout.
- **Éditeur de page** — rotation et recadrage d'une page déjà téléversée, menu
  flottant, annulation d'une modification ou remise à l'état d'origine
  (« Annuler tout »), retour en tête de page.
- **Aperçu du PDF assemblé** dans un panneau plein écran, sans quitter l'application.
- **Glisser-déposer sur poste de travail** — dépôt sur toute la carte, avec une
  explication affichée lorsque le dépôt est refusé.
- **Flux `OpenedSession`** — l'application consomme le token d'une session déjà créée
  par le composant web hôte, au lieu de créer la session elle-même.
- **Sélecteur de langue** dans la page de démonstration du poste de travail.

### Modifié

- Le composant web `<ge-televerse>` de la page de démonstration est désormais une copie
  figée versionnée (`src/demo/vendor/`), pour que la démonstration fonctionne sans
  accès réseau sortant et reste dans sa CSP.
- Nouvelles tentatives automatiques sur les réponses `EDIT_BUSY` et `FINALIZE_BUSY`,
  comme c'était déjà le cas pour `UPLOAD_BUSY`.
- Message dédié lorsque le backend refuse une page en double (`DUPLICATE_PAGE`).
- Montées de version : `@m3e/react` et `@m3e/web` 2.3.2 → 2.7.0, `@dnd-kit/react`
  0.3.2 → 0.5.0.
- Versionnage piloté par les tags Git : la version n'est plus commitée dans
  `package.json`.

### Corrigé

- **Réordonnancement cassé après un envoi en échec** — un `useSortable` dont
  l'identifiant dérivait de l'index laissait une zone de dépôt fantôme ; l'identifiant
  est désormais stable et attaché à la page.
- Glisser natif des vignettes, qui provoquait un ré-envoi parasite du fichier.
- Défilement immédiat vers le fichier en cours de téléversement.
- Empilement des actions sous le nom de fichier sur écran étroit.
- Bannière « trop de pages » qui ne s'affichait pas face au backend réel ; message par
  fichier lors du tronquage d'une sélection multiple.
- Seconde barre de défilement parasite lorsque la liste de fichiers remplissait la
  fenêtre du poste de travail.
- Boutons qui changeaient de forme à l'appui.

### Sécurité

- **Poignée de main d'ouverture à usage unique** — l'origine de la page hôte est
  apprise par un échange `postMessage` vérifié (source et `callbackId`), puis
  verrouillée. Le message de fin, qui porte le `documentId`, est adressé à cette
  origine précise, et **omis** si la poignée de main n'a pas abouti — jamais diffusé
  en `'*'`.
- **`sizeProfile` déprécié** — le profil de taille de session est désormais dérivé
  côté serveur de l'`Origin` du formulaire hôte. Le paramètre d'URL est toléré mais
  sans effet : un usager ne peut plus s'attribuer un quota supérieur.
- Rendu de l'aperçu PDF sans chargement de morceau différé, pour rester conforme à la
  CSP.

## [1.0.0] — 2026-02-17 → [1.0.23] — 2026-06-22

### Ajouté

- Première mise en recette puis mise en production de l'application : ouverture par QR
  code, capture photo ou sélection de fichiers, envoi au backend, finalisation.
- Réorganisation et suppression de pages avant finalisation.
- Reprise de session après rechargement de la page, pages conservées.
- Libération de la session (`DELETE`) à l'expiration confirmée.
- Page de démonstration du poste de travail, servie sur `/demo/`.
- Migration des mocks de développement vers MSW (*Mock Service Worker*).

### Corrigé

- Récupération automatique du `409` après rechargement de la fenêtre.
- Expiration de session fiable pendant les éditions de page.
- Gestion des erreurs 4xx et messages associés ; harmonisation des messages de
  session ; libellés de dépassement du nombre maximal de pages.
- Affichage sur appareil mobile et alignement sur les CSP.

### Sécurité

- Bornes sur la taille des vignettes générées côté client.
