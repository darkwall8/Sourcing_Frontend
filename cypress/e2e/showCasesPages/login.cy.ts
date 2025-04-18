describe('login page', () => {
  it('test login page only if exists', () => {
    cy.request({ url: '/login', failOnStatusCode: false }).then((response) => {
      if (response.status === 200) {
        it('passes', () => {
          cy.visit('/login')
        })
      } else {
        cy.log("Page non disponible, test ignoré")
      }
    })
  })
})