import "cypress-plugin-snapshots/commands";
import "cypress-axe";
import "./checkPortalPage";

function pascalCase(phrase) {
    return phrase.replace(/\ ./, (match) => match.slice(-1).toUpperCase());
}

Cypress.Commands.add("getByTestid", (field) => {
    cy.get(`[data-testid=${field}]`);
});

Cypress.Commands.add("testComponent", (component) => {
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.visit(`/komponenter/${component}?cypress`).wait(1000);
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

Cypress.Commands.add("verifyA11y", () => {
    // Cypress misunderstand the animation for lack of contrast
    // Must wait a bit long to make sure all animations are done, else color contrast is off
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(1000).checkA11y({
        exclude: [[".jkl-portal-frontpage__section-contribute", ".jkl-portal-code-block__code"]],
    });
});

const setMode = (action, reset) => () =>
    cy.get(`input[value="${action}"]`).then(($input) => {
        if (reset ? $input[0].checked : !$input[0].checked) {
            $input.click();
        }
    });

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
    "Flip",
    "withLoader",
    "isLoading",
].map((knob) => setModeFactory(knob));
