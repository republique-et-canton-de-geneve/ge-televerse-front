# Contribuer à GE-Televerse

Merci de l'intérêt que vous portez à ce projet. Ce document décrit comment signaler
un problème, proposer une évolution et soumettre une contribution.

GE-Televerse est développé par l'État de Genève pour ses formulaires en ligne. Le code
est publié sous licence Apache 2.0 : les contributions externes sont bienvenues, dans
les limites décrites à la section
[Contraintes de build](#contraintes-de-build-pour-les-contributeurs-externes).

## Code de conduite

Restez respectueux et constructif dans toutes les interactions. L'objectif est de
maintenir un environnement accueillant pour tout le monde.

## Comment contribuer

### Signaler un bug

> **Une faille de sécurité ne se signale pas par une issue publique.** Suivez la
> procédure décrite dans [SECURITY.md](SECURITY.md).

- Vérifiez d'abord les issues existantes pour éviter les doublons.
- Utilisez un titre clair et descriptif.
- Décrivez les étapes de reproduction, le comportement attendu et le comportement
  observé.
- Précisez la version concernée (tag `vX.Y.Z`), et — puisque l'essentiel du parcours
  se joue sur mobile — **le navigateur, sa version et le système** (iOS Safari,
  Chrome Android…). Beaucoup de comportements de capture dépendent du couple exact
  navigateur/OS.
- Indiquez si vous étiez en mode mock (`yarn start`) ou face à un backend réel, et le
  type de fichier en entrée (image ou PDF, mono ou multi-pages) — **sans joindre de
  document contenant des données personnelles**.
- Joignez la console du navigateur et, si le problème touche un échange réseau,
  l'onglet *Network* avec le `token` de session anonymisé.

### Proposer une évolution

- Ouvrez une issue décrivant le cas d'usage avant d'écrire du code : le périmètre
  fonctionnel est piloté par le métier (cf. [Contacts](README.md#contacts)) et une
  évolution utile techniquement n'est pas toujours retenue.
- Expliquez le comportement attendu et son articulation avec l'existant.
- Les évolutions touchant au contrat d'intégration hôte (paramètres d'URL, messages
  `postMessage`, poignée de main) doivent s'accompagner d'une mise à jour de la
  section [Paramètres d'URL](README.md#paramètres-durl-intégration-hôte) du README.
  Ce contrat est partagé avec le composant web embarqué dans les formulaires : le
  modifier unilatéralement casse l'intégration.

### Soumettre une pull request

1. **Forkez et clonez le dépôt**

   ```bash
   git clone https://github.com/<votre-compte>/ge-televerse-front.git
   cd ge-televerse-front
   ```

2. **Créez une branche depuis `develop`**

   `develop` est la branche d'intégration ; `main` ne reçoit que les releases.

   ```bash
   git checkout develop
   git checkout -b feat/description-courte
   ```

3. **Préparez l'environnement de développement**

   Prérequis : **Node.js 20+** et **Yarn 1.22** (*classic*). Le mode mock démarre sans
   aucune dépendance externe — MSW simule l'API, la SSE et la progression d'upload.

   ```bash
   yarn install
   yarn start
   ```

   Ouvrez `http://localhost:1234/scan/mock-token-123`, de préférence avec l'émulation
   mobile des DevTools : l'application est conçue pour le téléphone (largeur maximale
   480 px, hauteur en `100dvh`).

   Le port **1234 est imposé**, pas cosmétique : le serveur de développement se
   proxifie lui-même pour servir la page de démonstration `/demo/` (cf.
   [`.proxyrc.json`](.proxyrc.json)).

4. **Écrivez le code**

   Respectez les [conventions ci-dessous](#conventions-de-code) et documentez ce qui
   n'est pas déductible du code : un choix contre-intuitif mérite un commentaire qui
   explique *pourquoi*, pas *quoi*.

5. **Vérifiez**

   Le projet n'embarque ni suite de tests ni *linter* ; la vérification est donc
   manuelle et c'est une raison de plus d'être explicite dans la PR. Au minimum :

   ```bash
   yarn build        # le bundle doit se construire sans avertissement nouveau
   yarn start        # parcours complet en mode mock, console sans erreur
   ```

   Exercez le parcours de bout en bout : capture, upload multiple, réordonnancement,
   suppression, aperçu du PDF, finalisation. Décrivez dans la PR ce que vous avez
   testé, sur quel navigateur et sur quel appareil.

6. **Committez et poussez**

   ```bash
   git commit -m "feat: description de votre changement"
   git push origin feat/description-courte
   ```

7. **Ouvrez la pull request**

   - Ciblez `develop`, jamais `main`.
   - Décrivez le changement et référencez l'issue associée.
   - Signalez explicitement tout impact sur le contrat d'intégration hôte, sur les
     appels à l'API backend ou sur l'accessibilité.

## Conventions de code

### Langue

Le français est utilisé dans les messages de commit et la documentation.
**Tout le texte d'interface est en français** et passe par i18next — aucune chaîne
visible ne doit être écrite en dur dans un composant. Les identifiants de code
(composants, hooks, variables) et les commentaires restent en anglais, comme le reste
de l'écosystème React.

### Style

- **Composants** — fichiers `.jsx` en PascalCase, un composant par fichier.
- **Hooks** — préfixe `use`, dans `src/hooks/`.
- **État** — Zustand pour l'état client (`src/store/uploadStore.js`), TanStack Query
  pour l'état serveur. Ne dupliquez pas dans le store ce que Query sait déjà.
- **CSS** — SCSS et **design tokens M3 uniquement** (`--md-sys-color-*`,
  `--md-sys-typescale-*`). Aucune couleur en dur : le thème de l'État pilote les
  schémas clair et sombre, une valeur littérale casse l'un des deux.
- **Nommage CSS** — style BEM en kebab-case (`.upload-page`, `.file-capture__buttons`).
- **Composants M3E** — importés globalement dans `src/index.js`, utilisés comme
  éléments personnalisés dans le JSX (`<m3e-button>`, `<m3e-card>`…).
- **Traductions** — toute clé ajoutée à `src/i18n/locales/fr/translation.json` doit
  l'être dans les cinq langues (`fr`, `en`, `de`, `it`, `pt`).
- **Accessibilité** — l'application est utilisée sur mobile par un public très large.
  Conservez les libellés `aria-*`, le piège de focus des dialogues
  (`useFocusTrap`) et les annonces vocales (`Announcer`).
- Alignez-vous sur le style du fichier que vous modifiez : densité de commentaires,
  nommage, idiomes.

### Messages de commit

Format *conventional commits*, avec une portée optionnelle :

- `feat:` — nouvelle fonctionnalité
- `fix:` — correction de bug
- `perf:` — amélioration de performance
- `refactor:` — remaniement sans changement de comportement
- `docs:` — documentation
- `style:` — présentation, sans changement de comportement
- `build:` / `ci:` — chaîne de build et d'intégration
- `chore:` — maintenance

Exemples tirés de l'historique : `feat(i18n): internationalize app (fr/en/de/it/pt) via
?lang param`, `feat(page-editor): retour en tête de page et annulations en boutons`.

Le message doit dire ce que le changement produit, pas quels fichiers il touche.

### Branches et versionnage

- Flux Git : `develop` → `main`. Les releases sont taguées `vX.Y.Z`.
- Versionnage sémantique. **La version n'est jamais commitée dans `package.json`** :
  elle porte le placeholder `0.0.0-dev` et est calculée depuis les tags Git par la
  chaîne d'intégration. Ne modifiez pas `"version"` dans une PR.
- Toute contribution visible par un utilisateur ou un exploitant doit être ajoutée à
  la section `Non publié` du [CHANGELOG](CHANGELOG.md), dans la rubrique appropriée
  (`Ajouté`, `Modifié`, `Corrigé`, `Sécurité`).

### Dépendances et `yarn.lock`

Le lockfile est versionné et fait partie du contrat de build. Si votre contribution
ajoute ou met à jour une dépendance :

- justifiez-la dans la PR — une dépendance de plus est une surface d'attaque et une
  charge de maintenance de plus ;
- committez le `yarn.lock` régénéré ;
- n'introduisez **pas** de `package-lock.json` : le projet est verrouillé sur yarn, et
  un second arbre de résolution divergerait silencieusement.

## Structure du projet

Le détail figure dans la section [Structure du projet](README.md#structure-du-projet)
du README. En résumé :

- `api/` — client Axios et endpoints
- `components/` — composants React, un par fichier
- `hooks/` — logique réutilisable (session, upload, SSE, édition de page…)
- `store/` — état client Zustand et machine à états
- `i18n/` — configuration i18next et traductions
- `mocks/` — handlers MSW, uniquement actifs quand `MOCK_API=true`
- `demo/` — page hôte de démonstration pour le poste de travail

## Contraintes de build pour les contributeurs externes

Conformément au point 6 (« Isolation ») de la
[charte open source de l'État](charte_open_source.md), voici ce qui est reproductible
hors de l'infrastructure de l'État et ce qui ne l'est pas :

- **Installation et build** — reproductibles : le [`yarn.lock`](yarn.lock) de ce dépôt
  résout les dépendances depuis le registre npm public.
- **Exécution en mode mock** — reproductible et sans aucun service externe : MSW
  simule l'API, la SSE et la progression d'upload.
- **Exécution contre un backend réel** — reproductible en lançant
  [GE-Televerse-Back](https://github.com/republique-et-canton-de-geneve/ge-televerse-back)
  en profil `dev`, que le serveur de développement proxifie sur `/api`.
- **Build de l'image Docker** — reproductible via le [`Dockerfile`](Dockerfile) de ce
  dépôt, qui part d'une image nginx publique. C'est l'image de développement : elle
  sert à exercer l'application en conteneur, pas à produire le livrable déployé.
- **Image de production** — non reproductible : elle est construite par la chaîne
  d'intégration de l'État à partir d'une image de base durcie, hébergée sur un
  registre interne inaccessible depuis l'extérieur. Ce build ne vit pas dans ce dépôt
  (cf. [Où vit la chaîne de build](#où-vit-la-chaîne-de-build)).
- **Thème et police de l'État** — chargés depuis `static.app.ge.ch`, un CDN public.
  Ils sont donc accessibles, mais une coupure réseau se voit immédiatement à l'écran :
  l'application s'affiche sans les tokens de couleur du thème.

### Où vit la chaîne de build

Ce dépôt porte **le code source, sa documentation et son build** — c'est le dépôt de
référence pour toute contribution.

La **chaîne d'intégration interne** (pipeline, image de production, publication de
l'artefact, analyses de sécurité) vit dans un dépôt distinct, non publié, qui
référence celui-ci comme sous-module. Cette séparation existe pour que rien de ce qui
décrit l'infrastructure de l'État — noms de machines, URL de registres, clés de
publication — n'atterrisse dans un dépôt public, conformément au point 3 de la charte.

Conséquence pratique pour un contributeur : `yarn install`, `yarn start` et
`yarn build` sont tout ce dont vous avez besoin ; l'absence de fichier de pipeline ici
n'est pas un oubli.

## Revue

Toute pull request est relue avant fusion. La revue porte sur le comportement,
l'accessibilité, l'impact sur le contrat d'intégration hôte et la sécurité.
Conformément au point 9 de la charte, une attention particulière est portée aux
contributions susceptibles d'introduire une faille — élargissement silencieux des
types de fichiers acceptés, contournement d'une borne côté client, ajout d'une
dépendance non nécessaire, exfiltration de données de session. Ce n'est pas une
présomption de mauvaise foi, c'est la procédure.

Attendez-vous à des allers-retours sur les PR qui touchent au traitement des fichiers
sélectionnés, aux paramètres d'URL ou aux échanges `postMessage` avec la page hôte :
c'est la surface d'attaque de l'application.

## Questions

Ouvrez une issue, ou écrivez au contact technique indiqué dans la section
[Contacts](README.md#contacts) du README.

## Licence

En contribuant, vous acceptez que vos contributions soient publiées sous
[licence Apache 2.0](LICENSE), comme le reste du projet.
