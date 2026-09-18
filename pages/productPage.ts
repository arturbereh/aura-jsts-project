import { type Locator, type Page } from '@playwright/test';

export class ProductPage {
  readonly page: Page;
  readonly addButtonBackpack: Locator;
  readonly addButtonTshirt: Locator;
  readonly shoppingCart: Locator;
  readonly shoppingCount: Locator;

  constructor(page: Page) {
    this.page = page;

    this.addButtonBackpack = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
    this.addButtonTshirt = page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]');
    this.shoppingCart = page.locator('[data-test="shopping-cart-link"]');
    this.shoppingCount = page.locator('[data-test="shopping-cart-badge"]');
  }

  async addBackpack() {
    await this.addButtonBackpack.click();
  }

  async addTshirt() {
    await this.addButtonTshirt.click();
  }
  
  async openShoppingCart() {
    await this.shoppingCart.click();
  }

}