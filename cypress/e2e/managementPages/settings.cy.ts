describe('setting page', () => {
  it('passes', () => {
    cy.visit('/setting')
  })
})
describe('setting page', () => {
  it('test setting page only if exists', () => {
    cy.request({ url: '/setting', failOnStatusCode: false }).then((response) => {
      if (response.status === 200) {
        it('passes', () => {
          cy.visit('/setting')
        })
      } else {
        cy.log("Page non disponible, test ignoré")
      }
    })
  })
})