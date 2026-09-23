import { test, expect } from '../../fixtures/test';
import { WEBSITE, STANDARD_USER, LOCKED_OUT_USER } from '../../data/users';


test.describe('Login', () => {
  test('should login successfully with valid credentials', async ({ loginPage, page }) => {
    await loginPage.open(WEBSITE.prod);
    await loginPage.login(STANDARD_USER.username, STANDARD_USER.password)

    await expect(page).toHaveURL(/inventory.html/);
    await expect(page.locator('[data-test="title"]')).toHaveText('Products');
  });


  test('should display a locked out message with locked credentials', async ({ loginPage }) => {
    await loginPage.open(WEBSITE.prod);
    await loginPage.login(LOCKED_OUT_USER.username, LOCKED_OUT_USER.password)

    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toContainText('Epic sadface: Sorry, this user has been locked out.');
  });


  test('should display an error message when username is empty', async ({ loginPage }) => {
    await loginPage.open(WEBSITE.prod);
    await loginPage.login('', '')

    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toContainText('Epic sadface: Username is required');
  });

});
