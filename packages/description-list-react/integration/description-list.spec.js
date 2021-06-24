/// <reference types="cypress" />

context("description list", () => {
    beforeEach(() => {
        cy.testComponent("descriptionlist");
    });

    it("description list should work", () => {
        cy.getComponent().toMatchImageSnapshot();
    });
});
