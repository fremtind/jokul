/// <reference types="cypress" />

describe("Loader", () => {
    beforeEach(() => {
        cy.testComponent("loader");
    });

    it("render correctly", () => {
        cy.takeSnapshots({
            variants: ["Small", "Medium", "Large"],
        });
    });
});
