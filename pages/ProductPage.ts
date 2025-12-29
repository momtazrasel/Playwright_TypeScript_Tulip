import { BasePage } from './BasePage';
import { Page } from '@playwright/test';
import { assert } from 'console';
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

  async verifyPriceIncreasedAfterQuantityIncrease(times: number = 3) {
  // Get initial price text
  const initialPriceText = await this.locators.initialPrice.textContent();
  const initialPrice = Number(initialPriceText?.replace('$', ''));

  // Click plus icon multiple times
  for (let i = 0; i < times; i++) {
    await this.locators.plusIcon.click();
    await this.locators.cart.click();
  }

  await this.locators.cartMenu.click();
  // Get updated price text
  const updatedPriceText = await this.locators.updatedPrice.textContent();
  const updatedPrice = Number(updatedPriceText?.replace('$', ''));
}

}