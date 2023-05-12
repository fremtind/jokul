/// <reference types="cypress" />
/// <reference types="../../../cypress/support" />

describe("Cookie Consent", () => {
    beforeEach(() => {
        cy.testComponent("cookieconsent");
        cy.clearCookies();
    });

    it("works and looks as expected", () => {
        cy.takeSnapshots({
            skipDarkMode: true,
        });

        cy.getByTestid("trigger-cookie-consent").first().click();
        cy.getByTestid("jkl-cookie-consent-godta").should("be.visible");
        cy.getByTestid("jkl-cookie-consent-godta").first().click();
        cy.getCookie("fremtind-cookie-consent").should("exist");
        cy.getByTestid("jkl-cookie-consent-godta").should("not.be.visible");

        cy.takeSnapshots({
            skipDarkMode: true,
            customSelector: () => cy.get(".jkl-modal"),
            setup: () => {
                cy.clearCookies();
                cy.getByTestid("trigger-cookie-consent").first().click();
            },
            teardown: () => {
                cy.getByTestid("jkl-cookie-consent-godta").first().click();
            },
        });
    });
});
