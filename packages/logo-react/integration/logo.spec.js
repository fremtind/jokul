/// <reference types="cypress" />

context("Logo", () => {
    beforeEach(() => {
        cy.testComponent("logo");
    });

    it("renders correctly", () => {
        cy.getComponent().toMatchImageSnapshot();
        cy.get('input[value="Kun symbol"]').click();
        cy.getComponent().toMatchImageSnapshot();
    });

    context("dark mode", () => {
        it("renders correctly", () => {
            cy.setDarkMode();
            cy.getComponent().toMatchImageSnapshot();
            cy.get('input[value="Kun symbol"]').click();
            cy.getComponent().toMatchImageSnapshot();
        });
    });
});
