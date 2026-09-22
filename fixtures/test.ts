import { test as base, request } from '@playwright/test';
import { ProductsPage } from '../pages/productsPage';
import { CartPage } from '../pages/cartPage';
import { PostsApi } from '../api/postsAPI';

type Fixtures = {
    productsPage: ProductsPage;
    cartPage: CartPage;
    postsApi: PostsApi;
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
    },

    postsApi: async ({ request }, use) => {
        const postsApi = new PostsApi(request);

        await use(postsApi);
    },
});

export { expect } from '@playwright/test'