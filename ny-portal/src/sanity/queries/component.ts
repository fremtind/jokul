import { defineQuery } from "next-sanity";

export const componentsQuery = defineQuery(
    `*[_type == "jokul_component"]{
    name,
    slug,
    "imageUrl": image.asset->url
    } | order(name)`,
);

export const componentBySlugQuery = defineQuery(
    `*[_type == "jokul_component" && slug.current == $slug][0]`,
);
