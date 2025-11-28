import type { Meta, StoryObj } from "@storybook/nextjs";
import React from "react";
import { Logo as LogoComponent } from "../Logo.js";
import "../styles/_index.scss";

const meta = {
    title: "Komponenter/Logo/Logo",
    component: LogoComponent,
} satisfies Meta<typeof LogoComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Logo: Story = {
    args: {
        animated: false,
        isSymbol: false,
        centered: false,
        title: "Fremtind",
    },
    render: ({ ...args }) => (
        <LogoComponent {...args} style={{ width: "100%" }} />
    ),
};
