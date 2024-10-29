import { List, CheckListItem } from "@fremtind/jkl-list-react";
import React from "react";
import { Anchor, HeadingSmall, Paragraph } from "../../Typography";
import type { UUContent } from "./uu-content";

const altAttributtBilder: UUContent = {
    id: "alt-attributt-bilder",
    title: "Alt-attributt på ikke-tekstlig innhold",
    tags: ["liste", "bilder"],
    wcagRules: ["1.1.1", "4.1.2"],
    body: () => (
        <>
            <HeadingSmall>Ikke-tekstlig innhold</HeadingSmall>
            <Paragraph>
                Gi brukeren et tekstalternativ for innhold som ikke er tekst.
            </Paragraph>
            <List>
                <CheckListItem>
                    Alle bilder skal ha alternativ bildetekst (alt-attributt)
                </CheckListItem>
                <CheckListItem>
                    Ved dekorative bilder skal alt-attributt være blank
                </CheckListItem>
            </List>
            <HeadingSmall>Bilder med lenke</HeadingSmall>
            <Paragraph>
                Alt-teksten blir lenketeksten for brukere med skjermleser. Da
                skal lenkens mål beskrives, ikke motivet på bildet. Evt kan man
                inkludere begge deler, men lenkens mål skal beskrives først.
            </Paragraph>
            <List>
                <CheckListItem>
                    Beskriv lenkens mål med alt-teksten
                </CheckListItem>
            </List>
            <HeadingSmall>Bilde av tekst</HeadingSmall>
            <Paragraph>
                {" "}
                Noen steder er det nødvendig med bilde av tekst. For eksempel
                hvis man viser et kakediagram med statistikk.
            </Paragraph>
            <List>
                <CheckListItem>
                    Beskriv formål og hovedinformasjon med alt-teksten
                </CheckListItem>
                <CheckListItem>
                    Det skal eksistere en tekstversjon som formidler samme
                    informasjon
                </CheckListItem>
            </List>
            <HeadingSmall>Unntak</HeadingSmall>
            <Paragraph>
                Det finnes{" "}
                <Anchor href="https://uu.difi.no/krav-og-regelverk/wcag-20-standarden/111-ikke-tekstlig-innhold-niva">
                    unntak beskrevet hos difi
                </Anchor>
                . Blant disse er det verdt å nevne at skjemaelementer som
                knapper og inndata-felter gir unntak for regelen, da det er
                andre kriterier som treffer disse. På slike elementer er det
                krav til beskrivende tekst og du finner en veiledning til bruk
                på hver enkelt{" "}
                <Anchor href="https://jokul.fremtind.no/komponenter/textinput">
                    komponent i Jøkul
                </Anchor>
                .
            </Paragraph>
        </>
    ),
};

export default altAttributtBilder;
