/// <reference types="cypress" />
declare namespace Cypress {
  interface Chainable {
    login(): Chainable<void>
    signup(): Chainable<void>
  }
}
