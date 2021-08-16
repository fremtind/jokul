/// <reference types="cypress" />

describe("Buttons", () => {
    beforeEach(() => {
        cy.testComponent("buttons");
    });

    it("render correctly", () => {
        [0, 1, 2].forEach((i) => cy.getComponent().eq(i).toMatchImageSnapshot());
        cy.setKompakt();
        [0, 1, 2].forEach((i) => cy.getComponent().eq(i).toMatchImageSnapshot());
        cy.resetKompakt();
        cy.setwithLoader().setisLoading();
        [0, 1, 2].forEach((i) => cy.getComponent().eq(i).toMatchImageSnapshot());
    });

    context("dark mode", () => {
        it("render correctly", () => {
            cy.setDarkMode();
            [0, 1, 2].forEach((i) => cy.getComponent().eq(i).toMatchImageSnapshot());
            cy.setKompakt();
            [0, 1, 2].forEach((i) => cy.getComponent().eq(i).toMatchImageSnapshot());
            cy.resetKompakt();
            cy.setwithLoader().setisLoading();
            [0, 1, 2].forEach((i) => cy.getComponent().eq(i).toMatchImageSnapshot());
        });
    });
});
