import { type Locator, type Page } from '@playwright/test';

export class CartPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  cartItem(itemName: string): Locator {
    return this.page.locator('[data-test="inventory-item"]').filter({ hasText: itemName });
  }

  product(itemName: string): Locator {
    return this.cartItem(itemName).locator('[data-test="inventory-item-name"]');
  }

  async removeCartItem(itemName: string) {
    const item = itemName.toLowerCase().replaceAll(' ', '-');

    const removeButton = this.page.locator(`[data-test="remove-${item}"]`);
    await removeButton.click();
  }
}
