import type { Meta, StoryObj } from "@storybook/nextjs";
import React from "react";
import { LinkList } from "../LinkList.js";
import { LinkListLink } from "../LinkListLink.js";

import "../styles/_index.scss";

const banks = [
    "Hva dekker forsikringen?",
    "Reisekort",
    "SmartDelay+",
    "Reise SMS",
    "Hjelp",
];

const meta: Meta = {
    title: "Komponenter/LinkList",
    component: LinkList,
    subcomponents: {
        LinkListLink,
    },
    args: {
        label: "Om forsikringen din",
        hideLabel: true,
        children: banks.map((link) => (
            <LinkList.Link href="#" key={link}>
                {link}
            </LinkList.Link>
        )),
    },
    tags: ["autodocs"],
} satisfies Meta<typeof LinkList>;

export default meta;

type Story = StoryObj<typeof LinkList>;

export const _LinkList: Story = {};
