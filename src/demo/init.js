// Set spa-url before the ge-televerse module upgrades the element. Setting
// it later doesn't propagate to the bundled Lit instance reliably (the first
// render sticks with disabled). Hence its place: FIRST import of the page
// bundle (see index.js), so it runs before the module that registers the
// custom element. The whole bundle is deferred, so the DOM is parsed by then.
document.getElementById('id-proof')
    .setAttribute('spa-url', window.location.origin);
