// eslint-disable-next-line
const docgen = require("react-docgen-typescript");

const options = {
    savePropValueAsString: true,
    skipChildrenPropWithoutDoc: false,
    propFilter: (prop) => {
        if (prop.name === "children") {
            return true;
        }

        if (prop.declarations !== undefined && prop.declarations.length > 0) {
            const hasPropAdditionalDescription = prop.declarations.find((declaration) => {
                return !declaration.fileName.includes("node_modules");
            });

            return Boolean(hasPropAdditionalDescription);
        }

        return true;
    },
};

exports.onCreatePage = async ({ page, actions }) => {
    const { createPage, deletePage } = actions;
    const componentPageMatch = page.path.match(/\/.*react.*\/documentation\/(.*)\//);
    const corePageMatch = page.path.match(/\/core\/documentation\/(.*)\//);
    const utilPageMatch = page.path.match(/\/.*util.*\/documentation\/(.*)\//);
    const pageSpecifiedPath = page.context.frontmatter && page.context.frontmatter.path;

    const makePage = (path, withType = false) => {
        const type = withType
            ? docgen.parse(`../packages/${page.context.frontmatter.react}/src/index.ts`, options)
            : undefined;

        const newPage = {
            ...page,
            path,
            context: {
                ...page.context,
                frontmatter: {
                    ...page.context.frontmatter,
                    type,
                },
            },
        };
        createPage(newPage);
        deletePage(page);
    };

    // If page is a component doc page, create simpler path
    if (componentPageMatch) {
        makePage(`/komponenter/${componentPageMatch[1].toLowerCase()}`, true);
    }
    if (corePageMatch) {
        makePage(`/komponenter/${corePageMatch[1].toLowerCase()}`, true);
    }
    if (utilPageMatch) {
        makePage(`/komponenter/${utilPageMatch[1].toLowerCase()}`, true);
    }

    // If page has a specified path, use that
    if (pageSpecifiedPath) {
        makePage(pageSpecifiedPath);
    }
};

// https://www.gatsbyjs.com/docs/mdx/programmatically-creating-pages/
// Create indexable source for UU articles
exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions;
    if (node.internal.type === "Mdx") {
        createNodeField({
            node,
        });
    }
};
