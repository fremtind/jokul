/// <reference types="cypress" />

describe("Checkbox", () => {
    beforeEach(() => {
        cy.testComponent("checkbox");
    });

    it("renders correctly", () => {
        cy.focusInput("checklist");
        cy.getComponent().toMatchImageSnapshot();
        cy.checkInput("checklist");
        cy.getComponent().toMatchImageSnapshot();
        cy.get('input[value="Med hjelpetekst"]').click();
        cy.checkInput("checklist");
        cy.getComponent().toMatchImageSnapshot();
        cy.checkInput("checklist");
        cy.setMedFeil().getComponent().toMatchImageSnapshot().resetMedFeil();
        cy.checkInput("checklist");
        cy.setKompakt().getComponent().toMatchImageSnapshot().resetKompakt();
    });

    context("dark mode", () => {
        it("renders correctly", () => {
            cy.setDarkMode();
            cy.focusInput("checklist");
            cy.getComponent().toMatchImageSnapshot();
            cy.checkInput("checklist");
            cy.getComponent().toMatchImageSnapshot();
            cy.get('input[value="Med hjelpetekst"]').click();
            cy.checkInput("checklist");
            cy.getComponent().toMatchImageSnapshot();
            cy.checkInput("checklist");
            cy.setMedFeil().getComponent().toMatchImageSnapshot().resetMedFeil();
            cy.checkInput("checklist");
            cy.setKompakt().getComponent().toMatchImageSnapshot().resetKompakt();
        });
    });
});
