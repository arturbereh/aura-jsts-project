import { test, expect } from '../../fixtures/test';
import { LoginPage } from '../../pages/loginPage';
import { ProductsPage } from '../../pages/productsPage';
import { CartPage } from '../../pages/cartPage';
import { PRODUCTS } from '../../data/products';


const products = [
    PRODUCTS.backpack,
    PRODUCTS.jacket,
    PRODUCTS.light,
    PRODUCTS.onesie,
    PRODUCTS.tshirt,
]

test('should add products to cart', async ({ productsPage, page }) => {
    const cartPage = new CartPage(page);

    await productsPage.addItem(PRODUCTS.backpack);
    await productsPage.addItem(PRODUCTS.tshirt);
    await expect (productsPage.shoppingCount).toHaveText('2');
    await productsPage.openShoppingCart();

    await expect(cartPage.product(PRODUCTS.backpack)).toBeVisible(); 
    await expect(cartPage.product(PRODUCTS.tshirt)).toBeVisible();
})

for (const product of products) {
  test(`should add ${product} to cart`, async ({ productsPage, page }) => {
    await productsPage.open();
    await productsPage.addItem(product);

    await expect(productsPage.shoppingCount).toHaveText('1');
    });
}

  test('should remove item from card', async ({ productsPage, page }) => {
    await productsPage.addItem(PRODUCTS.backpack);
    await expect(productsPage.shoppingCount).toHaveText('1');

    await productsPage.removeItem(PRODUCTS.backpack);
    await expect(productsPage.shoppingCount).not.toBeVisible();
  })