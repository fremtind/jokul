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

    context("dark mode", () => {
        it("renders correctly", () => {
            cy.setDarkMode();
            cy.getComponent().toMatchImageSnapshot();
            cy.getComponent().contains("Ja").click();
            cy.getComponent().toMatchImageSnapshot();
        });
    });

    it("should send feedback if value is selected and user navigate away", () => {
        cy.getComponent().contains("Ja").click();
        cy.visit("/").then(() => expect(hasBeenCalled).to.deep.equal({ feedbackValue: "ja", message: undefined }));
    });
});
