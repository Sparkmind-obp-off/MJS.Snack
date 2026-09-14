# MJS — Mitra Jaya Snack Portfolio Demo

Demo pengalaman digital untuk **Mitra Jaya Snack (MJS)** yang memvisualkan alur:

`Discover MJS → Explore Catalog → Inspect Product → Build Inquiry → Review → Copy for Follow-up`

> **Portfolio concept:** Website ini merupakan konsep/demo digital experience yang dibuat untuk kebutuhan portfolio berdasarkan observasi publik. Website ini bukan website resmi Mitra Jaya Snack kecuali dinyatakan secara eksplisit oleh pihak MJS.

## Status

- **Tahap:** MVP portfolio demo selesai dan aktif
- **Platform:** Cloudflare Pages
- **Stack:** TypeScript, Vite, HTML semantik, CSS, Playwright
- **Penyimpanan:** `localStorage` browser hanya untuk draft inquiry
- **Database/backend:** Tidak digunakan
- **Repository:** https://github.com/Sparkmind-obp-off/MJS.Snack
- **Produksi:** https://mjs-snack-demo.pages.dev
- **Terakhir diperbarui:** 2026-09-14

## Fitur yang Selesai

- Landing page responsif dengan identitas visual hangat dan product-first
- Navigasi desktop dan menu mobile
- Katalog produk ilustratif dari typed centralized data layer
- Filter kategori dan pencarian client-side
- Modal detail produk
- Inquiry cart client-side
- Kontrol tambah, kurang, hapus, dan reset jumlah
- Ringkasan inquiry otomatis dan aksi salin ke clipboard
- FAQ, status kontak yang jujur, disclaimer portfolio, serta footer
- SEO dasar, favicon, metadata Open Graph, skip link, focus state, dan reduced-motion
- Pengujian E2E desktop/mobile dengan Playwright

## URI dan Entry Point

| URI | Fungsi | Parameter |
|---|---|---|
| `/` | Pengalaman utama MJS demo | Tidak ada |
| `/#tentang` | Penjelasan nilai konsep | Hash navigation |
| `/#catalog` | Katalog, pencarian, dan filter | State client-side |
| `/#cara-kerja` | Alur penggunaan demo | Hash navigation |
| `/#faq` | FAQ dan transparansi konten | Hash navigation |

Tidak ada endpoint API karena MVP ini sepenuhnya statis.

## Arsitektur Data

Konten bisnis terpisah dari logika antarmuka di `src/data/content.ts`.

Model produk memuat:

- identitas dan kategori;
- deskripsi dan detail;
- satuan;
- status ketersediaan;
- status verifikasi;
- sumber konten;
- metadata visual demo.

Semua produk saat ini memakai `verified: false` dan `source: 'DEMO'`. Draft inquiry disimpan lokal pada perangkat pengguna dengan key `mjs-inquiry`; tidak ada data yang dikirim ke server.

## Cara Menjalankan

```bash
npm install
npm run dev
```

Buka `http://localhost:3000`.

Untuk preview produksi:

```bash
npm run build
npm run preview
```

## Pengujian

```bash
npm run check
npm run build
npm run test:e2e
```

Playwright menguji alur katalog, detail produk, inquiry cart, perubahan jumlah, penghapusan item, clipboard, console/page errors, dan navigasi mobile.

## Panduan Penggunaan

1. Pilih kategori atau gunakan pencarian pada bagian katalog.
2. Buka detail produk untuk membaca status datanya.
3. Tambahkan produk ilustratif ke inquiry.
4. Atur jumlah dari drawer inquiry.
5. Salin ringkasan kebutuhan untuk simulasi tindak lanjut manual.

Ringkasan tidak dikirim otomatis dan tidak mewakili pesanan resmi.

## Batasan Konten

Belum ada data terverifikasi untuk:

- katalog dan foto produk resmi;
- harga dan ketersediaan;
- nomor telepon atau WhatsApp;
- alamat dan peta;
- jam operasional;
- kanal media sosial;
- klaim produk, sertifikasi, testimoni, atau status kemitraan.

Karena itu, demo tidak menampilkan kontak palsu, tautan `wa.me`, harga, stok, atau klaim bisnis resmi.

## Belum Diimplementasikan

Sesuai scope MVP, proyek ini tidak memiliki login, admin, payment, database, inventory real-time, CRM, chatbot, reseller portal, atau integrasi pengiriman.

## Langkah Verifikasi Berikutnya

1. Konfirmasi identitas dan persetujuan MJS.
2. Peroleh katalog, foto, deskripsi, satuan, dan kategori resmi.
3. Verifikasi minimal satu kanal kontak serta lokasi resmi.
4. Konfirmasi aturan harga/quote dan mekanisme pemesanan.
5. Dapatkan izin penggunaan logo serta aset bisnis.
6. Pertahankan disclaimer sampai adopsi resmi dikonfirmasi.

## Deployment Cloudflare Pages

Konfigurasi tersedia pada `wrangler.jsonc` dengan output build `dist/`.

```bash
npm run build
npx wrangler pages project create mjs-snack-demo --production-branch main
npx wrangler pages deploy dist --project-name mjs-snack-demo
```

Deploy tidak memerlukan secret, database, atau environment variable.

## Dokumen Sumber

- `docs/MJS_BUSINESS_OBSERVATION.md`
- `docs/MJS_DEMO_SPEC.md`
- `docs/MJS_CONTENT_AND_ASSET_CONTRACT.md`
- `docs/MJS_DEPLOYMENT_PLAN.md`

Dokumen tersebut tetap menjadi sumber kebenaran untuk keputusan konten dan ruang lingkup.
