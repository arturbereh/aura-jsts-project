import { type APIResponse } from '@playwright/test';

export async function logApiResponse(response: APIResponse) {
  console.log('Status:', response.status());
  console.log('URL:', response.url());
  console.log('Body:', await response.text());
}
