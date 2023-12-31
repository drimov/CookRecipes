describe("Favourites", () => {
  it("add favourite", () => {
    cy.visit("/")
    cy.findByRole("button", { name: /login/i }).should("exist").click()
    cy.login()
    cy.findByRole("link", { name: /favourite/i }).click()
    cy.findByText(/corba/i).should("not.exist")
    cy.findAllByRole("link", { name: /search/i })
      .first()
      .click()
    cy.findByText(/corba/i).should("exist").click()
    cy.findByRole("button", { name: /favourite/i })
      .should("exist")
      .click()
    cy.findByRole("img", { name: /avatar-profile/i }).click()
    cy.findByRole("link", { name: /favourite/i }).click()
    cy.findByText(/corba/i).should("exist")
  })
  it("delete favourite", () => {
    cy.visit("/")
    cy.findByRole("button", { name: /login/i }).should("exist").click()
    cy.login()
    cy.findByRole("link", { name: /favourite/i }).click()
    cy.findByText(/corba/i).should("exist").click()
    cy.findByRole("button", { name: /favourite/i })
      .should("exist")
      .click()
    cy.findByRole("img", { name: /avatar-profile/i }).click()
    cy.findByRole("link", { name: /favourite/i }).click()
    cy.findByText(/corba/i).should("not.exist")
  })
})
