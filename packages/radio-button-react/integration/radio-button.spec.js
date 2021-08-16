/// <reference types="cypress" />

context("Radio button", () => {
    beforeEach(() => {
        cy.testComponent("radiobutton");
    });

    it("renders correctly", () => {
        cy.focusInput("likesradiobuttons");
        cy.getComponent().toMatchImageSnapshot();
        cy.checkInput("likesradiobuttons");
        cy.getComponent().toMatchImageSnapshot();
        cy.checkInput("likesradiobuttons");
        cy.setMedFeil().getComponent().toMatchImageSnapshot().resetMedFeil();
        cy.checkInput("likesradiobuttons");
        cy.setInline().getComponent().toMatchImageSnapshot().resetInline();
        cy.checkInput("likesradiobuttons");
        cy.setKompakt().getComponent().toMatchImageSnapshot().resetKompakt();
    });

    context("dark mode", () => {
        it("renders correctly", () => {
            cy.setDarkMode();
            cy.focusInput("likesradiobuttons");
            cy.getComponent().toMatchImageSnapshot();
            cy.checkInput("likesradiobuttons");
            cy.getComponent().toMatchImageSnapshot();
            cy.checkInput("likesradiobuttons");
            cy.setMedFeil().getComponent().toMatchImageSnapshot().resetMedFeil();
            cy.checkInput("likesradiobuttons");
            cy.setInline().getComponent().toMatchImageSnapshot().resetInline();
            cy.checkInput("likesradiobuttons");
            cy.setKompakt().getComponent().toMatchImageSnapshot().resetKompakt();
        });
    });
});
