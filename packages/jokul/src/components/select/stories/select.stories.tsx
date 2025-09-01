import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Flex } from "../../flex/index.js";
import { PopupTip } from "../../tooltip/PopupTip.js";
import { Select } from "../Select.js";
import "../styles/_index.scss";

const meta: Meta = {
    title: "Komponenter/Select",
    component: Select,
    subcomponents: { PopupTip },
    parameters: {
        layout: "centered",
    },
    argTypes: {
        className: {
            table: {
                disable: true,
            },
        },
        id: {
            table: {
                disable: true,
            },
        },
        "data-testautoid": {
            table: {
                disable: true,
            },
        },
        density: {
            table: {
                disable: true,
            },
        },
        onBlur: {
            table: {
                disable: true,
            },
        },
        onFocus: {
            table: {
                disable: true,
            },
        },
        onChange: {
            table: {
                disable: true,
            },
        },
        searchable: {
            control: "boolean",
        },
    },
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Select>;

export const SelectStory: Story = {
    name: "Select",
    args: {
        name: "Select",
        label: "Hvilket merke er telefonen?",
        items: [
            { value: "Apple", label: "Apple" },
            { value: "Samsung", label: "Samsung" },
            { value: "Google", label: "Google" },
            { value: "OnePlus", label: "OnePlus" },
            { value: "Nokia", label: "Nokia" },
        ],
        defaultPrompt: "Velg merke",
        inline: false,
        invalid: false,
        helpLabel: "Du kan kun velge ett merke",
        labelProps: {
            srOnly: false,
            variant: "small",
        },
        maxShownOptions: 12,
        width: "20ch",
        searchable: false,
    },
};

export const SelectErrorState: Story = {
    args: {
        name: "Select",
        label: "Hvilket merke er telefonen?",
        defaultPrompt: "Velg merke",
        items: [
            { value: "Apple", label: "Apple" },
            { value: "Samsung", label: "Samsung" },
            { value: "Google", label: "Google" },
            { value: "OnePlus", label: "OnePlus" },
            { value: "Nokia", label: "Nokia" },
        ],
        inline: false,
        invalid: false,
        helpLabel: "Du kan kun velge ett merke",
        errorLabel: "Du kan kun velge ett merke",
        labelProps: {
            srOnly: false,
            variant: "small",
        },
        maxShownOptions: 12,
        width: "20ch",
        searchable: false,
    },
};

export const SelectInline: Story = {
    args: {
        name: "Select",
        label: "Hva jobber du som?",
        items: [
            "Frontend-utvikler",
            "Backend-utvikler",
            "Visuell designer",
            "Interaksjonsdesigner",
            "Tjenestedesigner",
        ],
        inline: true,
        searchable: false,
        value: "Frontend-utvikler",
    },
    render: (args) => {
        return (
            <Flex gap={8} alignItems="center">
                <p>Jeg jobber som</p>
                <Select {...args} />
                <p>hos Fremtind Forsikring.</p>
            </Flex>
        );
    },
};

export const SelectMedTooltip: Story = {
    args: {
        name: "Select",
        label: "Hva jobber du som?",
        items: [
            "Frontend-utvikler",
            "Backend-utvikler",
            "Visuell designer",
            "Interaksjonsdesigner",
            "Tjenestedesigner",
        ],
        value: "Frontend-utvikler",
        tooltip: (
            <PopupTip
                content={
                    "Velg rollen som passer deg best, informasjonen brukes kun for statistikk."
                }
            />
        ),
    },
};
