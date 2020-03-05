import { graphql, useStaticQuery } from "gatsby";

interface RawDocumentationPage {
    node: {
        frontmatter: {
            path: string;
            title: string;
            order: string;
        };
    };
}
interface RawComponentPage {
    node: {
        path: string;
        context: {
            frontmatter: {
                title: string;
            };
        };
    };
}

export interface DocumentationPageInfo {
    path: string;
    title: string;
}

export function useNavigationLinks() {
    const { allSitePage, allMarkdownRemark } = useStaticQuery(graphql`
        query getPages {
            allSitePage(
                filter: { path: { regex: "/(-react|react-hooks)/documentation/" } }
                sort: { order: ASC, fields: context___frontmatter___title }
            ) {
                edges {
                    node {
                        path
                        context {
                            frontmatter {
                                title
                            }
                        }
                    }
                }
            }
            allMarkdownRemark(sort: { order: ASC, fields: frontmatter___order }) {
                edges {
                    node {
                        frontmatter {
                            path
                            title
                            order
                        }
                    }
                }
            }
        }
    `);

    const documentationPages = allMarkdownRemark.edges
        /* .sort(
            (a: RawDocumentationPage, b: RawDocumentationPage) =>
                parseInt(a.node.frontmatter.order) - parseInt(b.node.frontmatter.order),
        ) */
        .map((edge: RawDocumentationPage) => ({
            path: edge.node.frontmatter.path,
            title: edge.node.frontmatter.title,
        }))
        .filter((page: DocumentationPageInfo) => page.path !== null && page.title !== "");

    const componentPages = allSitePage.edges.map((edge: RawComponentPage) => ({
        path: edge.node.path,
        title: edge.node.context.frontmatter.title,
    }));

    return { documentationPages, componentPages };
}
