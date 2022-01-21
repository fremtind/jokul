/// <reference types="cypress" />
/// <reference types="../../../cypress/support" />

describe("Table", () => {
    beforeEach(() => {
        cy.testComponent("table");
    });

    it("renders correctly", () => {
        const mobilScroll = 1;
        const mobilListe = 2;
        const skjulteHeaders = 3;
        const radMedHandling = 5;

        cy.takeSnapshots({ eq: mobilScroll });
        cy.takeSnapshots({ eq: skjulteHeaders });

        cy.takeSnapshots({
            setup: () => {
                cy.setChoice("Mobilvisning", "Liste");
            },
            eq: mobilListe,
        });
        cy.takeSnapshots({
            setup: () => {
                cy.setChoice("Mobilvisning", "Liste");
            },
            eq: radMedHandling,
        });
    });
});
