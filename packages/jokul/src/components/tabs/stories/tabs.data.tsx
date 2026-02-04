import React from "react";
import { Flex } from "../../flex/index.js";
import { Link } from "../../link/index.js";
import { Message } from "../../message/index.js";
import MessageStories from "../../message/stories/Message.stories.js";
import { Table } from "../../table/index.js";
import TableStories from "../../table/stories/table.stories.js";
import { TextInput } from "../../text-input/index.js";
import TextInputStories, {} from "../../text-input/stories/TextInput.stories.js";
import { TabPanel } from "../TabPanel.js";

export const manyTabsLength = 26;
export const fewTabsLength = 3;

export const tabContents = (tab: number) => {
    if (tab === 0) {
        return (
            <Flex as={TabPanel} direction="column">
                <h2>Tab {tab}: Bakgrunn</h2>
                <p>
                    Fremtind er et resultat av fusjonen mellom
                    forsikringsselskapene til SpareBank 1 og DNB. Fremtind er et
                    av Norges største forsikringsselskaper – den største som
                    selger forsikring i bank. SpareBank 1-bankene og DNB selger
                    forsikringene fra Fremtind under sine respektive merkevarer,
                    og selskapet kan tilby alle skade- og personforsikringer for
                    privatpersoner og bedrifter.
                </p>
                <cite>
                    Fremtind: Jøkul – et moderne og effektivt designsystem, av{" "}
                    <Link href="https://www.soprasteria.no/prosjekter/details/fremtind-jokul-et-moderne-og-effektivt-designsystem">
                        Sopra Steria
                    </Link>
                </cite>
            </Flex>
        );
    }
    if (tab % 2 === 1) {
        return (
            <Flex as={TabPanel} direction="column">
                <h2>Tab {tab}: Verdi: Moderne og effektivt designsystem</h2>
                <p>
                    Med Jøkul har Fremtind fått et moderne og effektivt
                    designsystem som forenkler jobben til både designere og
                    utviklere med å utvikle nye digitale løsninger. De har fått
                    et solid visuelt konsept som bygger videre på Fremtinds
                    verdier og visuelle profil.
                </p>
                <Table {...TableStories.args} />
                <p>
                    Dokumentasjonen av systemet holder høy kvalitet, og
                    utviklere og designere finner lett oversikt over mulighetene
                    og begrensningene i systemet, slik at de unngår feil og
                    dobbeltarbeid.
                </p>
                <p>
                    Komponentene i Jøkul er designet og utviklet i tråd med nye
                    krav til universell utforming, og holder meget høy kvalitet!
                    Jøkul designsystem vant GULL i Visueltkonkurransen 2021
                    under kategorien Digital design.
                </p>
                <cite>
                    Fremtind: Jøkul – et moderne og effektivt designsystem, av{" "}
                    <Link href="https://www.soprasteria.no/prosjekter/details/fremtind-jokul-et-moderne-og-effektivt-designsystem">
                        Sopra Steria
                    </Link>
                </cite>
            </Flex>
        );
    }

    return (
        <Flex as={TabPanel} direction="column">
            <h2>Tab {tab}: Hva bidro Sopra Steria med?</h2>
            <Message {...MessageStories.args} />
            <p>
                Sopra Steria og kunden har samarbeidet i et tverrfaglig autonomt
                team som har hatt en designdrevet tilnærming til det kreative
                arbeidet. En omfattende planlegging i starten sikret at alle
                forsto oppgaven, rammene og mandatet. Teamstruktur,
                arbeidsflate, kommunikasjonsplattform, felles møtepunkter og
                forankringspunkter var viktig for at prosjektet skulle bli en
                suksess. Designsystem-teamet ønsket å ha god dialog med og
                engasjement i teamene, de ville øke kompetansen på profil og
                konsept for Jøkul, og være en god støttespiller for målgruppene
                slik at Jøkul kunne bli et effektivt verktøy med høy kvalitet og
                gjenbrukbarhet. Det vil på sikt være tids- og kostnadsbesparende
                for Fremtind, samt at det vil sikre en helhetlig
                brukeropplevelse på på tvers av digitale kanaler.
            </p>
            <p>
                Designsystem-teamet jobbet med gode interne prosesser for
                kontinuerlig leveranse. De kartla behov og utforsket både den
                visuelle profilen og den tekniske plattformen før arbeidet med
                designkomponenter startet. Verdiene som er satt for Fremtinds
                visuelle profil ble sikret gjennom konseptet for det
                grunnleggende digitale uttrykket. Gjennom hele designprosessen
                hadde det selvstyrte teamet daglige stand-ups og arbeidsmøter
                som sikret tett samarbeid mellom design og utvikling. Ukentlig
                hadde teamet et designsystemforum hvor de diskuterte
                problemstillinger med utviklingsteamene i Fremtind Digital. Slik
                kunne de teste og tilpasse konsept, visuelt design, teknisk
                løsning og innhold underveis, basert på målgruppens behov.
            </p>
            <blockquote>
                Jøkul er et levende og organisk designsystem som skal
                videreutvikles kontinuerlig og forvaltes løpende av
                kjerneteamet.
            </blockquote>
            <TextInput {...TextInputStories.args} />
            <p>
                Animasjoner er en viktig del av Fremtinds digitale profil, og
                gir brukerne funksjonell forståelse og verdi. Sopra Steria har i
                stor grad bidratt med design, prototyping og konsepter for
                mikroanimasjoner i komponenter og systemanimasjoner med
                transisjoner (overganger) og film.
            </p>
            <p>
                Innholdsdesigner fra Sopra Steria lagde informasjonsstrukturen
                til designsystemet, og hentet standard komponentbeskrivelser fra
                kjente designsystemer og GUI-retningslinjer, som ble tilpasset
                Fremtinds behov. Arbeidet var et samarbeid i kjerneteamet og ble
                fulgt opp i ulike workshops. Portalen ble også godt dokumentert.
            </p>
            <p>
                Sopra Steria har bidratt med grafisk design, UX-design,
                animasjon og film i kjerneteamet, samt innholdsdesign i en
                kortere tidsperiode. Vi har også bidratt med tre designressurser
                i forskjellige utviklingsteam som har tatt i bruk Jøkul i
                samarbeid med kjerneteamet.
            </p>
            <cite>
                Fremtind: Jøkul – et moderne og effektivt designsystem, av{" "}
                <Link href="https://www.soprasteria.no/prosjekter/details/fremtind-jokul-et-moderne-og-effektivt-designsystem">
                    Sopra Steria
                </Link>
            </cite>
        </Flex>
    );
};
