import type { Meta, StoryObj } from "@storybook/nextjs";
import React from "react";
import { formatNumber } from "../../../utilities/index.js";
import { DescriptionList } from "../DescriptionList.js";
import { DescriptionListItem } from "../DescriptionListItem.jsx";

import "../styles/_index.scss";

const oppgjor = [
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

const claimsCase = [
    {
        title: "Forsikring",
        value: "Innboforsikring",
    },
    {
        title: "Skadenummer",
        value: "350005600006",
    },
    {
        title: "Egenandel?",
        value: `${formatNumber(1500)} kr`,
    },
];

const productPurchase = [
    {
        title: "Pris per år",
        value: `${formatNumber(1025)} kr`,
    },
    {
        title: "Kontor",
        value: "2,5 årsverk",
    },
    {
        title: "Ikke-kontor?",
        value: "3 årsverk",
    },
];

const meta: Meta = {
    title: "Beta/Description List",
    component: DescriptionList,
    subcomponents: { DescriptionListItem },
    parameters: {
        layout: "padded",
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

export const _DescriptionList: Story = {
    name: "Default",
    args: {
        children: claimsCase.map((item) => (
            <DescriptionList.Item key={item.title} {...item} />
        )),
    },
};

export const DescriptionListClaim: Story = {
    name: "Skadesak",
    args: {
        children: claimsCase.map((item) => (
            <DescriptionList.Item key={item.title} {...item} />
        )),
    },
};

export const DescriptionListProduct: Story = {
    name: "Produktkjøp",
    args: {
        children: productPurchase.map((item) => (
            <DescriptionList.Item key={item.title} {...item} />
        )),
    },
};

export const DescriptionListStory: Story = {
    name: "Oppgjør",
    args: {
        alignment: "justified",
        showSeparators: true,
        children: oppgjor.map((item) => (
            <DescriptionList.Item key={item.title} {...item} />
        )),
    },
};

export const DescriptionListWithDescription: Story = {
    name: "Description List med hjelpetekst",
    args: {
        alignment: "justified",
        showSeparators: true,
        children: oppgjor.map((item) => (
            <DescriptionList.Item
                key={item.title}
                {...item}
                supportText="Hjelpeteksten bør være kort"
            />
        )),
    },
};
