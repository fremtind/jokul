import type { Meta, StoryObj } from "@storybook/react";
import { DescriptionList } from "../DescriptionList.js";
import "../styles/_index.scss";
import {
    formatDate,
    formatKontonummer,
    formatNumber,
} from "../../../utilities/index.js";
import { DescriptionListItem } from "../DescriptionListItem.jsx";

const listItems = [
    {
        title: "Supergavekort fra GoGift",
        value: `${formatNumber(100150)} kr`,
        description: `Gyldig til ${formatDate(new Date())}`,
    },
    {
        title: "Gavekort fra Power",
        value: `${formatNumber(1000)} kr`,
        description: `Gyldig til ${formatDate(new Date())}`,
    },
    {
        title: "Penger på konto",
        value: `${formatNumber(12419)} kr`,
        description: `Utbetales til ${formatKontonummer("12345678901")}`,
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
        alwaysJustified: false,
        children: listItems.map((item) => (
            <DescriptionList.Item key={item.title} {...item} />
        )),
    },
    tags: ["autodocs", "grouping content"],
} satisfies Meta<typeof DescriptionList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DescriptionListStory: Story = {
    name: "DescriptionList",
};
