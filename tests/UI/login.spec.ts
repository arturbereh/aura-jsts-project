import { test, expect } from '@playwright/test';
import { STANDARD_USER, LOCKED_OUT_USER } from '../../data/users';

test.describe('Login', () => {

  test('should login successfully with valid credentials', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.locator('[data-test="username"]').fill(STANDARD_USER.username);
    await page.locator('[data-test="password"]').fill(STANDARD_USER.password);

    await page.locator('[data-test="login-button"]').click();

    await expect(page).toHaveURL(/inventory.html/);
    await expect(page.locator('[data-test="title"]')).toHaveText('Products');
  });


  test('should display a locked out message with locked credentials', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.locator('[data-test="username"]').fill(LOCKED_OUT_USER.username);
    await page.locator('[data-test="password"]').fill(LOCKED_OUT_USER.password);

    await page.locator('[data-test="login-button"]').click();

    const errorMessage = page.locator('[data-test="error"]');

    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toContainText('Epic sadface: Sorry, this user has been locked out.');
  });


  test('should display an error message when username are empty', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.locator('[data-test="login-button"]').click();

    const errorMessage = page.locator('[data-test="error"]');

    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toContainText('Epic sadface: Username is required');
  });

});
