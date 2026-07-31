import { defineQuery } from "next-sanity";

export const searchQuery = defineQuery(
    `*[_type in ["jokul_component", "jokul_fundamentals", "jokul_blog_post", "jokul_monster"] && defined(slug.current) && (
        name match "*" + $searchString + "*" ||
        short_description match "*" + $searchString + "*" ||
        slug.current match "*" + $searchString + "*" ||
        (_type == "jokul_component" && (
            keywords[] match "*" + $searchString + "*" ||
            documentation_article[].children[].text match "*" + $searchString + "*" ||
            considerations[].title match "*" + $searchString + "*" ||
            considerations[].description match "*" + $searchString + "*"
        )) ||
        (_type == "jokul_monster" &&
            article[].children[].text match "*" + $searchString + "*"
        )
    )] | {
        _id,
        name,
        slug,
        short_description,
        "image": select(
            _type == "jokul_component" => image.asset->url,
            _type == "jokul_monster" => image.asset->url,
            null
        ),
        "type": select(
            _type == "jokul_component" => "Komponent",
            _type == "jokul_fundamentals" => "Fundament",
            _type == "jokul_blog_post" => "Blogg",
            _type == "jokul_monster" => "Mønster"
        ),
        "href": select(
            _type == "jokul_component" => "/komponenter/" + slug.current,
            _type == "jokul_fundamentals" => "/fundamenter/" + slug.current,
            _type == "jokul_blog_post" => "/blog/" + slug.current,
            _type == "jokul_monster" => "/monster/" + slug.current
        )
    }`,
);
