import "cypress-plugin-snapshots/commands";

function pascalCase(phrase) {
    return phrase.replace(/\ ./, (match) => match.slice(-1).toUpperCase());
}

Cypress.Commands.add("getByTestid", (field) => {
    cy.get(`[data-testid=${field}]`);
});

Cypress.Commands.add("testComponent", (component) => {
    cy.visit(`/komponenter/${component}?cypress`);
    cy.getComponent().should("be.visible").as("componentIsVisible");
});

Cypress.Commands.add("checkInput", (inputName) => {
    cy.get(`input[name=${inputName}]`).first().check();
});

Cypress.Commands.add("openSelect", (inputName) => {
    cy.get(`button[name=${inputName}-btn]`).first().click();
});

Cypress.Commands.add("selectValue", (value) => {
    cy.get(`button[value=${value}]`).first().click();
});

Cypress.Commands.add("focusSelectValue", (value) => {
    cy.get(`button[value=${value}]`).first().focus();
});

Cypress.Commands.add("focusInput", (inputName) => {
    cy.get(`input[name=${inputName}]`).first().focus();
});

Cypress.Commands.add("focusTextArea", (inputName) => {
    cy.get(`textarea[name=${inputName}]`).first().focus();
});

Cypress.Commands.add("getComponent", () => {
    cy.get(".jkl-portal-component-example");
});

Cypress.Commands.add("waitForAnimation", (timeout = 300) => {
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(timeout);
});

const setMode = (action, reset) => () => {
    if (reset) {
        return cy.get(`input[value="${action}"]:checked`).click({ multiple: true });
    }
    return cy.get(`input[value="${action}"]:not(:checked)`).click({ multiple: true });
};

Cypress.Commands.add("setChoice", (choice, value) =>
    cy.get(`input[name$="${choice.toLowerCase()}"][value="${value}"]`).click(),
);

const setModeFactory = (knob) => {
    Cypress.Commands.add(`set${pascalCase(knob)}`, setMode(knob, false));
    Cypress.Commands.add(`reset${pascalCase(knob)}`, setMode(knob, true));
};

[
    "Kompakt",
    "Inline",
    "Invertert",
    "Med feil",
    "Utvidet velger",
    "Med hjelpetekst",
    "Dark mode",
    "Bytt verdi",
    "withLoader",
    "isLoading",
    "Avvisbar",
].map((knob) => setModeFactory(knob));
