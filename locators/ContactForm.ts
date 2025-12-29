import { Page, Locator } from '@playwright/test';

export class ContactForm {
    readonly contactMenu: Locator;
    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly email: Locator;
    // readonly selectSubject: Locator;
    readonly message: Locator;
    readonly sendButton: Locator;
    readonly firstNameRequired: Locator;
    readonly lastNameRequired: Locator;
    readonly emailRequired: Locator;
    readonly messageRequired: Locator;
    readonly successfullMessage: Locator;

    constructor(page: Page) {
    this.contactMenu = page.locator('[data-test="nav-contact"]');;
    this.firstName =  page.locator('[data-test="first-name"]');
    this.lastName = page.locator('[data-test="last-name"]');
    this.email =  page.locator('[data-test="email"]');
    // this.selectSubject =  page.locator('[data-test="subject"]').selectOption('webmaster');
    this.message =  page.locator('[data-test="message"]');
    this.sendButton =  page.locator('[data-test="contact-submit"]');
    this.firstNameRequired =  page.getByText('First name is required');
    this.lastNameRequired= page.getByText('Last name is required');
    this.emailRequired = page.getByText('Email is required');
    this.messageRequired = page.getByText('Message is required');
    this.successfullMessage = page.getByText('Thanks for your message! We');
}
}