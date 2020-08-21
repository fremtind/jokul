/// <reference types="cypress" />

context("Accordion", () => {
    beforeEach(() => {
        cy.testComponent("accordion");
    });

    it("Accordion should work", () => {
        cy.getComponent().toMatchImageSnapshot();
        cy.setInvertert().getComponent().toMatchImageSnapshot();
        cy.getByTestid("jkl-accordion-item").first().click();
        cy.getComponent().toMatchImageSnapshot();
        cy.resetInvertert().getComponent().toMatchImageSnapshot();
    });
});
