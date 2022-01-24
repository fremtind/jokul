/// <reference types="cypress" />
/// <reference types="../../../cypress/support" />

describe("Scaffold", () => {
    beforeEach(() => {
        cy.testComponent("scaffold");
    });

    it("renders correctly", () => {
        cy.takeSnapshots({
            setup: () => {
                // Her kan du velge å klikke rundt for å gjøre klart eksempelet for snapshot
            },
            teardown: () => {
                // Her kan du eventuelt resette ting du gjorde i setup, dersom snapshoten for dark mode blir feil.
                // Om du har brukt f. eks. `cy.setMedFeil()` eller `cy.setCompact()` i setup må du
                // kalle `cy.resetMedFeil()` eller `cy.resetCompact()` her.
            },
            // Se for øvrig typedefinisjonen for propertyene `eq` og `variants`.
        });
    });
});
