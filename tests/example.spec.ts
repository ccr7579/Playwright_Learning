import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
}); 

const test = {
  name: 'test',
  key: 'Test@123',
  password: 'Test@123',
  email: 'test@test.com',
  phone: '1234567890',
  address: '123 Main St, Anytown, USA',
  city: 'Anytown',
  state: 'CA',
  zip: '12345',
  country: 'USA',
}