import "cypress-plugin-snapshots/commands";
import "cypress-axe";

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

Cypress.Commands.add("focusInput", (inputName) => {
    cy.get(`input[name=${inputName}]`).first().focus();
});

Cypress.Commands.add("getComponent", () => {
    cy.get(".jkl-portal-component-example");
});

Cypress.Commands.add("waitForAnimation", (timeout = 300) => {
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(timeout);
});

Cypress.Commands.add("getComponentInIphoneMode", () => {
    cy.get("#jkl-portal-device-Iphone-X").click().waitForAnimation(100).getByTestid("jkl-portal__iphone-view");
});

Cypress.Commands.add("getComponentInIpadMode", () => {
    cy.get("#jkl-portal-device-Ipad-Pro").click().waitForAnimation(100).getByTestid("jkl-portal__ipad-view");
});

Cypress.Commands.add("getComponentInLaptopMode", () => {
    cy.get("#jkl-portal-device-Full-HD").click().waitForAnimation(100).getByTestid("jkl-portal__laptop-view");
});

const setMode = (action, reset) => () =>
    cy.get(`input[value="${action}"]`).then(($input) => {
        if (reset ? $input[0].checked : !$input[0].checked) {
            $input.click();
        }
    });

Cypress.Commands.add("setChoice", (choice, value) =>
    cy.get(`input[name$="${choice.toLowerCase()}"][value="${value}"]`).then(($input) => $input.click()),
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
