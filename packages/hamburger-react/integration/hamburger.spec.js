/// <reference types="cypress" />
/// <reference types="../../../cypress/support" />

describe("Hamburger", () => {
    beforeEach(() => {
        cy.testComponent("hamburger");
    });

    it("renders correctly", () => {
        cy.takeSnapshots();

        cy.takeSnapshots({
            setup: () => {
                cy.get(".jkl-hamburger").click().waitForAnimation();
            },
        });

        cy.takeSnapshots({
            setup: () => {
                cy.get('input[value="Med tekst"]').check();
                cy.get(".jkl-hamburger").click().waitForAnimation();
            },
        });

        cy.takeSnapshots({
            setup: () => {
                cy.get('input[value="Tekst før knapp"]').check();
                cy.get(".jkl-hamburger").click().waitForAnimation();
            },
        });
    });
});
