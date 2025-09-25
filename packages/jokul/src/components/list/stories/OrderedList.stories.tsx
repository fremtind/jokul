import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { OrderedList } from "../List.js";
import { ListItem } from "../ListItem.js";
import "../styles/_index.scss";
import "../../link/styles/_index.scss";

const meta = {
    title: "Komponenter/List/Ordered List",
    component: OrderedList,
    subcomponents: {
        ListItem,
    },
    tags: ["autodocs", "grouping content"],
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

export const Ordered_List: Story = {
    args: {
        "aria-label": "Fjellvettreglene",
        children: fjellvettreglene.map((regel) => (
            <ListItem key={regel}>{regel}</ListItem>
        )),
    },
};
