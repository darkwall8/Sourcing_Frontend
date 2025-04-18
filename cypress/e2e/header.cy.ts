describe.skip('header component', () => {
  it('test header only if exists', () => {

    cy.visit('/')

    let shouldTest = false;

    cy.get('body').then(($body) => {
      if ($body.find('[data-canbetest="true"]').length > 0) {
        shouldTest = true;
      }
    }).then(() => {
      if (shouldTest) {

        cy.contains("Connectez vous").click();
        // Should be on a new URL whitch include /login
        cy.url().should("include", "/login");

        cy.contains("SOURCING").click();
        cy.url().should("eq", Cypress.config().baseUrl + "/");

        cy.contains("Rejoignez nous!").click();
        // Should be on a new URL whitch include /registration
        cy.url().should("include", "/registration");
      } else {
        cy.log("Page non disponible, test ignoré");
      }
    });
  });
});