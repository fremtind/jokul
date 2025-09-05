import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import "../styles/_index.scss";
import { ErrorTag, InfoTag, SuccessTag, Tag, WarningTag } from "../Tag.js";

const meta = {
    title: "Komponenter/Tag",
    component: Tag,
    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component:
                    "Tag-komponenten brukes for å vise status, informasjon eller kategorisering. Velg riktig variant for å formidle ønsket betydning.",
            },
        },
    },
    args: {
        children: "Hei",
    },
    argTypes: {
        children: {
            description: "Teksten som vises inni taggen.",
            control: "text",
        },
    },
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TagStory: Story = {
    name: "Standard",
    parameters: {
        docs: {
            description: {
                story: "Brukes for å vise nøytral informasjon eller kategorisering.",
            },
        },
    },
    args: {
        children: "Under behandling",
    },
    render: (args) => <Tag {...args} />,
};

export const SuccessTagStory: Story = {
    name: "Suksess",
    parameters: {
        docs: {
            description: {
                story: "Brukes for å vise at noe har gått bra eller er fullført.",
            },
        },
    },
    args: {
        children: "Godkjent",
    },
    render: (args) => <SuccessTag {...args} />,
};

export const InfoTagStory: Story = {
    name: "Informasjon",
    parameters: {
        docs: {
            description: {
                story: "Brukes for å vise generell informasjon.",
            },
        },
    },
    args: {
        children: "Venter på svar",
    },
    render: (args) => <InfoTag {...args} />,
};

export const WarningTagStory: Story = {
    name: "Advarsel",
    parameters: {
        docs: {
            description: {
                story: "Brukes for å vise advarsler eller ting som krever oppmerksomhet.",
            },
        },
    },
    args: {
        children: "Manglende dokumentasjon",
    },
    render: (args) => <WarningTag {...args} />,
};

export const ErrorTagStory: Story = {
    name: "Feil",
    parameters: {
        docs: {
            description: {
                story: "Brukes for å vise feil eller kritiske problemer.",
            },
        },
    },
    args: {
        children: "Avvist",
    },
    render: (args) => <ErrorTag {...args} />,
};
