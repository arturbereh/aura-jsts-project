import { test as setup} from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { WEBSITE, STANDARD_USER } from '../data/users';

const authData = 'playwright/.auth/user.json';

setup('authStandardUser', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.open(WEBSITE.prod); 
    await loginPage.login(STANDARD_USER.username, STANDARD_USER.password);

    await page.context().storageState({ path: authData, });
});