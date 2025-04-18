import API from "../../../src/utils/API";
const api = new API();

describe('login page', () => {
  it('test login page only if exists', () => {

    cy.visit('/login')

    let shouldTest = false;

    cy.get('body').then(($body) => {
      if ($body.find('[data-canbetest="true"]').length > 0) {
        shouldTest = true;
      }
    }).then(() => {
      if (shouldTest) {
        cy.intercept("POST", `${api.apiUrl}/api/auth/login`).as("loginRequest");

        cy.get("input[type='email']").type("fokowilfried7@gmail.com");
        cy.get("input[type='password']").type("1234");

        cy.contains("Se connecter").click();

        cy.wait("@loginRequest").then((intercept) => {
          expect(intercept.request.body).to.deep.equal({
            email: "fokowilfried7@gmail.com",
            password: "1234"
          });

          expect(intercept.response?.statusCode).to.eq(200);
        });
      } else {
        cy.log("Page non disponible, test ignoré");
      }
    });
  });
});