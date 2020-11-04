/// <reference types="cypress" />

context("ContentToggle", () => {
    beforeEach(() => {
        cy.testComponent("contenttoggle");
    });

    it("Content Toggler should work", () => {
        cy.getComponent().toMatchImageSnapshot();
        cy.setFlip().waitForAnimation(300).getComponent().toMatchImageSnapshot();
    });
});
