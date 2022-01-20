/// <reference types="cypress" />

context("ContentToggle", () => {
    beforeEach(() => {
        cy.testComponent("contenttoggle");
    });

    context("flip", () => {
        it("renders correctly", () => {
            cy.getComponent().toMatchImageSnapshot();
            cy.setByttVerdi().waitForAnimation();
            cy.getComponent().toMatchImageSnapshot();
            cy.setDarkMode();
            cy.getComponent().toMatchImageSnapshot();
        });
    });

    context("fade", () => {
        it("renders correctly", () => {
            cy.setChoice("Variant", "fade");
            cy.getComponent().toMatchImageSnapshot();
            cy.setByttVerdi().waitForAnimation();
            cy.getComponent().toMatchImageSnapshot();
            cy.setDarkMode();
            cy.getComponent().toMatchImageSnapshot();
        });
    });
});
