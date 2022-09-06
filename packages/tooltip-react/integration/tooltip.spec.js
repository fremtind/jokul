/// <reference types="cypress" />
/// <reference types="../../../cypress/support" />

describe("Tooltip", () => {
    beforeEach(() => {
        cy.testComponent("tooltip");
    });

    it("renders correctly", () => {
        cy.takeSnapshots();
    });
});
