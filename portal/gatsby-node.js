exports.onCreatePage = async ({ page, actions }) => {
    const { createPage, deletePage } = actions;
    const componentPageMatch = page.path.match(/\/.*react.*\/documentation\/(.*)\//);
    const pageSpecifiedPath = page.context.frontmatter && page.context.frontmatter.path;

    // If page is a component doc page, create simpler path
    if (componentPageMatch) {
        const oldPage = { ...page };
        page.path = `/komponenter/${componentPageMatch[1].toLowerCase()}`;
        createPage(page);
        deletePage(oldPage);
    }

    // If page has a specified path, use that
    if (pageSpecifiedPath) {
        const oldPage = { ...page };
        page.path = pageSpecifiedPath;
        createPage(page);
        deletePage(oldPage);
    }
};
