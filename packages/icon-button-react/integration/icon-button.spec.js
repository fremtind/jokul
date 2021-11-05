/// <reference types="cypress" />

context("IconButton", () => {
    beforeEach(() => {
        cy.testComponent("iconbutton");
    });

    it("renders correctly", () => {
        cy.getComponent().toMatchImageSnapshot();
        cy.setChoice("Type", "clear").getComponent().toMatchImageSnapshot();
        cy.setChoice("Type", "calendar").getComponent().toMatchImageSnapshot();
    });

    context("dark mode", () => {
        it("renders correctly", () => {
            cy.setDarkMode();
            cy.getComponent().toMatchImageSnapshot();
            cy.setChoice("Type", "clear").getComponent().toMatchImageSnapshot();
            cy.setChoice("Type", "calendar").getComponent().toMatchImageSnapshot();
        });
    });
});
