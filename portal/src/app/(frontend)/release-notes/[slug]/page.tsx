import { PageFooter } from "@/components/PageFooter";
import { PortableText } from "@/components/portable-text/PortableText";
import { sanityFetch } from "@/sanity/lib/live";
import { releaseNoteBySlugQuery } from "@/sanity/queries/releaseNotes";
import { ReleaseNoteResources } from "./ReleaseNoteResources";

import { ArticleHeader } from "@/components/article/header";
import { logger } from "logger";
import type { Metadata } from "next";

type Props = {
    params: Promise<{ slug: string }>;
};

const stripZeroWidth = (str: string) =>
    str.replace(/[\u200B-\u200D\uFEFF]/g, "").trim();

const resourceDefinitions = [
    {
        key: "migration",
        title: "Migrasjonsguide",
        urlKey: "migrationUrl" as const,
    },
    {
        key: "figma",
        title: "Endringer i Figma",
        urlKey: "figmaUrl" as const,
    },
];

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const slug = (await params).slug;

    const { data: note } = await sanityFetch({
        query: releaseNoteBySlugQuery,
        params: { slug },
        requestTag: "release-note",
        tags: [`jokul_release_notes:${slug}`],
    });

    return {
        title: note?.version
            ? `Jøkul ${stripZeroWidth(note.version)}`
            : "Release notes",
    };
}

export default async function ReleaseNotePage({ params }: Props) {
    const { slug } = await params;

    const initialTime = performance.now();
    const { data: note } = await sanityFetch({
        query: releaseNoteBySlugQuery,
        params: { slug },
        requestTag: "release-note",
        tags: [`jokul_release_notes:${slug}`],
    });

    if (!note) {
        logger.warn("Release note not found", { slug });
        return null;
    }

    logger.info("Fetched release note", {
        slug,
        time: `${Math.round(performance.now() - initialTime)}ms`,
    });

    const resources = resourceDefinitions
        .filter((definition) => note[definition.urlKey])
        .map((definition) => ({
            key: definition.key,
            title: definition.title,
            url: stripZeroWidth(note[definition.urlKey]!),
        }));

    return (
        <article className={"prose"}>
            <ArticleHeader
                title={
                    note.version ? `Jøkul ${stripZeroWidth(note.version)}` : ""
                }
                description={note.short_description ?? undefined}
                date={
                    note.releaseDate
                        ? { published: new Date(note.releaseDate) }
                        : undefined
                }
                backLink={{ href: "/release-notes", label: "Release notes" }}
            />
            {note.article ? <PortableText blocks={note.article} /> : null}
            {resources.length > 0 && <h2>Ressurser</h2>}
            <ReleaseNoteResources resources={resources} />
            <PageFooter />
        </article>
    );
}
