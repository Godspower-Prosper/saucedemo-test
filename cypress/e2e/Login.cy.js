const {Login} = require("../fixtures/selectors.js");
Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })
describe('Given I am on the product page', () => {
    beforeEach( function () {
      //cy.intercept('GET', '**/api/**', { fixture: 'apiResponse.json' });
        cy.visit('/')
    });
  it("Users should be able to sort by Name A - Z", function(){
    cy.get(Login.usernameField).type(Login.username)
    cy.get(Login.passwordField).type(Login.password)
    cy.click(Login.loginBtn).click()
    })
  })