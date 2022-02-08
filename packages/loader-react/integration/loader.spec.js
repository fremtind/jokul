/// <reference types="cypress" />

describe("Loader", () => {
    beforeEach(() => {
        cy.testComponent("loader");
    });

    it("render correctly", () => {
        const loader = 0;
        const skeletonLoader = 1;

        cy.takeSnapshots({
            variants: ["Small", "Medium", "Large"],
            eq: loader,
        });

        cy.takeSnapshots({
            eq: skeletonLoader,
        });
    });
});
