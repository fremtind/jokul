import type { Meta, StoryObj } from "@storybook/react";
import { BETA_Combobox } from "../BETA_Combobox.js";

import "../styles/_index.scss";
import "../../chip/styles/_index.scss";
import "../../popover/styles/_index.scss";
import "../../text-input/styles/_index.scss";

const options = [
    "Valg 1",
    "Valg 2",
    "Sykdom 1",
    "Sykdom 2",
    "Livsstil 1",
    "Livsstil 2",
    "Hendelse 1",
    "Hendelse 2",
].sort();

const meta = {
    title: "Komponenter/Combobox/BETA_Combobox",
    component: BETA_Combobox,
    parameters: {
        layout: "fullscreen",
    },
    tags: ["autodocs", "forms"],
} satisfies Meta<typeof BETA_Combobox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _Combobox: Story = {
    args: {
        name: "disease",
        placeholder: "Velg",
        multiselect: true,
        label: "Velg sykdommer",
        options: options,
    },
};
