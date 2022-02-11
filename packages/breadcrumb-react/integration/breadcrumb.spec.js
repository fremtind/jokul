/// <reference types="cypress" />
/// <reference types="../../../cypress/support" />

describe("Breadcrumb", () => {
    beforeEach(() => {
        cy.testComponent("breadcrumb");
    });

    it("renders correctly", () => {
        cy.takeSnapshots();
    });
});
