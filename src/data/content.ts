export type SourceStatus = 'VERIFIED' | 'DEMO' | 'MISSING'

export type Product = {
  id: string
  name: string
  category: string
  categoryLabel: string
  description: string
  detail: string
  unit: string
  availability: 'inquiry' | 'unknown'
  verified: boolean
  source: SourceStatus
  accent: string
  visual: 'chips' | 'sticks' | 'rings' | 'crackers' | 'mix' | 'sweet'
  featured?: boolean
}

export const business = {
  name: 'Mitra Jaya Snack',
  shortName: 'MJS',
  description: 'Konsep pengalaman katalog yang membantu calon pelanggan menjelajah pilihan camilan dan menyiapkan pertanyaan order dengan lebih rapi.',
  contentStatus: 'DEMO' as SourceStatus,
  contact: null,
  address: null,
  hours: null,
}

export const categories = [
  { id: 'all', label: 'Semua pilihan', note: 'Lihat seluruh contoh katalog' },
  { id: 'gurih', label: 'Gurih', note: 'Pilihan rasa asin dan berbumbu' },
  { id: 'renyah', label: 'Renyah', note: 'Tekstur ringan untuk teman bersantai' },
  { id: 'manis', label: 'Manis', note: 'Inspirasi camilan bercita rasa manis' },
  { id: 'campur', label: 'Paket campur', note: 'Contoh susunan kebutuhan beragam' },
] as const

export const products: Product[] = [
  {
    id: 'demo-keripik-rempah',
    name: 'Keripik Rempah',
    category: 'gurih',
    categoryLabel: 'Gurih',
    description: 'Contoh produk keripik dengan profil rasa berbumbu.',
    detail: 'Produk ilustratif untuk menunjukkan bagaimana foto, deskripsi, satuan, dan pilihan jumlah dapat tampil saat katalog MJS telah diverifikasi.',
    unit: 'bungkus',
    availability: 'inquiry',
    verified: false,
    source: 'DEMO',
    accent: '#d76b32',
    visual: 'chips',
    featured: true,
  },
  {
    id: 'demo-stik-bawang',
    name: 'Stik Bawang',
    category: 'renyah',
    categoryLabel: 'Renyah',
    description: 'Contoh camilan berbentuk stik dengan tekstur renyah.',
    detail: 'Nama dan visual ini hanya konten demonstrasi. Detail bahan, varian rasa, ukuran kemasan, dan ketersediaan perlu dikonfirmasi langsung oleh MJS.',
    unit: 'bungkus',
    availability: 'unknown',
    verified: false,
    source: 'DEMO',
    accent: '#d8a329',
    visual: 'sticks',
    featured: true,
  },
  {
    id: 'demo-cincin-crispy',
    name: 'Cincin Crispy',
    category: 'renyah',
    categoryLabel: 'Renyah',
    description: 'Contoh produk berbentuk cincin untuk variasi katalog.',
    detail: 'Produk ilustratif ini membantu memvisualkan alur inspeksi produk dan penambahan kebutuhan ke daftar inquiry.',
    unit: 'bungkus',
    availability: 'inquiry',
    verified: false,
    source: 'DEMO',
    accent: '#e2a024',
    visual: 'rings',
  },
  {
    id: 'demo-kerupuk-pilihan',
    name: 'Kerupuk Pilihan',
    category: 'gurih',
    categoryLabel: 'Gurih',
    description: 'Contoh kelompok kerupuk dengan informasi yang ringkas.',
    detail: 'Jenis, komposisi, berat, dan klaim produk sengaja tidak dicantumkan karena belum ada data resmi yang terverifikasi.',
    unit: 'bungkus',
    availability: 'unknown',
    verified: false,
    source: 'DEMO',
    accent: '#bf633b',
    visual: 'crackers',
  },
  {
    id: 'demo-kacang-manis',
    name: 'Kacang Manis',
    category: 'manis',
    categoryLabel: 'Manis',
    description: 'Contoh ide camilan manis dalam susunan katalog demo.',
    detail: 'Ini bukan konfirmasi bahwa MJS menjual produk tersebut. Konten dapat diganti dari satu data layer setelah katalog resmi tersedia.',
    unit: 'bungkus',
    availability: 'unknown',
    verified: false,
    source: 'DEMO',
    accent: '#a85a3e',
    visual: 'sweet',
  },
  {
    id: 'demo-paket-kenalan',
    name: 'Paket Kenalan',
    category: 'campur',
    categoryLabel: 'Paket campur',
    description: 'Contoh bundel untuk menyusun inquiry beberapa pilihan.',
    detail: 'Paket ini hanya menggambarkan kemungkinan presentasi bundel. Isi, harga, minimum order, dan ketersediaan belum ditentukan oleh MJS.',
    unit: 'paket',
    availability: 'inquiry',
    verified: false,
    source: 'DEMO',
    accent: '#476b45',
    visual: 'mix',
    featured: true,
  },
]

export const faqs = [
  {
    question: 'Apakah produk dan harga di website ini resmi?',
    answer: 'Belum. Seluruh produk yang tampil saat ini adalah konten ilustratif untuk mendemonstrasikan pengalaman katalog. Harga tidak ditampilkan karena belum ada data resmi yang terverifikasi.',
  },
  {
    question: 'Apakah daftar inquiry ini langsung menjadi pesanan?',
    answer: 'Tidak. Daftar inquiry hanya membantu Anda menyusun kebutuhan dan menghasilkan ringkasan yang dapat disalin untuk tindak lanjut manual.',
  },
  {
    question: 'Mengapa belum ada tombol WhatsApp atau alamat?',
    answer: 'Kanal kontak dan lokasi resmi belum terverifikasi. Demo ini sengaja tidak membuat tautan atau data kontak palsu.',
  },
  {
    question: 'Bisakah katalog asli dimasukkan nanti?',
    answer: 'Bisa. Konten bisnis disimpan terpisah dari komponen antarmuka, sehingga produk, foto, kategori, dan kontak terverifikasi dapat diganti tanpa membangun ulang pengalaman utama.',
  },
]

export const portfolioDisclaimer = 'Website ini merupakan konsep/demo digital experience yang dibuat untuk kebutuhan portfolio berdasarkan observasi publik. Website ini bukan website resmi Mitra Jaya Snack kecuali dinyatakan secara eksplisit oleh pihak MJS.'
