# MJS — Business Observation & Validation Notes

**Project:** Mitra Jaya Snack (MJS)
**Repository:** `Sparkmind-obp-off/MJS.Snack`
**Status:** Pre-build observation / portfolio-demo research
**Last updated:** 2026-09-14

## 1. Purpose

Dokumen ini menjadi sumber kebenaran sebelum implementasi demo. Tujuannya bukan mengklaim memahami seluruh operasi MJS, tetapi memisahkan:

- fakta publik yang cukup kuat;
- sinyal/lead yang masih perlu verifikasi;
- asumsi desain yang boleh dipakai untuk demo;
- informasi yang sengaja tidak boleh dibuat-buat.

Prinsip utama: **observe → model customer journey → demo → validate with business**.

## 2. Public Research Snapshot

Pencarian publik menemukan beberapa hasil yang menyebut nama "Mitra Jaya Snack", tetapi hasilnya belum cukup untuk mengikat seluruh detail tersebut ke satu entitas bisnis MJS yang dimaksud user.

### Lead A — Masaran, Sragen

Sebuah dokumen akademik yang membahas lokasi/site menyebut label "Mitra Jaya Snack" pada area Jl. Maospati Solo-Sragen, Gebang, Masaran, Sragen. Dokumen tersebut juga menyebut label pada peta sebagai "Tutup sementara" pada saat sumber dibuat.

**Classification:** `LEAD / NOT VERIFIED`

Jangan menjadikan alamat, status buka, luas lahan, atau detail site tersebut sebagai fakta produk tanpa verifikasi langsung.

### Lead B — Online references

Pencarian juga menemukan beberapa halaman yang memakai nama serupa atau entitas berbeda. Tidak ada bukti yang cukup untuk memastikan bahwa halaman-halaman tersebut adalah kanal resmi MJS yang dimaksud.

**Classification:** `UNVERIFIED / DO NOT IMPORT`

## 3. What We Know

Saat ini yang benar-benar diketahui untuk proyek ini hanya:

- brand target: **Mitra Jaya Snack / MJS**;
- target output: website/demo system untuk portfolio dan validasi bisnis;
- repository disediakan oleh user;
- demo harus dibuat tanpa memalsukan fakta operasional.

## 4. What We Do NOT Know Yet

Jangan mengarang atau mengunci data berikut sebelum ada sumber/konfirmasi:

- alamat final;
- nomor WhatsApp/telepon;
- Instagram/TikTok/Facebook resmi;
- jam operasional;
- kategori produk aktual;
- daftar produk dan SKU;
- harga;
- minimum order;
- layanan grosir/reseller/distributor;
- delivery/cakupan pengiriman;
- pembayaran;
- status halal/PIRT/BPOM/sertifikasi;
- jumlah pelanggan/mitra;
- testimoni;
- klaim kualitas/kapasitas produksi;
- status hubungan demo dengan bisnis.

## 5. Safe Demo Positioning

Selama belum ada persetujuan bisnis, website harus diposisikan sebagai:

> **Portfolio concept / digital experience demo for Mitra Jaya Snack.**

Gunakan disclaimer yang jelas:

> **Portfolio concept:** Website ini merupakan konsep/demo digital experience yang dibuat untuk kebutuhan portfolio berdasarkan observasi publik. Website ini bukan website resmi Mitra Jaya Snack kecuali dinyatakan secara eksplisit oleh pihak MJS.

## 6. Initial Customer Journey Hypothesis

Ini adalah hipotesis UX, bukan fakta operasi MJS:

`Discover MJS → Explore snack catalog → Understand product → Choose quantity/need → Request order → Confirm via business channel → Visit/receive`

Jika MJS ternyata lebih cocok untuk grosir, reseller, hampers, oleh-oleh, event, atau B2B, journey dapat diganti setelah validasi.

## 7. Demo Strategy

Phase pertama harus tetap ringan:

1. polished landing page;
2. product/category exploration;
3. product cards dengan status data yang jelas;
4. catalog interaction;
5. order-intent builder / inquiry cart client-side;
6. CTA menuju kanal kontak hanya jika kanal tersebut terverifikasi;
7. location section hanya jika lokasi terverifikasi;
8. mobile-first presentation;
9. visible portfolio disclaimer.

Tidak perlu database, login, payment, inventory real-time, admin panel, atau WhatsApp backend pada fase demo.

## 8. Validation Gate Before Real-Business Claims

Sebelum demo dipresentasikan sebagai solusi bisnis:

- [ ] identitas MJS terkonfirmasi;
- [ ] minimal satu kanal resmi terkonfirmasi;
- [ ] produk/kategori terkonfirmasi;
- [ ] harga atau mekanisme quote terkonfirmasi;
- [ ] CTA order yang benar terkonfirmasi;
- [ ] penggunaan logo/foto/aset mendapat izin bila diperlukan;
- [ ] disclaimer tetap ada sampai demo resmi diadopsi.

## 9. Research Rule

Jika informasi tidak dapat dibuktikan, gunakan placeholder atau label `Demo content` daripada mengisi data fiktif.

**Do not optimize for looking complete. Optimize for being trustworthy.**
