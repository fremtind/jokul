/// <reference types="cypress" />

describe("Table", () => {
    const mobilScroll = 0;
    const mobilListe = 1;
    const skjulteHeaders = 2;
    const radMedHandling = 4;

    beforeEach(() => {
        cy.testComponent("table");
    });

    it("renders correctly", () => {
        cy.getComponent().eq(mobilScroll).toMatchImageSnapshot();
        cy.getComponent().eq(skjulteHeaders).toMatchImageSnapshot();

        cy.get('input[value="Liste"]').then(($input) => {
            $input.click();
        });
        cy.getComponent().eq(mobilListe).toMatchImageSnapshot();
        cy.getComponent().eq(radMedHandling).toMatchImageSnapshot();
    });

    context("dark mode", () => {
        it("renders correctly", () => {
            cy.setDarkMode();

            cy.getComponent().eq(mobilScroll).toMatchImageSnapshot();
            cy.getComponent().eq(skjulteHeaders).toMatchImageSnapshot();

            cy.get('input[value="Liste"]').then(($input) => {
                $input.click();
            });
            cy.getComponent().eq(mobilListe).toMatchImageSnapshot();
            cy.getComponent().eq(radMedHandling).toMatchImageSnapshot();
        });
    });
});
