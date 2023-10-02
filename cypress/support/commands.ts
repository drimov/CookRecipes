/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }
const { email, password } = Cypress.env()

const authentication = (email, password) => {
  cy.findByLabelText(/email/i).type(email as string)
  cy.findByLabelText(/password/i).type(password as string)
}
Cypress.Commands.add("login", () => {
  cy.visit("/login")
  authentication(email, password)
  cy.findByRole("button", { name: /log in/i }).click()
})
Cypress.Commands.add("signup", () => {
  cy.visit("/signup")
  const email = `test${Math.round(Math.random() * 100)}@gmail.com`
  const password = "123456"
  authentication(email, password)
  cy.findByRole("button", { name: /create account/i }).click()
})
