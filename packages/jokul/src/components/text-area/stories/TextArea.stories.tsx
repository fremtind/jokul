import type { Meta, StoryObj } from "@storybook/react";
import { TextArea as TextAreaComponent } from "../TextArea.js";
import "../styles/_index.scss";

const meta = {
    title: "Komponenter/TextArea",
    component: TextAreaComponent,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs", "forms"],
} satisfies Meta<typeof TextAreaComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TextArea: Story = {
    args: {
        label: "Har du noen tilbakemeldinger til oss?",
        helpLabel: "Din tilbakemelding hjelper oss å bli bedre.",
    },
};

export const TextAreaWithCounterAndAutoExpand: Story = {
    args: {
        label: "Tilleggsinformasjon",
        helpLabel: "Legg til relevant informasjon som kan påvirke saken.",
        counter: {
            maxLength: 200,
            hideProgress: false,
        },
        autoExpand: true,
    },
};

export const WithError: Story = {
    args: {
        label: "Beskriv skaden",
        errorLabel: "Du må beskrive skaden for å fortsette",
    },
};

export const Compact: Story = {
    args: {
        label: "Kommentarer",
        density: "compact",
        rows: 3,
    },
};

export const ReadOnly: Story = {
    args: {
        label: "Tidligere registrert informasjon",
        readOnly: true,
        value: "Kunde rapporterte vannlekkasje i kjeller 15. mars kl. 08:30. Skaden oppstod som følge av frostsprengt rør under kjøkkengulvet. Rørlegger tilkalt samme dag.",
        helpLabel: "Denne informasjonen kan ikke endres",
    },
};
