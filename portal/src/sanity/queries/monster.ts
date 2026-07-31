import { defineQuery } from "next-sanity";

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
            ...,
            _type == "jokul_code" => {
                ...,
                title,
                code,
                language
            },
            _type == "jokul_examples" => {
                ...,
                title,
                examples[]->{
                    name,
                    id,
                    description,
                    height,
                    inert,
                    code
                }
            },
            markDefs[] {
                ...,
                _type == "jokul_internal_link" => {
                    article->{
                        _type,
                        "name": coalesce(name, tema, version),
                        short_description,
                        "slug": slug.current,
                        image,
                        imageDark
                    }
                },
                _type == "componentPageLink" => {
                    component->{
                        name,
                        short_description,
                        "slug": slug.current,
                        image,
                        imageDark
                    }
                }
            }
        }
    }`,
);
