import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { formatNumber } from "../../../utilities/index.js";
import { DescriptionList } from "../DescriptionList.js";
import { DescriptionListItem } from "../DescriptionListItem.jsx";

import "../styles/_index.scss";

const listItems = [
    {
        title: "Supergavekort fra GoGift",
        value: `${formatNumber(100150)} kr`,
    },
    {
        title: "Gavekort fra Power",
        value: `${formatNumber(1000)} kr`,
    },
    {
        title: "Penger på konto",
        value: `${formatNumber(12419)} kr`,
    },
];

const meta: Meta = {
    title: "Beta/Description List",
    component: DescriptionList,
    subcomponents: { DescriptionListItem },
    parameters: {
        layout: "padded",
    },
    args: {
        alignment: "horizontal",
        showSeparators: false,
    },
    argTypes: {
        alignment: {
            options: ["horizontal", "vertical", "justified"],
        },
    },
    tags: ["autodocs", "grouping content"],
} satisfies Meta<typeof DescriptionList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DescriptionListStory: Story = {
    name: "Description List",
    args: {
        children: listItems.map((item) => (
            <DescriptionList.Item key={item.title} {...item} />
        )),
    },
};

export const DescriptionListWithDescription: Story = {
    name: "Description List med hjelpetekst",
    args: {
        children: listItems.map((item) => (
            <DescriptionList.Item
                key={item.title}
                {...item}
                supportText="Hei, Heidi og Jonas, jeg er en veldig lang beskrivende tekst for feltene over."
            />
        )),
    },
};
