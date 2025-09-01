import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { PopupTip } from "../../tooltip/index.js";
import { Autosuggest as AutosuggestComponent } from "../Autosuggest.js";
import { countries } from "./countryList.js";
import "../styles/_index.scss";

const meta = {
    title: "Komponenter/Autosuggest",
    component: AutosuggestComponent,
    parameters: {
        layout: "centered",
    },
    argTypes: {
        className: {
            table: {
                disable: true,
            },
        },
        density: {
            table: {
                disable: true,
            },
        },
        onChange: {
            table: {
                disable: true,
            },
        },
        onConfirm: {
            table: {
                disable: true,
            },
        },
        onStateChange: {
            table: {
                disable: true,
            },
        },
        onInputValueChange: {
            table: {
                disable: true,
            },
        },
        allItems: {
            control: "select",
        },
    },
    tags: ["autodocs"],
} satisfies Meta<typeof AutosuggestComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Autosuggest: Story = {
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
};

export const AutosuggestMedTooltip: Story = {
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
        tooltip: (
            <PopupTip
                content={
                    "Vi må vite om du var innenfor Norges landegrenser da skade skjedde"
                }
            />
        ),
    },
};
