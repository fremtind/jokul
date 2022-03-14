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
                cy.get('input[value="Med adresse"]').uncheck();
            },
            teardown: () => {
                cy.get('input[value="Med lenker"]').check();
                cy.get('input[value="Med adresse"]').check();
            },
        });

        cy.takeSnapshots({
            setup: () => {
                cy.get('input[value="Med lenker"]').check();
                cy.get('input[value="Med adresse"]').uncheck();
            },
            teardown: () => {
                cy.get('input[value="Med adresse"]').check();
                cy.get('input[value="Med lenker"]').check();
            },
        });

        cy.takeSnapshots({
            setup: () => {
                cy.get('input[value="Med lenker"]').uncheck();
                cy.get('input[value="Med adresse"]').check();
            },
            teardown: () => {
                cy.get('input[value="Med adresse"]').check();
                cy.get('input[value="Med lenker"]').check();
            },
        });

        cy.takeSnapshots({
            setup: () => {
                cy.get('input[value="Med lenker"]').check();
                cy.get('input[value="Med adresse"]').check();
            },
        });
    });
});
