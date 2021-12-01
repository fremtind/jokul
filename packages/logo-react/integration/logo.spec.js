/// <reference types="cypress" />

context("Logo", () => {
    const logo = 0;
    const logostempel = 1;

    beforeEach(() => {
        cy.testComponent("logo");
    });

    it("renders correctly", () => {
        cy.getComponent().eq(logo).toMatchImageSnapshot();
        cy.get('input[value="Kun symbol"]').click();
        cy.getComponent().eq(logo).toMatchImageSnapshot();
        cy.getComponent().eq(logostempel).toMatchImageSnapshot();
    });

    context("dark mode", () => {
        it("renders correctly", () => {
            cy.setDarkMode();
            cy.getComponent().eq(logo).toMatchImageSnapshot();
            cy.get('input[value="Kun symbol"]').click();
            cy.getComponent().eq(logo).toMatchImageSnapshot();
            cy.getComponent().eq(logostempel).toMatchImageSnapshot();
        });
    });
});
