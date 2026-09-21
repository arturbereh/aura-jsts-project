import { test, expect } from '@playwright/test';
import { PostsApi } from '../../api/postsAPI';

test('should get booking', async ({ request }) => {
  const postsApi = new PostsApi(request);
  const response = await postsApi.getPost(1);
  
  expect(response.status()).toBe(200);

  const body = await response.json();

  expect(body.id).toBe(1);
  expect(body.userId).toBe(1);
  expect(body.title).toBe('sunt aut facere repellat provident occaecati excepturi optio reprehenderit')

  expect(body).toHaveProperty('userId');
  expect(body).toHaveProperty('id');
  expect(body).toHaveProperty('title');
  expect(body).toHaveProperty('body');

  expect(typeof body.userId).toBe('number');
  expect(typeof body.id).toBe('number');
  expect(typeof body.title).toBe('string');
  expect(typeof body.body).toBe('string');
});

test('should create a post', async ({ request }) => {
  const postsApi = new PostsApi(request);

  const response = await postsApi.createPost(
    'Testuano post title field',
    'Liberati post body field',
    7
  );

  expect(response.status()).toBe(201);

  const body = await response.json();

  expect(body.title).toBe('Testuano post title field');
  expect(body.body).toBe('Liberati post body field');
  expect(body.userId).toBe(7);
});

test('should update a post', async ({ request }) => {
  const postsApi = new PostsApi(request);

  const response = await postsApi.updatePost(
    7,
    'Updated via API title field',
    'Updated via API body field',
    7
  );

  expect(response.status()).toBe(200);

  const body = await response.json();

  expect(body.id).toBe(7);
  expect(body.title).toBe('Updated via API title field');
  expect(body.body).toBe('Updated via API body field');
  expect(body.userId).toBe(7);
});