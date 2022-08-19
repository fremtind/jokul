import { List, CheckListItem } from "@fremtind/jkl-list-react";
import React from "react";
import { HeadingSmall, Paragraph, InlineCode } from "../../Typography";
import type { UUContent } from "./uu-content";

const overskrifterStruktur: UUContent = {
    id: "overskrifter-og-struktur",
    title: "Overskrifter og struktur",
    tags: ["tekstinnhold", "skjema"],
    wcagRules: ["2.4.6"],
    links: [
        [
            "MDN Web docs: Heading elements",
            "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements",
        ],
    ],
    body: () => (
        <>
            <HeadingSmall>Overskrifter</HeadingSmall>
            <Paragraph>
                Overskrifter og korrekt bruk av overskriftsnivåer er en av de enkleste måtene å sikre oversiktlighet og
                korrekt flyt i tjenesten. Alle brukere benytter overskrifter og mellomtitler for å skumlese innhold
                uavhengig av om de bruker hjelpemidler.
            </Paragraph>
            <List>
                <CheckListItem>
                    Sidetittel skal være <InlineCode>{`<h1>`}.</InlineCode>
                </CheckListItem>
                <CheckListItem>Rekkefølgen på nivåene skal gå ett steg om gangen.</CheckListItem>
                <CheckListItem>
                    Brødtekst skal være <InlineCode>{`<p>`}</InlineCode>.
                </CheckListItem>
            </List>
        </>
    ),
};

export default overskrifterStruktur;
