describe('Header Component', () => {
  it('Teste le header seulement s\'il existe', () => {

    cy.visit('/');

    cy.url().then((currentUrl) => {
      if (currentUrl.includes("/dashboard")) {
        // Ajouter ici d'autres vérifications spécifiques au dashboard
      } else {
        cy.contains("Connectez vous").should("be.visible").click();

        // Vérifie que l'URL inclut /login
        cy.url().should("include", "/login");

        cy.contains("Sourcing").should("be.visible").click();
        cy.url().should("eq", Cypress.config().baseUrl + "/");

        cy.contains("Rejoignez nous !").should("be.visible").click();

        // Vérifie que l'URL inclut /registration
        cy.url().should("include", "/registration");
      }
    });

  });
});
