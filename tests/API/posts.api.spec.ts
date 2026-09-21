import { test, expect } from '@playwright/test';

test('should get booking', async ({ request }) => {
  const response = await request.get('posts/1');

  const body = await response.json();

  expect(body.id).toBe(1);
  expect(body.userId).toBe(1);
  expect(body.title).toBe('sunt aut facere repellat provident occaecati excepturi optio reprehenderit')
});