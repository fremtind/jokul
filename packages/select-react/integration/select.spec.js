/// <reference types="cypress" />
/// <reference types="../../../cypress/support" />

describe("Select", () => {
    beforeEach(() => {
        cy.testComponent("select");
    });

    it("renders correctly", () => {
        cy.takeSnapshots();

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
                cy.toggleSelectMenu("produsent");
            },
            teardown: () => {
                cy.toggleSelectMenu("produsent");
            },
        });

        cy.takeSnapshots({
            setup: () => {
                cy.toggleSelectMenu("produsent").focusSelectValue("3");
            },
            teardown: () => {
                cy.toggleSelectMenu("produsent");
            },
        });

        cy.takeSnapshots({
            setup: () => {
                cy.toggleSelectMenu("produsent").selectValue("3");
            },
            teardown: () => {
                cy.toggleSelectMenu("produsent");
            },
        });

        cy.takeSnapshots({
            setup: () => {
                cy.toggleSelectMenu("produsent").selectValue("3").toggleSelectMenu("produsent").focusSelectValue("1");
            },
            teardown: () => {
                cy.toggleSelectMenu("produsent");
            },
        });
    });
});
