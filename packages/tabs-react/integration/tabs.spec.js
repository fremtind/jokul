/// <reference types="cypress" />
/// <reference types="../../../cypress/support" />

describe("Tabs", () => {
    beforeEach(() => {
        cy.testComponent("tabs");
    });

    it("renders correctly", () => {
        cy.takeSnapshots();
    });
});
