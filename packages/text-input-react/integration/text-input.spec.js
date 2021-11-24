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

        cy.focusInput("fodselsnummer").type("Å være eller ikke være");
        cy.getComponent().eq(0).toMatchImageSnapshot();

        cy.focusTextArea("beskrivelse").type("Å være eller ikke være");
        cy.getComponent().eq(1).toMatchImageSnapshot();

        cy.get('input[value="Med teller"]').click();
        cy.focusTextArea("beskrivelse").type("Å være eller ikke være");
        cy.getComponent().eq(1).toMatchImageSnapshot();

        cy.focusTextArea("beskrivelse").type(
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas sed tempus urna et pharetra pharetra massa massa ultricies. Mollis aliquam ut porttitor leo.",
        );
        cy.getComponent().eq(1).toMatchImageSnapshot();

        cy.get('input[value="Skjul progress"]').click();
        cy.focusTextArea("beskrivelse").type("Å være eller ikke være");
        cy.getComponent().eq(1).toMatchImageSnapshot();

        cy.setMedFeil();
        cy.focusTextArea("beskrivelse").type("Å være eller ikke være");
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

            cy.focusInput("fodselsnummer").type("Å være eller ikke være");
            cy.getComponent().eq(0).toMatchImageSnapshot();

            cy.focusTextArea("beskrivelse").type("Å være eller ikke være");
            cy.getComponent().eq(1).toMatchImageSnapshot();

            cy.get('input[value="Med teller"]').click();
            cy.focusTextArea("beskrivelse").type("Å være eller ikke være");
            cy.getComponent().eq(1).toMatchImageSnapshot();

            cy.focusTextArea("beskrivelse").type(
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas sed tempus urna et pharetra pharetra massa massa ultricies. Mollis aliquam ut porttitor leo.",
            );
            cy.getComponent().eq(1).toMatchImageSnapshot();

            cy.get('input[value="Skjul progress"]').click();
            cy.focusTextArea("beskrivelse").type("Å være eller ikke være");
            cy.getComponent().eq(1).toMatchImageSnapshot();

            cy.setMedFeil();
            cy.focusTextArea("beskrivelse").type("Å være eller ikke være");
            cy.getComponent().eq(1).toMatchImageSnapshot();
            cy.resetMedFeil();
        });
    });
});
