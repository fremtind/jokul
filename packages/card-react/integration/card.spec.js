/// <reference types="cypress" />
/// <reference types="../../../cypress/support" />

describe("Card", () => {
    beforeEach(() => {
        cy.testComponent("card");
    });

    it("renders correctly", () => {
        const navCard = 1;
        const taskCard = 2;
        const infoCard = 3;

        [navCard, taskCard, infoCard].forEach((component) => {
            cy.takeSnapshots({ eq: component });
        });
    });
});
