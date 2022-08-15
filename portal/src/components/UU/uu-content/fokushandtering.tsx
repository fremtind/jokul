import { CheckListItem, List, ListItem, UnorderedList } from "@fremtind/jkl-list-react";
import React from "react";
import { HeadingSmall, InlineCode, Paragraph } from "../../Typography";
import type { UUContent } from "./uu-content";

const fokushandtering: UUContent = {
    id: "fokushandtering",
    title: "Fokushåndtering",
    tags: ["skjema", "tabell", "tekstinnhold", "media", "modal", "innlogging", "navigasjon"],
    wcagRules: ["2.4.3", "2.4.7", "3.2.1"],
    links: [["Hvordan teste fokusrekkefølge", "/universell-utforming/testguide/#fokusrekkefølge"]],
    body: () => (
        <>
            <HeadingSmall>Synlig fokus</HeadingSmall>
            <Paragraph>Fokuserbare elementer skal ha synlig fokus.</Paragraph>
            <List>
                <CheckListItem>Det må være en visuell endring når et element får fokus.</CheckListItem>
            </List>
            <HeadingSmall>Fokusrekkefølge</HeadingSmall>
            <Paragraph>
                Fokuserbare elementer må navigeres i en rekkefølge som gir mening for innholdet. Merk at man må være
                ekstra oppmerksom i dynamiske menyer og dialoger.
            </Paragraph>
            <HeadingSmall>Handlinger ved fokus</HeadingSmall>
            <Paragraph>
                Det skal være forutsigbart å bruke nettsiden. Ved fokus skal det derfor ikke foregå automatiske
                handlinger som at:
            </Paragraph>
            <UnorderedList>
                <ListItem>Et nytt vindu åpnes.</ListItem>
                <ListItem>Fokus blir flyttet.</ListItem>
                <ListItem>Man navigeres til ny side.</ListItem>
                <ListItem>Sideinnholdet omorganiseres.</ListItem>
            </UnorderedList>
            <Paragraph>
                Unngå bruk av <InlineCode>tabindex</InlineCode> for å overskrive dokumentets naturlige fokusrekkefølge.
                Hvis semantikken er på plass så er det sannsynligvis ingen feil her.
            </Paragraph>
        </>
    ),
};

export default fokushandtering;
