import { type Locator, type Page } from '@playwright/test';

export class ProductsPage {
  readonly page: Page;
  readonly shoppingCart: Locator;
  readonly shoppingCount: Locator;

  constructor(page: Page) {
    this.page = page;

    this.shoppingCart = page.locator('[data-test="shopping-cart-link"]');
    this.shoppingCount = page.locator('[data-test="shopping-cart-badge"]');
  }

  async addItem(itemName: string) {
    const item = this.page.locator('.inventory_item').filter({
        hasText: itemName,
    });

    await item.getByRole('button', { name: 'Add to cart' }).click();
  }
  
  async openShoppingCart() {
    await this.shoppingCart.click();
  }

}