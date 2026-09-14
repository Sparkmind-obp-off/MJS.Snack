# MJS — Content & Asset Contract

## Purpose

Dokumen ini mencegah implementasi mengarang data bisnis. Semua konten MJS harus memiliki status sumber.

## Source Status

| Status | Meaning | UI use |
|---|---|---|
| `VERIFIED` | Dikonfirmasi dari kanal resmi atau pihak bisnis | Boleh tampil sebagai fakta |
| `PUBLIC_UNVERIFIED` | Ditemukan publik tetapi identitas/kebenarannya belum cukup kuat | Jangan tampil sebagai fakta |
| `DEMO` | Konten buatan untuk menunjukkan UX | Harus diberi konteks bila berpotensi disalahpahami |
| `MISSING` | Belum tersedia | Placeholder/omit |

## Business Fields

| Field | Default | Rule |
|---|---|---|
| name | Mitra Jaya Snack | Known target name |
| tagline | Demo placeholder | Do not invent official slogan |
| description | Demo placeholder | Do not claim official copy |
| address | missing | Never invent |
| phone | missing | Never invent |
| WhatsApp | missing | Never invent |
| Instagram | missing | Never invent |
| hours | missing | Never invent |
| maps URL | missing | Only verified URL |

## Product Fields

Every demo product must carry metadata indicating whether it is real or illustrative.

```ts
{
  id,
  name,
  category,
  description,
  image,
  price,
  priceLabel,
  unit,
  availability,
  verified,
  source
}
```

If `verified === false`, the UI must not use language such as:

- harga resmi;
- stok tersedia;
- produk unggulan MJS;
- bestseller;
- paling laris;
- tersedia setiap hari.

## Images

Priority:

1. assets supplied by the user/business;
2. assets explicitly licensed for project use;
3. neutral placeholder assets;
4. generated/demo imagery only when clearly treated as concept content.

Do not scrape and republish random business/customer photos merely because they appear in search results.

## Contact CTA Contract

If no verified contact channel exists, use a non-fake CTA such as:

> Simulasikan permintaan order

or:

> Hubungi MJS setelah kanal resmi dikonfirmasi

Do not create a fake `wa.me` link.

## Disclaimer Contract

Until business adoption is confirmed, keep the portfolio disclaimer visible.

## Content Replacement Principle

Implementation must make later replacement cheap:

- content in a single data layer;
- assets in a predictable directory;
- no hard-coded product facts across components;
- no architecture change required when real catalog data arrives.
