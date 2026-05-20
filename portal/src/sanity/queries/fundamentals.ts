import { defineQuery } from "next-sanity";

export const fundamentalsQuery = defineQuery(
    `*[_type == "jokul_fundamentals"]{
        name,
        slug,
        short_description,
        image,
        imageDark,
        "date": _createdAt,
    } | order(_createdAt desc)`,
);

export const fundamentalsBySlugQuery = defineQuery(
    `*[_type == "jokul_fundamentals" && slug.current == $slug][0] {...,
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
