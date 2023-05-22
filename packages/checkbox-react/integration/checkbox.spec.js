/// <reference types="cypress" />
/// <reference types="../../../cypress/support" />

describe("Checkbox", () => {
    beforeEach(() => {
        cy.testComponent("checkbox");
    });

    it("renders correctly", () => {
        cy.takeSnapshots({
            eq: 0,
            setup: () => {
                cy.focusInput("checklist");
            },
        });

        cy.takeSnapshots({
            eq: 0,
            setup: () => {
                cy.checkInput("checklist");
            },
        });

        cy.takeSnapshots({
            eq: 0,
            setup: () => {
                cy.get('input[value="Med hjelpetekst"]').check();
                cy.checkInput("checklist");
            },
        });

        cy.takeSnapshots({
            eq: 0,
            setup: () => {
                cy.checkInput("checklist");
                cy.setMedFeil();
            },
            teardown: () => {
                cy.resetMedFeil();
            },
        });

        cy.takeSnapshots({
            eq: 0,
            setup: () => {
                cy.setDensity("compact");
                cy.checkInput("checklist");
            },
            teardown: () => {
                cy.setDensity("comfortable");
            },
        });
    });
});
