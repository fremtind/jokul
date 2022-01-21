/// <reference types="cypress" />
/// <reference types="../../../cypress/support" />

describe("TextInput", () => {
    beforeEach(() => {
        cy.testComponent("textinput");
    });

    it("renders correctly", () => {
        const textInput = 0;
        const textArea = 1;

        [textInput, textArea].forEach((component) => {
            cy.takeSnapshots({ eq: component });

            cy.takeSnapshots({
                setup: () => {
                    cy.setMedFeil();
                },
                teardown: () => {
                    cy.resetMedFeil();
                },
                eq: component,
            });
        });

        cy.takeSnapshots({
            setup: () => {
                cy.focusInput("fodselsnummer").type("Å være eller ikke være");
            },
            eq: textInput,
        });

        cy.takeSnapshots({
            setup: () => {
                cy.focusTextArea("beskrivelse").type("Å være eller ikke være");
            },
            eq: textArea,
        });

        cy.takeSnapshots({
            setup: () => {
                cy.get('input[value="Med teller"]').check();
                cy.focusTextArea("beskrivelse").type("Å være eller ikke være");
            },
            teardown: () => {
                cy.get('input[value="Med teller"]').check();
            },
            eq: textArea,
        });

        cy.takeSnapshots({
            setup: () => {
                cy.get('input[value="Med teller"]').check();
                cy.focusTextArea("beskrivelse").type(
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas sed tempus urna et pharetra pharetra massa massa ultricies. Mollis aliquam ut porttitor leo.",
                );
            },
            teardown: () => {
                cy.get('input[value="Med teller"]').uncheck();
            },
            eq: textArea,
        });

        cy.takeSnapshots({
            setup: () => {
                cy.get('input[value="Med teller"]').check();
                cy.get('input[value="Skjul progress"]').check();
                cy.focusTextArea("beskrivelse").type("Å være eller ikke være");
            },
            teardown: () => {
                cy.get('input[value="Med teller"]').uncheck();
                cy.get('input[value="Skjul progress"]').uncheck();
            },
            eq: textArea,
        });

        cy.takeSnapshots({
            setup: () => {
                cy.get('input[value="Med teller"]').check();
                cy.setMedFeil();
                cy.focusTextArea("beskrivelse").type("Å være eller ikke være");
            },
            teardown: () => {
                cy.get('input[value="Med teller"]').uncheck();
                cy.resetMedFeil();
            },
            eq: textArea,
        });
    });
});
