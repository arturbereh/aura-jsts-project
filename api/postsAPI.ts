import { type APIRequestContext, type APIResponse } from '@playwright/test';
import type { CreatePostRequest, UpdatePostRequest } from '../types/post';

export class PostsApi {
  readonly request: APIRequestContext;

  constructor(request: APIRequestContext) {
    this.request = request;
  }

  async getPost(postId: number): Promise<APIResponse> {
    return this.request.get(`/posts/${postId}`);
  }

  async createPost(data: CreatePostRequest): Promise<APIResponse> {
    return this.request.post('/posts', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      data,
    });
  }
  async updatePost(data: UpdatePostRequest): Promise<APIResponse> {
    return this.request.put(`/posts/${data.id}`, {
      data: {
        title: data.title,
        body: data.body,
        userId: data.userId,
      },
    });
  }
  async deletePost(postId: number): Promise<APIResponse> {
    return this.request.delete(`/posts/${postId}`);
  }
}
