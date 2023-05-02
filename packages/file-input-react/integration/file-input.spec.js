/// <reference types="cypress" />
/// <reference types="../../../cypress/support" />

describe("FileInput", () => {
    beforeEach(() => {
        cy.testComponent("fileinput");
    });

    it("renders correctly", () => {
        cy.takeSnapshots();

        cy.takeSnapshots({
            setup: () => {
                cy.get('input[value="Laster opp"]').check();
            },
            teardown: () => {
                cy.get('input[value="Laster opp"]').uncheck();
            },
        });

        cy.takeSnapshots({
            setup: () => {
                cy.get('input[value="Med valideringsfeil"]').check();
            },
            teardown: () => {
                cy.get('input[value="Med valideringsfeil"]').uncheck();
            },
        });

        cy.takeSnapshots({
            setup: () => {
                cy.setMedFeil();
            },
            teardown: () => {
                cy.resetMedFeil();
            },
        });

        cy.takeSnapshots({
            setup: () => {
                cy.get('input[value="Lastet opp"]').check();
            },
            teardown: () => {
                cy.get('input[value="Lastet opp"]').uncheck();
            },
        });

        cy.takeSnapshots({
            setup: () => {
                cy.get('input[value="small"]').click();
            },
            teardown: () => {
                cy.get('input[value="flexible"]').click();
            },
        });
    });
});
