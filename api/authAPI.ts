import { type APIRequestContext, type APIResponse } from '@playwright/test';

export class AuthApi {
  readonly request: APIRequestContext;
  private token?: string;

  constructor(request: APIRequestContext) {
    this.request = request;
  }

  async login(username: string, password: string): Promise<APIResponse> {
    const response = await this.request.post('/auth/login', {
      data: {
        username,
        password,
      },
    });

    const body = await response.json();
    this.token = body.accessToken;
    return response;
  }

  async getCurrentUser(): Promise<APIResponse> {
    return this.request.get('/auth/me', {
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    });
  }
}
