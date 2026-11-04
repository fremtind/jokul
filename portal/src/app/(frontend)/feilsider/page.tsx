import {
    ERROR_PAGE_CONTENT,
    ERROR_STATUS_CODES,
} from "@/components/error-page";
import { OverviewHeader } from "@/components/overview/header";
import { Flex } from "@fremtind/jokul/flex";
import { Link } from "@fremtind/jokul/link";
import { List, ListItem } from "@fremtind/jokul/list";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
    title: "Feilsider",
};

export default function ErrorPagePreviewIndex() {
    if (process.env.NODE_ENV !== "development") {
        notFound();
    }

    return (
        <Flex direction="column" gap="l">
            <OverviewHeader title="Feilsider" />
            <p>
                Utviklerverktøy for å se gjennom feilsidene uten å måtte
                fremprovosere feilene. Siden er bare tilgjengelig lokalt.
            </p>
            <List>
                {ERROR_STATUS_CODES.map((status) => (
                    <ListItem key={status}>
                        <Link href={`/feilsider/${status}`}>
                            {status} – {ERROR_PAGE_CONTENT[status].title}
                        </Link>
                    </ListItem>
                ))}
            </List>
        </Flex>
    );
}
