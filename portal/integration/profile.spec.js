context("Profile page", () => {
    beforeEach(() => {
        cy.visit("/profil/designprinsipper/");
        cy.injectAxe();
    });

    it("Profile page should work", () => {
        cy.checkPortalPage("Designprinsipper", "profil/designprinsipper", "Vår profil");
        cy.checkPortalPage("Tilgjengelighet", "profil/tilgjengelighet", "Tilgjengelighet");
        cy.checkPortalPage("Farger", "profil/farger", "Farger");
        cy.checkPortalPage("Logo", "profil/logo", "Logo");
        cy.checkPortalPage("Layout", "profil/layout", "Layout");
        cy.checkPortalPage("Stemmen-vår", "profil/stilogtone", "Stemmen vår");
        cy.checkPortalPage("Typografi", "profil/typografi", "Typografi");
        cy.checkPortalPage("Bildebruk", "profil/bildebruk", "Bildebruk");
        cy.checkPortalPage("Ikoner", "profil/ikoner", "Ikoner");
        cy.checkPortalPage("Skygger", "profil/skygger", "Skygger");
        cy.checkPortalPage("Skjemadesign", "profil/skjema", "Skjemadesign");
    });
});
