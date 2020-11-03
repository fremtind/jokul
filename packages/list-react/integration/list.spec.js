/// <reference types="cypress" />

context("List", () => {
    beforeEach(() => {
        cy.testComponent("list");
    });

    it("List should work", () => {
        cy.getComponent().eq(0).toMatchImageSnapshot();
        cy.getComponent().eq(1).toMatchImageSnapshot();
        cy.getComponent().eq(2).toMatchImageSnapshot();
        cy.getComponent().eq(3).toMatchImageSnapshot();
        cy.setDarkMode();
        cy.getComponent().eq(0).toMatchImageSnapshot();
        cy.getComponent().eq(1).toMatchImageSnapshot();
        cy.getComponent().eq(2).toMatchImageSnapshot();
        cy.getComponent().eq(3).toMatchImageSnapshot();
    });
});
