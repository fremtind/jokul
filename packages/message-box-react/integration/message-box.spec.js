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
        cy.setChoice("Type", "Success").getComponent().eq(messageBox).toMatchImageSnapshot();
        cy.setChoice("Type", "Warning").getComponent().eq(messageBox).toMatchImageSnapshot();
        cy.setChoice("Type", "Error").getComponent().eq(messageBox).toMatchImageSnapshot();
        cy.setDismissable().getComponent().eq(messageBox).toMatchImageSnapshot();
    });

    context("dark mode", () => {
        it("renders correctly", () => {
            cy.setDarkMode();
            cy.getComponent().eq(messageBox).toMatchImageSnapshot();
            cy.setChoice("Type", "Success").getComponent().eq(messageBox).toMatchImageSnapshot();
            cy.setChoice("Type", "Warning").getComponent().eq(messageBox).toMatchImageSnapshot();
            cy.setChoice("Type", "Error").getComponent().eq(messageBox).toMatchImageSnapshot();
            cy.setDismissable().getComponent().eq(messageBox).toMatchImageSnapshot();
        });
    });
});
