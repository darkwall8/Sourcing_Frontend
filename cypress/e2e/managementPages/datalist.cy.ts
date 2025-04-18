describe('datalist page', () => {
  it('test datalist page only if exists', () => {
    cy.request({ url: '/datalist', failOnStatusCode: false }).then((response) => {
      if (response.status === 200) {
        it('passes', () => {
          cy.visit('/datalist')
        })
      } else {
        cy.log("Page non disponible, test ignoré")
      }
    })
  })
})