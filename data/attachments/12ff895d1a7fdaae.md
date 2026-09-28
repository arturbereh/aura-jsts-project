# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: API/posts.api.spec.ts >> should update a post
- Location: tests/API/posts.api.spec.ts:39:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 200
Received: 405
```

# Test source

```ts
  1  | import { test, expect } from '../../fixtures/test';
  2  | import type { Post } from '../../types/post';
  3  | import { postSchema } from '../../schemas/post.schema';
  4  | import { validateSchema } from '../../utils/validateSchema';
  5  | import { POST_DATA, POSTS_DATA, UPDATE_POST_DATA } from '../../data/posts';
  6  | import { logApiResponse } from '../../utils/logApiResponse';
  7  | 
  8  | test('should get existing post', async ({ postsApi }) => {
  9  |   const response = await postsApi.getPost(1);
  10 | 
  11 |   await logApiResponse(response);
  12 | 
  13 |   expect(response.status()).toBe(200);
  14 | 
  15 |   const body: Post = await response.json();
  16 | 
  17 |   expect(body.id).toBe(1);
  18 |   expect(body.userId).toBe(1);
  19 | 
  20 |   validateSchema(body, postSchema);
  21 | });
  22 | 
  23 | for (const postData of POSTS_DATA) {
  24 |   test(`should create post: ${postData.title}`, async ({ postsApi }) => {
  25 |     const response = await postsApi.createPost(POST_DATA);
  26 | 
  27 |     expect(response.status()).toBe(201);
  28 | 
  29 |     const body: Post = await response.json();
  30 | 
  31 |     expect(body.title).toBe(POST_DATA.title);
  32 |     expect(body.body).toBe(POST_DATA.body);
  33 |     expect(body.userId).toBe(POST_DATA.userId);
  34 | 
  35 |     validateSchema(body, postSchema);
  36 |   });
  37 | }
  38 | 
  39 | test('should update a post', async ({ postsApi }) => {
  40 |   const response = await postsApi.updatePost(UPDATE_POST_DATA);
  41 | 
> 42 |   expect(response.status()).toBe(200);
     |                             ^ Error: expect(received).toBe(expected) // Object.is equality
  43 | 
  44 |   const body = await response.json();
  45 | 
  46 |   expect(body.id).toBe(UPDATE_POST_DATA.id);
  47 |   expect(body.title).toBe(UPDATE_POST_DATA.title);
  48 |   expect(body.body).toBe(UPDATE_POST_DATA.body);
  49 |   expect(body.userId).toBe(UPDATE_POST_DATA.userId);
  50 | });
  51 | 
  52 | test('should delete existing post', async ({ postsApi }) => {
  53 |   const response = await postsApi.deletePost(7);
  54 |   expect(response.status()).toBe(200);
  55 | });
  56 | 
```