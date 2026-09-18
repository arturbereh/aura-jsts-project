import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/loginPage';
import { ProductsPage } from '../../pages/productsPage';
import { CartPage } from '../../pages/cartPage';
import { PRODUCTS } from '../../data/products';
import { WEBSITE, STANDARD_USER } from '../../data/users';

test('should add products to cart', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);

    await loginPage.open(WEBSITE.prod);
    await loginPage.login(STANDARD_USER.username, STANDARD_USER.password)

    await productsPage.addItem(PRODUCTS.backpack);
    await productsPage.addItem(PRODUCTS.tshirt);
    await expect (productsPage.shoppingCount).toHaveText('2');
    await productsPage.openShoppingCart();

    await expect(cartPage.backpack).toBeVisible(); 
    await expect(cartPage.tshirt).toBeVisible();
})

const products = [
    PRODUCTS.backpack,
    PRODUCTS.jacket,
    PRODUCTS.light,
    PRODUCTS.onesie,
    PRODUCTS.tshirt,
]

for (const product of products) {
  test(`should add ${product} to cart`, async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);

    await loginPage.open(WEBSITE.prod);
    await loginPage.login(STANDARD_USER.username, STANDARD_USER.password)

    await productsPage.addItem(product);

    await expect(productsPage.shoppingCount).toHaveText('1');
    });
}