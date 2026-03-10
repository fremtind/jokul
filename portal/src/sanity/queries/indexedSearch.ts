import { defineQuery } from "next-sanity";

export const componentSearchQuery = defineQuery(
    `*[_type == "jokul_component" && defined(slug.current)] {
        "id": _id,
        "slug": slug.current,
        "title": name,
        short_description,
        keywords,
        image,
        imageDark,
        documentation_article
    }`,
);

export const fundamentalsSearchQuery = defineQuery(
    `*[_type == "jokul_fundamentals" && defined(slug.current)] {
        "id": _id,
        "slug": slug.current,
        "title": name,
        short_description,
        article
    }`,
);

export const blogPostSearchQuery = defineQuery(
    `*[_type == "jokul_blog_post" && defined(slug.current)] {
        "id": _id,
        "slug": slug.current,
        "title": name,
        short_description,
        article
    }`,
);
