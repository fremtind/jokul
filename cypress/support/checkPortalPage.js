Cypress.Commands.add("checkPortalPage", (sidebar, link, title) => {
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.getByTestid(`sidebar-link-${sidebar}`).click().url().should("include", link).wait(100).get("h1").contains(title);
    //.checkA11y();
});
