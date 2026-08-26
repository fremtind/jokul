import { defineQuery } from "next-sanity";
import { cardImagesProjection, commonBlockBody } from "./fragments";

export const fundamentalsQuery = defineQuery(
    `*[_type == "jokul_fundamentals"]{
        name,
        slug,
        short_description,
        ${cardImagesProjection},
        "date": _createdAt
    } | order(_createdAt desc)`,
);

export const fundamentalsBySlugQuery = defineQuery(
    `*[_type == "jokul_fundamentals" && slug.current == $slug][0]{
        ...,
        ${cardImagesProjection},
        article[]{
            ${commonBlockBody}
        }
    }`,
);
