/// <reference types="cypress" />

describe("DescriptionList", () => {
    beforeEach(() => {
        cy.testComponent("descriptionlist");
    });

    it("renders correctly", () => {
        cy.getComponent().toMatchImageSnapshot();
        cy.setDarkMode();
        cy.getComponent().toMatchImageSnapshot();
    });
});
