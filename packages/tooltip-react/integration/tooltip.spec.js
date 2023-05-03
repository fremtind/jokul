/// <reference types="cypress" />
/// <reference types="../../../cypress/support" />

describe("Tooltip", () => {
    beforeEach(() => {
        cy.testComponent("tooltip");
    });

    it("renders correctly", () => {
        cy.takeSnapshots();

        cy.takeSnapshots({
            setup: () => {
                // eslint-disable-next-line cypress/no-unnecessary-waiting
                cy.wait(120); // Vent på Framer Motion
                cy.get(`button.jkl-tooltip__button`).first().click();
                cy.get(`button.jkl-tooltip__button`).first().focus();
                // eslint-disable-next-line cypress/no-unnecessary-waiting
                cy.wait(120);
            },
            teardown: () => {
                // eslint-disable-next-line cypress/no-unnecessary-waiting
                cy.wait(120); // Vent på Framer Motion
                cy.get(`button.jkl-tooltip__button`).first().click();
                // eslint-disable-next-line cypress/no-unnecessary-waiting
                cy.wait(120);
            },
        });
    });
});
