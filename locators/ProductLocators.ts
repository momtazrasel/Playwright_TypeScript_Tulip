import { Page, Locator } from '@playwright/test';

export class ProductLocators {
 readonly selectProduct: Locator;
 readonly initialPrice: Locator;
 readonly plusIcon: Locator;
 readonly cartMenu: Locator;
 readonly cartButton: Locator;
 readonly productQuantityTestField: Locator;
 readonly updatedPrice: Locator;

 constructor(page: Page) {

  this.selectProduct =  page.locator("//h5[normalize-space()='Combination Pliers']");
//   this.initialPrice =  page.locator('div').filter({ hasText: /^\$14\.15$/ });
  this.plusIcon =  page.locator('[data-test="increase-quantity"]');
  this.cartMenu =  page.locator('[data-test="nav-cart"]');
  this.cartButton = page.locator("(//button[normalize-space()='Add to cart'])[1]");
  this.productQuantityTestField =  page.locator('[data-test="product-quantity"]');
//   this.arrowButton =  page.locator('[data-test="product-quantity"]').press('ArrowUp');
//   this.increaseProduct =  page.locator('[data-test="product-quantity"]').fill('3');
  this.initialPrice =  page.locator('[data-test="unit-price"]');
  this.updatedPrice =  page.locator('[data-test="line-price"]');

 }}
