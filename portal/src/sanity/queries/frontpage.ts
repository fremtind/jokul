import { defineQuery } from "next-sanity";

export const frontpageQuery = defineQuery(`{
    "frontpage": *[
        _type == "jokul_frontpage" &&
        _id == "jokul_frontpage"
    ][0]{
        title,
        hero{
            useCustomText,
            text
        },
        portalLinks[]{
            title,
            description,
            href
        },
        gridImages[]{
            asset,
            crop,
            hotspot,
            alt
        },
        highlightedEntry{
            enabled,
            title,
            description,
            "targetDocument": targetDocument->{
                _id,
                _type,
                _createdAt,
                name,
                short_description,
                _updatedAt,
                "image": coalesce(
                    image,
                    imageDark,
                    article[_type == "image"][0]
                ),
                "href": select(
                    _type == "jokul_component" => "/komponenter/" + slug.current,
                    _type == "jokul_fundamentals" => "/fundamenter/" + slug.current,
                    _type == "jokul_blog_post" => "/blog/" + slug.current
                ),
                "docType": select(
                    _type == "jokul_component" => "Komponent",
                    _type == "jokul_fundamentals" => "Fundament",
                    _type == "jokul_blog_post" => "Blogg"
                )
            }
        }
    },
    "latestUpdatedDocuments": *[
        _type in ["jokul_component", "jokul_fundamentals", "jokul_blog_post"] &&
        defined(slug.current)
    ] | order(_updatedAt desc)[0...3] {
        _id,
        _type,
        _createdAt,
        name,
        short_description,
        _updatedAt,
        "href": select(
            _type == "jokul_component" => "/komponenter/" + slug.current,
            _type == "jokul_fundamentals" => "/fundamenter/" + slug.current,
            _type == "jokul_blog_post" => "/blog/" + slug.current
        ),
        "docType": select(
            _type == "jokul_component" => "Komponent",
            _type == "jokul_fundamentals" => "Fundament",
            _type == "jokul_blog_post" => "Blogg"
        )
    }
}`);
