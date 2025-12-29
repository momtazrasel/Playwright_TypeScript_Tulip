import { test as base, Page } from '@playwright/test';
import configs from '../configs/env.json';

type Fixtures = {
  page: Page;
};

export const test = base.extend<Fixtures>({
  page: async ({ page }, use) => {
    await page.goto(configs.baseUrl, { waitUntil: 'networkidle' });
    await use(page);
  },
});
