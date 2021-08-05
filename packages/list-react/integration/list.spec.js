/// <reference types="cypress" />

describe("List", () => {
    beforeEach(() => {
        cy.testComponent("list");
    });

    it("renders correctly", () => {
        [0, 1, 2, 3].forEach((i) => cy.getComponent().eq(i).toMatchImageSnapshot());
        cy.setDarkMode();
        [0, 1, 2, 3].forEach((i) => cy.getComponent().eq(i).toMatchImageSnapshot());
    });
});
