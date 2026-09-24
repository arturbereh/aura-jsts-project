import { test, expect } from '../../fixtures/test';
import type { Post } from '../../types/post';
import { postSchema } from '../../schemas/post.schema';
import { validateSchema } from '../../utils/validateSchema';
import { POST_DATA, POSTS_DATA, UPDATE_POST_DATA } from '../../data/posts';
import { logApiResponse } from '../../utils/logApiResponse';

test('should get existing post', async ({ postsApi }) => {
  const response = await postsApi.getPost(1);

  await logApiResponse(response);

  expect(response.status()).toBe(200);

  const body: Post = await response.json();

  expect(body.id).toBe(1);
  expect(body.userId).toBe(1);

  validateSchema(body, postSchema);
});

for (const postData of POSTS_DATA) {
  test(`should create post: ${postData.title}`, async ({ postsApi }) => {
    const response = await postsApi.createPost(POST_DATA);

    expect(response.status()).toBe(201);

    const body: Post = await response.json();

    expect(body.title).toBe(POST_DATA.title);
    expect(body.body).toBe(POST_DATA.body);
    expect(body.userId).toBe(POST_DATA.userId);

    validateSchema(body, postSchema);
  });
}

test('should update a post', async ({ postsApi }) => {
  const response = await postsApi.updatePost(UPDATE_POST_DATA);

  expect(response.status()).toBe(200);

  const body = await response.json();

  expect(body.id).toBe(UPDATE_POST_DATA.id);
  expect(body.title).toBe(UPDATE_POST_DATA.title);
  expect(body.body).toBe(UPDATE_POST_DATA.body);
  expect(body.userId).toBe(UPDATE_POST_DATA.userId);
});

test('should delete existing post', async ({ postsApi }) => {
  const response = await postsApi.deletePost(7);
  expect(response.status()).toBe(200);
});
