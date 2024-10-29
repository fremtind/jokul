import { CheckListItem, List } from "@fremtind/jkl-list-react";
import React from "react";
import { Anchor, Paragraph } from "../../Typography";
import type { UUContent } from "./uu-content";

const farger: UUContent = {
    id: "farger",
    title: "Farger",
    tags: [
        "tekstinnhold",
        "skjema",
        "tabell",
        "liste",
        "bilder",
        "modal",
        "innlogging",
        "navigasjon",
        "animasjon",
    ],
    wcagRules: ["1.4.8", "1.4.12"],
    body: () => (
        <>
            <Paragraph>
                Farger kan være en god meningsbærer og kan brukes for å gi bedre
                oversikt for bruker. Samtidig er det viktig at farge aldri
                brukes som eneste informajsonsbærer.
            </Paragraph>
            <List>
                <CheckListItem>
                    Farge er ikke eneste virkemiddel for å formidle
                    funksjonalitet eller viktighet
                </CheckListItem>
            </List>
            <Paragraph>
                For ytterligere info om farger, se{" "}
                <Anchor href="#kontrast">artikkelen om kontrast</Anchor>.
            </Paragraph>
        </>
    ),
};

export default farger;
