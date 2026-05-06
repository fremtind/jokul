import { defineQuery } from "next-sanity";

export const releaseNotesQuery = defineQuery(
    `*[_type == "jokul_release_notes"]{
        version,
        short_description,
        releaseDate,
    } | order(releaseDate desc)`,
);

export const releaseNoteBySlugQuery = defineQuery(
    `*[_type == "jokul_release_notes" && version == $slug][0] {
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
        },
    }`,
);
