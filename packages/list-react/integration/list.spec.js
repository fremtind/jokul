/// <reference types="cypress" />

describe("List", () => {
    beforeEach(() => {
        cy.testComponent("list");
    });

    it("renders correctly", () => {
        cy.get('input[value="Ordered"]').click();
        cy.getComponent().toMatchImageSnapshot();
        cy.get('input[value="Unordered"]').click();
        cy.getComponent().toMatchImageSnapshot();
        cy.get('input[value="Coverage"]').click();
        cy.getComponent().toMatchImageSnapshot();
    });

    context("dark mode", () => {
        it("renders correctly", () => {
            cy.setDarkMode();
            cy.get('input[value="Ordered"]').click();
            cy.getComponent().toMatchImageSnapshot();
            cy.get('input[value="Unordered"]').click();
            cy.getComponent().toMatchImageSnapshot();
            cy.get('input[value="Coverage"]').click();
            cy.getComponent().toMatchImageSnapshot();
        });
    });
});
