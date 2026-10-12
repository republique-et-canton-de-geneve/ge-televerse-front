// M3E theme + all components, bundled locally and served from our own origin.
// Replaces the former `https://esm.run/@m3e/web@2.3.2/{theme,all}` script tags,
// whose transitive loads from cdn.jsdelivr.net violated the platform CSP
// (`connect-src 'self'`, script-src limited to self + the État de Genève CDN).
// The main app self-hosts M3E the same way (see src/index.js).
import '@m3e/web/theme';
import '@m3e/web/all';
