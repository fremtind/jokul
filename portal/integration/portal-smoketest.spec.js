/// <reference types="cypress" />
/// <reference types="../../cypress/support" />

context("Portal", () => {
    describe("when on a small device", { viewportWidth: 380 }, () => {
        it("passes a basic smoketest", () => {
            cy.visit("/");

            // eslint-disable-next-line cypress/no-unnecessary-waiting
            cy.wait(1000); // Må vente til siden blir interaktiv

            cy.get('[data-testid="jkl-cookie-consent-godta"]').click();

            cy.get("#jkl-portal-main-menu-hamburger").click();

            cy.get(".jkl-portal-full-screen-menu-item__link").eq(0).click();

            cy.get(".jkl-portal-full-screen-menu-item__link").eq(0).click();

            cy.get("h1").should("contain", "Jøkul");
        });
    });

    describe("when on a large device", { viewportWidth: 1280 }, () => {
        it("passes a basic smoketest", () => {
            cy.visit("/");

            // eslint-disable-next-line cypress/no-unnecessary-waiting
            cy.wait(1000); // Må vente til siden blir interaktiv

            cy.get('[data-testid="jkl-cookie-consent-godta"]').click();

            cy.get(".jkl-portal-main-menu__root-link").eq(0).click();

            cy.get(".jkl-portal-full-screen-menu-item__link").eq(0).click();

            cy.get("h1").should("contain", "Design­system");
        });
    });
});
