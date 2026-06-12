import type { Meta, StoryObj } from "@storybook/nextjs";
import React from "react";
import { userEvent } from "storybook/test";
import { Help } from "../../help/index.js";
import { Autosuggest } from "../Autosuggest.js";
import { autosuggestItems } from "./shared.data.js";

import "../styles/_index.scss";

const meta = {
    title: "Komponenter/Autosuggest",
    component: Autosuggest,
    args: {
        label: "Velg land",
        allItems: autosuggestItems.slice(0, 15).map((item) => item.label),
        value: "",
        placeholder: "Velg land",
        helpLabel: "Velg landet du har statsborgerskap i",
        labelProps: {
            srOnly: false,
            variant: "small",
        },
        maxNumberOfHits: autosuggestItems.length,
        showDropdownControllerButton: false,
        noHits: {
            text: "Fant ikke landet du lette etter. Sjekk stavingen.",
            items: autosuggestItems
                .filter((item) => item.label === "Norway")
                .map((item) => item.label),
        },
        tooltip: (
            <Help
                title="Hvorfor trenger vi dette?"
                buttonText="Hvorfor trenger vi dette?"
            >
                Vi må vite om du var innenfor Norges landegrenser da skaden
                skjedde, for å kunne vurdere kravet ditt.
            </Help>
        ),
        isOpen: false,
    },
} satisfies Meta<typeof Autosuggest>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        value: "",
    },
};

export const OpenState: Story = {
    args: {
        isOpen: true,
    },
};

export const KeyboardFocusState: Story = {
    play: async () => {
        await userEvent.tab();
        await userEvent.tab();
    },
};

export const ErrorState: Story = {
    args: {
        errorLabel: "Feilmelding",
    },
};

export const FocusState: Story = {
    play: async () => {
        await userEvent.tab();
        await userEvent.tab();
    },
};

export const HasValue: Story = {
    args: {
        value: autosuggestItems[2].label,
    },
};
