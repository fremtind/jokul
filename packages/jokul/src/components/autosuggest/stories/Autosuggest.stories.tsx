import type { Meta, StoryObj } from "@storybook/react";
import { Autosuggest as AutosuggestComponent } from "../Autosuggest.js";
import "../styles/_index.scss";

const meta = {
    title: "Komponenter/Autosuggest",
    component: AutosuggestComponent,
    parameters: {
        layout: "padded",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof AutosuggestComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

const allItems = [
    "Afghanistan",
    "Aland Islands",
    "Algeria",
    "Australia",
    "Austria",
    "Bahrain",
    "Bangladesh",
    "Benin",
    "Bermuda",
    "Bhutan",
];

export const Autosuggest: Story = {
    args: {
        label: "Velg land",
        allItems,
        value: "",
    },
};
