import type { Meta, StoryObj } from "@storybook/nextjs";
import React from "react";
import { fireEvent, fn, userEvent, within } from "storybook/test";
import { Flex } from "../../../flex/index.js";
import { Help } from "../../../help/index.js";
import { Title } from "../../../typography/index.js";
import type { FileInputProps } from "../../types.js";
import {
    EksempelFileInput,
    bilde,
    eksempelfiler,
    pdf,
} from "../fileInputStoryUtils.js";

import "../../styles/_index.scss";

/**
 * Alle tilstandene til FileInput og filene i den, én story per tilstand. Bytt mellom
 * liste og kort med `fileVariant`.
 */
const meta = {
    title: "Komponenter/File Input/Tilstander",
    component: EksempelFileInput,
    parameters: { layout: "padded" },
    args: {
        legend: "Vedlegg",
        filer: [],
        fileVariant: "list",
        multiple: true,
        disabled: false,
        onChange: fn(),
    },
    argTypes: {
        fileVariant: {
            control: { type: "inline-radio" },
            options: ["list", "card"],
        },
        filer: { control: false },
        onChange: { control: false },
    },
    render: (args) => (
        <div style={{ maxWidth: "40rem" }}>
            <EksempelFileInput {...args} />
        </div>
    ),
} satisfies Meta<typeof EksempelFileInput>;

export default meta;

type Story = StoryObj<typeof meta>;

const Kolonne = ({
    tittel,
    fileVariant,
}: {
    tittel: string;
    fileVariant: FileInputProps["fileVariant"];
}) => (
    <Flex direction="column" gap="32" style={{ flex: "1 1 24rem" }}>
        <Title as="h2" size="s">
            {tittel}
        </Title>
        {Object.entries({
            "Valgte filer": eksempelfiler.valgt,
            "Laster opp": eksempelfiler.lasterOpp,
            Feil: eksempelfiler.feil,
        }).map(([legend, filer]) => (
            <EksempelFileInput
                key={legend}
                legend={legend}
                filer={filer}
                fileVariant={fileVariant}
            />
        ))}
    </Flex>
);

/** Alle filtilstandene som liste og som kort, side om side. */
export const Oversikt: Story = {
    argTypes: { fileVariant: { control: false } },
    render: () => (
        <Flex wrap gap="40">
            <Kolonne tittel="Liste" fileVariant="list" />
            <Kolonne tittel="Kort" fileVariant="card" />
        </Flex>
    ),
};

export const Tom: Story = {};

export const MedHjelpetekst: Story = {
    name: "Med hjelpetekst og tooltip",
    args: {
        description: "Last opp kvitteringen for det du har kjøpt.",
        maxSizeBytes: 8_000_000,
        accept: "image/*,.pdf",
        tooltip: (
            <Help buttonText="Hva kan jeg laste opp?">
                Du kan laste opp bilder og PDF-er.
            </Help>
        ),
    },
};

/** Med `multiple={false}` står det «slipp fil her», og en ny fil erstatter den gamle. */
export const EnFil: Story = {
    name: "Bare én fil",
    args: {
        multiple: false,
        filer: [bilde("kvittering.jpg")],
    },
};

/** Bilde, PDF, langt filnavn og fil uten miniatyrbilde. */
export const ValgteFiler: Story = {
    name: "Valgte filer",
    args: { filer: eksempelfiler.valgt },
};

/** Med `uploadProgress` fylles linjen nederst opp. Uten glir den frem og tilbake. */
export const LasterOpp: Story = {
    name: "Laster opp",
    args: { filer: eksempelfiler.lasterOpp },
};

/** For stor fil, feil filtype, feil fra serveren og standardteksten «Feil». */
export const FeilPaFiler: Story = {
    name: "Feil på filene",
    args: { filer: eksempelfiler.feil },
};

export const FeilPaFeltet: Story = {
    name: "Feil på feltet",
    args: { errorLabel: "Du må legge ved kvitteringen" },
};

/** Ikke bruk i kundeflater, se beskrivelsen av `disabled`. */
export const Deaktivert: Story = {
    args: {
        disabled: true,
        filer: [bilde("kvittering.jpg"), pdf("faktura.pdf")],
    },
};

/** Simulerer at en fil dras over dropsonen. */
export const DraOver: Story = {
    name: "Fil dras over",
    play: async ({ canvasElement }) => {
        const input = canvasElement.querySelector("input[type=file]");
        if (input) {
            fireEvent.dragEnter(input);
        }
    },
};

/** Tastaturfokus på «Legg til fil». */
export const Fokus: Story = {
    play: async ({ canvasElement }) => {
        await within(canvasElement).findByText("Legg til fil");
        await userEvent.tab();
    },
};
