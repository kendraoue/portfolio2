# Kendra Portfolio — React migration

A React 19 + Vite rewrite of `kendraoue/portfolio2` (Vue 3), preserving its desktop/mobile navigation model, draggable windows, About expansion, project slideshow, live clock, external links, and résumé controls.

## Run

```bash
npm install
npm run dev
npm run build
```

## Assets

This export uses the original repository's public GitHub Raw URLs for visual assets, fonts not required for functionality, and `Resume.pdf`. This avoids distributing modified copies of the original binary files here. **For an offline/self-contained deployment, copy `src/assets/images/` and `public/` from the original repository into this project's `public/` and change `asset()` / `publicAsset()` in `src/data.js` to local `/` paths.** The image files and résumé currently require an internet connection.

## Migration notes

- `App.vue` resize condition → React `App` + resize listener.
- Vue refs/reactivity → React state and effects.
- `useDraggable` → pointer-driven window header drag, persisted positions under original localStorage keys `about-pos`, `projects-pos`, etc. (original keys were `box1-pos` … `box4-pos`; see note below).
- `vue3-carousel` → simple accessible React slideshow with circular navigation.
- `pdf-vue3` → native browser PDF iframe, with open/download links.
- Keeps 3-second initial About opening and mouse wheel expansion, with an explicit expansion button for accessibility.

The original desktop page included a fourth draggable element without a sidebar launcher. The migrated `extras` window remains in code for reference but is not exposed in navigation.

## Verification

Run `npm run build` in an environment with npm registry access. This environment did not have network/DNS access to download packages, so an actual Vite production build could not be completed here.
