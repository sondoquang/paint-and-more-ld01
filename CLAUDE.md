# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Static marketing site ("OneCoat for Kids") built with Vite + `vite-plugin-handlebars`. Vanilla CSS and JS — no framework, no TypeScript. Content language is Vietnamese.

## Commands

```bash
npm install       # first-time setup
npm run dev       # dev server on http://localhost:5173 (auto-opens)
npm run build     # outputs static site to dist/
npm run preview   # serve dist/ locally
```

There is no test suite, no linter, and no type-checker configured — do not invent commands for them.

Deploy target is the `dist/` folder only; do not publish source.

## Architecture

### HTML composition via Handlebars partials

`index.html` is a thin shell that inlines partials with `{{> name }}` / `{{> sections/name }}`. Vite resolves them at build time via `vite-plugin-handlebars` (see `vite.config.js`), with `reloadOnPartialChange: true` so edits in `partials/` hot-reload. Partials live in `partials/` (header, footer) and `partials/sections/` (per-section markup). To add a new section, create its partial file and register it with `{{> sections/<name> }}` in `index.html`.

### Two flavors of partials

- **Static partials**: markup is authored directly in the `.html` (e.g. `hero`, `timeline`, `dangers`, `product-detail`). Any interactivity is attached by a matching `scripts/<name>.js`.
- **JS-rendered skeletons**: the partial ships an empty container marked with a `data-*` hook (e.g. `<ul data-testimonials>`, `<ul data-pricing>`, `<ul data-products>`, `<div data-faq>`), and a script in `scripts/` renders list items from `data/*.json`. These JSON files are imported as ES modules — Vite bundles + fingerprints them, so there is no runtime `fetch`.

### Script boot sequence

`scripts/main.js` is the single entry (referenced from `index.html`). It imports each section's `init*` function and calls them all inside `boot()`, which runs on `DOMContentLoaded`. Every `init*` function is defensive: it looks up its root via a `data-*` selector and returns silently if not present, so sections can be added/removed from `index.html` without touching `main.js` (as long as the init call is idempotent on a missing root). When adding a new interactive section, export `init<Name>()` from `scripts/<name>.js` and register it in `main.js`.

### Data + JS rendering contract

When a section is data-driven, the convention is:

1. Partial provides a container with a `data-<name>` attribute.
2. Script imports `../data/<name>.json` (static ES-module import — not `fetch`).
3. Script renders items into the container; any UI state (e.g. pricing monthly/yearly toggle) is managed locally inside the `init*` closure.

`scripts/pricing.js` is a useful reference — it re-renders the list in-place when the period toggle changes. `scripts/testimonials.js` shows the responsive-carousel pattern (recomputes `visible()` count from `window.innerWidth` and clamps on resize).

### CSS organization

`styles/main.css` is the single entry and only `@import`s other stylesheets in layering order: tokens → base → primitives → header/footer → per-section files. Design tokens (colors, fonts, spacing, container width, `--header-h`, easing) are all in `styles/tokens.css` as `:root` custom properties — changing a token propagates everywhere, so prefer token edits over ad-hoc values.

Several sections share a stylesheet rather than having their own:
- `sections/section-2col.css` — voc, health, lungs, creativity, japandi, investment
- `sections/section-cards.css` — world-choices, pricing, products
- `sections/section-banner.css` — quote, journey (start-journey), stats

When adding a new section, first check if one of these shared files already fits; only create a new `sections/<name>.css` (and register it in `main.css`) if the layout is genuinely novel.

### Assets

Static assets go in `public/` and are referenced with absolute paths (e.g. `/img/logo-paint-and-more.svg`). Fonts (Roboto, Pacifico) are loaded from Google Fonts in `index.html`'s `<head>`.
