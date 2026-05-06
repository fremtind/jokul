import { defineQuery } from "next-sanity";

export const releaseNotesQuery = defineQuery(
    `*[_type == "jokul_release_notes"]{
        _id,
        version,
        "slug": slug.current,
        short_description,
        releaseDate,
    } | order(releaseDate desc)`,
);

export const releaseNoteBySlugQuery = defineQuery(
    `*[_type == "jokul_release_notes" && slug.current == $slug][0] {
        version,
        releaseDate,
        short_description,
        migrationUrl,
        figmaUrl,
        article[]{
            ...,
            _type == "jokul_code" => {
                ...,
                title,
                code,
                "language": code.language,
            },
            _type == "jokul_examples" => {
                ...,
                title,
                examples[]->{
                    name,
                    id,
                    description,
                    height,
                    inert,
                    code
                },
            },
        },
    }`,
);
