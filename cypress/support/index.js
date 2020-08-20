import "cypress-plugin-snapshots/commands";
import "cypress-axe";
import "./checkPortalPage";

Cypress.Commands.add("getByTestid", (field) => {
    cy.get(`[data-testid=${field}]`);
});

Cypress.Commands.add("testComponent", (component) => {
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.visit(`/komponenter/${component}`).wait(500);
});

Cypress.Commands.add("getComponent", () => {
    cy.get(".jkl-portal-component-example");
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
    Cypress.Commands.add(`set${knob.replace(" ", "-")}`, setMode(knob, false));
    Cypress.Commands.add(`reset${knob.replace(" ", "-")}`, setMode(knob, true));
};

["Kompakt", "Invertert", "Med feil", "Utvidet velger", "Med hjelpetekst"].map((knob) => setModeFactory(knob));
