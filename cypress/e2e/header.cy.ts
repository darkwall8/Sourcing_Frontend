describe.skip('header', () => {
  it('test login page only if exists', () => {
    cy.request({ url: '/login', failOnStatusCode: false }).then((response) => {
      if (response.status === 200) {
        cy.visit('/')

        cy.contains("Connectez vous").click()
        // Should be on a new URL whitch include /login
        cy.url().should("include", "/login")

        cy.contains("SOURCING").click()
        cy.url().should("eq", Cypress.config().baseUrl + "/")

        cy.contains("Rejoignez nous!").click()
        // Should be on a new URL whitch include /registration
        cy.url().should("include", "/registration")

      } else {
        cy.log("Page /login non disponible, test ignoré")
      }
    })
  })
})
