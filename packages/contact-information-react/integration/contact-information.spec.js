/// <reference types="cypress" />
/// <reference types="../../../cypress/support" />

describe("ContactInformation", () => {
    beforeEach(() => {
        cy.testComponent("contactInformation");
    });

    it("renders correctly", () => {
        cy.takeSnapshots({
            setup: () => {
                cy.get('input[value="Med navn"]').uncheck();
                cy.get('input[value="Med telefon"]').uncheck();
                cy.get('input[value="Med chat og mail"]').uncheck();
                cy.get('input[value="Med QnA"]').uncheck();
            },
            teardown: () => {
                cy.get('input[value="Med navn"]').check();
                cy.get('input[value="Med telefon"]').check();
                cy.get('input[value="Med chat og mail"]').check();
                cy.get('input[value="Med QnA"]').check();
            },
        });

        cy.takeSnapshots({
            setup: () => {
                cy.get('input[value="Med navn"]').check();
                cy.get('input[value="Med telefon"]').uncheck();
                cy.get('input[value="Med chat og mail"]').uncheck();
                cy.get('input[value="Med QnA"]').uncheck();
            },
            teardown: () => {
                cy.get('input[value="Med navn"]').check();
                cy.get('input[value="Med telefon"]').check();
                cy.get('input[value="Med chat og mail"]').check();
                cy.get('input[value="Med QnA"]').check();
            },
        });

        cy.takeSnapshots({
            setup: () => {
                cy.get('input[value="Med navn"]').uncheck();
                cy.get('input[value="Med telefon"]').check();
                cy.get('input[value="Med chat og mail"]').check();
                cy.get('input[value="Med QnA"]').check();
            },
            teardown: () => {
                cy.get('input[value="Med navn"]').check();
                cy.get('input[value="Med telefon"]').check();
                cy.get('input[value="Med chat og mail"]').check();
                cy.get('input[value="Med QnA"]').check();
            },
        });

        cy.takeSnapshots({
            setup: () => {
                cy.get('input[value="Med navn"]').check();
                cy.get('input[value="Med telefon"]').check();
                cy.get('input[value="Med chat og mail"]').check();
                cy.get('input[value="Med QnA"]').check();
            },
        });
    });
});
