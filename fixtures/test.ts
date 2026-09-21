import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { ProductsPage } from '../pages/productsPage';
import { WEBSITE, STANDARD_USER } from '../data/users';

type Fixtures = {
    productsPage: ProductsPage;
};

export const test = base.extend<Fixtures>({
    productsPage: async ({ page }, use) => {
    const productsPage = new ProductsPage(page);

    await productsPage.open();

    await use(productsPage);
    },
});

export { expect } from '@playwright/test'