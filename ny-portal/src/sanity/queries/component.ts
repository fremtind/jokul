import { defineQuery } from "next-sanity";

export const componentsQuery = defineQuery(
    `*[_type == "jokul_component"]{
    name,
    slug,
    "imageUrl": image.asset->url,
    documentation_article[]{
    ...,
        ikke_bruk[]{
        ...,
            ikke_bruk_punkt[]{
            ...,
                markDefs[]{
                    _type == "internalLink" => {
                        "slug": @.reference->slug
                        }
                    }
                }
            }
        }
    } | order(name)`,
);

export const componentBySlugQuery = defineQuery(
    `*[_type == "jokul_component" && slug.current == $slug][0]`,
);

export const componentCardQuery = defineQuery(
    `*[_type == "jokul_component" && defined(slug.current) && slug.current == $componentSlug]{
    name,
    "slug": slug.current,
    figma_image,
    }[0]`,
);
