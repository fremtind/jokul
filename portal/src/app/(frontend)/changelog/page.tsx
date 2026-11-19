import { MarkdownPage } from "@/components/markdown-page/MarkdownPage";
import type { Metadata } from "next";
import Changelog from "../../../../../packages/jokul/CHANGELOG.md";

export const metadata: Metadata = {
    title: "Changelog",
    description: "Alle endringer i Jøkul, versjon for versjon.",
};

export default function ChangelogPage() {
    return (
        <MarkdownPage>
            <Changelog />
        </MarkdownPage>
    );
}
