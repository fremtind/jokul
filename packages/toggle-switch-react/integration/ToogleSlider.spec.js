/// <reference types="cypress" />

context("ToggleSlider", () => {
    beforeEach(() => {
        cy.testComponent("toggleswitch");
    });

    it("ToggleSlider should work", () => {
        cy.getComponent().eq(1).toMatchImageSnapshot();
        cy.getByTestid("jkl-toggle-slider").click().waitForAnimation(200).getComponent().eq(1).toMatchImageSnapshot();

        cy.setDarkMode().getComponent().eq(1).toMatchImageSnapshot();
        cy.getByTestid("jkl-toggle-slider").click().waitForAnimation(200).getComponent().eq(1).toMatchImageSnapshot();
    });
});
