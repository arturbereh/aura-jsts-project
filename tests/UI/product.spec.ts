import { test, expect } from '../../fixtures/test';
import { PRODUCTS } from '../../data/products';

const products = [
  PRODUCTS.backpack,
  PRODUCTS.jacket,
  PRODUCTS.light,
  PRODUCTS.onesie,
  PRODUCTS.tshirt,
];

test.describe('Products', () => {
  test('should add two products to cart', async ({ productsPage, cartPage }) => {
    await test.step('Add products to cart', async () => {
      await productsPage.addItem(PRODUCTS.backpack);
      await productsPage.addItem(PRODUCTS.tshirt);
    });

    await test.step('Verify cart contains 2 products', async () => {
      await expect(productsPage.shoppingCount).toHaveText('2');
    });

    await test.step('Open shopping cart', async () => {
      await productsPage.openShoppingCart();
    });

    await test.step('Verify products are in the cart', async () => {
      await expect(cartPage.product(PRODUCTS.backpack)).toBeVisible();
      await expect(cartPage.product(PRODUCTS.tshirt)).toBeVisible();
    });
  });
});

for (const product of products) {
  test(`should add ${product} to cart`, async ({ productsPage }) => {
    await test.step(`Add ${product} to cart`, async () => {
      await productsPage.addItem(product);
    });

    await test.step('Verify cart contains 1 product', async () => {
      await expect(productsPage.shoppingCount).toHaveText('1');
    });
  });
}

test('should remove item from cart on products page', async ({ productsPage }) => {
  await test.step('Add product to cart', async () => {
    await productsPage.addItem(PRODUCTS.backpack);
  });

  await test.step('Verify cart contains 1 product', async () => {
    await expect(productsPage.shoppingCount).toHaveText('1');
  });

  await test.step('Remove product from cart', async () => {
    await productsPage.removeProductsItem(PRODUCTS.backpack);
  });

  await test.step('Verify cart is empty', async () => {
    await expect(productsPage.shoppingCount).toBeHidden();
  });
});
