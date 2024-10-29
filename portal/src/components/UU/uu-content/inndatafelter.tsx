import {
    List,
    CheckListItem,
    UnorderedList,
    ListItem,
} from "@fremtind/jkl-list-react";
import React from "react";
import { HeadingSmall, InlineCode, Paragraph } from "../../Typography";
import type { UUContent } from "./uu-content";

const inndatafelter: UUContent = {
    id: "inndatafelter",
    title: "Inndatafelter",
    tags: ["skjema", "navigasjon", "innlogging"],
    links: [
        [
            "MDN Web docs: aria-labelledby",
            "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-labelledby_attribute",
        ],
    ],
    wcagRules: ["1.1.1", "3.2.2", "4.1.2"],
    body: () => (
        <>
            <Paragraph>
                Inndatafelter skal være knyttet til en ledetekst både visuelt og
                i kode. Feks ved bruk av{" "}
                <InlineCode>aria-labelledby</InlineCode>. Ledeteksten eller
                instruksjonen skal få brukeren til å forstå hvordan feltet skal
                fylles ut.
            </Paragraph>
            <List>
                <CheckListItem>Inndatafelter skal ha ledetekst</CheckListItem>
            </List>
            <HeadingSmall>Endringer</HeadingSmall>
            <Paragraph>
                Endringer i et inputfelt skal ikke gi kontekstuelle endringer
                uten forvarsel. Eksempler på store kontekstuelle endringer kan
                være:
            </Paragraph>
            <UnorderedList>
                <ListItem>Endring av layout.</ListItem>
                <ListItem>Når siden åpner et nytt vindu i nettleser.</ListItem>
                <ListItem>Fokus flyttes.</ListItem>
            </UnorderedList>
        </>
    ),
};

export default inndatafelter;
