/// <reference types="cypress" />

context("SummaryTable", () => {
    beforeEach(() => {
        cy.testComponent("summarytable");
    });

    it("renders correctly", () => {
        cy.getComponent().toMatchImageSnapshot();
        cy.setDarkMode();
        cy.getComponent().toMatchImageSnapshot();
    });
});
