/// <reference types="cypress" />

describe("Tag", () => {
    beforeEach(() => {
        cy.testComponent("tag");
    });

    it("renders correctly", () => {
        cy.getComponent().toMatchImageSnapshot();
    });

    context("dark mode", () => {
        it("renders correctly", () => {
            cy.setDarkMode();

            cy.getComponent().toMatchImageSnapshot();
        });
    });
});
