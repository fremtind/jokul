/// <reference types="cypress" />

describe("Accordion", () => {
    beforeEach(() => {
        cy.testComponent("accordion");
    });

    it("renders correctly", () => {
        cy.getComponent().toMatchImageSnapshot();
        cy.getByTestid("jkl-accordion-item").first().click().waitForAnimation();
        cy.getComponent().toMatchImageSnapshot();
        cy.setDarkMode();
        cy.getComponent().toMatchImageSnapshot();
        cy.getByTestid("jkl-accordion-item").first().click().waitForAnimation();
        cy.getComponent().toMatchImageSnapshot();
    });
});
