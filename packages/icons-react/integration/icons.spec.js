/// <reference types="cypress" />
/// <reference types="../../../cypress/support" />

context("Icons", () => {
    beforeEach(() => {
        cy.testComponent("icons");
    });

    it("renders correctly", () => {
        cy.takeSnapshots();
    });
});
