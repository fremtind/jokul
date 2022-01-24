/// <reference types="cypress" />
/// <reference types="../../../cypress/support" />

context("AlertMessage", () => {
    beforeEach(() => {
        cy.testComponent("alertmessage");
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
