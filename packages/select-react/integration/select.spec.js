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
                cy.toggleSelectMenu("produsent").focusSelectValue("google");
            },
            teardown: () => {
                cy.toggleSelectMenu("produsent");
            },
        });

        cy.takeSnapshots({
            setup: () => {
                cy.toggleSelectMenu("produsent").selectValue("google");
            },
            teardown: () => {
                cy.toggleSelectMenu("produsent");
            },
        });

        cy.takeSnapshots({
            setup: () => {
                cy.toggleSelectMenu("produsent")
                    .selectValue("google")
                    .toggleSelectMenu("produsent")
                    .focusSelectValue("apple");
            },
            teardown: () => {
                cy.toggleSelectMenu("produsent");
            },
        });
    });
});
