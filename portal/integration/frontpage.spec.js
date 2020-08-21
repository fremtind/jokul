context("Front page", () => {
    beforeEach(() => {
        cy.visit("/");
        cy.injectAxe();
    });

    it("Front page should work", () => {
        cy.getByTestid("front-page__tagline").contains(
            "Velkommen til Jøkul — design­systemet til Fremtind. Her har vi samlet alt du trenger for å lage løsninger i vår profil.",
        );

        cy.getByTestid("title-klarhet").contains("Klarhet");
        cy.getByTestid("title-elevasjon").contains("Elevasjon");
        cy.getByTestid("title-bevegelse").contains("Bevegelse");

        cy.verifyA11y();

        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.get(".jkl-portal-card")
            .contains("For utviklere")
            .click()
            .wait(200)
            .url()
            .should("include", "komigang/utvikling")
            .go("back")
            .wait(200);

        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.get(".jkl-portal-card")
            .contains("For designere")
            .click()
            .wait(200)
            .url()
            .should("include", "komigang/design")
            .go("back")
            .wait(200);

        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.get(".jkl-portal-card")
            .contains("Prosessen")
            .click()
            .wait(200)
            .url()
            .should("include", "komigang/prosessen")
            .go("back");
    });
});
