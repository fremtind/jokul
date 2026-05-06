/**
 * Migrasjonsskript: Flytt release notes fra jokul_blog_post til jokul_release_notes
 *
 * Bruk:
 *   SANITY_API_TOKEN=<token> node portal/scripts/migrate-release-notes.mjs [--dry-run]
 *
 * Flagg:
 *   --dry-run   Vis hva som ville blitt gjort uten å gjøre endringer
 *   --delete    Slett de gamle blogginnleggene etter migrering (standard: behold dem)
 */

import { createClient } from "@sanity/client";

const DRY_RUN = process.argv.includes("--dry-run");
const DELETE_OLD = process.argv.includes("--delete");

const token = process.env.SANITY_API_TOKEN;
if (!token) {
    console.error("Feil: SANITY_API_TOKEN er ikke satt");
    process.exit(1);
}

const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "your-project-id",
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    apiVersion: "2025-04-03",
    token,
    useCdn: false,
});

function extractVersion(name, slug) {
    // Prøv å finne versjonsnummer i navn (f.eks. "Jøkul 5.0.0" → "5.0.0")
    const versionMatch = name?.match(/(\d+\.\d+(?:\.\d+)?(?:-\w+)?)/);
    if (versionMatch) return versionMatch[1];

    // Fall tilbake til slug med omvendt slugify (bindestrek tilbake til punkt)
    // Prøv å finne versjonsmønster i slug
    const slugVersionMatch = slug?.match(/(\d+)-(\d+)(?:-(\d+))?/);
    if (slugVersionMatch) {
        return slugVersionMatch[3]
            ? `${slugVersionMatch[1]}.${slugVersionMatch[2]}.${slugVersionMatch[3]}`
            : `${slugVersionMatch[1]}.${slugVersionMatch[2]}`;
    }

    return null;
}

function versionToSlug(version) {
    return version.toLowerCase().replace(/\./g, "-").replace(/\s+/g, "-");
}

async function main() {
    console.log(`Modus: ${DRY_RUN ? "dry-run (ingen endringer)" : "live"}`);
    console.log(`Slett gamle: ${DELETE_OLD ? "ja" : "nei"}\n`);

    const blogReleaseNotes = await client.fetch(
        `*[_type == "jokul_blog_post" && category == "Release notes"]{
            _id,
            _createdAt,
            name,
            "slugCurrent": slug.current,
            short_description,
            article
        }`,
    );

    console.log(`Fant ${blogReleaseNotes.length} release notes-blogginnlegg\n`);

    if (blogReleaseNotes.length === 0) {
        console.log("Ingen å migrere.");
        return;
    }

    for (const post of blogReleaseNotes) {
        const version = extractVersion(post.name, post.slugCurrent);
        const slug = version ? versionToSlug(version) : post.slugCurrent;
        const releaseDate = post._createdAt.split("T")[0];

        console.log(`→ "${post.name}"`);
        console.log(`  Versjon: ${version || "(ukjent)"}`);
        console.log(`  Slug:    ${slug}`);
        console.log(`  Dato:    ${releaseDate}`);

        if (!DRY_RUN) {
            const newDoc = {
                _type: "jokul_release_notes",
                version: version || post.name,
                releaseDate,
                short_description: post.short_description,
                article: post.article,
            };

            try {
                await client.create(newDoc);
                console.log(`  ✓ Opprettet jokul_release_notes`);

                if (DELETE_OLD) {
                    await client.delete(post._id);
                    console.log(`  ✓ Slettet gammelt blogginnlegg (${post._id})`);
                }
            } catch (err) {
                console.error(`  ✗ Feil for "${post.name}":`, err.message);
            }
        } else {
            console.log(`  (dry-run: ingen endringer)`);
        }

        console.log();
    }

    console.log("Ferdig.");
}

main().catch((err) => {
    console.error("Skriptet feilet:", err);
    process.exit(1);
});
