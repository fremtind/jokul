/// <reference types="cypress" />
/// <reference types="../../../cypress/support" />

context("ContentToggle", () => {
    beforeEach(() => {
        cy.testComponent("contenttoggle");
    });

    it("renders correctly", () => {
        const variants = ["flip", "fade"];

        cy.takeSnapshots({
            variants,
        });

        cy.takeSnapshots({
            variants,
            setup: () => {
                cy.setByttVerdi();
            },
            teardown: () => {
                cy.resetByttVerdi();
            },
        });
    });
});
