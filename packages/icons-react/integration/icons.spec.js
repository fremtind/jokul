/// <reference types="cypress" />

context("Icons", () => {
    beforeEach(() => {
        cy.testComponent("icons");
    });

    it("renders correctly", () => {
        cy.getComponent().toMatchImageSnapshot();
    });

    context("dark mode", () => {
        it("renders correctly", () => {
            cy.setDarkMode();
            cy.getComponent().toMatchImageSnapshot();
        });
    });
});
