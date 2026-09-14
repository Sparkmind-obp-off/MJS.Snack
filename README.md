# MJS — Mitra Jaya Snack Demo

Portfolio demo / digital experience concept for **Mitra Jaya Snack (MJS)**.

## Status

**Phase:** Demo specification complete → ready for Genspark implementation.

Repository is intentionally kept lightweight. The first objective is to create a convincing business-facing demo, not a production ordering platform.

## Core Journey

`Discover → Catalog → Product → Inquiry → Review → Contact/Order`

## Documentation

- [`docs/MJS_BUSINESS_OBSERVATION.md`](docs/MJS_BUSINESS_OBSERVATION.md) — public research, validation notes, known/unknown facts
- [`docs/MJS_DEMO_SPEC.md`](docs/MJS_DEMO_SPEC.md) — canonical MVP/demo specification
- [`docs/MJS_CONTENT_AND_ASSET_CONTRACT.md`](docs/MJS_CONTENT_AND_ASSET_CONTRACT.md) — content integrity and asset rules
- [`docs/MJS_GENSPARK_MASTER_SYSTEM_PROMPT.md`](docs/MJS_GENSPARK_MASTER_SYSTEM_PROMPT.md) — paste-ready Genspark implementation prompt

## Important

This project is a **portfolio concept** unless and until Mitra Jaya Snack explicitly adopts or commissions it.

Do not fabricate:

- prices;
- contact numbers;
- opening hours;
- inventory;
- testimonials;
- certifications;
- customer counts;
- official social accounts;
- business claims.

## Implementation Direction

Preferred deployment target: Cloudflare Pages.

Preferred stack when starting from the empty repository:

- TypeScript
- Vite
- lightweight React when useful
- CSS
- static client-side data

No database or backend is required for the MVP demo.

## Next Step

Open `docs/MJS_GENSPARK_MASTER_SYSTEM_PROMPT.md` in Genspark and implement the demo in this repository.

After implementation, validate the result against `docs/MJS_DEMO_SPEC.md` before deploying.
