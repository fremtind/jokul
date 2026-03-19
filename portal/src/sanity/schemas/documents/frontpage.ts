import { FRONTPAGE_PORTAL_LINKS } from "@/frontpagePortalLinks";
import { HomeIcon } from "@sanity/icons";
import { ALL_FIELDS_GROUP, defineField, defineType } from "sanity";

const gridImageField = defineField({
    name: "image",
    title: "Bilde",
    type: "image",
    options: {
        hotspot: true,
    },
    fields: [
        defineField({
            name: "alt",
            title: "Alt-tekst",
            description: "Kan stå tom fordi bildene i gridet er dekorative.",
            type: "string",
            initialValue: "",
        }),
    ],
    validation: (Rule) => Rule.required().assetRequired(),
    preview: {
        select: {
            alt: "alt",
            media: "asset",
        },
        prepare({ alt, media }) {
            return {
                title: alt || "Forsidebilde",
                subtitle: media ? "Opplastet bilde" : undefined,
                media,
            };
        },
    },
});

const portalLinkField = defineField({
    name: "portalLink",
    title: "Lenkekort",
    type: "object",
    fields: [
        defineField({
            name: "title",
            title: "Tittel",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "description",
            title: "Beskrivelse",
            type: "text",
            rows: 3,
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "href",
            title: "Lenke",
            description:
                "Bruk en intern sti som /komponenter eller en full URL som https://example.com.",
            type: "string",
            validation: (Rule) =>
                Rule.required().custom((value) => {
                    if (!value) {
                        return "Legg inn en lenke.";
                    }

                    if (value.startsWith("/") || /^https?:\/\//.test(value)) {
                        return true;
                    }

                    return "Lenken må starte med / eller http(s)://.";
                }),
        }),
    ],
    preview: {
        select: {
            title: "title",
            subtitle: "href",
        },
    },
});

export const frontpage = defineType({
    name: "jokul_frontpage",
    title: "Forside",
    type: "document",
    icon: HomeIcon,
    groups: [
        {
            name: "hero",
            title: "Hero",
            default: true,
        },
        {
            name: "portalLinks",
            title: "Lenkekort",
        },
        {
            name: "images",
            title: "Bilder",
        },
        {
            name: "news",
            title: "Nyheter",
        },
        {
            ...ALL_FIELDS_GROUP,
            hidden: true,
        },
    ],
    fields: [
        defineField({
            name: "title",
            title: "Navn",
            type: "string",
            initialValue: "Forside",
            validation: (Rule) => Rule.required(),
            readOnly: true,
            hidden: true,
        }),
        defineField({
            name: "hero",
            title: "Hero-animasjon",
            type: "object",
            group: "hero",
            options: {
                collapsible: true,
            },
            fields: [
                defineField({
                    name: "useCustomText",
                    title: "Bruk egendefinert hero-tekst",
                    type: "boolean",
                    initialValue: false,
                }),
                defineField({
                    name: "text",
                    title: "Animasjonstekst øverst",
                    description:
                        "Teksten som skrives ut i animasjonen øverst på forsiden.",
                    type: "string",
                    initialValue: "Jøkul Designsystem",
                    hidden: ({ parent }) => !parent?.useCustomText,
                }),
            ],
        }),
        defineField({
            name: "portalLinks",
            title: "Lenkekort",
            description:
                "Kortene øverst på forsiden. Du kan endre rekkefølge, tekst og lenkemål.",
            type: "array",
            group: "portalLinks",
            initialValue: FRONTPAGE_PORTAL_LINKS.map((link) => ({
                _type: "portalLink",
                ...link,
            })),
            of: [portalLinkField],
            validation: (Rule) => Rule.min(1).required(),
        }),
        defineField({
            name: "gridImages",
            title: "Bilder på forsiden",
            description:
                "Last opp minst 6 bilder. Hvis feltet er tomt, skjules bildeseksjonen på forsiden.",
            type: "array",
            group: "images",
            of: [
                {
                    ...gridImageField,
                    name: "gridImage",
                    title: "Forsidebilde",
                },
            ],
            options: {
                layout: "grid",
            },
            validation: (Rule) =>
                Rule.custom((value) => {
                    if (!Array.isArray(value) || value.length === 0) {
                        return true;
                    }

                    return value.length >= 6
                        ? true
                        : "Legg til minst 6 bilder, eller la feltet stå tomt.";
                }),
        }),
        defineField({
            name: "highlightedEntry",
            title: "Fremhevet nyhet",
            description: "Vises først i seksjonen Nyheter på forsiden.",
            type: "object",
            group: "news",
            options: {
                collapsible: true,
            },
            fields: [
                defineField({
                    name: "enabled",
                    title: "Vis fremhevet innhold",
                    type: "boolean",
                    initialValue: true,
                }),
                defineField({
                    name: "targetDocument",
                    title: "Innhold",
                    description:
                        "Velg ett komponent-, fundament- eller blogginnlegg som skal løftes frem på forsiden.",
                    type: "reference",
                    to: [
                        { type: "jokul_component" },
                        { type: "jokul_fundamentals" },
                        { type: "jokul_blog_post" },
                    ],
                    options: {
                        disableNew: true,
                    },
                    hidden: ({ parent }) => parent?.enabled === false,
                    validation: (Rule) =>
                        Rule.custom((value, context) => {
                            if (
                                typeof context.parent === "object" &&
                                context.parent &&
                                "enabled" in context.parent &&
                                context.parent.enabled === false
                            ) {
                                return true;
                            }

                            return value
                                ? true
                                : "Velg innhold som skal fremheves.";
                        }),
                }),
                defineField({
                    name: "title",
                    title: "Tittel",
                    type: "string",
                    hidden: ({ parent }) => parent?.enabled === false,
                }),
                defineField({
                    name: "description",
                    title: "Beskrivelse",
                    type: "text",
                    rows: 3,
                    hidden: ({ parent }) => parent?.enabled === false,
                }),
            ],
            preview: {
                select: {
                    enabled: "enabled",
                    title: "title",
                    targetTitle: "targetDocument.name",
                    targetType: "targetDocument._type",
                    hasDescription: "description",
                },
                prepare({
                    enabled,
                    title,
                    targetTitle,
                    targetType,
                    hasDescription,
                }) {
                    if (enabled === false) {
                        return {
                            title: "Fremhevet nyhet er skjult",
                            subtitle:
                                "Seksjonen bruker bare de øvrige nyhetene",
                        };
                    }

                    const resolvedTitle =
                        title || targetTitle || "Ingen artikkel valgt";
                    const typeLabel =
                        targetType === "jokul_component"
                            ? "Komponent"
                            : targetType === "jokul_fundamentals"
                              ? "Fundament"
                              : targetType === "jokul_blog_post"
                                ? "Blogg"
                                : "Innhold";
                    const hasCustomText = Boolean(title || hasDescription);

                    return {
                        title: resolvedTitle,
                        subtitle: targetTitle
                            ? `${typeLabel}${hasCustomText ? " • tilpasset tekst" : ""}`
                            : "Velg innhold som skal fremheves",
                    };
                },
            },
        }),
    ],
    preview: {
        select: {
            title: "title",
            media: "gridImages.0",
        },
    },
});
