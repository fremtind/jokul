import type { Meta, StoryObj } from "@storybook/nextjs";
import { ToggleSwitch as ToggleSwitchComponent } from "../ToggleSwitch.js";
import "../styles/_index.scss";

const meta = {
    title: "Komponenter/ToggleSwitch",
    component: ToggleSwitchComponent,
} satisfies Meta<typeof ToggleSwitchComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ToggleSwitch: Story = {
    args: {
        children: "Mørk modus",
        "aria-pressed": false,
    },
};
