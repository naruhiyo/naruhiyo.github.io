import { test, expect } from '@playwright/test';

for (const { path, selector } of [
  { path: '/', selector: '.page-home' },
  { path: '/collaborators', selector: '.page-collaborators' },
  { path: '/products', selector: '.page-products' },
  { path: '/activities', selector: '.page-activities' },
  { path: '/contact', selector: '.page-contact' }
]) {
  test(`loads ${path}`, async ({ page }) => {
    await page.goto(`/#${path}`);
    await expect(page.locator(selector)).toBeVisible({ timeout: 10000 });
  });
}

test('navigates via header links', async ({ page }) => {
  await page.addInitScript(() => {
    window.localStorage.setItem('locale', 'en');
  });
  await page.goto('/#/');
  const nav = page.getByRole('navigation', { name: 'primary navigation' });
  for (const [label, path] of [
    ['Members', '/collaborators'],
    ['Products', '/products'],
    ['Activities', '/activities'],
    ['Contact', '/contact'],
    ['Home', '/']
  ]) {
    await nav.getByRole('link', { name: label }).click();
    await expect(page).toHaveURL(new RegExp(`/#${path}$`));
  }
});

test('renders contact email', async ({ page }) => {
  await page.goto('/#/contact');
  await expect(page.locator('.contact-email')).toBeVisible();
});
