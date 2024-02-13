import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByLabel('Search').click();
  await page.getByPlaceholder('Search docs').fill('Locators');
  await page.getByRole('link', { name: 'More Locators​ Locators' }).click();
  await page.getByRole('link', { name: 'other locators', exact: true }).click();
  await expect(page.getByRole('article')).toContainText(
    'We recommend prioritizing user-visible locators like text or accessible role instead of using XPath'
  );
});