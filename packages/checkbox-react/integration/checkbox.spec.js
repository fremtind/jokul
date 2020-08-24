/// <reference types="cypress" />

context("Checkbox", () => {
    beforeEach(() => {
        cy.testComponent("checkbox");
    });

    it("renders correctly", () => {
        cy.getByTestid("jkl-checkbox-input").first().check();
        /* DESKTOP */
        cy.getComponent().toMatchImageSnapshot();
        cy.setMedFeil().getComponent().toMatchImageSnapshot();
        cy.setInvertert().getComponent().toMatchImageSnapshot();
        cy.resetMedFeil().getComponent().toMatchImageSnapshot();
        cy.resetInvertert();
        /* COMPACT */
        cy.setKompakt().getComponent().toMatchImageSnapshot();
        cy.setMedFeil().getComponent().toMatchImageSnapshot();
        cy.setInvertert().getComponent().toMatchImageSnapshot();
        cy.resetMedFeil().getComponent().toMatchImageSnapshot();
    });

    it("has correct focus state", () => {
        cy.getByTestid("jkl-checkbox-input").first().focus();
        /* DESKTOP */
        cy.getComponent().toMatchImageSnapshot();
        cy.setInvertert().getComponent().toMatchImageSnapshot().resetInvertert();
        /* COMPACT */
        cy.setKompakt().getComponent().toMatchImageSnapshot();
        cy.setInvertert().getComponent().toMatchImageSnapshot().resetInvertert();
    });
});
