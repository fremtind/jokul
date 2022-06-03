/// <reference types="cypress" />
/// <reference types="../../../cypress/support" />

describe("Cookie Consent", () => {
    beforeEach(() => {
        cy.testComponent("cookieconsent");
        cy.clearCookies();
    });

    it("works and looks as expected", () => {
        cy.takeSnapshots();

        cy.getByTestid("trigger-cookie-consent").first().click();
        cy.getByTestid("jkl-cookie-consent-godta").should("be.visible");
        cy.getByTestid("jkl-cookie-consent-godta").first().click();
        cy.getCookie("fremtind-cookie-consent").should("exist");
        cy.getByTestid("jkl-cookie-consent-godta").should("not.be.visible");

        cy.takeSnapshots({
            customSelector: () => cy.get(".jkl-cookie-consent-modal__content"),
            setup: () => {
                cy.clearCookies();
                cy.getByTestid("trigger-cookie-consent").first().click();
            },
        });
    });
});
