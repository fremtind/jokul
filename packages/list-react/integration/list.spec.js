/// <reference types="cypress" />

describe("List", () => {
    beforeEach(() => {
        cy.testComponent("list");
    });

    it("renders correctly", () => {
        cy.get('input[value="Nummerert"]').click();
        cy.getComponent().toMatchImageSnapshot();
        cy.get('input[value="Unummerert"]').click();
        cy.getComponent().toMatchImageSnapshot();
        cy.get('input[value="Med ikon"]').click();
        cy.getComponent().toMatchImageSnapshot();
    });

    context("dark mode", () => {
        it("renders correctly", () => {
            cy.setDarkMode();
            cy.get('input[value="Nummerert"]').click();
            cy.getComponent().toMatchImageSnapshot();
            cy.get('input[value="Unummerert"]').click();
            cy.getComponent().toMatchImageSnapshot();
            cy.get('input[value="Med ikon"]').click();
            cy.getComponent().toMatchImageSnapshot();
        });
    });
});
