import type { Meta, StoryObj } from "@storybook/nextjs";
import React from "react";
import { countries } from "../../../../../../storybook-public/data/countryList.js";
import { PopupTip } from "../../tooltip/index.js";
import { Autosuggest as AutosuggestComponent } from "../Autosuggest.js";
import "../styles/_index.scss";

const meta = {
    title: "Komponenter/Autosuggest",
    component: AutosuggestComponent,
    args: {
        label: "Velg land",
        allItems: countries.map(
            (country) => `${country.name} (${country.code})`,
        ),
        value: "",
        placeholder: "Velg land",
        helpLabel: "Velg landet du har statsborgerskap i",
        labelProps: {
            srOnly: false,
            variant: "small",
        },
        maxNumberOfHits: 5,
        showDropdownControllerButton: false,
        noHits: {
            text: "Fant ikke landet du lette etter. Sjekk stavingen.",
            items: countries
                .filter((country) => country.name === "Norway")
                .map((country) => country.name),
        },
    },
} satisfies Meta<typeof AutosuggestComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Autosuggest: Story = {};

export const AutosuggestMedTooltip: Story = {
    args: {
        tooltip: (
            <PopupTip
                content={
                    "Vi må vite om du var innenfor Norges landegrenser da skade skjedde"
                }
            />
        ),
    },
};
