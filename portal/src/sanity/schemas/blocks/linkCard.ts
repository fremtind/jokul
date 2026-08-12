import { documents } from "@/sanity/schemas/documents";
import { LinkIcon } from "@sanity/icons";
import { defineType } from "sanity";

export const linkCard = defineType({
    name: "jokul_linkCard",
    title: "Lenkekort",
    type: "object",
    icon: LinkIcon,
    fields: [
        {
            name: "title",
            title: "Tittel",
            type: "string",
            validation: (Rule) => Rule.required(),
        },
        {
            name: "description",
            title: "Beskrivelse",
            type: "string",
        },
        {
            name: "article",
            title: "Intern artikkel",
            description:
                "Velg en artikkel for å lenke internt. Overstyrer URL-en under.",
            type: "reference",
            to: documents.map((doc) => ({ type: doc.name })),
        },
        {
            name: "url",
            title: "URL",
            description:
                "Ekstern URL. Brukes hvis ingen intern artikkel er valgt.",
            type: "url",
        },
    ],
    validation: (Rule) =>
        Rule.custom(
            (value: { url?: string; article?: unknown } | undefined) => {
                if (value?.url && value?.article) {
                    return "Velg enten en URL eller en intern artikkel, ikke begge";
                }
                if (!value?.url && !value?.article) {
                    return "Oppgi enten en URL eller en intern artikkel";
                }
                return true;
            },
        ),
    preview: {
        select: {
            title: "title",
            description: "description",
            url: "url",
            media: "article.image",
        },
        prepare({ title, description, url, media }) {
            return {
                title,
                subtitle: description || url,
                media: media || LinkIcon,
            };
        },
    },
});
