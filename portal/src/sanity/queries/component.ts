import { defineQuery } from "next-sanity";

export const componentsQuery = defineQuery(`*[_type == "jokul_component"]{
    name,
    slug,
    "imageUrl": image.asset->url,
    
} | order(name)`);

export const componentBySlugQuery =
    defineQuery(`*[_type == "jokul_component" && slug.current == $slug][0] {
        ...,
        documentation_article[]{
            ...,
            _type == "jokul_componentCard" => {
                ...,
                components[]->{
                    _id,
                    name,
                    "slug": slug.current,
                    image,
                    imageDark
                }
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
    }[0]`);
