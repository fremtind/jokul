import { defineQuery } from "next-sanity";
import {
    cardImagesProjection,
    commonBlockBody,
    markDefsFragment,
} from "./fragments";

export const componentsQuery = defineQuery(`*[_type == "jokul_component"]{
    name,
    short_description,
    "slug": slug.current,
    figma_image,
    ${cardImagesProjection},
    related_components,
    categories
} | order(name)`);

export const componentBySlugQuery = defineQuery(
    `*[_type == "jokul_component" && slug.current == $slug][0]{
        ...,
        "slug": slug.current,
        ${cardImagesProjection},
        "example_card": {
            ...example_card,
            "story": example_card.story->
        },
        documentation_article[]{
            ${commonBlockBody},
            _type == "jokul_componentKortFortalt" => {
                ...,
                bruk[]{
                    bruk_punkt[]{
                        ...,
                        ${markDefsFragment}
                    }
                },
                ikke_bruk[]{
                    ikke_bruk_punkt[]{
                        ...,
                        ${markDefsFragment}
                    }
                }
            }
        },
        related_components {
            components[]->{
                name,
                short_description,
                "slug": slug.current,
                figma_image,
                ${cardImagesProjection},
                related_components,
                categories
            }
        },
        "related_patterns": *[_type == "jokul_monster" && references(^._id)]{
            name,
            "slug": slug.current,
            short_description,
            ${cardImagesProjection}
        } | order(name)
    }`,
);

export const componentMetaBySlugQuery = defineQuery(
    `*[_type == "jokul_component" && slug.current == $slug][0]{ name }`,
);
