/// <reference types="cypress" />

context("Icons", () => {
    beforeEach(() => {
        cy.testComponent("icons");
    });

    it("renders correctly", () => {
        cy.getComponent().eq(0).toMatchImageSnapshot();
    });

    context("dark mode", () => {
        it("renders correctly", () => {
            cy.setDarkMode();
            cy.getComponent().eq(0).toMatchImageSnapshot();
        });
    });
});
