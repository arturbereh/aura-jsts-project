import { test as base } from '@playwright/test';
import { ProductsPage } from '../pages/productsPage';
import { CartPage } from '../pages/cartPage';

type Fixtures = {
    productsPage: ProductsPage;
    cartPage: CartPage;
};

export const test = base.extend<Fixtures>({
    productsPage: async ({ page }, use) => {
        const productsPage = new ProductsPage(page);

        await productsPage.open();

        await use(productsPage);
    },

    cartPage: async ({ page, productsPage }, use) => {
        const cartPage = new CartPage(page);

        await use(cartPage);
    }
});

export { expect } from '@playwright/test'