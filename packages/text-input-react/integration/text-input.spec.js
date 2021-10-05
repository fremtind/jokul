/// <reference types="cypress" />

describe("TextInput", () => {
    beforeEach(() => {
        cy.testComponent("textinput");
    });

    it("renders correctly", () => {
        cy.getComponent().eq(0).toMatchImageSnapshot();
        cy.getComponent().eq(1).toMatchImageSnapshot();

        cy.setMedFeil().getComponent().eq(0).toMatchImageSnapshot().resetMedFeil();
        cy.setMedFeil().getComponent().eq(1).toMatchImageSnapshot().resetMedFeil();

        cy.focusInput("textinput").type("Lorem ipsum");
        cy.getComponent().eq(0).toMatchImageSnapshot();

        cy.focusTextArea("textarea").type("Lorem ipsum");
        cy.getComponent().eq(1).toMatchImageSnapshot();
    });

    context("dark mode", () => {
        it("renders correctly", () => {
            cy.setDarkMode();

            cy.getComponent().eq(0).toMatchImageSnapshot();
            cy.getComponent().eq(1).toMatchImageSnapshot();

            cy.setMedFeil().getComponent().eq(0).toMatchImageSnapshot().resetMedFeil();
            cy.setMedFeil().getComponent().eq(1).toMatchImageSnapshot().resetMedFeil();

            cy.focusInput("textinput").type("Lorem ipsum");
            cy.getComponent().eq(0).toMatchImageSnapshot();

            cy.focusTextArea("textarea").type("Lorem ipsum");
            cy.getComponent().eq(1).toMatchImageSnapshot();
        });
    });
});
