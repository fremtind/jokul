import { defineQuery } from "next-sanity";

export const componentsQuery = defineQuery(`*[_type == "jokul_component"]{
    name,
    short_description,
    "slug": slug.current,
    figma_image,
    image,
    imageDark,
    related_components,
    keywords
} | order(name)`);

export const componentBySlugQuery =
    defineQuery(`*[_type == "jokul_component" && slug.current == $slug][0] {
        ...,
        documentation_article[]{
            ...,
            _type == "jokul_componentKortFortalt" => {
                ...,
                bruk[]{
                    bruk_punkt[] {
                        ...,
                        markDefs[] {
                            _type == "componentPageLink" => {
                                ...,
                                component->{
                                    name,
                                    slug
                                }
                            }
                        }
                    }
                },
                ikke_bruk[]{
                    ikke_bruk_punkt[] {
                        ...,
                        markDefs[] {
                            _type == "componentPageLink" => {
                                ...,
                                component->{
                                    name,
                                    slug
                                }
                            }
                        }
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
                image,
                imageDark,
                related_components,
                keywords
            }
        }
    }`);

export const componentCardQuery =
    defineQuery(`*[_type == "jokul_component" && defined(slug.current) && slug.current == $componentSlug] {
        name,
        short_description,
        "slug": slug.current,
        figma_image,
        image,
        imageDark,
        related_components,
        keywords
    }[0]`);
