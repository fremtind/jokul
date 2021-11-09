/// <reference types="cypress" />

describe("Tabs", () => {
    beforeEach(() => {
        cy.testComponent("tabs");
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
