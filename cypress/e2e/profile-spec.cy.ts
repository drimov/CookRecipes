/// <reference types="@testing-library/cypress" />

const WAIT_IMAGE_UPLOAD_MILISECONDS = 1000

describe("Profile", () => {
  it("update", () => {
    cy.visit("/")
    cy.findByRole("button", { name: /login/i }).should("exist").click()
    cy.login()
    cy.findByLabelText(/avatar/i)
      .should("exist")
      .selectFile("public/avatar.svg", {
        action: "select",
      })
    cy.findByLabelText(/username/i)
      .clear()
      .type("testupdate")
    cy.findByLabelText(/bio/i).clear().type("Bio is now update.")
    cy.wait(WAIT_IMAGE_UPLOAD_MILISECONDS)
    cy.findByRole("button", {
      name: /update profile/i,
    }).click()
  })
})
