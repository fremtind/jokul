/// <reference types="cypress" />
/// <reference types="../../../cypress/support" />

describe("FieldGroup", () => {
    beforeEach(() => {
        cy.testComponent("fieldgroup");
    });

    it("renders correctly", () => {
        cy.takeSnapshots({
            variants: ["small", "medium", "large"],
        });

        cy.takeSnapshots({
            setup: () => {
                cy.setMedFeil();
            },
            teardown: () => {
                cy.resetMedFeil();
            },
        });
    });
});
