import { List, CheckListItem } from "@fremtind/jkl-list-react";
import React from "react";
import { InlineCode, Paragraph } from "../../Typography";
import type { UUContent } from "./uu-content";

const lenker: UUContent = {
    id: "lenker",
    title: "Lenker",
    tags: ["tekstinnhold", "modal", "skjema"],
    wcagRules: ["1.3.1", "1.4.1", "2.4.4", "2.4.7"],
    links: [["Lenkekomponenter i Jøkul", "/komponenter/link"]],
    body: () => (
        <>
            <Paragraph>
                Lenker kan brukes inline i tekst eller selvstendig. Lenker skal alltid ha en{" "}
                <InlineCode>href</InlineCode> attributt og utheves med visuelle virkemidler. Om farge brukes som et
                visuelt virkemiddel må man bruke et annet virkemiddel i tillegg, for eksempel understreking, et ikon
                eller lignende.
            </Paragraph>
            <List>
                <CheckListItem>En tydelig tilstandsendring skal vise at lenken har fått fokus.</CheckListItem>
                <CheckListItem>Formålet med lenken skal kunne forstås ved lenketeksten.</CheckListItem>
            </List>
            <Paragraph>I Jøkul skiller vi også mellom interne og eksterne lenker samt navigasjonslenker.</Paragraph>
        </>
    ),
};

export default lenker;
