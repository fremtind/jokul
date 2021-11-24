/// <reference types="cypress" />

let hasBeenCalled = false;

Cypress.on(`window:load`, (win) => {
    cy.stub(win.console, `log`, (msg) => {
        console.info("Stubbed log:", msg);
        if (msg.feedbackValue) {
            hasBeenCalled = msg;
        }
    });
});

describe("Feedback", () => {
    beforeEach(() => {
        cy.testComponent("feedback");
    });

    it("renders correctly", () => {
        cy.getComponent().toMatchImageSnapshot();
        cy.getComponent().contains("Ja").click();
        cy.getComponent().toMatchImageSnapshot();
    });

    it("dark mode renders correctly", () => {
        cy.setDarkMode();
        cy.getComponent().toMatchImageSnapshot();
        cy.getComponent().contains("Ja").click();
        cy.getComponent().toMatchImageSnapshot();
    });

    it("should send feedback if value is selected and user navigate away", () => {
        cy.getComponent().contains("Ja").click();
        cy.visit("/");
        expect(hasBeenCalled).to.deep.equal({ feedbackValue: "ja", message: undefined });
    });
});
