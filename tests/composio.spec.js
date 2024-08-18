import { test, expect } from '@playwright/test';
import dotenv from 'dotenv'

dotenv.config();

test('test', async ({ page }) => {
  await page.goto('https://app.composio.dev/');
  await page.getByRole('button', { name: 'Continue with Github' }).click();
  await page.getByLabel('Username or email address').fill(process.env.USERNAME);
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill(process.env.PASSWORD);
  await page.getByRole('button', { name: 'Sign in', exact: true }).click();
  await page.getByRole('link', { name: 'Github A platform for version' }).click();
  await page.locator('.w-\\[320px\\] > div').first().click();
  await page.getByRole('button', { name: 'Save' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'Connect to github' }).click();
  const page1 = await page1Promise;
  await page.getByRole('button', { name: 'Try actions' }).click();
  await page.locator('.flex > .inline-flex').first().click();
  await page.getByRole('button', { name: 'Run action' }).click();
});