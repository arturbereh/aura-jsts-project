import { test, expect, request } from '@playwright/test';
import { PostsApi } from '../../api/postsAPI';
import type { Post } from '../../types/post';
import { postSchema } from '../../schemas/post.schema';
import { validateSchema } from '../../utils/validateSchema';

test('should get booking', async ({ request }) => {
  const postsApi = new PostsApi(request);

  const response = await postsApi.getPost(1);

  expect(response.status()).toBe(200);

  const body: Post = await response.json();

  expect(body.id).toBe(1);
  expect(body.userId).toBe(1);

  validateSchema(body, postSchema);
});

test('should create a post', async ({ request }) => {
  const postsApi = new PostsApi(request);

  const response = await postsApi.createPost({
    title: 'Testuano post title field',
    body: 'Liberati post body field',
    userId: 7,
  });

  expect(response.status()).toBe(201);

  const body: Post = await response.json();

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

test('should delete existing post', async ({ request }) => {
  const postApi = new PostsApi(request);

  const response = await postApi.deletePost(7);
  expect(response.status()).toBe(200);
})