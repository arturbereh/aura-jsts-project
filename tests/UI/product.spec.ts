import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/loginPage';
import { ProductsPage } from '../../pages/productsPage';
import { CartPage } from '../../pages/cartPage';
import { WEBSITE, STANDARD_USER } from '../../data/users';

test('should add products to cart', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);

    await loginPage.open(WEBSITE.prod);
    await loginPage.login(STANDARD_USER.username, STANDARD_USER.password)

    await productsPage.addItem('Sauce Labs Backpack');
    await productsPage.addItem('Sauce Labs Bolt T-Shirt');
    await expect (productsPage.shoppingCount).toHaveText('2');
    await productsPage.openShoppingCart();

    await expect(cartPage.backpack).toBeVisible(); 
    await expect(cartPage.tshirt).toBeVisible();
})
