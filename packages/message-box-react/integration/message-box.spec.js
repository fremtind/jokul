/// <reference types="cypress" />
/// <reference types="../../../cypress/support" />

context("MessageBox", () => {
    beforeEach(() => {
        cy.testComponent("messagebox");
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
