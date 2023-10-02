/// <reference types="@testing-library/cypress" />

describe("Authentification", () => {
  it("Sign up", () => {
    cy.visit("/")
    cy.findByRole("button", { name: /signup/i })
      .should("exist")
      .click()
    cy.signup()
  })
  it("Login", () => {
    cy.visit("/")
    cy.findByRole("button", { name: /login/i }).should("exist").click()
    cy.login()
  })
  it("Logout", () => {
    cy.visit("/")
    cy.findByRole("button", { name: /login/i }).should("exist").click()
    cy.login()
    cy.findByRole("button", { name: /logout/i }).click()
  })
})
