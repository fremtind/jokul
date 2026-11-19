import { MarkdownPage } from "@/components/markdown-page/MarkdownPage";
import type { Metadata } from "next";
import Migrering from "../../../../../packages/jokul/MIGRATION.md";

export const metadata: Metadata = {
    title: "Migrasjonsguide",
    description:
        "Veiledning for å oppgradere mellom store versjoner av Jøkul, med codemods og beskrivelse av endringer.",
};

export default function MigreringPage() {
    return (
        <MarkdownPage>
            <Migrering />
        </MarkdownPage>
    );
}
