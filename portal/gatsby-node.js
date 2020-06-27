exports.onCreatePage = async ({ page, actions }) => {
    const { createPage, deletePage } = actions;
    const componentPageMatch = page.path.match(/\/.*react.*\/documentation\/(.*)\//);
    const corePageMatch = page.path.match(/\/core\/documentation\/(.*)\//);
    const utilPageMatch = page.path.match(/\/.*util.*\/documentation\/(.*)\//);
    const pageSpecifiedPath = page.context.frontmatter && page.context.frontmatter.path;

    const makePage = (path) => {
        const newPage = { ...page, path };
        createPage(newPage);
        deletePage(page);
    };

    // If page is a component doc page, create simpler path
    if (componentPageMatch) {
        makePage(`/komponenter/${componentPageMatch[1].toLowerCase()}`);
    }
    if (corePageMatch) {
        makePage(`/komponenter/${corePageMatch[1].toLowerCase()}`);
    }
    if (utilPageMatch) {
        makePage(`/komponenter/${utilPageMatch[1].toLowerCase()}`);
    }

    // If page has a specified path, use that
    if (pageSpecifiedPath) {
        makePage(pageSpecifiedPath);
    }
};
