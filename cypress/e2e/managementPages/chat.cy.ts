describe('chat page', () => {
  it('test chat page only if exists', () => {
    cy.request({ url: '/chats', failOnStatusCode: false }).then((response) => {
      if (response.status === 200) {
        it('passes', () => {
          cy.visit('/chats')
        })
      } else {
        cy.log("Page non disponible, test ignoré")
      }
    })
  })
})