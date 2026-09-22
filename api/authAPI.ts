import { type APIRequestContext, type APIResponse } from '@playwright/test';

export class AuthApi {
  readonly request: APIRequestContext;

  constructor(request: APIRequestContext) {
    this.request = request;
  }

  async login( username: string, password: string ): Promise<APIResponse> {
    return this.request.post('/auth/login', {
      data: {
        username,
        password,
      },
    });
  }

  async getCurrentUser(token: string): Promise<APIResponse> {
    return this.request.get('/auth/me', {
        headers: {
        Authorization: `Bearer ${token}`,
        },
    });
  }
}