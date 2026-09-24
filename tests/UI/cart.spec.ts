import { test, expect } from '../../fixtures/test';
import { PRODUCTS } from '../../data/products';

test.describe('Cart', () => {
  test('should remove item from cart page', async ({ productsPage, cartPage }) => {
    await test.step('Add product to cart', async () => {
      await productsPage.addItem(PRODUCTS.onesie);
    });

    await test.step('Verify cart contains 1 product', async () => {
      await expect(productsPage.shoppingCount).toHaveText('1');
    });

    await test.step('Open shopping cart', async () => {
      await productsPage.openShoppingCart();
    });

    await test.step('Verify product is in the cart', async () => {
      await expect(cartPage.product(PRODUCTS.onesie)).toBeVisible();
    });

    await test.step('Remove product from cart', async () => {
      await cartPage.removeCartItem(PRODUCTS.onesie);
    });

    await test.step('Verify product is removed from the cart', async () => {
      await expect(cartPage.product(PRODUCTS.onesie)).toBeHidden();
    });
  });
});
