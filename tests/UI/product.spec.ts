import { test, expect } from '../../fixtures/test';
import { PRODUCTS } from '../../data/products';


const products = [
    PRODUCTS.backpack,
    PRODUCTS.jacket,
    PRODUCTS.light,
    PRODUCTS.onesie,
    PRODUCTS.tshirt,
]

test('should add products to cart', async ({ productsPage, cartPage }) => {
    await productsPage.addItem(PRODUCTS.backpack);
    await productsPage.addItem(PRODUCTS.tshirt);
    await expect (productsPage.shoppingCount).toHaveText('2');
    await productsPage.openShoppingCart();

    await expect(cartPage.product(PRODUCTS.backpack)).toBeVisible(); 
    await expect(cartPage.product(PRODUCTS.tshirt)).toBeVisible();
})

for (const product of products) {
  test(`should add ${product} to cart`, async ({ productsPage }) => {
    await productsPage.open();
    await productsPage.addItem(product);

    await expect(productsPage.shoppingCount).toHaveText('1');
    });
}

  test('should remove item from cart on products page', async ({ productsPage }) => {
    await productsPage.addItem(PRODUCTS.backpack);
    await expect(productsPage.shoppingCount).toHaveText('1');

    await productsPage.removeProductsItem(PRODUCTS.backpack);
    await expect(productsPage.shoppingCount).not.toBeVisible();
  })