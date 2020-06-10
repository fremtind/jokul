import { graphql, useStaticQuery } from "gatsby";

interface RawDocumentationPage {
    node: {
        path: string;
        context: {
            frontmatter: {
                title: string;
                order?: string;
            };
        };
    };
}

export interface DocumentationPageInfo {
    path: string;
    title: string;
    order?: string;
}

export function useNavigationLinks() {
    const { allSitePage } = useStaticQuery(graphql`
        query getPages {
            allSitePage(
                sort: { order: ASC, fields: context___frontmatter___title }
                filter: { context: { frontmatter: { title: { regex: "/.*/" } } } }
            ) {
                edges {
                    node {
                        path
                        context {
                            frontmatter {
                                title
                                order
                            }
                        }
                    }
                }
            }
        }
    `);
    const pages: DocumentationPageInfo[] = allSitePage.edges.map((edge: RawDocumentationPage) => ({
        path: edge.node.path,
        title: edge.node.context.frontmatter.title,
        order: edge.node.context.frontmatter.order,
    }));

    const sortByOrder = (a: DocumentationPageInfo, b: DocumentationPageInfo) => {
        if (a.order && b.order) {
            return parseInt(a.order) - parseInt(b.order);
        }
        return 0;
    };

    enum PageType {
        PROFIL = "profil",
        KOMIGANG = "komigang",
        KOMPONENTER = "komponenter",
    }

    const profileDocPages = pages
        .filter((page: DocumentationPageInfo) => page.path.includes("profil"))
        .sort(sortByOrder);
    const getStartedDocPages = pages
        .filter((page: DocumentationPageInfo) => page.path.includes("komigang"))
        .sort(sortByOrder);
    const componentDocPages = pages.filter((page: DocumentationPageInfo) => page.path.includes("komponenter"));

    return { profileDocPages, getStartedDocPages, componentDocPages, PageType };
}
