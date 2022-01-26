/// <reference types="cypress" />
/// <reference types="../../cypress/support" />

context("Portal", () => {
    describe("when on a small device", { viewportWidth: 380 }, () => {
        it("passes a basic smoketest", () => {
            cy.visit("/");

            cy.get("button#jkl-portal-main-menu-hamburger").click();

            cy.get("button.jkl-portal-full-screen-menu-item__link").eq(0).click();

            cy.get("button.jkl-portal-full-screen-menu-item__link").eq(1).click();

            cy.get("h1").should("contain", "Bygg med Jøkul");
        });
    });

    describe("when on a large device", { viewportWidth: 1280 }, () => {
        it("passes a basic smoketest", () => {
            cy.visit("/");

            cy.get("button.jkl-portal-main-menu__root-link").eq(0).click();

            cy.get("button.jkl-portal-full-screen-menu-item__link").eq(1).click();

            cy.get("h1").should("contain", "Bygg med Jøkul");
        });
    });
});
