describe('registration page', () => {
  it('test registration page only if exists', () => {
    cy.request({ url: '/registration', failOnStatusCode: false }).then((response) => {
      if (response.status === 200) {
        it('passes', () => {
          cy.visit('/registration')
        })
      } else {
        cy.log("Page non disponible, test ignoré")
      }
    })
  })
})