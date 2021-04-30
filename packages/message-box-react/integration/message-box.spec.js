/// <reference types="cypress" />

context("MessageBox", () => {
    beforeEach(() => {
        cy.testComponent("messagebox");
    });

    it("renders correctly", () => {
        cy.getComponent().toMatchImageSnapshot();
        cy.setChoice("Type", "Suksessmelding").getComponent().toMatchImageSnapshot();
        cy.setChoice("Type", "Advarselsmelding").getComponent().toMatchImageSnapshot();
        cy.setChoice("Type", "Feilmelding").getComponent().toMatchImageSnapshot();

        cy.setDarkMode();

        cy.getComponent().toMatchImageSnapshot();
        cy.setChoice("Type", "Advarselsmelding").getComponent().toMatchImageSnapshot();
        cy.setChoice("Type", "Suksessmelding").getComponent().toMatchImageSnapshot();
        cy.setChoice("Type", "Infomelding").getComponent().toMatchImageSnapshot();
    });

    it("is dismissable", () => {
        cy.setAvvisbar().getComponent().toMatchImageSnapshot();
        cy.setDarkMode().getComponent().toMatchImageSnapshot();
    });
});
