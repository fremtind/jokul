/// <reference types="cypress" />
/// <reference types="../../../cypress/support" />

context("SystemMessage", () => {
    beforeEach(() => {
        cy.testComponent("systemmessage");
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
