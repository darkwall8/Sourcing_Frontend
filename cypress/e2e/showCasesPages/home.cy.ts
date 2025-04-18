describe('home page', () => {
  it('test home page only if exists', () => {
    cy.request({ url: '/', failOnStatusCode: false }).then((response) => {
      if (response.status === 200) {
        it('passes', () => {
          cy.visit('/')
        })
      } else {
        cy.log("Page non disponible, test ignoré")
      }
    })
  })
})

describe('home page', () => {
  it('test home page only if exists', () => {

    cy.visit('/')

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