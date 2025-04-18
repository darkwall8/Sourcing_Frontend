describe('navbar', () => {
  it('test navbar only if exists', () => {

    cy.visit('/dashboard')

    let shouldTest = false;

    cy.get('body').then(($body) => {
      if ($body.find('[data-canbetest="true"]').length > 0) {
        shouldTest = true;
      }
    }).then(() => {
      if (shouldTest) {
          // TO DO: implement the logic
      } else {
      cy.log("composant non disponible, test ignoré");
      }
    });
  });
});