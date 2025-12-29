import { BasePage } from './BasePage';
import { SettingseLocators } from 'locators/SettingsLocators';
import { Page } from '@playwright/test';
import { ContactForm } from 'locators/ContactForm';

export class ContactPage extends BasePage{
  private locators: ContactForm;
  // private basePage: BasePage;

  constructor(page: Page){
    super(page);
    // this.page = page;
    this.locators = new ContactForm(page);
    // this.basePage = new BasePage(page);


  }

  async navigateToContactMenu() {
    await this.isElementVisible(this.locators.contactMenu)
    await this.locators.contactMenu.click();
    await this.locators.sendButton.click();
    await this.isElementVisible(this.locators.firstNameRequired)
    await this.isElementVisible(this.locators.lastNameRequired)
    await this.isElementVisible(this.locators.emailRequired)
    await this.isElementVisible(this.locators.messageRequired)
    
  }

  async submitContactForm(firstName: string, lastName: string, email: string, message: string) {
    await this.enterText(this.locators.firstName, firstName);
    await this.enterText(this.locators.lastName, lastName);
    await this.enterText(this.locators.email, email);
    await this.enterText(this.locators.message, message);
    await this.locators.sendButton.click();
    await this.isElementVisible(this.locators.successfullMessage);
  }



//   async verifyFinanceModuleIsDisplayed() {
//     await this.isElementVisible(this.locators.financeModule)
//   }
}