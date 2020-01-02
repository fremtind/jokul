const path = require(`path`); // eslint-disable-line @typescript-eslint/no-var-requires

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions;

    const markdownTemplate = path.resolve(`src/templates/docTemplate.js`);

    return graphql(`
        {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            path
                            title
                        }
                    }
                }
            }
        }
    `).then((result) => {
        if (result.errors) {
            return Promise.reject(result.errors);
        }

        return result.data.allMarkdownRemark.edges.forEach(({ node }) => {
            if (node.frontmatter.path) {
                createPage({
                    path: node.frontmatter.path,
                    component: markdownTemplate,
                    context: {},
                });
            }
        });
    });
};
