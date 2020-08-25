/// <reference types="cypress" />

context("Radio button", () => {
    beforeEach(() => {
        cy.testComponent("radiobutton");
    });

    it("renders correctly", () => {
        cy.get("input[name=likesradiobuttons]").first().check();
        /* DESKTOP */
        cy.getComponent().toMatchImageSnapshot();
        cy.setInline().getComponent().toMatchImageSnapshot().resetInline();
        cy.setMedFeil().getComponent().toMatchImageSnapshot();
        cy.setDarkMode().getComponent().toMatchImageSnapshot();
        cy.resetMedFeil().getComponent().toMatchImageSnapshot();
        cy.resetDarkMode();
        /* COMPACT */
        cy.setKompakt().getComponent().toMatchImageSnapshot();
        cy.setInline().getComponent().toMatchImageSnapshot().resetInline();
        cy.setMedFeil().getComponent().toMatchImageSnapshot();
        cy.setDarkMode().getComponent().toMatchImageSnapshot();
        cy.resetMedFeil().getComponent().toMatchImageSnapshot();
    });

    it("has correct focus state", () => {
        cy.get("input[name=likesradiobuttons]").first().focus();
        /* DESKTOP */
        cy.getComponent().toMatchImageSnapshot();
        cy.setDarkMode().getComponent().toMatchImageSnapshot().resetInvertert();
        /* COMPACT */
        cy.setKompakt().getComponent().toMatchImageSnapshot();
        cy.setDarkMode().getComponent().toMatchImageSnapshot().resetDarkMode();
    });
});
