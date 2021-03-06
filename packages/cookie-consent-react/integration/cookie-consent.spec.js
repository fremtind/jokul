/// <reference types="cypress" />

context("Cookie Consent", () => {
    beforeEach(() => {
        cy.testComponent("cookieconsent");
        cy.clearCookies();
    });

    it("Blocking Cookie Consent modal works as expected", () => {
        cy.getComponent().toMatchImageSnapshot();
        cy.getByTestid("trigger-cookie-consent").first().click();
        cy.getByTestid("jkl-cookie-consent-godta").should("be.visible");
        cy.getByTestid("jkl-cookie-consent-godta").first().click();
        cy.getCookie("fremtind-cookie-consent").should("exist");
        cy.getByTestid("jkl-cookie-consent-godta").should("not.be.visible");
    });

    it("Blocking Cookie Consent modal looks as expected", () => {
        cy.getByTestid("trigger-cookie-consent").first().click();
        cy.get(".jkl-cookie-consent-modal").toMatchImageSnapshot();
    });
});
