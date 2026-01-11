import type { Meta, StoryObj } from "@storybook/nextjs";
import { TextArea as TextAreaComponent } from "../TextArea.js";
import "../styles/_index.scss";

const meta = {
    title: "Komponenter/TextArea",
    component: TextAreaComponent,
    args: {
        label: "Tilleggsinformasjon",
        description: "Legg til relevant informasjon som kan påvirke saken.",
        counter: {
            maxLength: 200,
            hideProgress: false,
        },
        autoExpand: true,
    },
} satisfies Meta<typeof TextAreaComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TextArea: Story = {
    args: {
        label: "Har du noen tilbakemeldinger til oss?",
        description: "Din tilbakemelding hjelper oss å bli bedre.",
    },
};

export const TextAreaWithCounterAndAutoExpand: Story = {};

export const WithError: Story = {
    args: {
        label: "Beskriv skaden",
        errorLabel: "Du må beskrive skaden for å fortsette",
    },
};

export const ReadOnly: Story = {
    args: {
        label: "Tidligere registrert informasjon",
        readOnly: true,
        value: "Kunde rapporterte vannlekkasje i kjeller 15. mars kl. 08:30. Skaden oppstod som følge av frostsprengt rør under kjøkkengulvet. Rørlegger tilkalt samme dag.",
        description: "Denne informasjonen kan ikke endres",
    },
};
