import type { Meta, StoryObj } from "@storybook/nextjs";
import React from "react";
import { formatNumber } from "../../../utilities/index.js";
import { DescriptionList } from "../DescriptionList.js";
import { DescriptionListItem } from "../DescriptionListItem.js";

import "../styles/_index.scss";

const oppgjor = [
    {
        terms: "Supergavekort fra GoGift",
        details: `${formatNumber(100150)} kr`,
    },
    {
        terms: "Gavekort fra Power",
        details: `${formatNumber(1000)} kr`,
    },
    {
        terms: "Penger på konto",
        details: `${formatNumber(12419)} kr`,
    },
];

const claimsCase = [
    {
        terms: "Forsikring",
        details: "Innboforsikring",
    },
    {
        terms: "Skadenummer",
        details: "350005600006",
    },
    {
        terms: "Egenandel?",
        details: `${formatNumber(1500)} kr`,
    },
];

const productPurchase = [
    {
        terms: "Pris per år",
        details: `${formatNumber(1025)} kr`,
    },
    {
        terms: "Kontor",
        details: "2,5 årsverk",
    },
    {
        terms: "Ikke-kontor?",
        details: "3 årsverk",
    },
];

const meta: Meta = {
    title: "Komponenter/Description List",
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

export const _DescriptionList: Story = {
    name: "Default",
    args: {
        children: claimsCase.map((item) => (
            <DescriptionList.Item key={item.terms} {...item} />
        )),
    },
};

export const DescriptionListClaim: Story = {
    name: "Skadesak",
    args: {
        children: claimsCase.map((item) => (
            <DescriptionList.Item key={item.terms} {...item} />
        )),
    },
};

export const DescriptionListProduct: Story = {
    name: "Produktkjøp",
    args: {
        children: productPurchase.map((item) => (
            <DescriptionList.Item key={item.terms} {...item} />
        )),
    },
};

export const DescriptionListStory: Story = {
    name: "Oppgjør",
    args: {
        alignment: "justified",
        showSeparators: true,
        children: oppgjor.map((item) => (
            <DescriptionList.Item key={item.terms} {...item} />
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
                key={item.terms}
                {...item}
                supportText="Hjelpeteksten bør være kort"
            />
        )),
    },
};
