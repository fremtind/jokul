/// <reference types="cypress" />

context("Buttons", () => {
    beforeEach(() => {
        cy.testComponent("buttons");
    });

    it("Buttons should work", () => {
        cy.getComponent().eq(0).toMatchImageSnapshot();
        cy.getComponent().eq(1).toMatchImageSnapshot();
        cy.getComponent().eq(2).toMatchImageSnapshot();
        cy.setKompakt().getComponent().eq(0).toMatchImageSnapshot();
        cy.getComponent().eq(1).toMatchImageSnapshot();
        cy.getComponent().eq(2).toMatchImageSnapshot();
        cy.setDarkMode().getComponent().eq(0).toMatchImageSnapshot();
        cy.getComponent().eq(1).toMatchImageSnapshot();
        cy.getComponent().eq(2).toMatchImageSnapshot();
        cy.resetKompakt().getComponent().eq(0).toMatchImageSnapshot();
        cy.getComponent().eq(1).toMatchImageSnapshot();
        cy.getComponent().eq(2).toMatchImageSnapshot();
    });
});
