import { DocumentIcon } from "@sanity/icons";
import { defineField } from "sanity";

export const internalLink = defineField({
    type: "object",
    name: "jokul_internal_link",
    title: "Lenke til en annen artikkel",
    icon: DocumentIcon,
    fields: [
        {
            type: "reference",
            name: "article",
            title: "Artikkel",
            to: [
                { type: "jokul_component" },
                { type: "jokul_fundamentals" },
                { type: "jokul_temaside" },
                { type: "jokul_blog_post" },
            ],
            validation: (Rule) => Rule.required(),
        },
    ],
});
