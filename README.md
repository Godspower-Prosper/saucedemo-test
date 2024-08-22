# saucedemo-test
For sauce assessment 
<!-- Cypress Automation Tests
This repository contains Cypress automation tests for validating the login functionality of a web application. Below is an overview of the files included:

#selectors.js:
This file contains the CSS selectors and credentials required for the login process.
Contents:
usernameField: The CSS selector for the username input field.
passwordField: The CSS selector for the password input field.
loginBtn: The CSS selector for the login button.
username: The default username used for login.
password: The default password used for login.

#Login.cy.js:
This file contains Cypress tests that automate the login process and verify the sorting functionality on the product page.
Test Details:
The test script visits the login page, enters the username and password, and clicks the login button.
Once logged in, the script verifies that users can sort products by name from A to Z.
Error Handling:
The script includes a handler for uncaught exceptions to prevent tests from failing due to unexpected errors.

#How to Run the Tests:
Install Dependencies:

Ensure you have Node.js installed.
Run npm install or yarn install to install Cypress and other dependencies.

#Running Tests Locally:

Open Cypress Test Runner:
npx cypress open
or
yarn cypress open
Select the Login.cy.js file from the Test Runner to run the tests in interactive mode.
Alternatively, run the tests in headless mode:
npx cypress run --spec "cypress/e2e/Login.cy.js"
or
yarn cypress run --spec "cypress/e2e/Login.cy.js"
Configuration:

Modify the selectors.js file to update any CSS selectors or credentials as needed.
Adjust the test flow in Login.cy.js if there are changes in the application flow. -->