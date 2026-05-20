import { LinkIcon } from "@sanity/icons";
import { defineField } from "sanity";

export const internalLink = defineField({
    type: "object",
    name: "jokul_internal_link",
    title: "Lenke til en annen artikkel",
    icon: LinkIcon,
    fields: [
        {
            type: "reference",
            name: "article",
            title: "Artikkel",
            to: [
                { type: "jokul_component" },
                { type: "jokul_blog_post" },
                { type: "jokul_fundamentals" },
                { type: "jokul_release_notes" },
                { type: "jokul_temaside" },
            ],
            validation: (Rule) => Rule.required(),
        },
    ],
});
