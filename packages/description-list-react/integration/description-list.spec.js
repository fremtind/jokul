/// <reference types="cypress" />

context("Description-list", () => {
    beforeEach(() => {
        cy.testComponent("description-list");
    });

    it("Description-list should work", () => {
        cy.getComponent().toMatchImageSnapshot();
        cy.setDarkMode().getComponent().toMatchImageSnapshot();
    });

    it("should send Description-list if value is selected and user navigate away", () => {
        cy.getByTestid("description-list").first().click();
        cy.visit("/");
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(200).then(() => expect(hasBeenCalled).to.deep.equal({ feedbackValue: 1, message: "" }));
    });
});
