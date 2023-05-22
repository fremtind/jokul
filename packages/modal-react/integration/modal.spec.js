/// <reference types="cypress" />
/// <reference types="../../../cypress/support" />

describe("Modal", () => {
    beforeEach(() => {
        cy.testComponent("modal");
    });

    it("renders correctly", () => {
        cy.takeSnapshots({
            customSelector: () => cy.get(".jkl-modal"),
            setup: () => {
                cy.getByTestid("open-modal").first().click();
            },
            teardown: () => {
                cy.getByTestid("confirm-modal").first().click();
            },
        });
    });
});
