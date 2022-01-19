/// <reference types="cypress" />
/// <reference types="../../../cypress/support" />

describe("DescriptionList", () => {
    beforeEach(() => {
        cy.testComponent("descriptionlist");
    });

    it("renders correctly", () => {
        cy.takeSnapshots();
    });
});
