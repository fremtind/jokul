import type { Meta, StoryObj } from "@storybook/react";
import { ToggleSwitch as ToggleSwitchComponent } from "../ToggleSwitch.js";
import "../styles/_index.scss";

const meta = {
    title: "Komponenter/ToggleSwitch",
    component: ToggleSwitchComponent,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs", "forms"],
} satisfies Meta<typeof ToggleSwitchComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ToggleSwitch: Story = {
    args: {
        children: "Mørk modus",
        "aria-pressed": false,
    },
};
