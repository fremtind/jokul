import { defineQuery } from "next-sanity";

export const searchQuery = defineQuery(
    `*[_type in ["jokul_component", "jokul_fundamentals", "jokul_blog_post"] && defined(slug.current) && (
        name match "*" + $searchString + "*" ||
        short_description match "*" + $searchString + "*" ||
        (_type == "jokul_component" && keywords[] match "*" + $searchString + "*")
    )] | {
        _id,
        name,
        slug,
        short_description,
        "image": select(
            _type == "jokul_component" => image.asset->url,
            null
        ),
        "type": select(
            _type == "jokul_component" => "Komponent",
            _type == "jokul_fundamentals" => "Fundament",
            _type == "jokul_blog_post" => "Blogg"
        ),
        "href": select(
            _type == "jokul_component" => "/komponenter/" + slug.current,
            _type == "jokul_fundamentals" => "/fundamenter/" + slug.current,
            _type == "jokul_blog_post" => "/blog/" + slug.current
        )
    }`,
);
