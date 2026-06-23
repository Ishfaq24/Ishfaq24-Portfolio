# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  # Ishfaq Portfolio

  Production-ready README for the Ishfaq portfolio application built with React, TypeScript and Vite.

  **Project:** ishfaq-portfolio

  **Stack:** React 19, TypeScript, Vite

  **Purpose:** Personal portfolio site intended for static hosting (Netlify, Vercel, Cloudflare Pages, S3+CloudFront, etc.).

  **Quick start**

  - Install: `npm install`
  - Run dev server: `npm run dev`
  - Build for production: `npm run build`
  - Preview production build locally: `npm run preview`

  Prerequisites

  - Node.js 18+ (LTS recommended)
  - npm (or yarn/pnpm)

  Environment

  - Build is configured via Vite. Production output lives in the `dist/` directory after `npm run build`.
  - If you need runtime environment variables, follow Vite rules: prefix public vars with `VITE_` and add them to your hosting provider's environment configuration.

  Scripts (from package.json)

  - `dev` — start Vite dev server with HMR
  - `build` — produce an optimized production bundle
  - `build:dev` — build with the `development` mode
  - `preview` — serve the production build locally
  - `lint` — run ESLint
  - `format` — run Prettier

  Production build & deploy

  1. Run `npm ci` (or `npm install`) in CI/host.
  2. Run `npm run build` to generate the static site in `dist/`.
  3. Deploy the contents of `dist/` to your static host.

  Recommended hosting and settings

  - Vercel / Netlify / Cloudflare Pages: connect repo, set build command `npm run build`, publish directory `dist`.
  - S3 + CloudFront: upload `dist/`, set appropriate caching headers and enable gzip/brotli on the CDN.
  - Ensure `index.html` fallback (SPA) is enabled on the host so client-side routing works.

  Performance & production hardening

  - Enable compression (gzip/brotli) at CDN or server level.
  - Cache static assets aggressively and use cache-busting (Vite handles hashed filenames).
  - Set appropriate Content Security Policy (CSP) headers for production.
  - Serve assets over HTTPS and enable HSTS.
  - Audit bundle size with `vite build --report` or use `rollup-plugin-visualizer` during CI.

  CI example (GitHub Actions)

  Create `.github/workflows/deploy.yml` with a minimal flow:

  ```yaml
  name: Build and Deploy
  on: [push]
  jobs:
    build:
      runs-on: ubuntu-latest
      steps:
        - uses: actions/checkout@v4
        - uses: actions/setup-node@v4
          with:
            node-version: '18'
        - run: npm ci
        - run: npm run build
        # Add deploy step for your chosen host here (e.g., Vercel/Netlify action)
  ```

  Testing & quality

  - Lint: `npm run lint`
  - Format: `npm run format`
  - Add unit/integration tests as needed (Jest / Vitest / Playwright) and run them in CI before deploy.

  Troubleshooting

  - If routing 404s occur on refresh, enable SPA fallback on your host.
  - If missing assets or incorrect paths appear, confirm `base` is correctly set in `vite.config.ts` for non-root deployments.

  Contributing

  - Create a branch, make changes, run `npm run lint` and `npm run format`, then open a PR.

  License

  - This repository contains personal portfolio code; add a LICENSE file if you want an explicit license.

  More information

  - See `package.json` for the list of dependencies and available scripts.
