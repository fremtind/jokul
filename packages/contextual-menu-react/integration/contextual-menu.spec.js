/// <reference types="cypress" />
/// <reference types="../../../cypress/support" />

describe("ContextualMenu", () => {
    beforeEach(() => {
        cy.testComponent("contextualmenu");
    });

    it("renders menu when trigger is clicked", () => {
        cy.takeSnapshots({
            customSelector: () => cy.get(".jkl-contextual-menu"),
            setup: () => {
                cy.getByTestid("trigger-contextual-menu").first().click();
            },
        });
    });
});
