/// <reference types="cypress" />
/// <reference types="../../../cypress/support" />

context("Logo", () => {
    const logo = 0;
    const logostempel = 1;

    beforeEach(() => {
        cy.testComponent("logo");
    });

    it("renders correctly", () => {
        cy.takeSnapshots({
            eq: logo,
        });

        cy.takeSnapshots({
            setup: () => {
                cy.get('input[value="Kun symbol"]').check();
            },
            eq: logo,
        });

        cy.takeSnapshots({
            eq: logostempel,
        });
    });
});
