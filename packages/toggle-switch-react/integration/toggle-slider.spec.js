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
                cy.get(".jkl-toggle-switch").first().click();
            },
            teardown: () => {
                cy.get(".jkl-toggle-switch").first().click();
            },
            eq: toggleSwitch,
        });

        cy.takeSnapshots({ eq: toggleSlider });

        cy.takeSnapshots({
            setup: () => {
                cy.getByTestid("jkl-toggle-slider").find("input").first().focus();
            },
            eq: toggleSlider,
        });

        cy.takeSnapshots({
            setup: () => {
                cy.getByTestid("jkl-toggle-slider").find("label").first().click();
            },
            teardown: () => {
                cy.getByTestid("jkl-toggle-slider").find("label").first().click();
            },
            eq: toggleSlider,
        });
    });
});
