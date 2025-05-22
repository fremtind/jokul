import type { Meta, StoryObj } from "@storybook/react";
import { Combobox as ComboboxComponent } from "../Combobox.js";
import "../styles/_index.scss";
import type { ComboboxValuePair } from "../../combobox/types.js";
import React from "react";

const meta = {
    title: "Komponenter/Combobox",
    component: ComboboxComponent,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof ComboboxComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

const items: ComboboxValuePair[] = [
    { value: "a080", label: "A080 - Rotavirusenteritt", tagLabel: "A080" },
    {
        value: "a081",
        label: "A081 - Akutt gastroenteritt som skyldes norovirus",
        tagLabel: "A081",
    },
    { value: "a082", label: "A082 - Adenovirusenteritt", tagLabel: "A082" },
    {
        value: "a083",
        label: "A083 - Annen virusenteritt",
        tagLabel: "A083",
    },
    {
        value: "a084",
        label: "A084 - Uspesifisert virusinfeksjon i mage-tarmkanalen",
        tagLabel: "A084",
    },
    {
        value: "a085",
        label: "A085 - Annen spesifisert mage-tarminfeksjon",
        tagLabel: "A085",
    },
    {
        value: "a090",
        label: "A090 - Annen eller uspesifisert gastroenteritt eller kolitt av infeksiøs årsak",
        tagLabel: "A090",
    },
    {
        value: "a099",
        label: "A099 - Gastroenteritt eller kolitt av uspesifisert årsak",
        tagLabel: "A099",
    },
    {
        value: "a150",
        label: "A150 - Lungetuberkulose bekreftet ved mikroskopi av sputum med eller uten kultur",
        tagLabel: "A150",
    },
];

export const Combobox: Story = {
    args: {
        items,
        label: "Velg sykdommer",
        name: "disease",
        onChange: () => {},
    },
    decorators: (Story) => (
        <div style={{ maxWidth: 220 }}>
            <Story />
        </div>
    ),
};
