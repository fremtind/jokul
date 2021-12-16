/// <reference types="cypress" />

describe("DatePicker", () => {
    beforeEach(() => {
        cy.testComponent("datepicker");
    });

    it("renders correctly", () => {
        cy.getComponent().toMatchImageSnapshot();

        cy.focusInput("datepicker").type("24.10.1990");
        cy.getComponent().toMatchImageSnapshot();

        cy.get('input[value="large"]').click();
        cy.setKompakt();
        cy.getComponent().toMatchImageSnapshot().resetKompakt();

        cy.setMedFeil();
        cy.focusInput("datepicker").type("24.10.1990");
        cy.getComponent().toMatchImageSnapshot().resetMedFeil();

        cy.get('input[value="large"]').click();
        cy.setKompakt().setMedFeil();
        cy.getComponent().toMatchImageSnapshot().resetKompakt().resetMedFeil();
    });

    context("dark mode", () => {
        it("renders correctly", () => {
            cy.setDarkMode();
            cy.getComponent().toMatchImageSnapshot();

            cy.focusInput("datepicker").type("24.10.1990");
            cy.getComponent().toMatchImageSnapshot();

            cy.get('input[value="large"]').click();
            cy.setKompakt();
            cy.getComponent().toMatchImageSnapshot().resetKompakt();

            cy.setMedFeil();
            cy.focusInput("datepicker").type("24.10.1990");
            cy.getComponent().toMatchImageSnapshot().resetMedFeil();

            cy.get('input[value="large"]').click();
            cy.setKompakt().setMedFeil();
            cy.getComponent().toMatchImageSnapshot().resetKompakt().resetMedFeil();
        });
    });
});
