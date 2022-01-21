/// <reference types="cypress" />
/// <reference types="../../../cypress/support" />

context("SummaryTable", () => {
    beforeEach(() => {
        cy.testComponent("summarytable");
    });

    it("renders correctly", () => {
        cy.takeSnapshots();
    });
});
