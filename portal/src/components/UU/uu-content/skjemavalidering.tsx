import { List, CheckListItem, UnorderedList, ListItem } from "@fremtind/jkl-list-react";
import React from "react";
import { Paragraph } from "../../Typography";
import type { UUContent } from "./uu-content";

const skjemavalidering: UUContent = {
    id: "skjemavalidering",
    title: "Skjemavalidering",
    tags: ["skjema"],
    wcagRules: ["1.3.3", "1.4.1", "3.3.2", "3.3.3", "3.3.4"],
    body: () => (
        <>
            <List>
                <CheckListItem>Hvis en feil oppdages automatisk skal bruker få en feilmelding</CheckListItem>
            </List>
            <Paragraph>
                Feilmeldinger i skjema skal identifisere feltet med feil, beskrive feilen og være synlig uten at
                brukeren må gjøre ekstra handlinger. Feilmeldingen skal være mulig å oppfatte uavhengig av fargesyn:
            </Paragraph>
            <UnorderedList>
                <ListItem>Farge skal aldri være eneste virkemiddelet for å formidle at det er en feilmelding.</ListItem>
                <ListItem>I tillegg til farge kan man bruke tekst eller ikoner.</ListItem>
            </UnorderedList>
            <Paragraph>
                Feilmeldingen skal være tekstlig og så spesifikk som mulig: &lsquo;Dette feltet er obligatorisk&rsquo;
                er ikke lov. Skriv heller &lsquo;Du må fylle inn et navn&rsquo;.
            </Paragraph>
            <Paragraph>
                Så langt det er mulig skal feilmeldingen inneholde et forslag til hvordan brukeren kan løse det.
            </Paragraph>
        </>
    ),
};

export default skjemavalidering;
