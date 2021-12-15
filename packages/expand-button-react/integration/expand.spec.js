/// <reference types="cypress" />

describe("ExpandButton", () => {
    beforeEach(() => {
        cy.testComponent("expandbutton");
    });

    it("renders correctly", () => {
        cy.get('input[value="Frittstående"]').click();
        cy.getComponent().toMatchImageSnapshot();
        cy.getByTestid("jkl-expand-button").first().click().waitForAnimation();
        cy.getComponent().toMatchImageSnapshot();

        cy.get('input[value="Oppover"]').click();
        cy.getComponent().toMatchImageSnapshot();
        cy.getByTestid("jkl-expand-button").first().click().waitForAnimation();
        cy.getComponent().toMatchImageSnapshot();
    });

    context("dark mode", () => {
        it("renders correctly", () => {
            cy.setDarkMode();
            cy.get('input[value="Frittstående"]').click();
            cy.getComponent().toMatchImageSnapshot();
            cy.getByTestid("jkl-expand-button").first().click().waitForAnimation();
            cy.getComponent().toMatchImageSnapshot();

            cy.get('input[value="Oppover"]').click();
            cy.getComponent().toMatchImageSnapshot();
            cy.getByTestid("jkl-expand-button").first().click().waitForAnimation();
            cy.getComponent().toMatchImageSnapshot();
        });
    });
});
