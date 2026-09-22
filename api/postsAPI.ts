import { type APIRequestContext, type APIResponse } from '@playwright/test';
import type { CreatePostRequest } from '../types/post';

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
      'Accept': 'application/json',
    },
    data,
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
async deletePost(postId: number): Promise<APIResponse> {
  return this.request.delete(`/posts/${postId}`)
};
}