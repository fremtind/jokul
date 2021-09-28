/// <reference types="cypress" />

describe("Select", () => {
    beforeEach(() => {
        cy.testComponent("select");
    });

    it("renders correctly", () => {
        cy.getComponent().toMatchImageSnapshot();
        cy.setMedFeil().getComponent().toMatchImageSnapshot().resetMedFeil();
        cy.openSelect("produsent");
        cy.getComponent().toMatchImageSnapshot();
        cy.openSelect("produsent").focusSelectValue("google");
        cy.getComponent().toMatchImageSnapshot();
        cy.openSelect("produsent").selectValue("google");
        cy.getComponent().toMatchImageSnapshot();
        cy.openSelect("produsent").selectValue("google").openSelect("produsent").focusSelectValue("apple");
        cy.getComponent().toMatchImageSnapshot();
    });

    context("dark mode", () => {
        it("renders correctly", () => {
            cy.setDarkMode();
            cy.getComponent().toMatchImageSnapshot();
            cy.setMedFeil().getComponent().toMatchImageSnapshot().resetMedFeil();
            cy.openSelect("produsent");
            cy.getComponent().toMatchImageSnapshot();
            cy.openSelect("produsent").focusSelectValue("google");
            cy.getComponent().toMatchImageSnapshot();
            cy.openSelect("produsent").selectValue("google");
            cy.getComponent().toMatchImageSnapshot();
            cy.openSelect("produsent").selectValue("google").openSelect("produsent").focusSelectValue("apple");
            cy.getComponent().toMatchImageSnapshot();
        });
    });
});
