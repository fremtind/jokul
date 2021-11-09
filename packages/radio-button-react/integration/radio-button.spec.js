/// <reference types="cypress" />

context("Radio button", () => {
    const kontaktmetode = 0;
    const fantDuFram = 1;
    const prisvisning = 2;

    beforeEach(() => {
        cy.testComponent("radiobutton");
    });

    it("renders correctly", () => {
        cy.focusInput("kontaktmetode");
        cy.getComponent().eq(kontaktmetode).toMatchImageSnapshot();

        cy.checkInput("kontaktmetode");
        cy.getComponent().eq(kontaktmetode).toMatchImageSnapshot();

        cy.setMedFeil().getComponent().eq(kontaktmetode).toMatchImageSnapshot().resetMedFeil();

        cy.setInline().getComponent().eq(prisvisning).toMatchImageSnapshot().resetInline();

        cy.setKompakt().getComponent().eq(fantDuFram).toMatchImageSnapshot().resetKompakt();
    });

    context("dark mode", () => {
        it("renders correctly", () => {
            cy.setDarkMode();

            cy.focusInput("kontaktmetode");
            cy.getComponent().eq(kontaktmetode).toMatchImageSnapshot();

            cy.checkInput("kontaktmetode");
            cy.getComponent().eq(kontaktmetode).toMatchImageSnapshot();

            cy.setMedFeil().getComponent().eq(kontaktmetode).toMatchImageSnapshot().resetMedFeil();

            cy.setInline().getComponent().eq(prisvisning).toMatchImageSnapshot().resetInline();

            cy.setKompakt().getComponent().eq(fantDuFram).toMatchImageSnapshot().resetKompakt();
        });
    });
});
