import { defineQuery } from "next-sanity";

export const componentsQuery = defineQuery(`*[_type == "jokul_component"]{
    name,
    short_description,
    "slug": slug.current,
    figma_image,
    image,
    imageDark,
    related_components,
    categories
} | order(name)`);

export const componentBySlugQuery =
    defineQuery(`*[_type == "jokul_component" && slug.current == $slug][0] {
        ...,
        "slug": slug.current,
        "component_example_card": component_example_card{
            "url": asset->url
        },
        documentation_article[]{
            ...,
            _type == "jokul_examples" => {
                ...,
                title,
                examples[]->{
                  title,
                  id,
                  description,
                  height,
                  inert
                },
              },
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
                                    short_description,
                                    "slug": slug.current,
                                    figma_image,
                                    image,
                                    imageDark
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
                                    short_description,
                                    "slug": slug.current,
                                    figma_image,
                                    image,
                                    imageDark
                                }
                            }
                        }
                    }
                }
            },
            markDefs[] {
                ...,
                _type == "componentPageLink" => {
                    component-> {
                        "slug": slug.current,
                        name,
                        short_description,
                        image,
                        imageDark,
                    }
                },
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
                categories
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
        categories,
    }[0]`);
