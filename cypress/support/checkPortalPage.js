Cypress.Commands.add("checkPortalPage", (sidebar, link, title) => {
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.getByTestid(`sidebar-link-${sidebar}`)
        .click()
        .wait(500)
        .url()
        .should("include", link)
        .wait(500)
        .get("h1")
        .contains(title)
        .checkA11y({ exclude: [[".jkl-portal-code-block__code"]] });
});
