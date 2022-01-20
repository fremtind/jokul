/// <reference types="cypress" />

describe("Hamburger", () => {
    beforeEach(() => {
        cy.testComponent("hamburger");
    });

    it("renders correctly", () => {
        cy.getComponent().toMatchImageSnapshot();

        cy.get(".jkl-hamburger").click();
        cy.waitForAnimation();
        cy.getComponent().toMatchImageSnapshot();
        cy.get(".jkl-hamburger").click();
        cy.waitForAnimation();

        cy.get('input[value="Med tekst"]').click();
        cy.waitForAnimation();
        cy.getComponent().toMatchImageSnapshot();

        cy.get('input[value="Tekst før knapp"]').click();
        cy.waitForAnimation();
        cy.getComponent().toMatchImageSnapshot();
    });

    context("dark mode", () => {
        it("renders correctly", () => {
            cy.setDarkMode();
            cy.getComponent().toMatchImageSnapshot();

            cy.get(".jkl-hamburger").click();
            cy.waitForAnimation();
            cy.getComponent().toMatchImageSnapshot();
            cy.get(".jkl-hamburger").click();
            cy.waitForAnimation();

            cy.get('input[value="Med tekst"]').click();
            cy.waitForAnimation();
            cy.getComponent().toMatchImageSnapshot();

            cy.get('input[value="Tekst før knapp"]').click();
            cy.waitForAnimation();
            cy.getComponent().toMatchImageSnapshot();
        });
    });
});
