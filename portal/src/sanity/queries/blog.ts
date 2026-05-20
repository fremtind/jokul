import { defineQuery } from "next-sanity";

export const blogPostsQuery = defineQuery(
    `*[_type == "jokul_blog_post"]{
        name,
        slug,
        short_description,
        "date": _createdAt,
        _type == "jokul_examples" => {
                ...,
                title,
                examples[]->{
                  title,
                  id,
                  description,
                  height,
                  inert
                },
          },
    } | order(_createdAt desc)`,
);

export const blogPostBySlugQuery = defineQuery(
    `*[_type == "jokul_blog_post" && slug.current == $slug][0] {...,
    article[]{
            ...,
            _type == "jokul_code" => {
                ...,
                title,
                code,
                language,
          },
            _type == "jokul_examples" => {
    ...,
    title,
    examples[]->{
                  title,
                  id,
                  description,
                  height,
                  inert,
                  code
                },
  },
            markDefs[] {
                ...,
                _type == "jokul_internal_link" => {
                    article->{
                        _type,
                        "name": coalesce(name, tema, version),
                        short_description,
                        "slug": slug.current,
                        image,
                        imageDark
                    }
                },
            }
  },
    }`,
);

export const komIGangQuery = defineQuery(
    `*[_type == "jokul_blog_post" && slug.current == "kom-i-gang"][0] {...,
    article[]{
            ...,
            _type == "jokul_examples" => {
    ...,
    title,
    stories[]->{
      storyName,
      storyId,
      storyDescription,
    },
  },
            markDefs[] {
                ...,
                _type == "jokul_internal_link" => {
                    article->{
                        _type,
                        "name": coalesce(name, tema, version),
                        short_description,
                        "slug": slug.current,
                        image,
                        imageDark
                    }
                },
            }
  },
    }`,
);
