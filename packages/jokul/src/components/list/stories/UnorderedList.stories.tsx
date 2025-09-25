import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { UnorderedList } from "../List.js";
import { ListItem } from "../ListItem.js";
import "../styles/_index.scss";
import "../../link/styles/_index.scss";

const meta = {
    title: "Komponenter/List/Unordered List",
    component: UnorderedList,
    subcomponents: {
        ListItem,
    },
    tags: ["autodocs", "grouping content"],
} satisfies Meta<typeof UnorderedList>;

export default meta;
type Story = StoryObj<typeof meta>;

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

export const Unordered_List: Story = {
    args: {
        "aria-label": "Bekledningsliste",
        children: bekledningsliste.map((gjenstand) => (
            <ListItem key={gjenstand}>{gjenstand}</ListItem>
        )),
    },
};
