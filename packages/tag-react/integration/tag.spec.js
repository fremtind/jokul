/// <reference types="cypress" />
/// <reference types="../../../cypress/support" />

describe("Tag", () => {
    beforeEach(() => {
        cy.testComponent("tag");
    });

    it("renders correctly", () => {
        cy.takeSnapshots();
    });
});
