/// <reference types="cypress" />

describe("Cookie Consent", () => {
    beforeEach(() => {
        cy.testComponent("cookieconsent");
        cy.clearCookies();
    });

    context("blocking", () => {
        it("works as expected", () => {
            cy.getComponent().toMatchImageSnapshot();
            cy.getByTestid("trigger-cookie-consent").first().click();
            cy.getByTestid("jkl-cookie-consent-godta").should("be.visible");
            cy.getByTestid("jkl-cookie-consent-godta").first().click();
            cy.getCookie("fremtind-cookie-consent").should("exist");
            cy.getByTestid("jkl-cookie-consent-godta").should("not.be.visible");
        });

        it("looks as expected", () => {
            cy.getByTestid("trigger-cookie-consent").first().click();
            cy.get(".jkl-cookie-consent-modal").toMatchImageSnapshot();
        });

        context("dark mode", () => {
            it("looks as expected", () => {
                cy.setDarkMode();
                cy.getByTestid("trigger-cookie-consent").first().click();
                cy.get(".jkl-cookie-consent-modal").toMatchImageSnapshot();
            });
        });
    });
});
