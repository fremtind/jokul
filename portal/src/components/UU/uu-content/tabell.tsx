import { List, CheckListItem } from "@fremtind/jkl-list-react";
import React from "react";
import { HeadingSmall, Paragraph, InlineCode, Anchor } from "../../Typography";
import type { UUContent } from "./uu-content";

const tabell: UUContent = {
    id: "tabell",
    title: "Tabell",
    tags: ["tabell"],
    wcagRules: ["1.4.4", "1.4.8", "1.4.12"],
    links: [
        ["MDN Web docs: caption", "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/caption"],
        ["Tabeller i Jøkul", "/komponenter/table"],
        ["Hvordan teste med skjermleser", "universell-utforming/skjermleser"],
    ],
    body: () => (
        <>
            <Paragraph>
                Tabeller skal utelukkende brukes til å presentere data, ikke for å styre layout/utseende.
            </Paragraph>
            <HeadingSmall>Overskrift</HeadingSmall>
            <List>
                <CheckListItem>
                    Bruk <InlineCode>{`<caption>`}</InlineCode> hvis tabellen har en tittel
                </CheckListItem>
            </List>
            <Paragraph>
                I tillegg til overskrift for tabellen i sin helhet er det viktig at elementet{" "}
                <InlineCode>{`<th>`}</InlineCode> er tatt i bruk på celleoverskrifter (overskriften på rader/kolonner).
                Dette er nødvendig for at skjermlesere skal gi fullverdig informasjon i hver enkelt celle. Dersom det er
                overskrifter på både kolonner og rader må du spesifiere hvilken retning de peker med attributen{" "}
                <InlineCode>{`scope="col"`}</InlineCode> eller <InlineCode>{`scope="row"`}</InlineCode>.
            </Paragraph>
            <HeadingSmall>Komplekse tabeller</HeadingSmall>
            <Paragraph>
                En kompleks tabell er en tabell som har flere nivåer med celleoverskrifter. Dette er et spesielt
                tilfelle som kan dypdykkes i på{" "}
                <Anchor href="https://uu.difi.no/krav-og-regelverk/losningsforslag-web/tabeller#komplekse">
                    difi sin oversikt over komplekse tabeller
                </Anchor>
            </Paragraph>
        </>
    ),
};

export default tabell;
