/// <reference types="cypress" />

describe("Slider", () => {
    beforeEach(() => {
        cy.testComponent("slider");
    });

    it("renders correctly", () => {
        cy.getComponent().toMatchImageSnapshot();
        cy.setMedFeil().toMatchImageSnapshot();
    });

    context("dark mode", () => {
        it("renders correctly", () => {
            cy.setDarkMode();
            cy.getComponent().toMatchImageSnapshot();
            cy.setMedFeil().toMatchImageSnapshot();
        });
    });
});
