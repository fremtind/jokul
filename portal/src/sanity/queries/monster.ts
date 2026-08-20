import { defineQuery } from "next-sanity";
import { commonBlockBody } from "./fragments";

export const monstreQuery = defineQuery(`*[_type == "jokul_monster"]{
    name,
    "slug": slug.current,
    short_description,
    image,
    related_components[]->{
        name,
        "slug": slug.current
    }
} | order(name)`);

export const monsterBySlugQuery = defineQuery(
    `*[_type == "jokul_monster" && slug.current == $slug][0]{
        ...,
        "slug": slug.current,
        related_components[]->{
            name,
            short_description,
            "slug": slug.current,
            image,
            imageDark
        },
        "related_patterns": *[
            _type == "jokul_monster"
            && _id != ^._id
            && (_id in ^.related_patterns[]._ref || references(^._id))
        ]{
            name,
            short_description,
            "slug": slug.current,
            image
        } | order(name),
        article[]{
            ${commonBlockBody}
        }
    }`,
);
