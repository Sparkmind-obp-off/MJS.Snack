import { expect, test } from '@playwright/test'

test.beforeEach(async ({ page, context }) => {
  await context.grantPermissions(['clipboard-read', 'clipboard-write'])
  await page.goto('/')
  await page.evaluate(() => localStorage.clear())
  await page.reload()
})

test('journey katalog sampai menyalin inquiry berfungsi', async ({ page }) => {
  const errors: string[] = []
  page.on('pageerror', (error) => errors.push(error.message))
  page.on('console', (message) => {
    if (message.type() === 'error') errors.push(message.text())
  })

  await expect(page.getByRole('heading', { name: /Camilan pilihan/i })).toBeVisible()
  await expect(page.getByText('Portfolio concept', { exact: true }).last()).toBeVisible()

  await page.getByRole('button', { name: 'Manis', exact: true }).click()
  await expect(page.locator('.product-card')).toHaveCount(1)
  await expect(page.getByRole('heading', { name: 'Kacang Manis' })).toBeVisible()

  await page.getByRole('button', { name: 'Semua pilihan' }).click()
  await page.getByPlaceholder('Cari contoh produk...').fill('rempah')
  await expect(page.locator('.product-card')).toHaveCount(1)

  await page.getByRole('button', { name: 'Lihat detail Keripik Rempah' }).click()
  await expect(page.getByRole('dialog', { name: 'Keripik Rempah' })).toBeVisible()
  await page.getByRole('button', { name: /Tambah ke inquiry/ }).click()

  await page.getByRole('button', { name: /Buka inquiry, 1 item/ }).click()
  await expect(page.getByRole('dialog', { name: 'Inquiry kamu' })).toBeVisible()
  await expect(page.locator('#inquiry-summary')).toContainText('Keripik Rempah — 1 bungkus')

  await page.getByRole('button', { name: 'Tambah Keripik Rempah', exact: true }).click()
  await expect(page.locator('#inquiry-summary')).toContainText('Keripik Rempah — 2 bungkus')
  await page.getByRole('button', { name: 'Salin ringkasan' }).click()
  await expect(page.getByRole('button', { name: 'Ringkasan tersalin' })).toBeVisible()
  expect(await page.evaluate(() => navigator.clipboard.readText())).toContain('Keripik Rempah — 2 bungkus')

  await page.getByRole('button', { name: 'Hapus' }).click()
  await expect(page.getByText('Daftar inquiry masih kosong')).toBeVisible()
  expect(errors).toEqual([])
})

test('navigasi seluler dan layout katalog dapat digunakan', async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== 'mobile', 'Khusus viewport mobile')
  await page.getByRole('button', { name: 'Buka navigasi' }).click()
  await expect(page.locator('#mobile-nav')).toBeVisible()
  await page.locator('#mobile-nav').getByRole('link', { name: 'Katalog' }).click()
  await expect(page.locator('#catalog')).toBeInViewport()
  await expect(page.locator('.product-grid')).toBeVisible()
  await expect(page.locator('body')).not.toHaveCSS('overflow-x', 'scroll')
})
