import { defineQuery } from "next-sanity";

export const componentsQuery = defineQuery(
    `*[_type == "jokul_componentPage"]{title, slug}`,
);

export const componentPageBySlugQuery = defineQuery(
    `*[_type == "jokul_componentPage" && slug.current == $slug][0]`,
);
