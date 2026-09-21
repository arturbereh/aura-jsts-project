import { type APIRequestContext, type APIResponse } from '@playwright/test';

export class PostsApi {
  readonly request: APIRequestContext;

  constructor(request: APIRequestContext) {
    this.request = request;
  }

  async getPost(postId: number): Promise<APIResponse> {
    return this.request.get(`/posts/${postId}`);
  }

  async createPost(title: string, body: string, userId: number): Promise<APIResponse> {
  return this.request.post('/posts', {
    data: {
      title,
      body,
      userId,
    },
  });
}
  async updatePost(postId: number, title: string, body: string, userId: number): Promise<APIResponse> {
  return this.request.put(`/posts/${postId}`, {
    data: {
      title,
      body,
      userId,
    },
  });
}
}