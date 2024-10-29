import { List, CheckListItem } from "@fremtind/jkl-list-react";
import React from "react";
import { Paragraph, Anchor } from "../../Typography";
import type { UUContent } from "./uu-content";

const sprak: UUContent = {
    id: "sprak",
    title: "Språk",
    tags: ["tekstinnhold", "skjema"],
    body: () => (
        <>
            <Paragraph>
                I Norge er loven slik at alle tjenester skal treffe WCAG
                AA-kravene. For vanskelige ord, forkortelser, fagspråk og
                idiomer gjelder WCAG AAA. Dette er derfor ikke et lovpålagt
                krav, men i Fremtind har vi bestemt oss for at vi skal være
                mestere i klarspråk.
            </Paragraph>
            <Paragraph>
                Så langt det lar seg gjøre skal man derfor unngå overkomplisert
                språk, men dersom det ikke er mulig å komme rundt dette må det
                eksistere mekanismer som:
            </Paragraph>
            <List>
                <CheckListItem>
                    Gjør det mulig å se definisjonen av uvanlige/vanskelige ord
                    eller uttrykk
                </CheckListItem>
                <CheckListItem>
                    Gjør det mulig å se den fullstendige formen til en
                    forkortelse
                </CheckListItem>
            </List>
            <Paragraph>
                Retningslinjer for språk og skriveråd finner du på{" "}
                <Anchor href="/profil/stilogtone">
                    Jøkuls profilside for &lsquo;Stemmen vår&rsquo;
                </Anchor>
                .
            </Paragraph>
        </>
    ),
};

export default sprak;
