import { graphql, useStaticQuery } from "gatsby";
import { Action, useRegisterActions } from "kbar";
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
}

export const pageNames = {
    [PageType.KOMIGANG]: "Kom i gang",
    [PageType.PROFIL]: "Profil",
    [PageType.KOMPONENTER]: "Komponenter",
    [PageType.UU]: "Universell utforming",
    [PageType.GUIDER]: "Guider",
    [PageType.BLOG]: "Blogg",
};

type NavigationLinks = {
    profileDocPages: DocumentationPageInfo[];
    getStartedDocPages: DocumentationPageInfo[];
    componentDocPages: DocumentationPageInfo[];
    componentGroup: string[];
    uuDocPages: DocumentationPageInfo[];
    guiderDocPages: DocumentationPageInfo[];
    blogPages: DocumentationPageInfo[];
    PageType: typeof PageType;
    menuItems: MenuItemList;
};

function mapToAction({ parent, name, path }: { parent: PageType; name: string; path: string }): Action {
    return {
        id: path,
        name,
        parent,
        section: pageNames[parent],
        perform: () => (window.location.pathname = path),
    };
}

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
        .filter((page: DocumentationPageInfo) => page.path.includes("/profil/"))
        .sort(sortByOrder);
    const uuDocPages = pages
        .filter((page: DocumentationPageInfo) => page.path.includes("/universell-utforming/"))
        .sort(sortByOrder);
    const guiderDocPages = pages
        .filter((page: DocumentationPageInfo) => page.path.includes("/guider/"))
        .sort(sortByOrder);
    const componentDocPages = pages.filter((page: DocumentationPageInfo) => page.path.includes("/komponenter/"));
    const componentGroup = allMdx.distinct;

    const blogPages = pages.filter((page: DocumentationPageInfo) => page.path.includes("/blog/")).sort(sortByDate);

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

    const menuItems: MenuItemList = [
        {
            linkText: pageNames[PageType.KOMIGANG],
            content: [
                ...getStartedDocPages.map((page) => ({
                    linkText: page.title,
                    content: page.path,
                    basePath: PageType.KOMIGANG,
                })),
            ],
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
            linkText: pageNames[PageType.UU],
            content: [
                ...uuDocPages.map((page) => ({
                    linkText: page.title,
                    content: page.path,
                    basePath: PageType.UU,
                })),
            ],
            basePath: PageType.UU,
        },
        {
            linkText: pageNames[PageType.GUIDER],
            content: [
                ...guiderDocPages.map((page) => ({
                    linkText: page.title,
                    content: page.path,
                    basePath: PageType.GUIDER,
                })),
            ],
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

    useRegisterActions([
        {
            id: PageType.KOMIGANG,
            name: pageNames[PageType.KOMIGANG],
            keywords: "start introduksjon",
            shortcut: ["g", "i"],
            section: "Områder",
        },
        ...getStartedDocPages.map((page) =>
            mapToAction({
                path: page.path,
                name: page.title,
                parent: PageType.KOMIGANG,
            }),
        ),
        {
            id: PageType.PROFIL,
            name: pageNames[PageType.PROFIL],
            shortcut: ["g", "p"],
            keywords: "typografi font logo farger spacing stil tone stemme",
            section: "Områder",
        },
        ...profileDocPages.map((page) =>
            mapToAction({
                path: page.path,
                name: page.title,
                parent: PageType.PROFIL,
            }),
        ),
        {
            id: PageType.KOMPONENTER,
            name: pageNames[PageType.KOMPONENTER],
            shortcut: ["g", "k"],
            section: "Områder",
        },
        ...componentDocPages.map((page) =>
            mapToAction({
                path: page.path,
                name: page.title,
                parent: PageType.KOMPONENTER,
            }),
        ),
        {
            id: PageType.UU,
            name: pageNames[PageType.UU],
            shortcut: ["g", "u"],
            section: "Områder",
        },
        ...uuDocPages.map((page) =>
            mapToAction({
                path: page.path,
                name: page.title,
                parent: PageType.UU,
            }),
        ),
        {
            id: PageType.GUIDER,
            name: pageNames[PageType.GUIDER],
            shortcut: ["g", "g"],
            section: "Områder",
        },
        ...guiderDocPages.map((page) =>
            mapToAction({
                path: page.path,
                name: page.title,
                parent: PageType.GUIDER,
            }),
        ),
        {
            id: PageType.BLOG,
            name: pageNames[PageType.BLOG],
            shortcut: ["g", "b"],
            section: "Områder",
        },
        ...blogPages.map((page) =>
            mapToAction({
                path: page.path,
                name: page.title,
                parent: PageType.BLOG,
            }),
        ),
    ]);

    return {
        profileDocPages,
        getStartedDocPages,
        guiderDocPages,
        componentDocPages,
        componentGroup,
        uuDocPages,
        blogPages,
        PageType,
        menuItems,
    };
}
