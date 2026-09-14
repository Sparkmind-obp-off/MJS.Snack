# MJS Snack — Deployment Plan

## Target

**Cloudflare Pages project:** `mjs-snack-demo`

**Expected Pages URL:** `https://mjs-snack-demo.pages.dev`

This is the planned deployment identity. The URL becomes live only after the app is implemented and successfully deployed to Cloudflare Pages.

## Repository

GitHub repository:

`Sparkmind-obp-off/MJS.Snack`

Default branch:

`main`

## Build Contract

Recommended:

- Framework: Vite + TypeScript + lightweight React
- Build command: `npm run build`
- Output directory: `dist`
- Node version: current LTS supported by the chosen dependency set

If Genspark selects a compatible equivalent, preserve the same static-build contract.

## Cloudflare Pages

Create/connect a Cloudflare Pages project named:

`mjs-snack-demo`

Connect the GitHub repository:

`Sparkmind-obp-off/MJS.Snack`

Production branch:

`main`

The deployment must remain a static portfolio demo. No server secrets, database credentials, or production API keys are required for the MVP.

## Pre-Deploy Checklist

- [ ] `npm install` succeeds
- [ ] `npm run build` succeeds
- [ ] `dist/` is generated
- [ ] no console errors
- [ ] mobile layout checked
- [ ] desktop layout checked
- [ ] inquiry flow checked
- [ ] no fake MJS contact data
- [ ] no fake official prices
- [ ] portfolio disclaimer visible
- [ ] no secrets committed

## Post-Deploy Checklist

- [ ] `https://mjs-snack-demo.pages.dev` responds
- [ ] home page loads
- [ ] client-side interactions work
- [ ] direct refresh does not break the primary route
- [ ] mobile experience checked on deployed URL
- [ ] no mixed-content or asset-loading errors
- [ ] deployment SHA recorded in project notes

## Custom Domain

A custom domain such as `mjs.snack` / `mjs-snack` branded domain may be considered later only if it is actually owned and configured. Do not claim a custom domain is live until verified.

## Important

`mjs-snack-demo.pages.dev` is a **planned demo URL**, not an assertion that deployment already exists.
