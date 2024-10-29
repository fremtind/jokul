import { UnorderedList, ListItem } from "@fremtind/jkl-list-react";
import React from "react";
import {
    HeadingSmall,
    Paragraph,
    Anchor,
    KeyboardShortcut,
} from "../../Typography";
import type { UUContent } from "./uu-content";

const modal: UUContent = {
    id: "modal",
    title: "Modal",
    tags: ["modal"],
    wcagRules: ["2.1.1", "2.1.2", "2.2.1", "2.3.1", "2.4.3", "2.4.7", "3.2.1"],
    body: () => (
        <>
            <Paragraph>
                Modal er krevende å implementere da det påvirkes av mange krav.
                Hensikten til en modal er å tvinge bruker til å utføre en
                handling før brukeren kan gå videre.
            </Paragraph>
            <HeadingSmall>Fokus</HeadingSmall>
            <Paragraph>
                Det er viktig at elementer utenfor modalen ikke skal få fokus,
                samt at det er synlig fokus på elementene i modalen. Like viktig
                er det at fokusrekkefølgen ivaretas. Se{" "}
                <Anchor href="#fokushandtering">Fokushåndtering</Anchor>.
            </Paragraph>
            <HeadingSmall>Tastaturfelle</HeadingSmall>
            <Paragraph>
                Dersom man tar i bruk en modal i tjenesten sin er det særdeles
                viktig å passe på at bruker ikke havner i en tastaturfelle.
                Handlinger som skal utføres av bruker i modalboksen må derfor
                være mulig å navigere til med tastatur i tillegg til mus.
            </Paragraph>
            <HeadingSmall>Tidsbegrensning</HeadingSmall>
            <Paragraph>
                Dersom modalen brukes i kombinasjon med en tidsbegrensning
                gjelder kravene under
                <Anchor href="#tidsbegrensning">Tidsbegrensing</Anchor>.
            </Paragraph>
            <HeadingSmall>Blinking på siden</HeadingSmall>
            <Paragraph>
                Innhold skal ikke blinke mer enn tre ganger i løpet av ett
                sekund. Dette er et spesialtilfelle og hvis blinking oppstår ved
                modal er det som regel som følge av en feil som må rettes.
            </Paragraph>
            <UnorderedList>
                <ListItem>
                    Bruk{" "}
                    <Anchor href="https://github.com/KittyGiraudel/a11y-dialog">
                        a11y-dialog
                    </Anchor>{" "}
                    eller{" "}
                    <Anchor href="https://a11y-dialog.netlify.app/further-reading/implementations">
                        en av wrapperene
                    </Anchor>{" "}
                    (støtte for React, Vue og Svelte).
                </ListItem>
                <ListItem>
                    Hvis mulig, legg til{" "}
                    <KeyboardShortcut>ESC</KeyboardShortcut> som tilbakeknapp
                    for å navigere ut av modal.
                </ListItem>
            </UnorderedList>
        </>
    ),
};

export default modal;
