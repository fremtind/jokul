/// <reference types="cypress" />
/// <reference types="../../../cypress/support" />

describe("ExpandButton", () => {
    beforeEach(() => {
        cy.testComponent("expandbutton");
    });

    it("renders correctly", () => {
        cy.takeSnapshots({
            setup: () => {
                cy.get('input[value="Frittstående"]').click();
            },
        });

        cy.takeSnapshots({
            setup: () => {
                cy.get('input[value="Frittstående"]').click();
                cy.getByTestid("jkl-expand-button").first().click();
            },
        });

        cy.takeSnapshots({
            setup: () => {
                cy.get('input[value="Frittstående"]').click();
                cy.get('input[value="Oppover"]').click();
            },
        });

        cy.takeSnapshots({
            setup: () => {
                cy.get('input[value="Frittstående"]').click();
                cy.get('input[value="Oppover"]').click();
                cy.getByTestid("jkl-expand-button").first().click();
            },
        });
    });
});
