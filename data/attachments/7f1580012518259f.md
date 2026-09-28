# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: API/auth.api.spec.ts >> should get current user with access token
- Location: tests/API/auth.api.spec.ts:3:5

# Error details

```
SyntaxError: Unexpected token '<', "<html>
<he"... is not valid JSON
```

# Test source

```ts
  1  | import { type APIRequestContext, type APIResponse } from '@playwright/test';
  2  | 
  3  | export class AuthApi {
  4  |   readonly request: APIRequestContext;
  5  |   private token?: string;
  6  | 
  7  |   constructor(request: APIRequestContext) {
  8  |     this.request = request;
  9  |   }
  10 | 
  11 |   async login(username: string, password: string): Promise<APIResponse> {
  12 |     const response = await this.request.post('/auth/login', {
  13 |       data: {
  14 |         username,
  15 |         password,
  16 |       },
  17 |     });
  18 | 
> 19 |     const body = await response.json();
     |                  ^ SyntaxError: Unexpected token '<', "<html>
  20 |     this.token = body.accessToken;
  21 |     return response;
  22 |   }
  23 | 
  24 |   async getCurrentUser(): Promise<APIResponse> {
  25 |     return this.request.get('/auth/me', {
  26 |       headers: {
  27 |         Authorization: `Bearer ${this.token}`,
  28 |       },
  29 |     });
  30 |   }
  31 | }
  32 | 
```