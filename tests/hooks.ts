import { test as base, Page } from '@playwright/test';
const configs = require('../configs/env.json');

// Custom test with beforeEach hook
export const test = base.extend({
  page: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.visit('/');
    await loginPage.login(); 
    await use(page);
  },
});

