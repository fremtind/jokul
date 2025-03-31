import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import "../styles/_index.scss";
import { Flex } from "../../flex/Flex.js";
import { List, OrderedList, UnorderedList } from "../List.js";
import { CheckListItem, CrossListItem, ListItem } from "../ListItem.js";

const meta = {
    title: "Komponenter/List",
    component: List,
    subcomponents: {
        ListItem,
    },
    tags: ["autodocs"],
} satisfies Meta<typeof OrderedList>;

export default meta;
type Story = StoryObj<typeof meta>;

const fjellvettreglene = [
    "Planlegg turen og meld fra hvor du går",
    "Tilpass turen etter evne og forhold",
    "Ta hensyn til vær- og skredvarsel",
    "Vær forberedt på uvær og kulde, selv på korte turer",
    "Ta med nødvendig utstyr for å kunne hjelpe deg selv og andre",
    "Ta trygge veivalg. Gjenkjenn skredfarlig terreng og usikker is",
    "Bruk kart og kompass. Vit alltid hvor du er",
    "Vend i tide, det er ingen skam å snu",
    "Spar på kreftene og søk ly om nødvendig",
];

const bekledningsliste = [
    "Regntøy (jakke og bukse)",
    "Tynn vindjakke og turbukse (med god fukttransport)",
    "Undertøy i ull/ullblanding + ekstra skift",
    "Sokker med mye ull og god passform + ekstra skift",
    "Ullgenser/jakke eller tynn dunjakke",
    "Ekstra lue",
    "Ullvotter eller andre vanter/votter som er varme selv når de er våte",
    "Lette innesko/inneklær",
    "Fjellstøvler og gjerne gamasjer",
    "Shorts og t-skjorte (ull/kunstfiber) hvis det er meldt varmt vær",
];

export const OrderedListStory: Story = {
    name: "OrderedList",
    render: () => (
        <Flex gap={24} direction="column">
            <h2>Fjellvettreglene</h2>
            <p>
                Liste fra{" "}
                <a href="https://www.dnt.no/fjellvettreglene/">
                    DNTs side om fjellvettreglene
                </a>
            </p>
            <OrderedList aria-label="Fjellvettreglene">
                {fjellvettreglene.map((regel) => (
                    <ListItem key={regel}>{regel}</ListItem>
                ))}
            </OrderedList>
        </Flex>
    ),
};

export const UnorderedListStory: Story = {
    name: "UnorderedList",
    render: () => (
        <Flex gap={24} direction="column">
            <h2>Pakkeliste (bekledning)</h2>
            <p>
                Liste fra{" "}
                <a href="https://www.dnt.no/fjellvettreglene/">
                    DNTs pakkeliste for sommerturer
                </a>
            </p>
            <UnorderedList aria-label="Fjellvettreglene">
                {bekledningsliste.map((gjenstand) => (
                    <ListItem key={gjenstand}>{gjenstand}</ListItem>
                ))}
            </UnorderedList>
        </Flex>
    ),
};

export const CoverageListStory: Story = {
    name: "Coverage List",
    render: (args) => (
        <List>
            <CheckListItem>Dekkes</CheckListItem>
            <CheckListItem>Dekkes også</CheckListItem>
            <CrossListItem>Dekkes ikke :(</CrossListItem>
            <CrossListItem>Dekkes heller ikke :(</CrossListItem>
        </List>
    ),
};
