# Vendored third-party bundles

Files here are pinned copies of external build artifacts, checked in so the
demo builds and runs without outbound network access. **Do not edit them by
hand** — replace the whole file from its upstream source.

## `ge-televerse.js`

The `<ge-televerse>` web component (from
`ge-theme/packages/webcomponents/ge-televerse`).

- **Upstream:** `https://static.app.ge.ch/webcomponents/ge-televerse/latest/ge-televerse.js`
- **Vendored:** 2026-09-09 — ge-theme 1.4.3, taken from the CDN's
  pre-production channel: prod still serves an older build, without the `origin`
  parameter in the popup URL (cf. `src/hooks/useOpenerHandshake.js`). Refresh
  from the upstream URL above once prod catches up.

### Why it's here

The platform CDN is unreachable from our UAT environment (no outbound network),
so we serve a pinned copy from our own origin, which also keeps the page within
its CSP (`script-src` limited to self + the État de Genève CDN).

It is a single self-contained ESM bundle: one `export { … as GeTeleverse }`,
registers the `ge-televerse` custom element via Lit's `@customElement`
decorator, and talks to the backend at runtime (`spa-url` + `/api`). It also
tries to `import()` `https://static.app.ge.ch/scripts/breakpoints.js` for
responsive breakpoints, but falls back to `matchMedia` when that CDN is
unreachable, so it works fully offline.

### How to update / remove

- **Refresh** to a newer build: overwrite this file from the upstream URL and
  update the date + sha256 above.
- **Remove** once the prod CDN is reachable from every environment: delete this
  file, drop its `import` from `../index.js`, and put a
  `<script type="module" src="https://…/ge-televerse.js">` tag back in
  `../index.html`, pointing at the prod CDN. (A CDN URL cannot be an `import`:
  the bundler would try to resolve it at build time.)
