/// <reference types="cypress" />

context("AlertMessage", () => {
    beforeEach(() => {
        cy.testComponent("alertmessage");
    });

    it("renders correctly", () => {
        cy.getComponent().toMatchImageSnapshot();
        cy.setChoice("Type", "Suksessmelding").getComponent().toMatchImageSnapshot();
        cy.setChoice("Type", "Advarselsmelding").getComponent().toMatchImageSnapshot();
        cy.setChoice("Type", "Feilmelding").getComponent().toMatchImageSnapshot();
        cy.setAvvisbar().getComponent().toMatchImageSnapshot();
    });

    context("dark mode", () => {
        it("renders correctly", () => {
            cy.setDarkMode();
            cy.getComponent().toMatchImageSnapshot();
            cy.setChoice("Type", "Suksessmelding").getComponent().toMatchImageSnapshot();
            cy.setChoice("Type", "Advarselsmelding").getComponent().toMatchImageSnapshot();
            cy.setChoice("Type", "Feilmelding").getComponent().toMatchImageSnapshot();
            cy.setAvvisbar().getComponent().toMatchImageSnapshot();
        });
    });
});
