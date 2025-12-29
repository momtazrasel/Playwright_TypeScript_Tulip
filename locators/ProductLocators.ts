import { Page, Locator } from '@playwright/test';

export class ProductLocators {
 readonly selectProduct: Locator;
 readonly initialPrice: Locator;
 readonly plusIcon: Locator;
 readonly cartMenu: Locator;
 readonly cart: Locator;
 readonly productQuantityTestField: Locator;
 readonly updatedPrice: Locator;

 constructor(page: Page) {

  this.selectProduct =  page.locator('[data-test="product-01KDMRTCF6P1CN5A7YFMCWTT7D"]');
//   this.initialPrice =  page.locator('div').filter({ hasText: /^\$14\.15$/ });
  this.plusIcon =  page.locator('[data-test="increase-quantity"]');
  this.cartMenu =  page.locator('[data-test="add-to-cart"]');
  this.cart = page.locator('[data-test="nav-cart"]');
  this.productQuantityTestField =  page.locator('[data-test="product-quantity"]');
//   this.arrowButton =  page.locator('[data-test="product-quantity"]').press('ArrowUp');
//   this.increaseProduct =  page.locator('[data-test="product-quantity"]').fill('3');
  this.initialPrice =  page.getByRole('cell', { name: '$14.15' });
  this.updatedPrice =  page.locator('[data-test="line-price"]');

 }}
