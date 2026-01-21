import { defineQuery } from "next-sanity";

export const blogPostsQuery = defineQuery(
    `*[_type == "jokul_blog_post"]{
        name,
        slug,
        short_description,
        "date": _createdAt,
        _type == "jokul_storybook" => {
    ...,
    title,
    stories[]->{
      storyName,
      storyId,
      storyDescription,
    },
  },
    } | order(_createdAt desc)`,
);

export const blogPostBySlugQuery = defineQuery(
    `*[_type == "jokul_blog_post" && slug.current == $slug][0] {...,
    article[]{
            ...,
            _type == "jokul_storybook" => {
    ...,
    title,
    stories[]->{
      storyName,
      storyId,
      storyDescription,
    },
  },
  },
    }`,
);

export const komIGangQuery = defineQuery(
    `*[_type == "jokul_blog_post" && slug.current == "kom-i-gang"][0] {...,
    article[]{
            ...,
            _type == "jokul_storybook" => {
    ...,
    title,
    stories[]->{
      storyName,
      storyId,
      storyDescription,
    },
  },
  },
    }`,
);
