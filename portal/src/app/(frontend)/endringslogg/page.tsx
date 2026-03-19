import { OverviewHeader } from "@/components/overview/header";
import type { Metadata } from "next";
import { MarkdownBlocks } from "../_content-pages/components/MarkdownBlocks";
import { MarkdownTableOfContents } from "../_content-pages/components/MarkdownTableOfContents";
import {
    getJokulPackageDocumentPath,
    getMarkdownBlocks,
} from "../_content-pages/lib/markdown.data";
import { getMajorReleases } from "../_content-pages/lib/markdown.parser";

export const dynamic = "force-static";

export const metadata: Metadata = {
    title: "Endringslogg",
};

export default async function ChangelogPage() {
    const changelogBlocks = await getMarkdownBlocks(
        getJokulPackageDocumentPath("CHANGELOG.md"),
    );
    const majorReleases = getMajorReleases(changelogBlocks);

    return (
        <>
            <OverviewHeader title="Endringslogg" />
            <MarkdownTableOfContents
                items={majorReleases}
                label="Store releaser"
            />
            <article className="prose">
                <MarkdownBlocks blocks={changelogBlocks} />
            </article>
        </>
    );
}
