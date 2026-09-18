import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/loginPage';
import { ProductPage } from '../../pages/productPage';
import { WEBSITE, STANDARD_USER } from '../../data/users';

test('should add products to cart', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productPage = new ProductPage(page);

    await loginPage.open(WEBSITE.prod);
    await loginPage.login(STANDARD_USER.username, STANDARD_USER.password)

    await productPage.addBackpack();
    await productPage.addTshirt();
    await expect (productPage.shoppingCount).toHaveText('2');
    await productPage.openShoppingCart();
})
