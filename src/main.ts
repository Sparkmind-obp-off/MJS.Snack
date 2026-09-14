import './styles.css'
import { business, categories, faqs, portfolioDisclaimer, products, type Product } from './data/content.ts'

type Cart = Record<string, number>

type State = {
  category: string
  query: string
  cart: Cart
  activeProduct: Product | null
  cartOpen: boolean
}

const state: State = {
  category: 'all',
  query: '',
  cart: readCart(),
  activeProduct: null,
  cartOpen: false,
}

const app = document.querySelector<HTMLDivElement>('#app')!
const liveRegion = document.querySelector<HTMLDivElement>('#live-region')!

function readCart(): Cart {
  try {
    return JSON.parse(localStorage.getItem('mjs-inquiry') || '{}') as Cart
  } catch {
    return {}
  }
}

function persistCart() {
  localStorage.setItem('mjs-inquiry', JSON.stringify(state.cart))
}

function icon(name: 'arrow' | 'bag' | 'search' | 'close' | 'minus' | 'plus' | 'copy' | 'menu' | 'check'): string {
  const paths = {
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    bag: '<path d="M6 8h12l-1 12H7L6 8Z"/><path d="M9 9V6a3 3 0 0 1 6 0v3"/>',
    search: '<circle cx="11" cy="11" r="6"/><path d="m16 16 4 4"/>',
    close: '<path d="m6 6 12 12M18 6 6 18"/>',
    minus: '<path d="M6 12h12"/>',
    plus: '<path d="M12 6v12M6 12h12"/>',
    copy: '<rect x="8" y="8" width="11" height="12" rx="2"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
    check: '<path d="m5 12 4 4L19 6"/>',
  }
  return `<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${paths[name]}</svg>`
}

function productVisual(product: Product, large = false): string {
  const pieces = Array.from({ length: large ? 12 : 8 }, (_, index) => `<i style="--i:${index}" aria-hidden="true"></i>`).join('')
  return `<div class="product-visual visual-${product.visual} ${large ? 'is-large' : ''}" style="--accent:${product.accent}" role="img" aria-label="Ilustrasi demo ${product.name}">
    <span class="visual-label">MJS</span><div class="snack-pieces">${pieces}</div><small>visual demo</small>
  </div>`
}

function cartCount(): number {
  return Object.values(state.cart).reduce((sum, quantity) => sum + quantity, 0)
}

function summaryText(): string {
  const lines = products
    .filter((product) => state.cart[product.id])
    .map((product) => `- ${product.name} — ${state.cart[product.id]} ${product.unit}`)
  if (!lines.length) return 'Belum ada produk dalam daftar inquiry.'
  return `Halo Mitra Jaya Snack, saya ingin menanyakan:\n${lines.join('\n')}\n\nMohon info harga, ketersediaan, dan cara pemesanannya.`
}

function filteredProducts(): Product[] {
  const normalized = state.query.trim().toLowerCase()
  return products.filter((product) => {
    const categoryMatch = state.category === 'all' || product.category === state.category
    const queryMatch = !normalized || `${product.name} ${product.description} ${product.categoryLabel}`.toLowerCase().includes(normalized)
    return categoryMatch && queryMatch
  })
}

function productCard(product: Product): string {
  return `<article class="product-card">
    <button class="product-visual-button" data-detail="${product.id}" aria-label="Lihat detail ${product.name}">${productVisual(product)}</button>
    <div class="product-card-body">
      <div class="card-meta"><span>${product.categoryLabel}</span><span class="demo-chip">Konten demo</span></div>
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <div class="product-actions">
        <button class="text-button" data-detail="${product.id}">Lihat detail</button>
        <button class="icon-button add-button" data-add="${product.id}" aria-label="Tambah ${product.name} ke inquiry">${icon('plus')}</button>
      </div>
    </div>
  </article>`
}

function render() {
  const visibleProducts = filteredProducts()
  const count = cartCount()
  app.innerHTML = `
    <header class="site-header" id="site-header">
      <a class="brand" href="#top" aria-label="MJS kembali ke atas"><span class="brand-mark">M</span><span><strong>${business.shortName}</strong><small>Portfolio concept</small></span></a>
      <nav class="desktop-nav" aria-label="Navigasi utama"><a href="#tentang">Tentang konsep</a><a href="#catalog">Katalog</a><a href="#cara-kerja">Cara kerja</a><a href="#faq">FAQ</a></nav>
      <div class="header-actions">
        <button class="cart-trigger" data-open-cart aria-label="Buka inquiry, ${count} item">${icon('bag')}<span>Inquiry</span><b>${count}</b></button>
        <button class="menu-trigger" data-menu aria-expanded="false" aria-controls="mobile-nav" aria-label="Buka navigasi">${icon('menu')}</button>
      </div>
      <nav class="mobile-nav" id="mobile-nav" aria-label="Navigasi seluler" hidden><a href="#tentang">Tentang konsep</a><a href="#catalog">Katalog</a><a href="#cara-kerja">Cara kerja</a><a href="#faq">FAQ</a></nav>
    </header>

    <main id="main-content">
      <section class="hero" id="top">
        <div class="hero-copy">
          <p class="eyebrow"><span></span> Konsep pengalaman digital MJS</p>
          <h1>Camilan pilihan,<br/><em>lebih mudah ditemukan.</em></h1>
          <p class="hero-lead">Sebuah demo katalog yang dirancang untuk membantu pelanggan menjelajah pilihan dan menyusun kebutuhan snack sebelum menghubungi bisnis.</p>
          <div class="hero-actions"><a class="primary-button" href="#catalog">Jelajahi katalog ${icon('arrow')}</a><button class="secondary-button" data-open-cart>Lihat inquiry <span>${count}</span></button></div>
          <p class="hero-note">Produk pada halaman ini bersifat ilustratif dan bukan katalog resmi MJS.</p>
        </div>
        <div class="hero-art" aria-label="Komposisi ilustrasi kemasan camilan demo">
          <div class="sun-shape"></div><div class="leaf leaf-one"></div><div class="leaf leaf-two"></div>
          <div class="pack pack-back"><span>MJS</span><b>ragam<br/>rasa</b><small>DEMO</small></div>
          <div class="pack pack-front"><span>MJS</span><b>teman<br/>ngemil</b><small>DEMO PRODUCT</small></div>
          <div class="bowl"><i></i><i></i><i></i><i></i><i></i><i></i></div>
          <span class="art-caption">Visual dibuat sebagai placeholder — siap diganti foto produk resmi</span>
        </div>
      </section>

      <section class="trust-strip" aria-label="Nilai pengalaman">
        <p><span>01</span><strong>Temukan pilihan</strong><small>Eksplorasi dengan kategori dan pencarian</small></p>
        <p><span>02</span><strong>Susun kebutuhan</strong><small>Pilih produk dan atur jumlah inquiry</small></p>
        <p><span>03</span><strong>Siap ditanyakan</strong><small>Salin ringkasan untuk tindak lanjut</small></p>
      </section>

      <section class="value-section" id="tentang">
        <div class="section-heading"><p class="eyebrow"><span></span> Lebih dari etalase</p><h2>Dari melihat-lihat<br/>menjadi <em>siap bertanya.</em></h2></div>
        <div class="value-copy"><p>Calon pelanggan tidak hanya membutuhkan daftar produk. Mereka perlu cara yang sederhana untuk memahami pilihan, mencatat kebutuhan, lalu memulai percakapan dengan konteks yang jelas.</p><p>Demo ini memvisualkan alur tersebut tanpa mengklaim sebagai sistem pemesanan resmi.</p></div>
        <div class="value-card"><span class="value-card-number">MJS / 01</span><div class="value-icon">${icon('bag')}</div><h3>Satu alur yang terasa ringan</h3><p>Cari, lihat detail, tambah ke inquiry, atur jumlah, lalu salin ringkasannya.</p></div>
      </section>

      <section class="catalog-section" id="catalog">
        <div class="catalog-intro"><div><p class="eyebrow light"><span></span> Katalog ilustratif</p><h2>Temukan inspirasi<br/><em>camilanmu.</em></h2></div><p>Nama dan visual produk di bawah adalah contoh untuk mendemonstrasikan pengalaman. Data resmi dapat menggantikannya nanti.</p></div>
        <div class="catalog-toolbar">
          <div class="category-tabs" role="group" aria-label="Filter kategori">${categories.map((category) => `<button class="category-tab ${state.category === category.id ? 'active' : ''}" data-category="${category.id}">${category.label}</button>`).join('')}</div>
          <label class="search-field"><span class="sr-only">Cari produk demo</span>${icon('search')}<input id="product-search" type="search" value="${escapeHtml(state.query)}" placeholder="Cari contoh produk..." autocomplete="off"/></label>
        </div>
        <div class="results-meta"><span>${visibleProducts.length} contoh produk</span><small>Semua ditandai sebagai konten demo</small></div>
        <div class="product-grid">${visibleProducts.length ? visibleProducts.map(productCard).join('') : `<div class="empty-result"><h3>Belum ada yang cocok</h3><p>Coba kata kunci atau kategori lain.</p><button class="text-button" data-clear-filter>Reset pencarian</button></div>`}</div>
      </section>

      <section class="steps-section" id="cara-kerja">
        <div class="section-heading centered"><p class="eyebrow"><span></span> Cara kerja demo</p><h2>Tiga langkah menuju<br/><em>inquiry yang jelas.</em></h2></div>
        <ol class="steps-list">
          <li><span>01</span><div class="step-illustration step-browse">${icon('search')}</div><h3>Jelajahi</h3><p>Cari dan filter contoh produk berdasarkan kebutuhan.</p></li>
          <li><span>02</span><div class="step-illustration step-build">${icon('plus')}</div><h3>Susun</h3><p>Tambahkan pilihan lalu atur jumlah yang ingin ditanyakan.</p></li>
          <li><span>03</span><div class="step-illustration step-copy">${icon('copy')}</div><h3>Salin</h3><p>Buat ringkasan rapi untuk dibawa ke kanal resmi saat terverifikasi.</p></li>
        </ol>
        <div class="inline-inquiry"><div><span class="demo-chip">Simulasi inquiry</span><h3>Sudah menemukan yang menarik?</h3><p>Buka daftar kebutuhanmu. Ini belum menjadi pesanan dan tidak dikirim otomatis.</p></div><button class="primary-button cream" data-open-cart>Buka inquiry (${count}) ${icon('arrow')}</button></div>
      </section>

      <section class="faq-section" id="faq">
        <div class="section-heading"><p class="eyebrow"><span></span> Pertanyaan penting</p><h2>Transparan sejak<br/><em>awal percakapan.</em></h2></div>
        <div class="faq-list">${faqs.map((faq, index) => `<details ${index === 0 ? 'open' : ''}><summary>${faq.question}<span>${icon('plus')}</span></summary><p>${faq.answer}</p></details>`).join('')}</div>
      </section>

      <section class="contact-section">
        <p class="eyebrow light"><span></span> Kanal resmi belum tersedia</p><h2>Siap melanjutkan ketika<br/><em>datanya terverifikasi.</em></h2><p>Nomor WhatsApp, alamat, jam operasional, dan kanal sosial belum ditampilkan karena belum ada sumber resmi yang terkonfirmasi.</p><button class="secondary-button light" data-open-cart>Siapkan ringkasan inquiry</button>
      </section>
    </main>

    <footer class="site-footer">
      <div class="footer-top"><a class="brand footer-brand" href="#top"><span class="brand-mark">M</span><span><strong>MJS</strong><small>Mitra Jaya Snack</small></span></a><p>Konsep pengalaman katalog yang hangat, jujur, dan siap diisi konten bisnis terverifikasi.</p><a href="#catalog">Katalog</a><a href="#faq">FAQ</a></div>
      <aside class="disclaimer"><strong>Portfolio concept</strong><p>${portfolioDisclaimer}</p></aside>
      <div class="footer-bottom"><span>© 2026 MJS Portfolio Demo</span><span>Bukan sistem order resmi</span></div>
    </footer>

    ${renderDrawer()}
    ${state.activeProduct ? renderModal(state.activeProduct) : ''}
  `
  bindEvents()
  if (state.cartOpen) requestAnimationFrame(() => document.querySelector<HTMLElement>('.drawer-close')?.focus())
  if (state.activeProduct) requestAnimationFrame(() => document.querySelector<HTMLElement>('.modal-close')?.focus())
}

function renderDrawer(): string {
  const cartProducts = products.filter((product) => state.cart[product.id])
  return `<div class="drawer-layer ${state.cartOpen ? 'open' : ''}" aria-hidden="${!state.cartOpen}">
    <button class="drawer-backdrop" data-close-cart aria-label="Tutup inquiry"></button>
    <aside class="inquiry-drawer" role="dialog" aria-modal="true" aria-labelledby="inquiry-title">
      <header><div><span class="demo-chip">Bukan pesanan</span><h2 id="inquiry-title">Inquiry kamu</h2></div><button class="icon-button drawer-close" data-close-cart aria-label="Tutup inquiry">${icon('close')}</button></header>
      <div class="drawer-body">
        ${cartProducts.length ? `<div class="cart-list">${cartProducts.map((product) => `<article class="cart-item">${productVisual(product)}<div><span>${product.categoryLabel}</span><h3>${product.name}</h3><div class="quantity-control" aria-label="Jumlah ${product.name}"><button data-decrease="${product.id}" aria-label="Kurangi ${product.name}">${icon('minus')}</button><strong>${state.cart[product.id]}</strong><button data-increase="${product.id}" aria-label="Tambah ${product.name}">${icon('plus')}</button><small>${product.unit}</small></div></div><button class="remove-button" data-remove="${product.id}">Hapus</button></article>`).join('')}</div>
        <div class="summary-box"><label for="inquiry-summary">Ringkasan yang dapat disalin</label><textarea id="inquiry-summary" readonly>${summaryText()}</textarea></div>` : `<div class="empty-cart"><div class="empty-cart-icon">${icon('bag')}</div><h3>Daftar inquiry masih kosong</h3><p>Tambahkan contoh produk dari katalog untuk mulai menyusun kebutuhan.</p><button class="primary-button" data-close-cart data-scroll-catalog>Jelajahi katalog</button></div>`}
      </div>
      ${cartProducts.length ? `<footer class="drawer-footer"><p><strong>${cartCount()} item</strong> dalam ${cartProducts.length} pilihan</p><button class="primary-button full" data-copy>${icon('copy')} Salin ringkasan</button><button class="reset-button" data-reset>Reset daftar</button><small>Ringkasan tidak dikirim otomatis. Gunakan hanya setelah kanal resmi MJS terverifikasi.</small></footer>` : ''}
    </aside>
  </div>`
}

function renderModal(product: Product): string {
  return `<div class="modal-layer open"><button class="modal-backdrop" data-close-modal aria-label="Tutup detail"></button><article class="product-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
    <button class="icon-button modal-close" data-close-modal aria-label="Tutup detail">${icon('close')}</button>
    ${productVisual(product, true)}
    <div class="modal-content"><div class="card-meta"><span>${product.categoryLabel}</span><span class="demo-chip">Konten demo</span></div><h2 id="modal-title">${product.name}</h2><p>${product.detail}</p><dl><div><dt>Status data</dt><dd>Ilustratif, belum terverifikasi</dd></div><div><dt>Satuan demo</dt><dd>${product.unit}</dd></div><div><dt>Harga & ketersediaan</dt><dd>Perlu dikonfirmasi</dd></div></dl><button class="primary-button full" data-add="${product.id}">${icon('plus')} Tambah ke inquiry</button><small>Menambahkan produk tidak membuat pesanan.</small></div>
  </article></div>`
}

function escapeHtml(value: string): string {
  return value.replace(/[&<>'"]/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#039;', '"': '&quot;' })[character]!)
}

function announce(message: string) {
  liveRegion.textContent = message
}

function updateCart(productId: string, quantity: number) {
  const product = products.find((item) => item.id === productId)
  if (!product) return
  if (quantity <= 0) delete state.cart[productId]
  else state.cart[productId] = Math.min(quantity, 99)
  persistCart()
  announce(`${product.name}: ${state.cart[productId] || 0} ${product.unit} dalam inquiry`)
  render()
}

async function copySummary() {
  try {
    await navigator.clipboard.writeText(summaryText())
    announce('Ringkasan inquiry berhasil disalin')
    const button = document.querySelector<HTMLButtonElement>('[data-copy]')
    if (button) {
      button.innerHTML = `${icon('check')} Ringkasan tersalin`
      button.classList.add('success')
    }
  } catch {
    const textarea = document.querySelector<HTMLTextAreaElement>('#inquiry-summary')
    textarea?.select()
    document.execCommand('copy')
    announce('Ringkasan inquiry disalin dengan metode alternatif')
  }
}

function bindEvents() {
  document.querySelectorAll<HTMLElement>('[data-open-cart]').forEach((button) => button.addEventListener('click', () => { state.cartOpen = true; render() }))
  document.querySelectorAll<HTMLElement>('[data-close-cart]').forEach((button) => button.addEventListener('click', () => { state.cartOpen = false; render() }))
  document.querySelectorAll<HTMLElement>('[data-detail]').forEach((button) => button.addEventListener('click', () => { state.activeProduct = products.find((product) => product.id === button.dataset.detail) || null; render() }))
  document.querySelectorAll<HTMLElement>('[data-close-modal]').forEach((button) => button.addEventListener('click', () => { state.activeProduct = null; render() }))
  document.querySelectorAll<HTMLElement>('[data-add]').forEach((button) => button.addEventListener('click', () => { const id = button.dataset.add!; state.activeProduct = null; updateCart(id, (state.cart[id] || 0) + 1) }))
  document.querySelectorAll<HTMLElement>('[data-increase]').forEach((button) => button.addEventListener('click', () => updateCart(button.dataset.increase!, (state.cart[button.dataset.increase!] || 0) + 1)))
  document.querySelectorAll<HTMLElement>('[data-decrease]').forEach((button) => button.addEventListener('click', () => updateCart(button.dataset.decrease!, (state.cart[button.dataset.decrease!] || 0) - 1)))
  document.querySelectorAll<HTMLElement>('[data-remove]').forEach((button) => button.addEventListener('click', () => updateCart(button.dataset.remove!, 0)))
  document.querySelectorAll<HTMLButtonElement>('[data-category]').forEach((button) => button.addEventListener('click', () => { state.category = button.dataset.category!; render(); document.querySelector('#catalog')?.scrollIntoView({ block: 'start' }) }))
  document.querySelector<HTMLInputElement>('#product-search')?.addEventListener('input', (event) => { state.query = (event.target as HTMLInputElement).value; render(); const input = document.querySelector<HTMLInputElement>('#product-search'); input?.focus(); input?.setSelectionRange(state.query.length, state.query.length) })
  document.querySelector('[data-clear-filter]')?.addEventListener('click', () => { state.query = ''; state.category = 'all'; render() })
  document.querySelector('[data-copy]')?.addEventListener('click', copySummary)
  document.querySelector('[data-reset]')?.addEventListener('click', () => { state.cart = {}; persistCart(); announce('Daftar inquiry dikosongkan'); render() })
  document.querySelector('[data-scroll-catalog]')?.addEventListener('click', () => setTimeout(() => document.querySelector('#catalog')?.scrollIntoView(), 50))
  document.querySelector<HTMLElement>('[data-menu]')?.addEventListener('click', (event) => { const button = event.currentTarget as HTMLButtonElement; const nav = document.querySelector<HTMLElement>('#mobile-nav')!; const open = button.getAttribute('aria-expanded') === 'true'; button.setAttribute('aria-expanded', String(!open)); nav.hidden = open })
  document.querySelectorAll('.mobile-nav a').forEach((link) => link.addEventListener('click', () => { const nav = document.querySelector<HTMLElement>('#mobile-nav'); if (nav) nav.hidden = true }))
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    if (state.activeProduct) { state.activeProduct = null; render() }
    else if (state.cartOpen) { state.cartOpen = false; render() }
  }
})

render()
