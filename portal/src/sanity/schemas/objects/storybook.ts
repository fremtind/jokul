import { MAINTAINED_VERSIONS } from "@/storybook/versions";
import { ComponentIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";
import { StorybookEmbedInput } from "../../components/StorybookEmbedInput";

const versionOptions = [
    { title: "Latest", value: "latest" },
    { title: "Next", value: "next" },
    ...MAINTAINED_VERSIONS.map((version) => ({
        title: `v${version}`,
        value: `version-${version}`,
    })),
];

export const storybookEmbed = defineType({
    name: "jokul_storybookEmbed",
    title: "Storybook-embed",
    type: "object",
    icon: ComponentIcon,
    components: {
        input: StorybookEmbedInput,
    },
    initialValue: {
        version: "latest",
        height: 360,
        interactive: true,
    },
    fields: [
        defineField({
            name: "storyId",
            title: "ID for story",
            type: "string",
            readOnly: true,
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "storyName",
            title: "Navn på story",
            type: "string",
            readOnly: true,
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "version",
            title: "Versjon av Jøkul",
            type: "string",
            options: {
                list: versionOptions,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "height",
            title: "Høyde på eksempel (px)",
            description: "Velg en høyde mellom 120 og 1200 piksler.",
            type: "number",
            validation: (Rule) => Rule.required().integer().min(120).max(1200),
        }),
        defineField({
            name: "interactive",
            title: "Tillat interaksjon",
            description:
                "Lar brukeren trykke, sveipe og utføre handlinger i eksempelet.",
            type: "boolean",
            validation: (Rule) => Rule.required(),
        }),
    ],
    preview: {
        select: {
            title: "storyName",
            version: "version",
            height: "height",
        },
        prepare({ title, version, height }) {
            return {
                title: title || "Ingen story valgt",
                subtitle: [version, height ? `${height}px` : undefined]
                    .filter(Boolean)
                    .join(" · "),
            };
        },
    },
});

export const storybookExample = defineType({
    name: "jokul_storybookExample",
    title: "Eksempel fra Storybook",
    type: "object",
    icon: ComponentIcon,
    fields: [
        defineField({
            name: "embed",
            title: "Storybook-embed",
            type: "jokul_storybookEmbed",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "code",
            title: "Kodeeksempel",
            type: "code",
            options: {
                language: "tsx",
            },
        }),
    ],
    preview: {
        select: {
            storyName: "embed.storyName",
            version: "embed.version",
            height: "embed.height",
        },
        prepare({ storyName, version, height }) {
            const subtitle = [version, height ? `${height}px` : undefined]
                .filter(Boolean)
                .join(" · ");

            return {
                title: storyName || "Ingen story valgt",
                subtitle,
            };
        },
    },
});
