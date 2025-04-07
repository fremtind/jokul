import { Meta, StoryObj } from "@storybook/react";
import { Logo as LogoComponent } from "../Logo.js";
import "../styles/_index.scss";

const meta = {
    title: "Komponenter/Logo/Logo",
    component: LogoComponent,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof LogoComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Logo: Story = {};
