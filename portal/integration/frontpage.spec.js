context("Front page", () => {
    beforeEach(() => {
        cy.visit("/");
        cy.injectAxe();
    });

    it("Front page should work", () => {
        cy.getByTestid("front-page__tagline").contains(
            "Velkommen til Jøkul — designsystemet til Fremtind. Her har vi samlet alt du trenger for å lage løsninger i vår profil.",
        );

        cy.getByTestid("title-klarhet").contains("Klarhet");
        cy.getByTestid("title-elevasjon").contains("Elevasjon");
        cy.getByTestid("title-bevegelse").contains("Bevegelse");

        // Cypress misunderstand the animation for lack of contrast
        cy.checkA11y({ exclude: [[".jkl-portal-frontpage__section-contribute"]] });

        cy.get(".jkl-portal-card")
            .contains("For utviklere")
            .click()
            .url()
            .should("include", "komigang/utvikling")
            .go("back");

        cy.get(".jkl-portal-card")
            .contains("For designere")
            .click()
            .url()
            .should("include", "komigang/design")
            .go("back");

        cy.get(".jkl-portal-card")
            .contains("Prosessen")
            .click()
            .url()
            .should("include", "komigang/prosessen")
            .go("back");
    });
});
