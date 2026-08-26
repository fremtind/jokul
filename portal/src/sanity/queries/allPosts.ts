import { defineQuery } from "next-sanity";
import { cardImagesProjection } from "./fragments";

export const latestUpdatedArticlesQuery = defineQuery(
    `*[
        _type in [
            "jokul_blog_post",
            "jokul_component",
            "jokul_fundamentals",
            "jokul_release_notes",
            "jokul_monster"
        ] && defined(slug.current)
    ] | order(_updatedAt desc)[0...$limit]{
        _id,
        _type,
        "type": select(
            _type == "jokul_blog_post"     => "Blogg",
            _type == "jokul_component"     => "Komponent",
            _type == "jokul_fundamentals"  => "Fundament",
            _type == "jokul_release_notes" => "Release notes",
            _type == "jokul_monster"      => "Mønster",
            "Artikkel"
        ),
        "name": coalesce(name, tema, version),
        short_description,
        ${cardImagesProjection},
        "slug": slug.current,
        "href": select(
            _type == "jokul_blog_post"     => "/blog/" + slug.current,
            _type == "jokul_component"     => "/komponenter/" + slug.current,
            _type == "jokul_fundamentals"  => "/fundamenter/" + slug.current,
            _type == "jokul_release_notes" => "/release-notes/" + slug.current,
            _type == "jokul_monster"      => "/monster/" + slug.current,
            "/"
        ),
        "updated": _updatedAt,
        "created": _createdAt,
    }`,
);

export const newsPageQuery = defineQuery(
    `{
        "articles": *[
            _type in [
                "jokul_blog_post",
                "jokul_component",
                "jokul_fundamentals",
                "jokul_release_notes",
                "jokul_monster"
            ] && defined(slug.current)
            && (count($types) == 0 || _type in $types)
            && dateTime(_updatedAt) > dateTime(now()) - 60*60*24*60
        ] | order(_updatedAt desc)[$start...$end]{
            _id,
            _type,
            "type": select(
                _type == "jokul_blog_post"     => "Blogg",
                _type == "jokul_component"     => "Komponent",
                _type == "jokul_fundamentals"  => "Fundament",
                _type == "jokul_release_notes" => "Release notes",
                _type == "jokul_monster"      => "Mønster",
                "Artikkel"
            ),
            "name": coalesce(name, tema, version),
            short_description,
            ${cardImagesProjection},
            "slug": slug.current,
            "href": select(
                _type == "jokul_blog_post"     => "/blog/" + slug.current,
                _type == "jokul_component"     => "/komponenter/" + slug.current,
                _type == "jokul_fundamentals"  => "/fundamenter/" + slug.current,
                _type == "jokul_release_notes" => "/release-notes/" + slug.current,
                _type == "jokul_monster"      => "/monster/" + slug.current,
                "/"
            ),
            "updated": _updatedAt,
            "created": _createdAt,
        },
    }`,
);
