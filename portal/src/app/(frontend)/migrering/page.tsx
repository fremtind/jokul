import { OverviewHeader } from "@/components/overview/header";
import type { Metadata } from "next";
import { MarkdownBlocks } from "../_content-pages/components/MarkdownBlocks";
import { MarkdownTableOfContents } from "../_content-pages/components/MarkdownTableOfContents";
import {
    getJokulPackageDocumentPath,
    getMarkdownBlocks,
} from "../_content-pages/lib/markdown.data";
import { getLevelTwoHeadings } from "../_content-pages/lib/markdown.parser";

export const dynamic = "force-static";

export const metadata: Metadata = {
    title: "Migrering",
};

export default async function MigrationGuidePage() {
    const migrationBlocks = await getMarkdownBlocks(
        getJokulPackageDocumentPath("MIGRATION.md"),
    );
    const sections = getLevelTwoHeadings(migrationBlocks);

    return (
        <>
            <OverviewHeader title="Migrering" />
            <MarkdownTableOfContents items={sections} label="Seksjoner" />
            <article className="prose">
                <MarkdownBlocks blocks={migrationBlocks} />
            </article>
        </>
    );
}
