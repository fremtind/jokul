/// <reference types="cypress" />

describe("Table", () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const intro = 0;
    const mobilScroll = 1;
    const mobilListe = 2;
    const skjulteHeaders = 3;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const datatabell = 4;
    const radMedHandling = 5;

    beforeEach(() => {
        cy.testComponent("table");
    });

    it("renders correctly", () => {
        cy.getComponent().eq(mobilScroll).toMatchImageSnapshot();
        cy.getComponent().eq(skjulteHeaders).toMatchImageSnapshot();

        cy.get('input[value="Liste"]').click({ multiple: true });
        cy.getComponent().eq(mobilListe).toMatchImageSnapshot();
        cy.getComponent().eq(radMedHandling).toMatchImageSnapshot();
    });

    context("dark mode", () => {
        it("renders correctly", () => {
            cy.setDarkMode();

            cy.getComponent().eq(mobilScroll).toMatchImageSnapshot();
            cy.getComponent().eq(skjulteHeaders).toMatchImageSnapshot();

            cy.get('input[value="Liste"]').click({ multiple: true });
            cy.getComponent().eq(mobilListe).toMatchImageSnapshot();
            cy.getComponent().eq(radMedHandling).toMatchImageSnapshot();
        });
    });
});
