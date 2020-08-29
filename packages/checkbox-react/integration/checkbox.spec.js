/// <reference types="cypress" />

context("Checkbox", () => {
    beforeEach(() => {
        cy.testComponent("checkbox");
    });

    it("renders correctly", () => {
        cy.get(".jkl-portal-component-example__example-wrapper").within(() => {
            cy.getByTestid("jkl-checkbox-input").last().check();
        });
        /* DESKTOP */
        cy.getComponent().toMatchImageSnapshot();
        cy.setMedFeil().getComponent().toMatchImageSnapshot();
        cy.setDarkMode().getComponent().toMatchImageSnapshot();
        cy.resetMedFeil().getComponent().toMatchImageSnapshot();
        cy.resetDarkMode();
        /* COMPACT */
        cy.setKompakt().getComponent().toMatchImageSnapshot();
        cy.setMedFeil().getComponent().toMatchImageSnapshot();
        cy.setDarkMode().getComponent().toMatchImageSnapshot();
        cy.resetMedFeil().getComponent().toMatchImageSnapshot();
    });

    it("has correct focus state", () => {
        cy.get(".jkl-portal-component-example__example-wrapper").within(() => {
            cy.getByTestid("jkl-checkbox-input").last().focus();
        });
        /* DESKTOP */
        cy.getComponent().toMatchImageSnapshot();
        cy.setDarkMode().getComponent().toMatchImageSnapshot().resetDarkMode();
        /* COMPACT */
        cy.setKompakt().getComponent().toMatchImageSnapshot();
        cy.setDarkMode().getComponent().toMatchImageSnapshot().resetDarkMode();
    });
});
