/// OM DU GJØR ENDRINGER HER, SØRG FOR Å OPPDATERE TYPEDEFINISJONENE I `index.d.ts`!

import "cypress-plugin-snapshots/commands";

function pascalCase(phrase) {
    return phrase.replace(/\ ./, (match) => match.slice(-1).toUpperCase());
}

Cypress.Commands.add("getByTestid", (field) => {
    cy.get(`[data-testid=${field}]`);
});

Cypress.Commands.add("testComponent", (component) => {
    const forcedColorsActive = window.matchMedia("(forced-colors: active)").matches;
    cy.visit(`/komponenter/${component}?mode=e2e`).wait(forcedColorsActive ? 500 : 300); // vent på Reacts hydrering
    cy.getComponent().should("be.visible").as("componentIsVisible");
});

Cypress.Commands.add("checkInput", (inputName) => {
    cy.get(`input[name=${inputName}]`).first().check();
});

Cypress.Commands.add("uncheckInput", (inputName) => {
    cy.get(`input[name=${inputName}]`).first().uncheck();
});

Cypress.Commands.add("toggleSelectMenu", (inputName) => {
    cy.get(`button[name=${inputName}-btn]`).first().focus().type(" ");
});

Cypress.Commands.add("selectValue", (value) => {
    cy.get(`button[role="option"][value=${value}]`).first().click();
});

Cypress.Commands.add("focusSelectValue", (value) => {
    cy.get(`button[role="option"][value=${value}]`).first().focus();
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

Cypress.Commands.add("setSelectChoice", (choice, value) => {
    cy.toggleSelectMenu(choice);
    cy.selectValue(value);
});

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
    const pause = options.pause || false;
    const variants = options.variants || ["__DEFAULT__"];
    const variantsChoiceType = variants.length > 3 ? "select" : "checkbox";
    const forcedColorsActive = window.matchMedia("(forced-colors: active)").matches;

    variants.forEach((variant) => {
        doSnapshot(options, variant, variantsChoiceType);

        if (forcedColorsActive || options.skipDarkMode) {
            // forced-colors har ikke noe konsept om lyst eller mørkt tema – bare brukerens valgte farger
            return;
        }

        cy.setDarkMode();
        doSnapshot(options, variant, variantsChoiceType);
        cy.resetDarkMode();
    });

    function doSnapshot(options, variant, variantsChoiceType) {
        const componentIndex = options.eq || 0;

        if (variant !== "__DEFAULT__") {
            if (variantsChoiceType === "select") {
                cy.setSelectChoice("Variant", variant);
            } else {
                cy.setChoice("Variant", variant);
            }
        }

        if (typeof options.setup === "function") {
            options.setup();
        }

        const snapshotConfig = {
            separator: forcedColorsActive ? ` in high contrast #` : undefined,
        };

        if (typeof options.customSelector === "function") {
            options.customSelector().toMatchImageSnapshot(snapshotConfig);
        } else {
            cy.getComponent().eq(componentIndex).toMatchImageSnapshot(snapshotConfig);
        }

        if (pause) {
            cy.pause();
        }

        if (typeof options.teardown === "function") {
            options.teardown();
        }
    }
});
