context("Profile page", () => {
    beforeEach(() => {
        cy.visit("/komigang/prosessen");
        cy.injectAxe();
    });

    it("Profile page should work", () => {
        cy.checkPortalPage("Designsystemprosessen", "komigang/prosessen", "Designsystemprosessen");
        cy.checkPortalPage("Bygge-med-Jøkul", "komigang/bygg", "Bygge prosjekt med Jøkul");
        cy.checkPortalPage("For-designere", "komigang/design", "Kom i gang som designer");
        cy.checkPortalPage("Utvikle-for-Jøkul", "komigang/utvikling", "Kom i gang som utviklere");
        cy.checkPortalPage("Tester", "komigang/tester", "Kom i gang med tester");
        cy.checkPortalPage("Pull-requests", "komigang/pullrequests", "Bidra til Jøkul på GitHub");
        cy.checkPortalPage("Portalen", "komigang/portalen", "Dokumentasjon til portalen");
        cy.checkPortalPage("Mobil", "komigang/mobil", "Mobil, Nett og Responsivitet");
    });
});
