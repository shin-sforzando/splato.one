import { test } from '@playwright/test'

test('/', async ({ page }, testInfo) => {
  const now = new Date()
  await page.goto('/')
  await page.screenshot({
    path: testInfo.outputPath(`${now.toLocaleString('sv').replace(/\D/g, '')}.png`),
    fullPage: true,
  })
})
