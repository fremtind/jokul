import { graphql, useStaticQuery } from "gatsby";

export interface FrontmatterTypeProp {
    name?: string;
    defaultValue?: { value?: unknown };
    required?: boolean;
    type?: { name?: string };
    description: string;
    declarations?: Array<{ name: string; fileName: string }>;
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
    discussion?: string;
    order?: string;
    author?: string;
    publishDate?: string;
    group?: string;
    path?: string;
}

interface RawDocumentationPage {
    node: {
        fields: {
            path: string;
        };
        frontmatter: Frontmatter;
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
    const { allMdx } = useStaticQuery(graphql`
        query getPages {
            allMdx(
                sort: { order: ASC, fields: frontmatter___title }
                filter: { frontmatter: { title: { regex: "/.+/" } } }
            ) {
                edges {
                    node {
                        fields {
                            path
                        }
                        frontmatter {
                            title
                            react
                            scss
                            order
                            author
                            publishDate
                            group
                            path
                            discussion
                        }
                    }
                }
                distinct(field: frontmatter___group)
            }
        }
    `);
    const pages: DocumentationPageInfo[] = allMdx.edges.map((edge: RawDocumentationPage) => ({
        ...edge.node.frontmatter,
        path: edge.node.frontmatter.path || edge.node.fields.path,
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
    const componentGroup = allMdx.distinct;

    const blogPages = pages.filter((page: DocumentationPageInfo) => page.path.includes(PageType.BLOG)).sort(sortByDate);

    return { profileDocPages, getStartedDocPages, componentDocPages, componentGroup, uuDocPages, blogPages, PageType };
}
