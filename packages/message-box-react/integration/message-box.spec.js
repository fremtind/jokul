/// <reference types="cypress" />

context("MessageBox", () => {
    const messageBox = 0;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const formErrorMessageBox = 1;

    beforeEach(() => {
        cy.testComponent("messagebox");
    });

    it("renders correctly", () => {
        cy.getComponent().eq(messageBox).toMatchImageSnapshot();
        cy.setChoice("Type", "Suksessmelding").getComponent().eq(messageBox).toMatchImageSnapshot();
        cy.setChoice("Type", "Advarselsmelding").getComponent().eq(messageBox).toMatchImageSnapshot();
        cy.setChoice("Type", "Feilmelding").getComponent().eq(messageBox).toMatchImageSnapshot();
        cy.setAvvisbar().getComponent().eq(messageBox).toMatchImageSnapshot();
    });

    context("dark mode", () => {
        it("renders correctly", () => {
            cy.setDarkMode();
            cy.getComponent().eq(messageBox).toMatchImageSnapshot();
            cy.setChoice("Type", "Suksessmelding").getComponent().eq(messageBox).toMatchImageSnapshot();
            cy.setChoice("Type", "Advarselsmelding").getComponent().eq(messageBox).toMatchImageSnapshot();
            cy.setChoice("Type", "Feilmelding").getComponent().eq(messageBox).toMatchImageSnapshot();
            cy.setAvvisbar().getComponent().eq(messageBox).toMatchImageSnapshot();
        });
    });
});
