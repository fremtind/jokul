import React from "react";
import { Anchor, HeadingSmall, Paragraph } from "../../Typography";
import type { UUContent } from "./uu-content";

const tastaturnavigasjon: UUContent = {
    id: "tastaturnavigasjon",
    title: "Tastaturnavigasjon",
    tags: ["navigasjon", "tekstinnhold", "modal", "skjema", "innlogging", "media"],
    wcagRules: ["2.1.1", "2.1.2", "2.4.3"],
    body: () => (
        <>
            <Paragraph>
                All funksjonalitet skal være mulig å bruke med et tastatur. Dette er noe som treffer superbrukere og
                brukere med nedsatt motorikk I armer og hender, både varig og midlertidig. Samtidig vil dette sikre at
                bruken av skjermleser blir enklere.
            </Paragraph>
            <Paragraph>
                Innholdet skal være presentert på en måte som gjør at sekvensiell navigering med tastatur føles logisk
                og intuitiv.
            </Paragraph>
            <HeadingSmall>Tastaturfeller</HeadingSmall>
            <Paragraph>
                Hvis bruker kommer til et sted på siden hvor tastaturnavigasjon hverken kan ta deg videre eller tilbake
                så har brukeren havnet i en tastaturfelle. Dette kan typisk oppstå som følge av modal/dialog som er feil
                implementert.
            </Paragraph>
            <Paragraph>
                Det er viktig at tjenesten i sin helhet blir testet med kun{" "}
                <Anchor href="/universell-utforming/tastatur">tastaturnavigasjon</Anchor>.
            </Paragraph>
        </>
    ),
};

export default tastaturnavigasjon;
