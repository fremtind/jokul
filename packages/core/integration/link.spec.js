/// <reference types="cypress" />
/// <reference types="../../../cypress/support" />

describe("Link", () => {
    beforeEach(() => {
        cy.testComponent("link");
    });

    it("renders correctly", () => {
        const link = 0;
        const navLink = 1;

        [link, navLink].forEach((component) => {
            cy.takeSnapshots({
                eq: component,
            });

            cy.takeSnapshots({
                setup: () => {
                    cy.setDensity("compact");
                },
                teardown: () => {
                    cy.setDensity("comfortable");
                },
                eq: component,
            });
        });

        cy.takeSnapshots({
            setup: () => {
                cy.get('input[value="Back"]').check();
            },
            teardown: () => {
                cy.get('input[value="Back"]').uncheck();
            },
            eq: navLink,
        });

        cy.takeSnapshots({
            setup: () => {
                cy.setDensity("compact");
                cy.get('input[value="Back"]').check();
            },
            teardown: () => {
                cy.setDensity("comfortable");
                cy.get('input[value="Back"]').uncheck();
            },
            eq: navLink,
        });
    });
});
