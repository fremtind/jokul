/// <reference types="cypress" />
/// <reference types="../../../cypress/support" />

describe("FileUploader", () => {
    beforeEach(() => {
        cy.testComponent("fileuploader");
    });

    it("renders correctly", () => {
        cy.takeSnapshots();

        cy.takeSnapshots({
            setup: () => {
                cy.get('input[value="Laster opp"]').check();
            },
            teardown: () => {
                cy.get('input[value="Laster opp"]').uncheck();
            },
        });

        cy.takeSnapshots({
            setup: () => {
                cy.setMedFeil();
            },
            teardown: () => {
                cy.resetMedFeil();
            },
        });
    });
});
