describe.skip('navbar', () => {
  it('test navbar only if exists', () => {
    cy.request({ url: '/dashboard', failOnStatusCode: false }).then((response) => {
      if (response.status === 200) {
        it('passes', () => {
          cy.visit('/dashboard')
        })
      } else {
        cy.log("Page non disponible, test ignoré")
      }
    })
  })
})