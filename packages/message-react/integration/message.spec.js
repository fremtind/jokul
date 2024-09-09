/// <reference types="cypress" />
/// <reference types="../../../cypress/support" />

context("Message", () => {
    beforeEach(() => {
        cy.testComponent("message");
    });

    it("renders correctly", () => {
        cy.takeSnapshots({
            variants: ["Info", "Success", "Warning", "Error"],
        });

        cy.takeSnapshots({
            setup: () => {
                cy.setDismissable();
            },
            teardown: () => {
                cy.resetDismissable();
            },
        });
    });
});
