/// <reference types="cypress" />
/// <reference types="../../../cypress/support" />

describe("Accordion", () => {
    beforeEach(() => {
        cy.testComponent("accordion");
    });

    it("renders correctly", () => {
        cy.takeSnapshots();

        cy.takeSnapshots({
            setup: () => {
                cy.getByTestid("jkl-accordion-item").first().click();
            },
            teardown: () => {
                cy.getByTestid("jkl-accordion-item").first().click();
            },
        });
    });
});
