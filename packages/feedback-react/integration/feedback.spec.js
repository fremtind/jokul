/// <reference types="cypress" />
/// <reference types="../../../cypress/support" />

describe("Feedback", () => {
    beforeEach(() => {
        cy.testComponent("feedback");
    });

    it("renders correctly", () => {
        cy.takeSnapshots();

        cy.takeSnapshots({
            setup: () => {
                cy.getComponent().contains("Ja").click();
            },
        });
    });
});
