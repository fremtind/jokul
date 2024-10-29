import { graphql, useStaticQuery } from "gatsby";
import { MenuItemList } from "../../fullscreenMenuContext";

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
    order?: string;
    author?: string;
    publishDate?: string;
    group?: string;
    path?: string;
    keywords?: string;
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

export enum PageType {
    KOMIGANG = "kom-i-gang",
    PROFIL = "profil",
    KOMPONENTER = "komponenter",
    UU = "universell-utforming",
    GUIDER = "guider",
    BLOG = "blog",
    DEMOER = "demoer",
}

export const pageNames = {
    [PageType.KOMIGANG]: "Kom i gang",
    [PageType.PROFIL]: "Profil",
    [PageType.KOMPONENTER]: "Komponenter",
    [PageType.UU]: "Universell utforming",
    [PageType.DEMOER]: "Demoer",
    [PageType.GUIDER]: "Guider",
    [PageType.BLOG]: "Blogg",
};

type NavigationLinks = {
    profileDocPages: DocumentationPageInfo[];
    getStartedDocPages: DocumentationPageInfo[];
    componentDocPages: DocumentationPageInfo[];
    demoPages: DocumentationPageInfo[];
    componentGroup: string[];
    uuDocPages: DocumentationPageInfo[];
    guiderDocPages: DocumentationPageInfo[];
    blogPages: DocumentationPageInfo[];
    PageType: typeof PageType;
    menuItems: MenuItemList;
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
                            keywords
                        }
                    }
                }
                distinct(field: frontmatter___group)
            }
        }
    `);
    const pages: DocumentationPageInfo[] = allMdx.edges.map(
        (edge: RawDocumentationPage) => ({
            ...edge.node.frontmatter,
            path: edge.node.frontmatter.path || edge.node.fields.path,
        }),
    );

    const sortByOrder = (
        a: DocumentationPageInfo,
        b: DocumentationPageInfo,
    ) => {
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
        .filter((page: DocumentationPageInfo) => page.path.includes("/profil/"))
        .sort(sortByOrder);
    const uuDocPages = pages
        .filter((page: DocumentationPageInfo) =>
            page.path.includes("/universell-utforming/"),
        )
        .sort(sortByOrder);
    const guiderDocPages = pages
        .filter((page: DocumentationPageInfo) => page.path.includes("/guider/"))
        .sort(sortByOrder);
    const componentDocPages = pages.filter((page: DocumentationPageInfo) =>
        page.path.includes("/komponenter/"),
    );
    const componentGroup = allMdx.distinct;

    const blogPages = pages
        .filter((page: DocumentationPageInfo) => page.path.includes("/blog/"))
        .sort(sortByDate);

    const getStartedDocPages = [
        {
            path: "/kom-i-gang/introduksjon",
            title: "Introduksjon",
        },
        {
            path: "/kom-i-gang/deg-og-jokul",
            title: "Deg og Jøkul",
        },
        {
            path: "/kom-i-gang/hjelp",
            title: "Hvor kan du få hjelp?",
        },
        {
            path: "/kom-i-gang/jobb-med-teamet",
            title: "Jobb med Jøkul-teamet",
        },
        {
            path: "/kom-i-gang/slik-er-jokul-satt-sammen",
            title: "Slik er Jøkul satt sammen",
        },
        {
            path: "/kom-i-gang/design",
            title: "For Designere",
        },
        {
            path: "/kom-i-gang/utvikling",
            title: "For Utviklere",
        },
        {
            path: "/kom-i-gang/lekegrind",
            title: "Lekegrind",
        },
    ];

    const demoPages = [
        {
            title: "Skjemavalidering",
            path: "/demoer/skjemavalidering",
        },
        {
            title: "Tjenestefeil",
            path: "/demoer/feilmelding-500",
        },
        {
            title: "Tjenestefeil med melding",
            path: "/demoer/feilmelding-500-med-melding",
        },
    ];

    const menuItems: MenuItemList = [
        {
            linkText: pageNames[PageType.KOMIGANG],
            content: getStartedDocPages.map((page) => ({
                linkText: page.title,
                content: page.path,
                basePath: PageType.KOMIGANG,
            })),
            basePath: PageType.KOMIGANG,
        },
        {
            linkText: pageNames[PageType.PROFIL],
            content: profileDocPages.map((page) => ({
                linkText: page.title,
                content: page.path,
                basePath: PageType.PROFIL,
            })),
            basePath: PageType.PROFIL,
        },
        {
            linkText: pageNames[PageType.KOMPONENTER],
            content: [
                ...componentDocPages
                    .filter((page) => page.group !== "hooks")
                    .map((page) => ({
                        linkText: page.title,
                        content: page.path,
                        basePath: PageType.KOMPONENTER,
                    })),
                {
                    linkText: "React Hooks",
                    content: componentDocPages
                        .filter((page) => page.group === "hooks")
                        .map((page) => ({
                            linkText: page.title,
                            content: page.path,
                            basePath: PageType.KOMPONENTER,
                        })),
                    basePath: PageType.KOMPONENTER,
                },
            ],
            basePath: PageType.KOMPONENTER,
        },
        {
            linkText: pageNames[PageType.DEMOER],
            content: demoPages.map((page) => ({
                linkText: page.title,
                content: page.path,
                basePath: PageType.DEMOER,
            })),
            basePath: PageType.DEMOER,
        },
        {
            linkText: pageNames[PageType.UU],
            content: uuDocPages.map((page) => ({
                linkText: page.title,
                content: page.path,
                basePath: PageType.UU,
            })),
            basePath: PageType.UU,
        },
        {
            linkText: pageNames[PageType.GUIDER],
            content: guiderDocPages.map((page) => ({
                linkText: page.title,
                content: page.path,
                basePath: PageType.GUIDER,
            })),
            basePath: PageType.GUIDER,
        },
        {
            linkText: pageNames[PageType.BLOG],
            content: blogPages.map((page) => ({
                linkText: page.title,
                content: page.path,
                basePath: PageType.BLOG,
            })),

            basePath: PageType.BLOG,
        },
    ];

    return {
        profileDocPages,
        getStartedDocPages,
        guiderDocPages,
        demoPages,
        componentDocPages,
        componentGroup,
        uuDocPages,
        blogPages,
        PageType,
        menuItems,
    };
}
