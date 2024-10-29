import React from "react";
import { Anchor, InlineCode, Paragraph } from "../../Typography";
import type { UUContent } from "./uu-content";

const ikoner: UUContent = {
    id: "ikoner",
    title: "Ikoner",
    tags: ["tekstinnhold", "skjema", "navigasjon"],
    wcagRules: ["1.4.1"],
    body: () => (
        <>
            <Paragraph>
                Ikoner uten en kontekstuell mening skal hvis mulig ha tom{" "}
                <InlineCode>alt</InlineCode>-attributt for å bli ignorert av
                skjermleser. Ikoner som er med å sette en stemning, som for
                eksempel emojis, kan leses opp. Ikoner kan være et visuelt
                virkemiddel i tillegg til farge for å gi et element en
                feilmelding.
            </Paragraph>
            <Paragraph>
                Vi bruker sjelden ikoner i Jøkul, men de ikonene og medfølgende
                retningslinjer vi har kan du se på
                <Anchor href="/profil/ikoner">
                    infosiden om ikoner i Jøkul
                </Anchor>
                .
            </Paragraph>
        </>
    ),
};

export default ikoner;
