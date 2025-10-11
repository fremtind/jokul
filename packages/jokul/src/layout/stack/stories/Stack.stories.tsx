import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import tokens from "../../../core/tokens.js";
import { Stack } from "../Stack.jsx";

import "../styles/_index.scss";

const meta = {
    title: "Layout/Primitives/Stack",
    component: Stack,
    tags: ["autodocs"],
    argTypes: {
        ref: {
            table: { disable: true },
        },
        as: {
            table: { disable: true },
        },
        className: {
            table: { disable: true },
        },
        style: {
            table: { disable: true },
        },
        gap: {
            control: "select",
            options: Object.keys(tokens.spacing),
        },
        recursive: { control: "boolean" },
    },
} satisfies Meta<typeof Stack>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Demo: Story = {
    parameters: {
        layout: "fullscreen",
    },
    decorators: [
        (Story) => (
            <div
                style={{
                    paddingInline: "var(--jkl-unit-90)",
                    paddingBlock: "var(--jkl-unit-130)",
                }}
            >
                <Story />
            </div>
        ),
    ],
    render: (props) => {
        return (
            <Stack {...props}>
                <h1>Hvordan skrive dokumentasjon</h1>
                <p>
                    For at designsystemet skal fungere må systemdokumentasjonen
                    være god. Hvis utviklere og designere ikke vet hvilke
                    muligheter og begrensninger som finnes i systemet, kommer de
                    til å gjøre feil og dobbeltarbeid.
                </p>
                <p>
                    Vi prøver å levere god dokumentasjon for Jøkul, og vi har
                    bygd opp rammeverket for dokumentasjon slik at Jøkul har det
                    som trengs og sånn at vi kan levere en smidig
                    utvikleropplevelse. Det skal bare være én kilde til sannhet.
                </p>
                <h2>Dokumentere endringer</h2>
                <p>
                    For å dokumentere endringer på en måte som automatiserer
                    versjonering og generering av changelogs, bruker vi
                    verktøyet Changesets.
                </p>
                <p>
                    Changesets lar oss definere nøyaktig hvilke pakker som er
                    påvirket av en endring og hva slags versjonsoppdatering (
                    <code>major</code>, <code>minor</code>, eller{" "}
                    <code>patch</code>) endringen medfører.
                </p>
            </Stack>
        );
    },
};
