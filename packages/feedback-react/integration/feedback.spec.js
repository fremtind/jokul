/// <reference types="cypress" />

describe("Feedback", () => {
    beforeEach(() => {
        cy.testComponent("feedback");
    });

    it("renders correctly", () => {
        cy.getComponent().toMatchImageSnapshot();
        cy.getComponent().contains("Ja").click();
        cy.getComponent().toMatchImageSnapshot();
    });

    it("dark mode renders correctly", () => {
        cy.setDarkMode();
        cy.getComponent().toMatchImageSnapshot();
        cy.getComponent().contains("Ja").click();
        cy.getComponent().toMatchImageSnapshot();
    });
});
