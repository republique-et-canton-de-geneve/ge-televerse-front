# Politique de sécurité

GE-Televerse est l'application par laquelle des usagers photographient et téléversent
des documents dans le cadre de démarches administratives de l'État de Genève. Les
rapports de vulnérabilité sont pris au sérieux et traités en priorité.

## Versions supportées

Seule la dernière version publiée de la ligne `1.1.x` reçoit des correctifs de
sécurité. Les versions antérieures étaient des pré-versions ou des lignes closes et ne
sont plus maintenues.

| Version | Supportée |
|---|---|
| 1.1.x   | ✅ |
| < 1.1   | ❌ |

Il n'y a pas de *backport* vers une version antérieure : un correctif de sécurité est
livré dans la ligne de release en cours, et la mise à jour vers la dernière version
publiée est la voie de remédiation attendue.

## Signaler une vulnérabilité

**N'ouvrez pas d'issue publique et ne décrivez pas la faille dans une pull request.**
Une vulnérabilité rendue publique avant correction expose l'application en production.

Écrivez à l'une des adresses suivantes, de préférence aux deux :

- **Contact technique** — Guillaume Mathe, <guillaume.mathe@etat.ge.ch>
- **Responsable produit** — Bertrand Mercier, <bertrand.mercier@etat.ge.ch>

Merci d'inclure, dans la mesure du possible :

- une description de la faille et de son impact estimé ;
- les étapes de reproduction (URL et paramètres utilisés, séquence d'actions,
  messages `postMessage` échangés, version concernée) ;
- le navigateur, sa version et le système, l'essentiel du parcours se jouant sur
  mobile ;
- toute proposition de correctif ou de contournement.

**Délais.** Un accusé de réception est envoyé sous 5 jours ouvrés. Une première
évaluation (criticité, périmètre, calendrier envisagé) suit sous 15 jours ouvrés.

**Divulgation coordonnée.** Nous vous demandons de laisser un délai raisonnable pour
le déploiement du correctif avant toute publication. Sauf demande contraire de votre
part, votre contribution sera créditée dans les notes de version.

## Traitement des correctifs de vulnérabilité

### Qualification

Chaque signalement est qualifié selon son impact réel sur l'application déployée, pas
selon le score brut d'un outil. Une CVE affectant un paquet présent dans l'arbre de
dépendances mais dont le code n'atteint jamais le bundle livré est traitée en montée
de version de routine ; une faille permettant de détourner une session de
téléversement est traitée en urgence.

Sont considérés comme critiques, sans préjuger des autres cas :

- l'exécution de script arbitraire dans la page (XSS), y compris via un nom de
  fichier, une réponse d'API ou un message `postMessage` ;
- la fuite du **token de session** ou du `documentId` vers une origine tierce — c'est
  ce que protège la poignée de main décrite plus bas ;
- l'accès, depuis une session, aux pages téléversées d'une autre session ;
- toute manipulation côté client permettant d'élargir le quota ou les formats
  acceptés au-delà de ce que le serveur autorise.

### Livraison

- Le correctif est développé dans la ligne de release en cours et livré en version
  **patch** (`1.1.x`), sauf si la correction impose une rupture du contrat
  d'intégration hôte.
- Il est consigné dans le [CHANGELOG](CHANGELOG.md), sous la rubrique `Sécurité` de la
  version concernée, avec la référence CVE lorsqu'elle existe.
- Le message de commit porte le préfixe `fix(sécurité):`, ce qui rend la mesure
  traçable dans l'historique.

### Dépendances

Une application front-end concentre l'essentiel de son risque dans son arbre de
dépendances npm. Celui-ci est **verrouillé par [`yarn.lock`](yarn.lock)**, versionné :
une résolution non reproductible est en soi un problème de sécurité, puisqu'elle
autorise l'introduction silencieuse d'une version compromise.

Les vulnérabilités sont détectées par **Sonatype Nexus IQ**, sur les systèmes internes
de l'État (cf. [SCA](#analyse-de-sécurité--sast-sca-sbom)). Ses constats sont
qualifiés selon les mêmes critères que ci-dessus : c'est l'atteignabilité du code
vulnérable *dans le bundle livré* qui décide de l'urgence, pas le score seul — une
dépendance de développement (Rsbuild, MSW) et une dépendance embarquée dans le bundle
n'ont pas la même portée.

## Analyse de sécurité : SAST, SCA, SBOM

Les analyses sont exécutées par la chaîne d'intégration interne de l'État, à partir
d'un pipeline partagé entre projets. Ni ce pipeline ni sa configuration ne vivent dans
ce dépôt : ils décrivent l'infrastructure et sont donc restés du côté non publié (cf.
[Où vit la chaîne de build](CONTRIBUTING.md#où-vit-la-chaîne-de-build)). Ce dépôt ne
déclare par ailleurs **aucun outil de scan dans son `package.json`** : les scans ne se
déclenchent pas sur un `yarn build` local.

| Type | Outil | Portée | Configuration |
|---|---|---|---|
| **SAST** — analyse statique du code et de la qualité | SonarQube | sources de `src/` | chemins déclarés côté chaîne d'intégration ; coordonnées du serveur et jeton fournis par le pipeline |
| **IaC / conteneur** — analyse de configuration | KICS | Dockerfile de production, manifestes de déploiement | exclusions annotées en clair à l'endroit concerné (`# kics-scan ignore-line`), la règle visée étant citée en commentaire |
| **SCA** — vulnérabilités et licences des dépendances | Sonatype Nexus IQ | dépendances npm, transitives comprises | analyse pilotée par le pipeline partagé, sur les systèmes internes de l'État |
| **SBOM** — nomenclature logicielle | Sonatype Nexus IQ | image applicative et ses dépendances | clé de publication déclarée côté chaîne d'intégration |

SCA et SBOM proviennent donc de la même analyse Nexus IQ : la nomenclature publiée est
celle sur laquelle les vulnérabilités ont été évaluées, ce qui évite l'écart classique
entre l'inventaire déclaré et l'arbre de dépendances réellement scanné.

Le SBOM est produit et publié par la chaîne d'intégration interne ; il n'est pas
committé dans ce dépôt et n'est pas attaché aux tags. Une demande de SBOM pour une
version publiée passe par les [contacts](#signaler-une-vulnérabilité) ci-dessus.

**Limite connue.** Les analyses ci-dessus vivent dans l'infrastructure de l'État : un
contributeur externe n'en dispose pas, et une pull request ouverte depuis l'extérieur
n'en déclenche aucune. Le point 4 de la
[charte open source](charte_open_source.md) demande qu'un code publié soit également
soumis à une analyse accessible depuis l'extérieur de l'OCSIN — typiquement SonarCloud
via une GitHub Action. Cette mise en place reste à faire.

## Gestion des secrets

**Aucun secret ne doit figurer dans ce dépôt, ni dans les sources ni dans
l'historique.** Conformément au point 3 de la
[charte open source](charte_open_source.md), la notion de secret ne se limite pas aux
mots de passe : les noms d'utilisateur, les noms de machine et les URL internes à
l'État en font partie.

Une application front-end mérite une insistance particulière : **tout ce qui est livré
au navigateur est public**, y compris ce qui a été injecté au build. Une clé d'API
placée dans une variable d'environnement de build n'est pas un secret, c'est un secret
publié avec un délai.

### Ce que l'application manipule

- **Le token de session** transite par l'URL et n'est jamais persisté. Il est opaque et
  de durée de vie limitée (TTL côté serveur).
- **La configuration** se réduit à `MOCK_API` et `API_BASE_URL` (cf.
  [README](README.md#configuration)) : aucune des deux n'est sensible, et `API_BASE_URL`
  vaut par défaut le chemin relatif `/api`, l'application étant servie sur la même
  origine que l'API.
- **La langue** n'est pas persistée non plus : elle vient du paramètre `?lang=` à
  chaque chargement, pour qu'un appareil réutilisé ne reste jamais sur la langue de
  l'usager précédent.
- **`sessionStorage`** n'est utilisé que pour la reprise de session par-onglet
  (`SessionCreator`) et par les mocks de développement. Il ne reçoit aucune donnée du
  document téléversé.

### Ce qui est exclu du dépôt

Sont hors de ce dépôt, par construction et non par exclusion : la définition du
pipeline, le Dockerfile de production, le lockfile de la chaîne interne et tout ce qui
nomme l'infrastructure de l'État. Ces éléments vivent dans un dépôt interne distinct
qui référence celui-ci comme sous-module (cf.
[Où vit la chaîne de build](CONTRIBUTING.md#où-vit-la-chaîne-de-build)).

### Si un secret a fuité

Un secret committé doit être considéré comme compromis dès la poussée, y compris après
suppression : l'historique Git le conserve, et un dépôt public est indexé. La marche à
suivre est, dans cet ordre :

1. **Révoquer et faire tourner** le secret concerné — c'est la seule action qui referme
   réellement l'exposition.
2. Signaler la fuite par les [canaux ci-dessus](#signaler-une-vulnérabilité) : un
   secret résiduel relève de la même procédure qu'une vulnérabilité.
3. Purger l'historique. Cette opération réécrit les références et se mène avec l'équipe
   des Moyens de développement (OCSIN-DSOL), comme le prévoit la charte.

Ne vous contentez jamais d'un commit de suppression : il ne retire rien de l'historique
et signale précisément quoi chercher.

## Périmètre

**Dans le périmètre** — le code de ce dépôt et son comportement dans le navigateur :
traitement des fichiers sélectionnés avant envoi, gestion du token et du cycle de vie
de la session, échanges `postMessage` avec la page hôte, poignée de main d'ouverture,
paramètres d'URL, rendu de l'aperçu PDF, et la page de démonstration `src/demo/`.

**Hors périmètre** — ce qui est servi ou opéré ailleurs :

- le **backend**, y compris la validation des fichiers, le scan antivirus, les quotas
  et les contrôles d'accès — signalez-les sur
  [GE-Televerse-Back](https://github.com/republique-et-canton-de-geneve/ge-televerse-back) ;
- le **composant web hôte** embarqué dans les formulaires du poste de travail (une
  copie figée de son bundle est vendorée sous `src/demo/vendor/` pour la seule
  démonstration, cf. [NOTICE](NOTICE)) ;
- le **thème et les polices** servis par `static.app.ge.ch` ;
- les **vulnérabilités des dépendances amont** (à signaler à leur éditeur ;
  signalez-nous néanmoins si ce dépôt fige une version vulnérable) ;
- la **plateforme d'hébergement** et les instances déployées de l'État, qui relèvent
  des canaux internes de l'OCSIN.

Sont également hors périmètre les résultats bruts d'outils automatiques sans preuve
d'exploitabilité, ainsi que les tests de déni de service menés contre une instance en
production.

## Mesures en place

Ces mécanismes sont documentés dans le [README](README.md) ; ce résumé sert à cadrer un
rapport et à éviter les doublons sur des comportements volontaires.

- **Poignée de main d'ouverture à usage unique.** Aucun `postMessage(…, '*')` dans le
  flux, pas même pour l'annonce initiale. Le composant web hôte déclare son origine
  dans l'URL du popup (`?origin=`) : la SPA adresse dès son premier message
  (`televerse-ready`, qui ne porte que le `callbackId` déjà présent dans son URL)
  cette `targetOrigin` précise. Elle attend un `televerse-init` dont elle vérifie que
  la source est bien `window.opener`, que l'origine est celle déclarée et que le
  `callbackId` correspond, puis **verrouille** cette origine ; le message de fin, qui
  porte le `documentId`, lui est adressé. Si l'hôte ne déclare pas son origine ou ne
  répond jamais, la notification est **omise**. Le verrou est définitif pour la
  session : un document hostile chargé plus tard dans l'onglet ouvreur ne peut pas
  devenir la cible (cf. `src/hooks/useOpenerHandshake.js`). Le paramètre `origin`
  n'a pas à être de confiance : `targetOrigin` est imposée par le navigateur, donc
  une valeur falsifiée empêche la livraison au lieu de la détourner.
- **Profil de taille non falsifiable.** Le profil de session est dérivé côté serveur de
  l'`Origin` du formulaire hôte. Le paramètre d'URL `sizeProfile` est déprécié et sans
  effet : un usager ne peut plus s'attribuer un quota supérieur.
- **Le client n'est pas l'autorité.** Le filtrage des types de fichiers et les bornes
  affichées sont du confort d'interface. Le serveur revalide tout — type réel par
  *magic bytes*, taille, nombre de pages, antivirus. Un contournement de la seule
  vérification côté client n'est pas en soi une vulnérabilité ; un contournement des
  contrôles serveur en est une, et relève du dépôt backend.
- **Aucune persistance des données de session.** Le token vit dans l'URL, les pages
  téléversées vivent côté serveur. Rien du contenu des documents n'est écrit dans le
  stockage local du navigateur.
- **Origine unique.** L'application est servie sur la même origine que son API
  (`/api`), ce qui évite tout élargissement CORS. Les seules ressources externes sont
  le thème et les polices de l'État, sur le CDN public `static.app.ge.ch`.
- **Bundle de production sans *source maps*.** `yarn build` les désactive
  explicitement.
- **Mocks strictement conditionnés.** MSW n'est démarré que si `MOCK_API === 'true'`,
  valeur substituée au build ; le worker n'est donc pas enregistré en production.
