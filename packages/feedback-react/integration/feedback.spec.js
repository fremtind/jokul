/// <reference types="cypress" />

let hasBeenCalled = false;

Cypress.on(`window:before:load`, (win) => {
    cy.stub(win.console, `info`, (msg) => {
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
        cy.getByTestid("feedback-5").first().click();
        cy.getComponent().toMatchImageSnapshot();
    });

    context("dark mode", () => {
        it("renders correctly", () => {
            cy.setDarkMode();
            cy.getComponent().toMatchImageSnapshot();
            cy.getByTestid("feedback-5").first().click();
            cy.getComponent().toMatchImageSnapshot();
        });
    });

    it("should send feedback if value is selected and user navigate away", () => {
        cy.getByTestid("feedback-1").first().click();
        cy.visit("/").then(() => expect(hasBeenCalled).to.deep.equal({ feedbackValue: 1, message: "" }));
    });
});
