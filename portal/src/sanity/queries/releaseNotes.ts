import { defineQuery } from "next-sanity";
import { commonBlockBody } from "./fragments";

export const releaseNotesQuery = defineQuery(
    `*[_type == "jokul_release_notes"]{
        _id,
        version,
        "slug": slug.current,
        short_description,
        releaseDate
    } | order(releaseDate desc)`,
);

export const releaseNoteBySlugQuery = defineQuery(
    `*[_type == "jokul_release_notes" && slug.current == $slug][0]{
        version,
        releaseDate,
        short_description,
        migrationUrl,
        figmaUrl,
        article[]{
            ${commonBlockBody}
        }
    }`,
);
