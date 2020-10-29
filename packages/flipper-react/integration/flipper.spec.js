/// <reference types="cypress" />

context("flipper", () => {
    beforeEach(() => {
        cy.testComponent("flipper");
    });

    it("flipper should work", () => {
        cy.getComponent().toMatchImageSnapshot();
        cy.setFlip().waitForAnimation(300).getComponent().toMatchImageSnapshot();
    });
});
