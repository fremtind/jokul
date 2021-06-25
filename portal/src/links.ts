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
    },
    {
        href: "https://github.com/fremtind/jokul/issues/new?assignees=&labels=🐝+bug&template=feilmelding.md&title=Feil%3A+",
        linkText: "Rapporter feil",
    },
    {
        href: "https://github.com/fremtind/jokul/issues/new?assignees=&labels=✨+enhancement&template=funksjonalitets-nske.md&title=",
        linkText: "Foreslå ny funksjonalitet",
    },
    {
        href: "https://www.figma.com/file/kjIQcfLr1wYdFGnUmD4rF4/J%C3%B8kul-eksempler?node-id=1%3A9",
        linkText: "Designbibliotek",
    },
];
