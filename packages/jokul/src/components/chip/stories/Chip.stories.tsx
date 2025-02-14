import type { Meta, StoryObj } from "@storybook/react";
import { Chip as ChipComponent } from "../Chip.js";
import "../styles/_index.scss";

const meta = {
    title: "Komponenter/Chip",
    component: ChipComponent,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        variant: { control: "select", options: ["input", "filter"] },
        size: { control: "select", options: ["small", "large"] },
    },
} satisfies Meta<typeof ChipComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Chip: Story = {
    args: {
        children: "Hus",
        variant: "input",
    },
};
