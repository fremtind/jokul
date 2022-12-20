import { List, CheckListItem } from "@fremtind/jkl-list-react";
import React from "react";
import { Anchor, HeadingSmall, InlineCode, Paragraph } from "../../Typography";
import type { UUContent } from "./uu-content";

const liste: UUContent = {
    id: "lister",
    title: "Lister",
    tags: ["liste"],
    wcagRules: ["2.4.6"],
    links: [["Jøkuls listekomponenter", "/komponenter/list"]],
    body: () => (
        <>
            <Paragraph>
                Lister benyttes til å ramse opp informasjon. En liste skal være korrekt kodet, enten det er unummerert,
                nummerert, definisjonliste eller lister over flere nivå så bruk riktig HTML-elementer.
            </Paragraph>
            <List>
                <CheckListItem>Korrekt koding gir fast innrykk.</CheckListItem>
                <CheckListItem>
                    Ingen mellomrom mellom <InlineCode>{`<li>`}</InlineCode> og tekst.
                </CheckListItem>
            </List>
            <HeadingSmall>Egentilpassede symboler i liste</HeadingSmall>
            <Paragraph>
                Et konkret eksempel er en liste som definerer hva en forsikring dekker eller ikke. Der er gjerne
                kulepunktet byttet ut med et eget symbol.
            </Paragraph>
            <Paragraph>
                Det er viktig at kulepunktet ikke er eneste måte å skille innholdet på. Dette tilsvarer egentlig to
                lister hvor den ene har overskriften &lsquo;Forsikringen dekker&rsquo; og den andre har overskriften
                &lsquo;forsikringen dekker ikke&rsquo;. Det er sterkt anbefalt å bruke slike overskrifter for å gjøre
                det veldig tydelig at det er en forskjell her. Hvis listen mangler slike overskrifter må det passes på
                at:
            </Paragraph>
            <List>
                <CheckListItem>
                    Farge ikke er eneste virkemiddel for å formidle funksjonalitet eller viktighet
                </CheckListItem>
                <CheckListItem>Kulepunktene er testet med skjermleser</CheckListItem>
            </List>
            <Paragraph>
                <Anchor href="/komponenter/list/#lister-med-ikon">Jøkuls lister med ikoner</Anchor> har allerede tatt
                hensyn til dette slik at de kan brukes uten slike overskrifter.
            </Paragraph>
        </>
    ),
};

export default liste;
