// Entrée de la page de démonstration. Elle n'existe que pour fixer un ORDRE.
//
// Côté Parcel, l'ordre venait de la place des balises dans index.html : deux
// modules dans <head>, un script classique dans <body> — donc exécuté au fil de
// l'analyse, avant tous les modules, qui sont différés — puis un dernier module
// en fin de <body>. rsbuild injecte UNE balise pour le bundle : l'ordre est
// désormais celui de ces imports, qu'un module ES évalue de haut en bas.
//
// Le bundle entier est différé (`<script defer>`), donc le DOM est analysé quand
// la première ligne s'exécute : `init.js` trouve bien son élément.

// 1. AVANT tout le reste. Pose `spa-url` sur <ge-televerse> tant que l'élément
//    n'est pas encore « upgradé » : posé après, l'attribut ne se propage pas de
//    façon fiable à l'instance Lit, dont le premier rendu reste désactivé.
import './init.js';

// 2. Thème M3E et tous ses composants, servis depuis notre propre origine.
//    Remplace l'ancien <script src="https://esm.run/@m3e/web@…">, dont les
//    chargements transitifs depuis cdn.jsdelivr.net violaient la CSP de la
//    plateforme (`connect-src 'self'`, script-src limité à self + le CDN de
//    l'État).
import './m3e.js';

// 3. Le web component <ge-televerse>, copie figée (cf. vendor/README.md). Doit
//    suivre init.js — c'est son `customElements.define` qui déclenche l'upgrade.
import './vendor/ge-televerse.js';

// 4. Les styles de la page.
import './styles.css';

// 5. La logique de la démonstration, qui suppose les trois précédents en place.
import './app.js';
