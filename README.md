# 🚀 Playwright TypeScript Automation Framework

This is an advanced automation framework built using **Playwright with TypeScript**, implementing the **Page Object Model (POM)** design pattern, login hook reusability, and modular test structure.

---

## Install dependencies
    npm install

## Allow PowerShell to run npm scripts
    Set-ExecutionPolicy RemoteSigned -Scope CurrentUser

## Update NPM and Node
    npm install -g npm@latest

## If you still get the error
## Run this stronger (still safe) command:
    Set-ExecutionPolicy Bypass -Scope CurrentUser

## Install Playwright browsers
    npx playwright install --with-deps


## Running the Tests
    npx playwright test

## Run Specific file
    npx playwright test tests/contact.spec.ts

## Run tests with UI (headed mode)
    npx playwright test --headed


## HTML Report (Like Extent Report)
    npx playwright show-report