/* globals describe it cy */

describe('Kitchen Sink', () => {
  it('.should() - assert that <title> is correct', () => {
    cy.fixture('data').then((json) => {
      // set cookies
      cy.setCookie(json.cookies.server.key, json.cookies.server.value);
      cy.setCookie(json.cookies.locale.key, json.cookies.locale.value);

      // visit page
      cy.visit('/');

      cy.get('.ui.form').within(() => {
        // company name
        cy.get('input').eq(0).type(json.inputs.company.name.value);

        // company country
        cy.get('.field>.selection.dropdown')
          .eq(json.inputs.company.country.position)
          .click()
          .get('.item')
          .eq(json.inputs.company.country.item)
          .click();

        // company currency
        cy.get('.field>.selection.dropdown')
          .eq(json.inputs.company.currency.position)
          .click()
          .get('.item')
          .eq(json.inputs.company.currency.item)
          .click();

        // company currency
        cy.get('.field>.selection.dropdown')
          .eq(json.inputs.company.timezone.position)
          .click()
          .get('.item')
          .eq(json.inputs.company.timezone.item)
          .click();

        // user name
        cy.get('input').eq(4).type(json.inputs.user.name.value);

        // user email
        cy.get('input').eq(5).type(json.inputs.user.email.value);

        // user password
        cy.get('input').eq(6).type(json.inputs.user.password.value);

        // terms
        cy.get('label').contains(json.inputs.terms.text).click();

        // button
        cy.get('button').click();
      });
    });
  });
});
