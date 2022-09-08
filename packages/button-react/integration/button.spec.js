/// <reference types="cypress" />
/// <reference types="../../../cypress/support" />

describe("Buttons", () => {
    beforeEach(() => {
        cy.testComponent("buttons");
    });

    it("render correctly", () => {
        const primaryButton = 0;
        const secondaryButton = 1;
        const tertiaryButton = 2;

        [primaryButton, secondaryButton, tertiaryButton].forEach((component) => {
            cy.takeSnapshots({ eq: component });

            cy.takeSnapshots({
                setup: () => {
                    cy.setwithLoader().setisLoading();
                },
                teardown: () => {
                    cy.resetwithLoader().resetisLoading();
                },
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

            cy.takeSnapshots({
                setup: () => {
                    cy.setDensity("compact").setwithLoader().setisLoading();
                },
                teardown: () => {
                    cy.setDensity("comfortable").resetwithLoader().resetisLoading();
                },
                eq: component,
            });
        });
    });
});
