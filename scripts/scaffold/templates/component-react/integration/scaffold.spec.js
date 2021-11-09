/// <reference types="cypress" />

describe("Scaffold", () => {
    beforeEach(() => {
        cy.testComponent("scaffold");
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
