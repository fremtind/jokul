/// <reference types="cypress" />

let hasBeenCalled = false;

Cypress.on(`window:before:load`, (win) => {
    cy.stub(win.console, `info`, (msg) => {
        if (msg.feedbackValue) {
            hasBeenCalled = msg;
        }
    });
});

context("Feedback", () => {
    beforeEach(() => {
        cy.testComponent("feedback");
    });

    it("Feedback should work", () => {
        cy.getComponent().toMatchImageSnapshot();
        cy.setDarkMode().getComponent().toMatchImageSnapshot();
    });

    it("should send feedback if value is selected and user navigate away", () => {
        cy.getByTestid("feedback-1").first().click();
        cy.visit("/");
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(200).then(() => expect(hasBeenCalled).to.deep.equal({ feedbackValue: 1, message: "" }));
    });
});
