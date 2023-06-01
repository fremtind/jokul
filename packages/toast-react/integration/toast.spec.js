/// <reference types="cypress" />
/// <reference types="../../../cypress/support" />

describe("Toast", () => {
    beforeEach(() => {
        cy.testComponent("toast");
    });

    it("renders correctly", () => {
        cy.takeSnapshots({
            eq: 0,
        });
    });
});
