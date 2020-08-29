/// <reference types="cypress" />

context("Accordion", () => {
    beforeEach(() => {
        cy.testComponent("accordion");
    });

    it("Accordion should work", () => {
        cy.getComponent().toMatchImageSnapshot();
        cy.setDarkMode().getComponent().toMatchImageSnapshot();
        cy.getByTestid("jkl-accordion-item").first().click().waitForAnimation(300);
        cy.getComponent().toMatchImageSnapshot();
        cy.resetDarkMode().getComponent().toMatchImageSnapshot();
    });
});
