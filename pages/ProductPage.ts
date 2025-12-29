import { BasePage } from './BasePage';
import { expect, Page } from '@playwright/test';
import { Console, assert } from 'console';
import { ContactForm } from 'locators/ContactForm';
import { ProductLocators } from 'locators/ProductLocators';

export class ProductPage extends BasePage{
  private locators: ProductLocators;
  // private basePage: BasePage;

  constructor(page: Page){
    super(page);
    // this.page = page;
    this.locators = new ProductLocators(page);
    // this.basePage = new BasePage(page);


  }

  async navigateToProductPage() {
    await this.isElementVisible(this.locators.selectProduct)
    await this.locators.selectProduct.click();
    
  }

  async verifyPriceIncreasedAfterQuantityIncrease(times: number = 2) {
  // Get initial price text
  const initialPriceText = await this.locators.initialPrice.textContent();
  console.log("Initial Price = ",initialPriceText);
  const initialPrice = Number(initialPriceText?.replace('$', ''));

  // Click plus icon multiple times
  for (let i = 0; i < times; i++) {
    await this.locators.plusIcon.click();
    
  }

  await this.page.waitForTimeout(3000);
  await this.locators.cartButton.click();
  await this.page.waitForTimeout(5000);
  await this.locators.cartMenu.click();
  await this.page.waitForTimeout(5000);
  // Get updated price text
  const updatedPriceText = await this.locators.updatedPrice.textContent();
  console.log("Updated Price - ", updatedPriceText);
  const updatedPrice = Number(updatedPriceText?.replace('$', ''));

  expect(updatedPrice).toBeGreaterThan(initialPrice);
}

}