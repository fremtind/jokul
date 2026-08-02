export const ARTICLE_TYPES = [
    {
        value: "blogg",
        sanityType: "jokul_blog_post",
        label: "Blogg",
    },
    {
        value: "komponent",
        sanityType: "jokul_component",
        label: "Komponenter",
    },
    {
        value: "fundament",
        sanityType: "jokul_fundamentals",
        label: "Fundamenter",
    },
    {
        value: "release-notes",
        sanityType: "jokul_release_notes",
        label: "Release notes",
    },
    {
        value: "monster",
        sanityType: "jokul_monster",
        label: "Mønster",
    },
] as const;

export type ArticleType = (typeof ARTICLE_TYPES)[number];
export type ArticleTypeValue = ArticleType["value"];

const articleTypeValues = new Set<string>(
    ARTICLE_TYPES.map((type) => type.value),
);

export function isArticleTypeValue(value: string): value is ArticleTypeValue {
    return articleTypeValues.has(value);
}
