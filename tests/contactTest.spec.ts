import { test } from './hooks';
import { ContactPage } from '../pages/ContactPage';
import { testData } from 'utils/testData';
// import { test, expect } from '@playwright/test';


test.describe('Verify Contact Form is successfully submitted', () => {
  test('Verify Contact info is created', async ({ page }) => {
    const contactPage = new ContactPage(page);
    await contactPage.navigateToContactMenu();

    await contactPage.submitContactForm(
      testData.firstName,
      testData.lastName,
      testData.email,
      testData.message,
    );
  })
  });