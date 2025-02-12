import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { LogoStamp as Component } from "../LogoStamp.js";
import {
    ForsikringLevertAvFremtind,
    FraSB1ogDNB,
    InnovasjonFraFremtind,
    TeknologiFraFremtind,
    VartEgetForsikringsselskap,
    VartForsikringsselskap,
} from "../text-paths/index.js";
import "../styles/_index.scss";

const meta = {
    title: "Komponenter/Logo/LogoStamp",
    component: Component,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    args: {
        style: { width: "200px" },
    },
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LogoStamp: Story = {
    name: "Forsikring levert av Fremtind",
    args: {
        children: [<ForsikringLevertAvFremtind key={1} />],
    },
};

export const Distributors: Story = {
    name: "Fra SpareBank 1 og DNB",
    args: {
        children: [<FraSB1ogDNB key={1} />],
    },
};

export const Innovation: Story = {
    name: "Innovasjon fra Fremtind",
    args: {
        children: [<InnovasjonFraFremtind key={1} />],
    },
};

export const Technology: Story = {
    name: "Teknologi fra Fremtind",
    args: {
        children: [<TeknologiFraFremtind key={1} />],
    },
};

export const OurOwn: Story = {
    name: "Vårt eget forsikringsselskap",
    args: {
        children: [<VartEgetForsikringsselskap key={1} />],
    },
};

export const Our: Story = {
    name: "Vårt forsikringsselskap",
    args: {
        children: [<VartForsikringsselskap key={1} />],
    },
};
