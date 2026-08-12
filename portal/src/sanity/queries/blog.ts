import { defineQuery } from "next-sanity";
import { commonBlockBody } from "./fragments";

export const blogPostsQuery = defineQuery(
    `*[_type == "jokul_blog_post"]{
        name,
        slug,
        short_description,
        "date": _createdAt
    } | order(_createdAt desc)`,
);

export const blogPostBySlugQuery = defineQuery(
    `*[_type == "jokul_blog_post" && slug.current == $slug][0]{
        ...,
        article[]{
            ${commonBlockBody}
        }
    }`,
);
