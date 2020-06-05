context("Blog", () => {
    beforeEach(() => {
        cy.visit("/");
    });

    it("Blog should work", () => {
        cy.getByTestid("header-Blogg").click();
        cy.getByTestid("fullscreen-menu-Framer-motion-i-Jøkul")
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
