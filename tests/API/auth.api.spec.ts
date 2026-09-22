import { test, expect } from '../../fixtures/test';

test('should get current user with access token', async ({ authApi }) => {
  const loginResponse = await authApi.login(
    'emilys',
    'emilyspass'
  );

  expect(loginResponse.status()).toBe(200);

  const loginBody = await loginResponse.json();

  const token = loginBody.accessToken;

  expect(token).toBeTruthy();

  const userResponse = await authApi.getCurrentUser(token);

  expect(userResponse.status()).toBe(200);

  const userBody = await userResponse.json();

  expect(userBody.username).toBe('emilys');
});