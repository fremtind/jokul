import type { Meta, StoryObj } from "@storybook/nextjs";
import React from "react";
import { RadioButton } from "../RadioButton.js";
import { RadioButtonGroup } from "../RadioButtonGroup.js";

const meta = {
    title: "Komponenter/Radio Button/Eksempler",
    component: RadioButtonGroup,
    args: {
        legend: "Hvordan vil du bli kontaktet?",
        name: "kontaktmetode",
    },
    parameters: { layout: "padded" },
    tags: ["!autodocs"],
} satisfies Meta<typeof RadioButtonGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const BeskrivelseForGruppen: Story = {
    name: "Beskrivelse for gruppen",
    parameters: {
        docs: {
            description: {
                story: "Bruk `description` på `RadioButtonGroup` for en felles forklaring av spørsmålet.",
            },
        },
    },
    args: {
        description:
            "Vi bruker kontaktmetoden du velger når vi har oppdateringer i saken din.",
    },
    render: (args) => (
        <RadioButtonGroup {...args}>
            <RadioButton value="epost">E-post</RadioButton>
            <RadioButton value="sms">SMS</RadioButton>
            <RadioButton value="telefon">Telefon</RadioButton>
        </RadioButtonGroup>
    ),
};

export const BeskrivelseForHvertValg: Story = {
    name: "Hjelpetekst for hvert valg",
    parameters: {
        docs: {
            description: {
                story: "`RadioButton` har ingen `description`. Bruk `helpLabel` for å forklare et enkeltvalg.",
            },
        },
    },
    render: (args) => (
        <RadioButtonGroup {...args}>
            <RadioButton
                value="epost"
                helpLabel="Du får svar innen to virkedager."
            >
                E-post
            </RadioButton>
            <RadioButton value="sms" helpLabel="Kun for korte beskjeder.">
                SMS
            </RadioButton>
            <RadioButton
                value="telefon"
                helpLabel="Vi ringer deg på hverdager mellom 08 og 16."
            >
                Telefon
            </RadioButton>
        </RadioButtonGroup>
    ),
};

export const BeskrivelseForGruppenOgValg: Story = {
    name: "Beskrivelse for gruppen og hvert valg",
    parameters: {
        docs: {
            description: {
                story: "Kombiner gruppebeskrivelse og hjelpetekst per valg når både spørsmål og alternativer trenger forklaring.",
            },
        },
    },
    args: {
        description:
            "Vi bruker kontaktmetoden du velger når vi har oppdateringer i saken din.",
    },
    render: (args) => (
        <RadioButtonGroup {...args}>
            <RadioButton
                value="epost"
                helpLabel="Du får svar innen to virkedager."
            >
                E-post
            </RadioButton>
            <RadioButton
                value="telefon"
                helpLabel="Vi ringer deg på hverdager."
            >
                Telefon
            </RadioButton>
        </RadioButtonGroup>
    ),
};

export const BeskrivelseMedFeil: Story = {
    name: "Beskrivelse og feilmelding",
    parameters: {
        docs: {
            description: {
                story: "`errorLabel` erstatter ikke `description`; begge vises, og alle valgene merkes som ugyldige.",
            },
        },
    },
    args: {
        description: "Velg ett alternativ.",
        errorLabel: "Du må velge en kontaktmetode",
    },
    render: (args) => (
        <RadioButtonGroup {...args}>
            <RadioButton value="epost">E-post</RadioButton>
            <RadioButton value="sms">SMS</RadioButton>
        </RadioButtonGroup>
    ),
};
