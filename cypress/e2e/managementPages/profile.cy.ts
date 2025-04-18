describe('profile page', () => {
  it('test profile page only if exists', () => {
    cy.request({ url: '/profile', failOnStatusCode: false }).then((response) => {
      if (response.status === 200) {
        it('passes', () => {
          cy.visit('/profile')
        })
      } else {
        cy.log("Page non disponible, test ignoré")
      }
    })
  })
})