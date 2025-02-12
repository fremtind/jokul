import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { UnorderedList as Component } from "../List.js";
import { CheckListItem, CrossListItem, ListItem } from "../ListItem.js";
import "../styles/_index.scss";

const meta = {
    title: "Komponenter/List/UnorderedList",
    component: Component,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const UnorderedList: Story = {
    args: {
        className: "jkl-body",
        children: [
            <ListItem key={1}>Element 1</ListItem>,
            <ListItem key={2}>
                Element 2
                <Component>
                    <ListItem>Nøstet 1</ListItem>
                    <ListItem>Nøstet 2</ListItem>
                </Component>
            </ListItem>,
            <ListItem key={3}>Element 3</ListItem>,
            <ListItem key={4}>Element 4</ListItem>,
        ],
    },
};

export const CoverageList: Story = {
    args: {
        className: "jkl-body",
        children: [
            <CheckListItem key={1}>Dekkes</CheckListItem>,
            <CheckListItem key={2}>Dekkes også</CheckListItem>,
            <CrossListItem key={3}>Dekkes ikke</CrossListItem>,
            <CrossListItem key={4}>Dekkes heller ikke</CrossListItem>,
        ],
    },
};
