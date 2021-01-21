/// <reference types="cypress" />

context("SummaryTable", () => {
    beforeEach(() => {
        cy.testComponent("summarytable");
    });

    it("SummaryTable should work", () => {
        cy.getComponent().toMatchImageSnapshot();
    });
});
