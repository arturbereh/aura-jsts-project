import { test, expect } from '../../fixtures/test';
import { PRODUCTS } from '../../data/products';

test('should remove item from cart page', async ({ productsPage, cartPage, }) => {
  await productsPage.addItem(PRODUCTS.onesie);
  await expect(productsPage.shoppingCount).toHaveText('1');

  await productsPage.openShoppingCart();
  await expect(cartPage.product(PRODUCTS.onesie)).toBeVisible();

  await cartPage.removeCartItem(PRODUCTS.onesie);
  await expect(cartPage.product(PRODUCTS.onesie)).not.toBeVisible();
});