import { defineQuery } from "next-sanity";

export const componentsQuery = defineQuery(
    `*[_type == "jokul_component"]{name, slug}`,
);

export const componentBySlugQuery = defineQuery(
    `*[_type == "jokul_component" && slug.current == $slug][0]`,
);
