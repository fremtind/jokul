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

        cy.focusInput("textinput").type("Å være eller ikke være");
        cy.getComponent().eq(0).toMatchImageSnapshot();

        cy.focusTextArea("textarea").type("Å være eller ikke være");
        cy.getComponent().eq(1).toMatchImageSnapshot();

        cy.get('input[value="Med teller"]').click();
        cy.focusTextArea("textarea").type("Å være eller ikke være");
        cy.getComponent().eq(1).toMatchImageSnapshot();

        cy.focusTextArea("textarea").type(
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas sed tempus urna et pharetra pharetra massa massa ultricies. Mollis aliquam ut porttitor leo.",
        );
        cy.getComponent().eq(1).toMatchImageSnapshot();

        cy.get('input[value="Skjul progress"]').click();
        cy.focusTextArea("textarea").type("Å være eller ikke være");
        cy.getComponent().eq(1).toMatchImageSnapshot();

        cy.setMedFeil();
        cy.focusTextArea("textarea").type("Å være eller ikke være");
        cy.getComponent().eq(1).toMatchImageSnapshot();
        cy.resetMedFeil();
    });

    context("dark mode", () => {
        it("renders correctly", () => {
            cy.setDarkMode();

            cy.getComponent().eq(0).toMatchImageSnapshot();
            cy.getComponent().eq(1).toMatchImageSnapshot();

            cy.setMedFeil().getComponent().eq(0).toMatchImageSnapshot().resetMedFeil();
            cy.setMedFeil().getComponent().eq(1).toMatchImageSnapshot().resetMedFeil();

            cy.focusInput("textinput").type("Å være eller ikke være");
            cy.getComponent().eq(0).toMatchImageSnapshot();

            cy.focusTextArea("textarea").type("Å være eller ikke være");
            cy.getComponent().eq(1).toMatchImageSnapshot();

            cy.get('input[value="Med teller"]').click();
            cy.focusTextArea("textarea").type("Å være eller ikke være");
            cy.getComponent().eq(1).toMatchImageSnapshot();

            cy.focusTextArea("textarea").type(
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas sed tempus urna et pharetra pharetra massa massa ultricies. Mollis aliquam ut porttitor leo.",
            );
            cy.getComponent().eq(1).toMatchImageSnapshot();

            cy.get('input[value="Skjul progress"]').click();
            cy.focusTextArea("textarea").type("Å være eller ikke være");
            cy.getComponent().eq(1).toMatchImageSnapshot();

            cy.setMedFeil();
            cy.focusTextArea("textarea").type("Å være eller ikke være");
            cy.getComponent().eq(1).toMatchImageSnapshot();
            cy.resetMedFeil();
        });
    });
});
