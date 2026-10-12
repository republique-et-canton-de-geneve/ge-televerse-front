// Démo standalone — formulaire d'inscription qui utilise <ge-televerse>
// pour la pièce justificative. Pas de soumission réelle : on affiche
// simplement un récapitulatif avec la référence du document renvoyée
// par le web component.

const form = document.getElementById('registration-form');
const televerse = document.getElementById('id-proof');
const submitBtn = document.getElementById('submit-btn');
const attachmentStatus = document.getElementById('attachment-status');
const attachmentStatusLabel = document.getElementById('attachment-status-label');
const successPane = document.getElementById('success');
const successName = document.getElementById('success-name');
const successDocId = document.getElementById('success-doc-id');
const restartBtn = document.getElementById('restart-btn');

// spa-url is set by init.js, the first import of this page's bundle, before
// the module that registers <ge-televerse> upgrades the element — see index.js.

// Language picker (demo only): the web component has no `lang` attribute — it
// reads the HOST page's `<html lang>` and carries it to the SPA popup as
// `?lang=`, which i18next reads. So the demo switches the page language itself
// rather than decorating `spa-url` (the component would overwrite a `lang` put
// there anyway). Empty value ("Par défaut") → back to `fr`, the SPA's own
// default. `spa-url` is left untouched, so the upload button never re-disables.
const langSelect = document.getElementById('lang-select');

langSelect?.addEventListener('change', () => {
    document.documentElement.lang = langSelect.value || 'fr'; // '' | fr | en | de | it | pt
});

// Variant remap: ge-televerse's bundled m3e-button predates the rename
// `tonal` → `filled-tonal`. Once ge-televerse renders its internal button
// with the new name, the older bundled CSS has no rule for it and the
// button paints transparent. Rewrite the attribute back to `tonal` so the
// bundled styling applies. Re-run on each Lit update of ge-televerse.
const remapTeleverseButton = () => {
    const btn = televerse.shadowRoot?.querySelector('m3e-button[variant="filled-tonal"]');
    if (btn) btn.setAttribute('variant', 'tonal');
};
customElements.whenDefined('ge-televerse').then(() => {
    remapTeleverseButton();
    new MutationObserver(remapTeleverseButton)
        .observe(televerse.shadowRoot, { childList: true, subtree: true, attributes: true });
});

let documentId = null;

televerse.addEventListener('televerse-complete', (e) => {
    documentId = e.detail.documentId;
    attachmentStatus.hidden = false;
    attachmentStatusLabel.textContent = `Document reçu — réf. ${documentId}`;
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!form.reportValidity()) return;

    if (!documentId) {
        attachmentStatus.hidden = false;
        attachmentStatusLabel.textContent = "Veuillez d'abord téléverser vos documents.";
        return;
    }

    const data = new FormData(form);
    const firstName = data.get('firstName')?.trim() || '';
    const lastName = data.get('lastName')?.trim() || '';

    form.hidden = true;
    successPane.hidden = false;
    successName.textContent = `${firstName} ${lastName}`.trim();
    successDocId.textContent = documentId;
});

// m3e-button doesn't implicitly trigger form submission — wire it up
// to the form's submit event so the browser still runs reportValidity.
submitBtn.addEventListener('click', () => {
    form.requestSubmit();
});

restartBtn.addEventListener('click', () => {
    form.reset();
    documentId = null;
    attachmentStatus.hidden = true;
    attachmentStatusLabel.textContent = '';
    successPane.hidden = true;
    form.hidden = false;
});
