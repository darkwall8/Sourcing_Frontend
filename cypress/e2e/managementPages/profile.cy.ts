describe('profile page', () => {
  it('test profile page only if exists', () => {

    cy.visit('/profile')

    let shouldTest = false;

    cy.get('body').then(($body) => {
      if ($body.find('[data-canbetest="true"]').length > 0) {
        shouldTest = true;
      }
    }).then(() => {
      if (shouldTest) {
        // TO DO: implement the logic
      } else {
        cy.log("Page non disponible, test ignoré");
      }
    });
  });
});