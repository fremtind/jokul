/// <reference types="cypress" />
/// <reference types="../../../cypress/support" />

describe("ContextualMenu", () => {
    beforeEach(() => {
        cy.testComponent("menu");
    });

    it("renders menu when trigger is clicked", () => {
        cy.takeSnapshots({
            eq: 0,
            customSelector: () => cy.get(".jkl-menu"),
            setup: () => {
                cy.getByTestid("trigger-menu").first().click();
            },
        });
    });
});
