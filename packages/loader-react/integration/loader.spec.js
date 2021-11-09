/// <reference types="cypress" />

describe("Loader", () => {
    beforeEach(() => {
        cy.testComponent("loader");
    });

    it("render correctly", () => {
        cy.getComponent().toMatchImageSnapshot();
        cy.setChoice("Variant", "Medium").getComponent().toMatchImageSnapshot();
        cy.setChoice("Variant", "Small").getComponent().toMatchImageSnapshot();
    });

    context("dark mode", () => {
        it("render correctly", () => {
            cy.setDarkMode();
            cy.getComponent().toMatchImageSnapshot();
            cy.setChoice("Variant", "Medium").getComponent().toMatchImageSnapshot();
            cy.setChoice("Variant", "Small").getComponent().toMatchImageSnapshot();
        });
    });
});
