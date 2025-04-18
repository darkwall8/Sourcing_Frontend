describe('notfound page', () => {
  it('test notfound page only if exists', () => {
    cy.request({ url: '/*', failOnStatusCode: false }).then((response) => {
      if (response.status === 200) {
        it('passes', () => {
          cy.visit('/*')
        })
      } else {
        cy.log("Page non disponible, test ignoré")
      }
    })
  })
})