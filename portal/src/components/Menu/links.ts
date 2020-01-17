import { WindowLocation } from "@reach/router";

interface GeneralDocPage {
    node: {
        frontmatter: {
            path: string;
            title: string;
            order: string;
        };
    };
}
interface GeneralDocPages {
    edges: GeneralDocPage[];
}

export interface ComponentDocPage {
    node: {
        id: string;
        path: string;
        context: {
            frontmatter: {
                title: string;
            };
        };
    };
}
interface ComponentDocPages {
    edges: ComponentDocPage[];
}

export interface ComponentLink {
    title: string;
    path: string;
    order: string;
}

const by = (regex: RegExp) => (edge: GeneralDocPage) =>
    edge.node.frontmatter.path && edge.node.frontmatter.path.match(regex);
const edgeToPage = (edge: GeneralDocPage) => ({
    title: edge.node.frontmatter.title,
    path: edge.node.frontmatter.path,
});

const profile = (rawPages: GeneralDocPages) => ({
    pages: rawPages.edges
        .filter(by(/^\/profil/))
        .sort((a, b) => parseInt(a.node.frontmatter.order) - parseInt(b.node.frontmatter.order))
        .map(edgeToPage),
    sectionTitle: "Profilen vår",
    matchingLocation: (location: WindowLocation) => location.pathname.includes("profil"),
});
const developer = (rawPages: GeneralDocPages) => ({
    pages: rawPages.edges
        .filter(by(/^\/komigang/))
        .sort((a, b) => parseInt(a.node.frontmatter.order) - parseInt(b.node.frontmatter.order))
        .map(edgeToPage),
    sectionTitle: "Kom i gang",
    matchingLocation: (location: WindowLocation) => location.pathname.includes("komigang"),
});
const components = (rawComponents: ComponentDocPages) => ({
    pages: rawComponents.edges.map((edge: ComponentDocPage) => ({
        title: edge.node.context.frontmatter.title,
        path: edge.node.path,
    })),
    sectionTitle: "Komponenter",
    matchingLocation: (location: WindowLocation) => location.pathname.includes("/documentation"),
});

export const mainMenu = (rawPages: GeneralDocPages, rawComponents: ComponentDocPages) => [
    profile(rawPages),
    components(rawComponents),
    developer(rawPages),
];

export const staticLinks = [
    {
        href: "https://github.com/fremtind/jokul",
        linkText: "Kode på Github",
        className: "portal-menu__link--github",
    },
    {
        href: "https://github.com/fremtind/jokul/issues/new?assignees=&labels=bug&template=bug_report.md&title=",
        linkText: "Rapporter feil",
        className: "portal-menu__link--github",
    },
    {
        href:
            "https://github.com/fremtind/jokul/issues/new?assignees=&labels=enhancement&template=feature_request.md&title=",
        linkText: "Forslag ny funksjon",
        className: "portal-menu__link--github",
    },
    {
        href: "https://www.figma.com/file/TkbB9ANfejDSjB2u4u1OEuqM/J%C3%B8kul-components",
        linkText: "Designbibliotek",
        className: "portal-menu__link--figma",
    },
];
