import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { LinkList } from "../LinkList.js";
import "../styles/_index.scss";
import { LinkListLink } from "../LinkListItem.js";

const meta: Meta = {
    title: "Komponenter/LinkList",
    component: LinkList,
    subcomponents: {
        LinkListLink,
    },
    args: {
        variant: "unordered",
        label: "Lenker",
    },
    argTypes: {
        variant: {
            control: "radio",
            options: ["ordered", "unordered"],
        },
    },
    tags: ["autodocs"],
} satisfies Meta<typeof LinkList>;

export default meta;

type Story = StoryObj<typeof LinkList>;

const banks = [
    "Sparebank 1",
    "DNB",
    "LOFavør",
    "Norsk Sykepleierforbund",
    "Marker og Eidsberg Sparebank",
    "Evje og Hornnes Sparebank",
    "Høland og Setskog Sparebank",
    "Sparebanken Møre",
    "JBF",
    "Penger.no",
].sort();

export const OrderedList: Story = {
    name: "Innholdsfortegnelse",
    args: {
        variant: "ordered",
        label: "Sideinnhold",
    },
    render: (args) => (
        <LinkList {...args}>
            <LinkList.Link href="#">Ledige stillinger</LinkList.Link>
            <LinkList.Link href="#">Hvorfor Fremtind?</LinkList.Link>
            <LinkList.Link href="#">Fordeler og goder</LinkList.Link>
            <LinkList.Link href="#">Kultur</LinkList.Link>
            <LinkList.Link href="#">Teknologi</LinkList.Link>
        </LinkList>
    ),
};

export const _LinkList: Story = {
    name: "Lenkeliste",
    args: {
        variant: "unordered",
        label: "Våre distributører",
    },
    render: (args) => (
        <LinkList {...args}>
            {banks.map((link) => (
                <LinkList.Link href="#" key={link}>
                    {link}
                </LinkList.Link>
            ))}
        </LinkList>
    ),
};
