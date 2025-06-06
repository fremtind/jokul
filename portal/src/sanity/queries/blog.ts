import { defineQuery } from "next-sanity";

export const blogPostsQuery = defineQuery(
    `*[_type == "jokul_blog_post"]{
    name,
    slug,
    article[]{
    ...,
        linkCard[]{
            ...,
            }
        }
    }`,
);

export const blogPostBySlugQuery = defineQuery(
    `*[_type == "jokul_blog_post" && slug.current == $slug][0]`,
);
