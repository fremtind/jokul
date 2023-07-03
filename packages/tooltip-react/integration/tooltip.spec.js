/// <reference types="cypress" />
/// <reference types="../../../cypress/support" />

describe("Tooltip", () => {
    beforeEach(() => {
        cy.testComponent("tooltip");
    });

    it("renders correctly", () => {
        cy.takeSnapshots({ eq: 0 });

        cy.takeSnapshots({
            setup: () => {
                // eslint-disable-next-line cypress/no-unnecessary-waiting
                cy.wait(120); // Vent på Framer Motion
                cy.get(`button.jkl-tooltip-trigger`).first().focus();
                // eslint-disable-next-line cypress/no-unnecessary-waiting
                cy.wait(200); // vent på at tooltipen skal vises
            },
            teardown: () => {
                // eslint-disable-next-line cypress/no-unnecessary-waiting
                cy.wait(120); // Vent på Framer Motion
                cy.get(`button.jkl-tooltip-trigger`).first().blur();
                // eslint-disable-next-line cypress/no-unnecessary-waiting
                cy.wait(200); // vent på at tooltipen skal skjules
            },
            eq: 0,
        });
    });
});

describe("PopupTip", () => {
    beforeEach(() => {
        cy.testComponent("tooltip");
    });

    it("renders correctly", () => {
        cy.takeSnapshots({ eq: 1 });

        cy.takeSnapshots({
            setup: () => {
                // eslint-disable-next-line cypress/no-unnecessary-waiting
                cy.wait(120); // Vent på Framer Motion
                cy.get(`button.jkl-tooltip-question-button`).first().click();
                // eslint-disable-next-line cypress/no-unnecessary-waiting
                cy.wait(200); // vent på at tooltipen skal vises
            },
            teardown: () => {
                // eslint-disable-next-line cypress/no-unnecessary-waiting
                cy.wait(120); // Vent på Framer Motion
                cy.get(`button.jkl-tooltip-question-button`).first().blur();
                // eslint-disable-next-line cypress/no-unnecessary-waiting
                cy.wait(200); // vent på at tooltipen skal skjules
            },
            eq: 1,
        });
    });
});
