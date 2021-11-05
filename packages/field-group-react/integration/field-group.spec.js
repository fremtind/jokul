/// <reference types="cypress" />

describe("FieldGroup", () => {
    beforeEach(() => {
        cy.testComponent("fieldgroup");
    });

    it("renders correctly", () => {
        cy.getComponent().toMatchImageSnapshot();
        cy.setChoice("Variant", "medium").getComponent().toMatchImageSnapshot();
        cy.setChoice("Variant", "large").getComponent().toMatchImageSnapshot();
        cy.setMedFeil().getComponent().toMatchImageSnapshot().resetMedFeil();
    });

    context("dark mode", () => {
        it("renders correctly", () => {
            cy.setDarkMode();
            cy.getComponent().toMatchImageSnapshot();
            cy.setChoice("Variant", "medium").getComponent().toMatchImageSnapshot();
            cy.setChoice("Variant", "large").getComponent().toMatchImageSnapshot();
            cy.setMedFeil().getComponent().toMatchImageSnapshot().resetMedFeil();
        });
    });
});
