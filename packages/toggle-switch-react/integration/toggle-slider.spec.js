/// <reference types="cypress" />
/// <reference types="../../../cypress/support" />

describe("ToggleSwitch", () => {
    beforeEach(() => {
        cy.testComponent("toggleswitch");
    });

    it("renders correctly", () => {
        const toggleSwitch = 0;
        const toggleSlider = 1;

        cy.takeSnapshots({ eq: toggleSwitch });

        cy.takeSnapshots({
            setup: () => {
                cy.get(".jkl-toggle-switch").first().focus();
            },
            eq: toggleSwitch,
        });

        cy.takeSnapshots({
            setup: () => {
                cy.get(".jkl-toggle-switch").first().click().waitForAnimation();
            },
            eq: toggleSwitch,
        });

        cy.takeSnapshots({ eq: toggleSlider });

        cy.takeSnapshots({
            setup: () => {
                cy.getByTestid("jkl-toggle-slider").first().focus();
            },
            eq: toggleSlider,
        });

        cy.takeSnapshots({
            setup: () => {
                cy.getByTestid("jkl-toggle-slider").first().click().waitForAnimation();
            },
            eq: toggleSlider,
        });
    });
});
