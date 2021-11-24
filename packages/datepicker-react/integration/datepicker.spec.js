/// <reference types="cypress" />

describe("DatePicker", () => {
    beforeEach(() => {
        cy.testComponent("datepicker");
    });

    it("renders correctly", () => {
        cy.getComponent().toMatchImageSnapshot();
        cy.focusInput("datepicker").type("24.10.1990");
        cy.getComponent().toMatchImageSnapshot();
        cy.setMedFeil();
        cy.focusInput("datepicker").type("24.10.1990");
        cy.getComponent().toMatchImageSnapshot().resetMedFeil();
    });

    context("dark mode", () => {
        it("renders correctly", () => {
            cy.setDarkMode();
            cy.getComponent().toMatchImageSnapshot();
            cy.focusInput("datepicker").type("24.10.1990");
            cy.getComponent().toMatchImageSnapshot();
            cy.setMedFeil();
            cy.focusInput("datepicker").type("24.10.1990");
            cy.getComponent().toMatchImageSnapshot().resetMedFeil();
        });
    });
});
