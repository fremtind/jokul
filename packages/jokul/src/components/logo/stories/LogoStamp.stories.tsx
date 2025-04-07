import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { LogoStamp as LogoStampComponent } from "../LogoStamp.js";
import { FraSB1ogDNB } from "../text-paths/FraSB1ogDNB.js";
import "../styles/_index.scss";

const meta = {
    title: "Komponenter/Logo/LogoStamp",
    component: LogoStampComponent,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof LogoStampComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LogoStamp: Story = {
    args: {
        children: <FraSB1ogDNB />,
        title: "Fra SB1 og DNB",
    },
};
