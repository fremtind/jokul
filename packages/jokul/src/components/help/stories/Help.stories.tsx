import type { Meta, StoryObj } from "@storybook/react";
import { BETA_Help as Help } from "../Help.js";
import "../styles/_index.scss";
import "../../button/styles/_index.scss";
import "../../description-list/styles/_index.scss";

const meta = {
    title: "Komponenter/Help",
    component: Help,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs", "beta"],
} satisfies Meta<typeof Help>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Help_Component: Story = {
    args: {
        position: "top",
        showButtonText: false,
        buttonText: "Hjelp",
        children: "Jeg er en hjelpetekst",
        iconPosition: "left",
    },
};
