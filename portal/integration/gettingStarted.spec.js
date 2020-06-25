context("Profile page", () => {
    beforeEach(() => {
        cy.visit("/komigang/prosessen");
        cy.injectAxe();
    });

    it("Profile page should work", () => {
        cy.checkPortalPage("Designsystemprosessen", "komigang/prosessen", "Designsystemprosessen");
        cy.checkPortalPage("For-designere", "komigang/design", "Kom i gang som designer");
        cy.checkPortalPage("For-utviklere", "komigang/utvikling", "Slik bruker du Jøkul");
        cy.checkPortalPage("Kodestil", "komigang/kodestil", "Slik skriver du kode til Jøkul");
        cy.checkPortalPage("Tester", "komigang/tester", "Kom i gang med tester");
        cy.checkPortalPage("Pull-requests", "komigang/pullrequests", "Bidra til Jøkul på GitHub");
        cy.checkPortalPage("Portalen", "komigang/portalen", "Dokumentasjon til portalen");
    });
});
