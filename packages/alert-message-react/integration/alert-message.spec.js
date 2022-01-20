/// <reference types="cypress" />

context("AlertMessage", () => {
    beforeEach(() => {
        cy.testComponent("alertmessage");
    });

    it("renders correctly", () => {
        cy.getComponent().toMatchImageSnapshot();
        cy.setChoice("Type", "Success").getComponent().toMatchImageSnapshot();
        cy.setChoice("Type", "Warning").getComponent().toMatchImageSnapshot();
        cy.setChoice("Type", "Error").getComponent().toMatchImageSnapshot();
        cy.setDismissable().getComponent().toMatchImageSnapshot();
    });

    context("dark mode", () => {
        it("renders correctly", () => {
            cy.setDarkMode();
            cy.getComponent().toMatchImageSnapshot();
            cy.setChoice("Type", "Success").getComponent().toMatchImageSnapshot();
            cy.setChoice("Type", "Warning").getComponent().toMatchImageSnapshot();
            cy.setChoice("Type", "Error").getComponent().toMatchImageSnapshot();
            cy.setDismissable().getComponent().toMatchImageSnapshot();
        });
    });
});
