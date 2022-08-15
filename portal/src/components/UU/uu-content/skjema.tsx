import { List, CheckListItem, UnorderedList, ListItem } from "@fremtind/jkl-list-react";
import React from "react";
import { Paragraph, Anchor, HeadingSmall } from "../../Typography";
import type { UUContent } from "./uu-content";

const skjema: UUContent = {
    id: "skjema",
    title: "Skjema",
    tags: ["skjema"],
    wcagRules: [
        "1.3.1",
        "2.1.1",
        "2.1.2",
        "2.4.3",
        "2.4.4",
        "2.4.6",
        "2.4.7",
        "3.2.1",
        "3.2.2",
        "3.3.1",
        "3.3.2",
        "3.3.3",
        "3.3.4",
    ],
    links: [["Hvordan teste tastaturnavigasjon", "/universell-utforming/tastatur"]],
    body: () => (
        <>
            <HeadingSmall>Inndata</HeadingSmall>
            <Paragraph>
                Endring av verdien i et skjemalement skal ikke resultere i at det automatisk blir betydelige endringer
                på siden. Bruker må bli varslet om kontekstendringer på forhånd. Et eksempel på korrekt bruk er at
                bruker aktivt må trykke &lsquo;Send inn&rsquo;, &lsquo;Gå videre&rsquo; eller lignende før man blir
                servert nytt innhold.
            </Paragraph>
            <List>
                <CheckListItem>Bruk attributen autocomplete hvis mulig.</CheckListItem>
                <CheckListItem>Obligatoriske felter må merkes.</CheckListItem>
                <CheckListItem>3:1 kontrast på rammen på inndataelementer.</CheckListItem>
            </List>
            <HeadingSmall>Validering</HeadingSmall>
            <Paragraph>For feil som oppdages automatisk:</Paragraph>
            <List>
                <CheckListItem>Vis en tekstbeskrivelse av feilen og marker hvor den oppsto.</CheckListItem>
                <CheckListItem>Vis forslag til hvordan feil kan rettes opp.</CheckListItem>
                <CheckListItem>Farge er ikke eneste virkemiddel for å vise feil/suksess/advarsel.</CheckListItem>
            </List>
            <HeadingSmall>Forhindring av feil</HeadingSmall>
            <Paragraph>
                For sider med juridiske forpliktelser må det være mulig å kunne angre, kontrollere eller bekrefte
                dataene som sendes inn. Et av følgende punkter gjelder:
            </Paragraph>
            <UnorderedList>
                <ListItem>
                    Mulighet for å angre eller reversere innsendingen. For eksempel ved at brukeren får beskjed om
                    hvordan de angrer innsendingen.
                </ListItem>
                <ListItem>
                    Inndata fra bruker skal valideres og brukeren gis mulighet til å rette opp eventuelle feil.
                </ListItem>
                <ListItem>
                    Det finnes en mekanisme for gjennomgang, bekreftelse og oppretting av informasjon før den sendes.
                </ListItem>
            </UnorderedList>
            <HeadingSmall>Ledetekster eller intruksjoner</HeadingSmall>
            <Paragraph>
                Sørg for at ledetekster og overskrifter beskriver emne eller formål. Mer info om ledetekster ved
                inndatafelter finnes i{" "}
                <Anchor href="/universell-utforming/guide/#inndatafelter">artikkelen om inndatafelter</Anchor>.
            </Paragraph>
            <List>
                <CheckListItem>Det skal være beskrivende ledetekster eller instruksjoner.</CheckListItem>
            </List>
            <HeadingSmall>Tastatur</HeadingSmall>
            <Paragraph>
                Alle skjemaelementer må være mulig å bruke med kun tastaturnavigasjon. Det er viktig at ingen elementer
                fungerer som en tastaturfelle – se{" "}
                <Anchor href="/universell-utforming/guide/#tastaturfeller">artikkelen om tastaturfeller</Anchor>.
            </Paragraph>
            <HeadingSmall>Fokus</HeadingSmall>
            <List>
                <CheckListItem>Alle skjemaelementer må ha synlig fokus.</CheckListItem>
                <CheckListItem>Fokushåndtering må foregå i en logisk rekkefølge.</CheckListItem>
            </List>
            <Paragraph>
                En endring i fokus må aldri automatisk medføre en betydelig endring. Bruker må gjøres oppmerksom på
                slike handlinger på forhånd.
            </Paragraph>
            <HeadingSmall>Lenke</HeadingSmall>
            <Paragraph>
                Formålet med en lenke skal kunne fastslås fra selve lenketeksten eller lenketeksten kombinert med
                programmeringsmessig bestemt lenkekonstekt.
            </Paragraph>
            <List>
                <CheckListItem>Inkluder dokumenttypen i lenketeksten. &lsquo;Eksempel (PDF)&rsquo;</CheckListItem>
            </List>
            <Paragraph>
                Se <Anchor href="/universell-utforming/guide/#lenker">artikkelen om lenker</Anchor>.
            </Paragraph>
        </>
    ),
};

export default skjema;
