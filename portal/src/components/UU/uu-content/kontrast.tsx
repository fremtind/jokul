import { List, CheckListItem } from "@fremtind/jkl-list-react";
import React from "react";
import { Anchor, Paragraph } from "../../Typography";
import type { UUContent } from "./uu-content";

const kontrast: UUContent = {
    id: "kontrast",
    title: "Kontrast",
    tags: [
        "skjema",
        "bilder",
        "tabell",
        "tekstinnhold",
        "media",
        "modal",
        "innlogging",
        "animasjon",
        "navigasjon",
    ],
    wcagRules: ["1.4.1", "1.4.3"],
    links: [
        [
            "Eksternt verktøy til testing av kontrast",
            "https://colourcontrast.cc",
        ],
    ],
    body: () => (
        <>
            <Paragraph>
                For å sikre god lesbarhet skal all tekst ha tilstrekkelig
                kontrast mot bakgrunnen.
            </Paragraph>
            <List>
                <CheckListItem>4.5:1 for normal tekst,</CheckListItem>
                <CheckListItem>
                    3:1 for stor tekst (24 piksler høy i vanlig skrift eller
                    minst 19 piksler høy i fet skrift),
                </CheckListItem>
                <CheckListItem>3:1 for grafiske elementer,</CheckListItem>
            </List>
            <Paragraph>
                Våre <Anchor href="/profil/farger">farger i Jøkul</Anchor> er
                bestemt med hensyn til kontrastnivået.
            </Paragraph>
        </>
    ),
};

export default kontrast;
