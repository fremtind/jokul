/// <reference types="cypress" />
/// <reference types="../../../cypress/support" />

describe("ContextualMenu", () => {
    beforeEach(() => {
        cy.testComponent("contextualmenu");
    });

    it("renders the trigger correctly", () => {
        cy.takeSnapshots();
    });

    it("renders menu when trigger is clicked", () => {
        cy.takeSnapshots({
            setup: () => {
                cy.get(".jkl-contextual-menu-trigger-button").click();
            },
        });
    });
});
