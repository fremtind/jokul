import React from "react";
import { Anchor, Paragraph } from "../../Typography";
import type { UUContent } from "./uu-content";

const konsekventIdentifikasjon: UUContent = {
    id: "konsekvent-identifikasjon",
    title: "Konsekvent identifikasjon",
    tags: ["navigasjon", "skjema", "innlogging", "modal"],
    wcagRules: ["3.2.4"],
    body: () => (
        <>
            <Paragraph>
                Elementer som har samme funksjonalitet på tvers av flere sider skal være utformet likt.
            </Paragraph>
            <Paragraph>
                For å gjøre det enkelt, bruk felles <Anchor href="/komponenter/accordion">komponenter fra Jøkul</Anchor>
            </Paragraph>
        </>
    ),
};

export default konsekventIdentifikasjon;
