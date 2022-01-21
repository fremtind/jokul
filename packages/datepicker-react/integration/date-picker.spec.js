/// <reference types="cypress" />
/// <reference types="../../../cypress/support" />

describe("DatePicker", () => {
    beforeEach(() => {
        cy.testComponent("datepicker");
    });

    it("renders correctly", () => {
        cy.takeSnapshots();

        cy.takeSnapshots({
            setup: () => {
                cy.focusInput("datepicker").type("24.10.1990");
            },
        });

        cy.takeSnapshots({
            setup: () => {
                cy.get('input[value="large"]').click();
                cy.setCompact();
            },
            teardown: () => {
                cy.resetCompact();
            },
        });

        cy.takeSnapshots({
            setup: () => {
                cy.setMedFeil();
                cy.focusInput("datepicker").type("24.10.1990");
            },
            teardown: () => {
                cy.resetMedFeil();
            },
        });

        cy.takeSnapshots({
            setup: () => {
                cy.setCompact().setMedFeil();
                cy.focusInput("datepicker").type("24.10.1990");
            },
            teardown: () => {
                cy.resetCompact().resetMedFeil();
            },
        });
    });
});
