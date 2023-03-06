/// <reference types="cypress" />
/// <reference types="../../../cypress/support" />

context("Radio button", () => {
    beforeEach(() => {
        cy.testComponent("radiobutton");
    });

    it("renders correctly", () => {
        const kontaktmetode = 0;
        const fantDuFram = 1;
        const prisvisning = 2;
        const hjelpetekst = 3;

        cy.takeSnapshots({
            setup: () => {
                cy.focusInput("kontaktmetode");
            },
            eq: kontaktmetode,
        });

        cy.takeSnapshots({
            setup: () => {
                cy.checkInput("kontaktmetode");
            },
            eq: kontaktmetode,
        });

        cy.takeSnapshots({
            setup: () => {
                cy.setMedFeil();
            },
            teardown: () => {
                cy.resetMedFeil();
            },
            eq: kontaktmetode,
        });

        cy.takeSnapshots({
            setup: () => {
                cy.setInline();
            },
            teardown: () => {
                cy.resetInline();
            },
            eq: prisvisning,
        });

        cy.takeSnapshots({
            setup: () => {
                cy.setDensity("compact");
            },
            teardown: () => {
                cy.setDensity("comfortable");
            },
            eq: fantDuFram,
        });

        cy.takeSnapshots({
            eq: hjelpetekst,
        });
    });
});
