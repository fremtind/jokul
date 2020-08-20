/// <reference types="cypress" />

context("Accordion", () => {
    beforeEach(() => {
        cy.testComponent("accordion");
    });

    it("Accordion should work", () => {
        cy.getByTestid("jkl-accordion").toMatchImageSnapshot();
        cy.getByTestid("jkl-accordion-item").first().click();
        cy.getByTestid("jkl-accordion").toMatchImageSnapshot();
    });
});
