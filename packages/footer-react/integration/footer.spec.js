/// <reference types="cypress" />
/// <reference types="../../../cypress/support" />

describe("Footer", () => {
    beforeEach(() => {
        cy.testComponent("footer");
    });

    it("renders correctly", () => {
        cy.takeSnapshots({
            setup: () => {
                cy.get('input[value="Med lenker"]').uncheck();
                cy.get('input[value="Med finansportalen"]').uncheck();
            },
            teardown: () => {
                cy.get('input[value="Med lenker"]').check();
                cy.get('input[value="Med finansportalen"]').check();
            },
        });

        cy.takeSnapshots({
            setup: () => {
                cy.get('input[value="Med lenker"]').check();
                cy.get('input[value="Med finansportalen"]').uncheck();
            },
            teardown: () => {
                cy.get('input[value="Med finansportalen"]').check();
                cy.get('input[value="Med lenker"]').check();
            },
        });

        cy.takeSnapshots({
            setup: () => {
                cy.get('input[value="Med lenker"]').uncheck();
                cy.get('input[value="Med finansportalen"]').check();
            },
            teardown: () => {
                cy.get('input[value="Med finansportalen"]').check();
                cy.get('input[value="Med lenker"]').check();
            },
        });

        cy.takeSnapshots({
            setup: () => {
                cy.get('input[value="Med lenker"]').check();
                cy.get('input[value="Med finansportalen"]').check();
            },
        });
    });
});
