/// <reference types="cypress" />
/// <reference types="../../../cypress/support" />

context("IconButton", () => {
    beforeEach(() => {
        cy.testComponent("iconbutton");
    });

    it("renders correctly", () => {
        cy.takeSnapshots();
    });
});
