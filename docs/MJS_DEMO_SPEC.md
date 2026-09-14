# MJS Snack — Demo Website / System Specification

**Project:** Mitra Jaya Snack (MJS)
**Type:** Portfolio Demo / Concept
**Phase:** MVP Demo
**Status:** Ready for implementation

## 1. Product Intent

MJS Demo bukan sekadar landing-page template. Demo harus menunjukkan bagaimana digital experience dapat membantu calon pelanggan:

- mengenal bisnis;
- menemukan produk dengan cepat;
- memahami pilihan;
- menyusun kebutuhan/order intent;
- menghubungi bisnis dengan konteks yang sudah jelas.

Core principle:

`Business Observation → Customer Journey → Digital Experience → Validation`

## 2. Scope

### In scope

- responsive home page;
- hero/value proposition;
- category navigation;
- product catalog demo;
- product detail interaction;
- search/filter client-side;
- inquiry cart/order-intent builder client-side;
- order summary;
- CTA contact/order;
- location section when verified, otherwise neutral placeholder;
- FAQ/demo guidance;
- portfolio disclaimer;
- accessible mobile navigation;
- SEO basics;
- reusable content model;
- static deployment readiness.

### Out of scope

- real inventory;
- real-time stock;
- payment gateway;
- customer accounts;
- admin dashboard;
- database;
- order database;
- authenticated WhatsApp backend;
- automatic invoice;
- logistics integration;
- reseller portal;
- supplier/distributor management;
- analytics platform;
- AI chatbot;
- multi-tenant architecture.

## 3. Recommended Information Architecture

### `/`

Primary experience:

1. Header/navigation
2. Hero
3. Why/Value proposition
4. Product categories
5. Featured products
6. Catalog/search
7. How ordering works
8. Inquiry/order-intent builder
9. FAQ
10. Location/contact (verified data only)
11. Portfolio disclaimer
12. Footer

A separate `/catalog` route is optional only if the implementation benefits from it. Do not create routes merely for architecture theater.

## 4. Core User Flow

`Landing → Category → Product → Add to Inquiry → Adjust Quantity → Review → Contact/Order CTA`

The inquiry cart is not a real order. It represents **intent to order** and produces a copyable/shareable summary for manual follow-up.

Example summary:

```text
Halo Mitra Jaya Snack, saya ingin menanyakan:
- Produk A — 10 pcs
- Produk B — 5 pcs

Mohon info harga, ketersediaan, dan cara pemesanannya.
```

Do not send this automatically unless an actual verified contact channel exists and the implementation explicitly supports it.

## 5. Content Model

Keep business content separate from UI code.

Suggested TypeScript model:

```ts
export type Product = {
  id: string
  name: string
  category: string
  description: string
  image?: string
  price?: number
  priceLabel?: string
  unit?: string
  availability?: 'available' | 'inquiry' | 'unknown'
  verified: boolean
}
```

Use `verified: false` for demo data. Never imply a demo price is a real MJS price.

## 6. Product Presentation Rules

If actual MJS products/assets are unavailable:

- use clearly marked demo products;
- avoid invented brand claims;
- avoid fake prices presented as real;
- avoid fake stock numbers;
- avoid fake testimonials;
- avoid fake customer counts;
- avoid fabricated certifications.

A visually complete demo is acceptable. A factually misleading demo is not.

## 7. Visual Direction

Target feeling:

**warm, appetizing, trustworthy, local-business-first, easy to order.**

Avoid:

- generic AI SaaS gradients;
- excessive glassmorphism;
- corporate enterprise styling;
- over-animated interfaces;
- template-looking sections;
- fake urgency;
- fabricated badges.

Use strong product photography when legitimate assets are available. Until then, structure the layout so real assets can be dropped in without changing the architecture.

## 8. UX Requirements

### Mobile-first

Primary actions must be thumb-friendly:

- Catalog
- Search
- Add to inquiry
- Review inquiry
- Contact/order
- Location when available

### Accessibility

- semantic HTML;
- keyboard navigation;
- visible focus state;
- sufficient contrast;
- alt text;
- reduced-motion support;
- skip link;
- no interaction dependent only on hover.

## 9. Technical Direction

Preferred baseline:

- TypeScript;
- Vite;
- lightweight React or existing repo stack;
- vanilla CSS or a lightweight styling system;
- static client-side data;
- Cloudflare Pages-compatible build.

If the repo has no implementation, choose the smallest maintainable stack. Do not introduce a backend.

## 10. Content States

The UI should distinguish:

- `Verified business content`
- `Demo content`
- `Not yet verified`

Example:

> Harga ditampilkan sebagai contoh demo dan belum merupakan harga resmi MJS.

## 11. Portfolio Disclaimer

Keep this visible near the footer:

> **Portfolio concept:** Website ini merupakan konsep/demo digital experience yang dibuat untuk kebutuhan portfolio berdasarkan observasi publik. Website ini bukan website resmi Mitra Jaya Snack kecuali dinyatakan secara eksplisit oleh pihak MJS.

## 12. Acceptance Criteria

### Experience

- [ ] Visitor understands what MJS is within the first viewport.
- [ ] Visitor can browse categories without confusion.
- [ ] Visitor can search/filter the catalog.
- [ ] Visitor can inspect a product.
- [ ] Visitor can add products to inquiry intent.
- [ ] Visitor can change quantities and remove items.
- [ ] Visitor can generate a clear order inquiry summary.
- [ ] Visitor can find the next contact/order action when verified data exists.

### Integrity

- [ ] No fabricated price is presented as official.
- [ ] No fabricated operating hours.
- [ ] No fabricated contact details.
- [ ] No fabricated reviews/testimonials.
- [ ] No fabricated certifications.
- [ ] No false claim that MJS commissioned or operates the website.

### Quality

- [ ] Mobile responsive.
- [ ] Desktop responsive.
- [ ] Keyboard accessible.
- [ ] Reduced motion supported.
- [ ] No console errors.
- [ ] Production build succeeds.
- [ ] Images have meaningful alt text or are correctly decorative.
- [ ] No secrets in repository.

## 13. Definition of Done

MJS Demo is done when it is:

1. visually credible;
2. genuinely interactive;
3. useful as a portfolio artifact;
4. safe to show to the business;
5. easy to replace with verified MJS content;
6. deployable to Cloudflare Pages;
7. clearly separated from a production ordering system.

## 14. Future Upgrade Path

Only after real business validation:

`Demo → Verified Content → WhatsApp/Contact Integration → Real Catalog → Order Capture → Admin → Inventory/Operations`

Do not build these now.
