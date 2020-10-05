context("Blog", () => {
    beforeEach(() => {
        cy.visit("/");
    });

    it("Blog should work", () => {
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.getByTestid("full-screen-menu--Blogg").wait(200).click();
        cy.getByTestid("full-screen-menu-item--Framer-motion-i-Jøkul")
            .click()
            .get("h1")
            .should("contain", "Framer motion i Jøkul");
        cy.getByTestid("sidebar-filter")
            .type("Hvordan blogge")
            .getByTestid("sidebar-link-Hvordan-blogge-i-Jøkul")
            .click()
            .getByTestid("blog-author")
            .should("contain", "Leiv Fredrik Berge")
            .getByTestid("blog-publishDate")
            .should("contain", "2020.06.05")
            .get("h1")
            .should("contain", "Hvordan blogge i Jøkul");
    });
});
