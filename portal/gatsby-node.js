const { createFilePath } = require("gatsby-source-filesystem");

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

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions;
    // you only want to operate on `Mdx` nodes. If you had content from a
    // remote CMS you could also check to see if the parent node was a
    // `File` node here
    if (node.internal.type === "Mdx") {
        const value = createFilePath({ node, getNode });
        createNodeField({
            // Name of the field you are adding
            name: "waduuu",
            // Individual MDX node
            node,
            // Generated value based on filepath with "blog" prefix. you
            // don't need a separating "/" before the value because
            // createFilePath returns a path with the leading "/".
            value: `/blog${value}`,
        });
    }
};
