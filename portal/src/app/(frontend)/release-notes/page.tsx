import { OverviewCard } from "@/components/overview/card";
import { OverviewGrid } from "@/components/overview/grid";
import { OverviewHeader } from "@/components/overview/header";
import { sanityFetch } from "@/sanity/lib/live";
import { releaseNotesQuery } from "@/sanity/queries/releaseNotes";
import { logger } from "logger";

export default async function ReleaseNotesPage() {
    logger.info("Rendering release notes overview page");

    const { data: notes } = await sanityFetch({
        query: releaseNotesQuery,
        requestTag: "release-notes",
        tags: ["jokul_release_notes"],
    });

    if (!notes) {
        logger.warn("No release notes found");
        return null;
    }

    return (
        <>
            <OverviewHeader title="Release notes" />
            <OverviewGrid>
                {notes.map((note) => {
                    const version = note.version?.replace(/[\u200B-\u200D\uFEFF]/g, "").trim() ?? "";
                    return (
                    <OverviewCard
                        key={version}
                        title={version}
                        description={note.short_description || ""}
                        link={`/release-notes/${version}`}
                    />
                    );
                })}
            </OverviewGrid>
        </>
    );
}
