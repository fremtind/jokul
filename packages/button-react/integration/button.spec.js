/// <reference types="cypress" />

context("Buttons", () => {
    beforeEach(() => {
        cy.testComponent("buttons");
    });

    it("Buttons should work", () => {
        cy.getComponent().toMatchImageSnapshot();
        cy.setKompakt().getComponent().toMatchImageSnapshot();
        cy.setInvertert().getComponent().toMatchImageSnapshot();
        cy.resetKompakt().getComponent().toMatchImageSnapshot();
    });
});
