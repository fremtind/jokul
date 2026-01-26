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
        autoExpand: false,
        inline: false,
        rows: 7,
        startOpen: true,
        readOnly: false,
        disabled: false,
        errorLabel: "",
    },
    argTypes: {
        rows: {
            control: {
                min: 3,
            },
        },
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

export const Rows: Story = {
    args: {
        label: "Beskriv skaden",
        errorLabel: "Du må beskrive skaden for å fortsette",
    },
};

export const ReadOnly: Story = {
    args: {
        counter: {
            maxLength: 400,
            hideProgress: false,
        },
    },
};

export const AutoExpand: Story = {
    args: {
        autoExpand: true,
    },
};

export const _Error: Story = {
    args: {
        errorLabel: "Du må beskrive skaden for å fortsette",
    },
};
