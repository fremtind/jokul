import { graphql, useStaticQuery } from "gatsby";

export interface FrontmatterTypeProp {
    name?: string;
    defaultValue?: { value?: unknown };
    required?: boolean;
    type?: { name?: string };
}

export interface FrontmatterTypePropsObj {
    [key: string]: FrontmatterTypeProp;
}

export interface FrontmatterType {
    displayName?: string;
    description?: string;
    methods?: Array<unknown>;
    props: FrontmatterTypePropsObj;
}

export interface Frontmatter {
    title: string;
    react?: string;
    scss?: string;
    order?: string;
    author?: string;
    publishDate?: string;
    group?: string;
    type?: FrontmatterType[];
}

interface RawDocumentationPage {
    node: {
        path: string;
        context: {
            frontmatter: Frontmatter;
        };
    };
}

export interface DocumentationPageInfo extends Frontmatter {
    path: string;
}

enum PageType {
    PROFIL = "profil",
    KOMIGANG = "komigang",
    KOMPONENTER = "komponenter",
    BLOG = "blog",
    UU = "universell-utforming",
}

type NavigationLinks = {
    profileDocPages: DocumentationPageInfo[];
    getStartedDocPages: DocumentationPageInfo[];
    componentDocPages: DocumentationPageInfo[];
    componentGroup: string[];
    uuDocPages: DocumentationPageInfo[];
    blogPages: DocumentationPageInfo[];
    PageType: typeof PageType;
};

export function useNavigationLinks(): NavigationLinks {
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
                                author
                                publishDate
                                group
                            }
                        }
                    }
                }
                distinct(field: context___frontmatter___group)
            }
        }
    `);
    const pages: DocumentationPageInfo[] = allSitePage.edges.map((edge: RawDocumentationPage) => ({
        path: edge.node.path,
        ...edge.node.context.frontmatter,
    }));

    const sortByOrder = (a: DocumentationPageInfo, b: DocumentationPageInfo) => {
        if (a.order && b.order) {
            return parseInt(a.order) - parseInt(b.order);
        }
        return 0;
    };

    const getDate = (publishDate: string) => {
        const rawDate = publishDate.split(".").map((i) => parseInt(i, 10));
        const date = new Date(rawDate[0], rawDate[1], rawDate[2]);
        return date.getTime();
    };

    const sortByDate = (a: DocumentationPageInfo, b: DocumentationPageInfo) => {
        if (a.publishDate && b.publishDate) {
            return getDate(b.publishDate) - getDate(a.publishDate);
        }
        return 0;
    };

    const profileDocPages = pages
        .filter((page: DocumentationPageInfo) => page.path.includes("profil"))
        .sort(sortByOrder);
    const getStartedDocPages = pages
        .filter((page: DocumentationPageInfo) => page.path.includes("komigang"))
        .sort(sortByOrder);
    const uuDocPages = pages
        .filter((page: DocumentationPageInfo) => page.path.includes("universell-utforming"))
        .sort(sortByOrder);
    const componentDocPages = pages.filter((page: DocumentationPageInfo) => page.path.includes("komponenter"));
    const componentGroup = allSitePage.distinct;

    const blogPages = pages.filter((page: DocumentationPageInfo) => page.path.includes(PageType.BLOG)).sort(sortByDate);

    return { profileDocPages, getStartedDocPages, componentDocPages, componentGroup, uuDocPages, blogPages, PageType };
}
