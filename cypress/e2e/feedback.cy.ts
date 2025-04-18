describe('feedback component', () => {
  it('test feedback component only if exists', () => {

    cy.visit('/');

    let shouldTest = false;

    cy.get('body').then(($body) => {
      if ($body.find('[data-canbetest="true"]').length > 0) {
        shouldTest = true;
      }
    }).then(() => {
      if (shouldTest) {
        // TO DO: implement the logic
      } else {
        cy.log("Composant non disponible, test ignoré");
      }
    });
  });
});