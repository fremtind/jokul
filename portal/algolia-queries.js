// Bruker excerpt for å få en lesbar variant av body uten JSX og YAML-syntaks. Makser ut lengden.
const pageQuery = `{
  pages: allMdx {
    edges {
      node {
        id
        fields {
          path
        }
        frontmatter {
          path
          title
        }
        excerpt(pruneLength: 2147483647)
      }
    }
  }
}`;

function pageToAlgoliaRecord({ node: { id, frontmatter, fields, ...rest } }) {
    const path = frontmatter.path ? frontmatter.path : fields.path;
    return {
        objectID: id,
        ...fields,
        ...frontmatter,
        path,
        ...rest,
    };
}

const queries = [
    {
        query: pageQuery,
        transformer: ({ data }) => data.pages.edges.map(pageToAlgoliaRecord),
        settings: { attributesToSnippet: ["excerpt:20"] },
    },
];

module.exports = queries;
