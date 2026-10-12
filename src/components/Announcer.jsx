import React, { useEffect, useState } from 'react';

// Région live unique de l'application. Les changements qui n'ont AUCUN écho
// visuel dédié (une page ajoutée à la liste, une page supprimée, un
// déplacement au clavier) sont invisibles pour un lecteur d'écran : le DOM
// change sans que rien ne soit annoncé. `announce()` y pousse la phrase à lire.
// Idem pour un écran qui remplace tout l'arbre (SuccessScreen) : sa propre
// région live naîtrait déjà remplie, et ne serait donc pas annoncée.
//
// Volontairement hors du store : ce n'est pas de l'état métier (aucun rendu
// n'en dépend), et les appelants sont autant des hooks non-React (mutations
// TanStack) que des composants. Un abonné unique suffit — <Announcer /> est
// monté une seule fois, à la racine, pour survivre aux changements d'écran.
//
// Les erreurs ne passent PAS par ici : elles s'affichent dans <Alert kind="error">
// qui porte role="alert" et est donc déjà annoncée.
let subscriber = null;
let pending = null;

export const announce = (message) => {
    if (!message) return;
    if (subscriber) subscriber(message);
    // Émis avant le montage de <Announcer /> : on garde le dernier message.
    else pending = message;
};

const Announcer = () => {
    // `seq` : un lecteur d'écran n'annonce que si le TEXTE du nœud change.
    // Deux messages identiques d'affilée (deux suppressions du même nom, deux
    // déplacements successifs) resteraient donc muets — l'espace insécable
    // alterné force une différence sans être vocalisé ni visible (un espace
    // ordinaire serait rogné par le calcul du texte accessible).
    const [{ text, seq }, setState] = useState({ text: '', seq: 0 });

    useEffect(() => {
        subscriber = (message) => setState((s) => ({ text: message, seq: s.seq + 1 }));
        if (pending) {
            const message = pending;
            pending = null;
            subscriber(message);
        }
        return () => { subscriber = null; };
    }, []);

    return (
        <div className="sr-only" role="status" aria-live="polite" aria-atomic="true">
            {seq % 2 === 0 ? text : `${text} `}
        </div>
    );
};

export default Announcer;
