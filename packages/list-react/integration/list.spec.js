/// <reference types="cypress" />
/// <reference types="../../../cypress/support" />

describe("List", () => {
    beforeEach(() => {
        cy.testComponent("list");
    });

    it("renders correctly", () => {
        cy.takeSnapshots({
            variants: ["Ordered", "Unordered", "Coverage"],
        });
    });
});
