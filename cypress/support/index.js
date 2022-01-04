/// OM DU GJØR ENDRINGER HER, SØRG FOR Å OPPDATERE TYPEDEFINISJONENE I `index.d.ts`!

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

Cypress.Commands.add("uncheckInput", (inputName) => {
    cy.get(`input[name=${inputName}]`).first().uncheck();
});

Cypress.Commands.add("toggleSelectMenu", (inputName) => {
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

const setMode = (action, reset) => () => {
    if (reset) {
        return cy.get(`input[value="${action}"]:checked`).click({ multiple: true });
    }
    return cy.get(`input[value="${action}"]:not(:checked)`).click({ multiple: true });
};

Cypress.Commands.add("setChoice", (choice, value) =>
    cy.get(`input[name$="${choice.toLowerCase()}"][value="${value}"]`).click({ multiple: true }),
);

const setModeFactory = (knob) => {
    Cypress.Commands.add(`set${pascalCase(knob)}`, setMode(knob, false));
    Cypress.Commands.add(`reset${pascalCase(knob)}`, setMode(knob, true));
};

[
    "Compact",
    "Inline",
    "Med feil",
    "Utvidet velger",
    "Med hjelpetekst",
    "Dark mode",
    "Bytt verdi",
    "withLoader",
    "isLoading",
    "Dismissable",
].map((knob) => setModeFactory(knob));

Cypress.Commands.add("takeSnapshots", (options = {}) => {
    const variants = options.variants || ["__DEFAULT__"];

    variants.forEach((variant) => {
        doSnapshot(options, variant);

        cy.setDarkMode();
        doSnapshot(options, variant);
        cy.resetDarkMode();
    });

    function doSnapshot(options, variant) {
        const componentIndex = options.eq || 0;

        if (variant !== "__DEFAULT__") {
            cy.setChoice("Variant", variant);
        }

        if (typeof options.setup === "function") {
            options.setup();
        }

        if (typeof options.customSelector === "function") {
            options.customSelector().toMatchImageSnapshot();
        } else {
            cy.getComponent().eq(componentIndex).toMatchImageSnapshot();
        }

        if (typeof options.teardown === "function") {
            options.teardown();
        }
    }
});
