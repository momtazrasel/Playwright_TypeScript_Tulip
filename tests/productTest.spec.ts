import { test } from './hooks';
import { ProductPage } from '../pages/ProductPage';
import { testData } from 'utils/testData';
// import { test, expect } from '@playwright/test';


test.describe('Verify Product Information is updated', () => {
  test('Verify product price', async ({ page }) => {
    const productPage = new ProductPage(page);
    await productPage.navigateToProductPage();
    await productPage.verifyPriceIncreasedAfterQuantityIncrease();
      })
  });