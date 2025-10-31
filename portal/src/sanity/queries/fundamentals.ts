import { defineQuery } from "next-sanity";

export const fundamentalsQuery = defineQuery(
    `*[_type == "jokul_fundamentals"]{
        name,
        slug,
        short_description,
        "date": _createdAt,
    } | order(_createdAt desc)`,
);

export const fundamentalsBySlugQuery = defineQuery(
    `*[_type == "jokul_fundamentals" && slug.current == $slug][0]`,
);
