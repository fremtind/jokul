import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Text } from "./Text.js";

import "./styles/_index.scss";

const fontStyles = [
    "heading-1",
    "heading-2",
    "heading-3",
    "heading-4",
    "heading-5",
    "body",
    "small",
    "title",
    "title-small",
];

const meta: Meta = {
    title: "Beta/Text",
    component: Text,
    parameters: {
        layout: "centered",
    },
    args: {
        children:
            "Ikke tenk kronologi eller ferdig produkt, det kommer senere. (Rådets mor: skriveprosess-plumbo Ida Jackson). I brannen ligger kjernen i teksten. Kanskje er det en bok, kanskje er det en kronikk, kanskje er det bare en propp som må vekk så det går an å begynne på det EGENTLIGE prosjektet. Skriv det ut, uten konkret mål, se hva som skjer.\n" +
            "\n",
    },
    argTypes: {
        fontStyle: {
            control: "select",
            options: fontStyles,
        },
    },
    tags: ["autodocs", "text"],
};

export default meta;

type Story = StoryObj<typeof Text>;

export const _Text: Story = {};

export const Eksempelside: Story = {
    parameters: { layout: "fullscreen" },
    render: (args) => {
        return (
            <>
                <img
                    src="https://cdn.sanity.io/images/rppnrdtw/production/3756cfd5d4163639e1f2bae6bdcd31bf215fed0d-5472x3648.jpg?rect=151,962,5321,1896&w=3840&h=1368&q=75&auto=format"
                    alt=""
                    style={{ width: "100%" }}
                />
                <Text {...args} fontStyle="title">
                    Om oss
                </Text>
                <Text {...args} fontStyle="heading-2">
                    Livet skjer når vi aller minst venter det. Mens noens
                    drømmer går i oppfyllelse, går andres i knas. Gledelige
                    begivenheter skjer hver dag, det gjør også skader og
                    ulykker. Vårt viktigste samfunnsoppdrag er å hjelpe og
                    motivere kundene våre til å ta vare på helsen, verdiene og
                    omgivelsene sine – og være der når det trengs.
                </Text>

                <Text {...args}>{args.children}</Text>

                <Text {...args} fontStyle="heading-2">
                    Markedsposisjon
                </Text>

                <Text {...args}>
                    Vi har en samlet markedsandel per 2. kvartal på 18,7 prosent
                    for skadeforsikring. I privatmarkedet er vi nå landets
                    største skadeforsikringsselskap med en markedsandel på 24,7
                    prosent og over 1,1 millioner kunder. Markedsandelen i
                    bedriftsmarkedet er på 9,2 prosent, med ca. 82 000 kunder.
                    <br />
                    Fremtind Forsikring eies av SpareBank 1 Gruppen (51,44%),
                    DNB Bank ASA (28,46%) og Eika Gruppen AS (20,10%). Vi har
                    over 1 300 ansatte fordelt på Oslo, Hamar og Stavanger.
                    Hovedkontoret er i Oslo.
                </Text>

                <Text fontStyle="heading-3">Forsikring gjennom bank</Text>
                <Text>
                    Forsikringene våre kan kundene kjøpe enten hos DNB,
                    SpareBank 1 eller i Eika. De som er medlem i et LO-forbund,
                    Norsk Sykepleierforbund eller Econa kan kjøpe forsikringer
                    direkte av forbundene.
                </Text>

                <Text fontStyle="heading-3">
                    Hvem gjør hva overfor kundene våre?
                </Text>
                <Text>
                    Når kundene skal kjøpe eller endre en forsikring, eller har
                    behov for å snakke med en forsikringsrådgiver, tar de
                    kontakt med banken eller forbundet sitt. Skjer det en skade
                    eller et uhell, er det vi i Fremtind som hjelper dem.
                </Text>

                <Text fontStyle="heading-2">Kjernen vår</Text>
                <Text fontStyle="heading-3">Samfunnsoppdraget vårt</Text>
                <Text>
                    Vi i Fremtind gjør mer enn å følge opp innmeldte skader, vi
                    har også et viktig samfunnsoppdrag.
                    <br />
                    Det innebærer at vi i tillegg til å håndtere skadesaker,
                    tilbyr skadeforebyggende råd og tjenester til kundene våre:
                    <i>
                        Vi skal hjelpe og motivere folk til å ta vare på helsen,
                        verdiene og tingene sine – og vi skal være der når det
                        trengs.
                    </i>
                    <br />
                    Som en betydelig aktør i forsikringsbransjen, kan vi også
                    påvirke utviklingen i samfunnet vårt. Vi har god dialog med
                    myndighetene og vi kan mye om teknologi, risiko og
                    skadeforebygging. På vegne av kundene våre, bruker vi derfor
                    stemmen vår til å løfte frem viktige samfunnsutfordringer,
                    skape debatt og påvirke.
                </Text>
            </>
        );
    },
};
