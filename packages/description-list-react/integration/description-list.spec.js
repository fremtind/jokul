/// <reference types="cypress" />

describe("description list", () => {
    beforeEach(() => {
        cy.testComponent("descriptionlist");
    });

    it("renders correctly", () => {
        cy.getComponent().toMatchImageSnapshot();
        cy.setDarkMode();
        cy.getComponent().toMatchImageSnapshot();
    });
});
