import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { LinkList } from "../LinkList.js";
import "../styles/_index.scss";

const meta: Meta = {
    title: "Komponenter/List/LinkList",
    component: LinkList,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        variant: {
            control: "radio",
            options: ["ordered", "unordered"],
        },
    },
} satisfies Meta<typeof LinkList>;

export default meta;

type Story = StoryObj<typeof LinkList>;

export const LinkListStory: Story = {
    name: "LinkList",
    args: {
        variant: "unordered",
    },
    render: (props) => (
        <LinkList style={{ minWidth: "50vw" }} {...props}>
            <LinkList.Item>
                <LinkList.Link href="#">SpareBank 1</LinkList.Link>
            </LinkList.Item>
            <LinkList.Item>
                <LinkList.Link href="#">DNB</LinkList.Link>
            </LinkList.Item>
            <LinkList.Item>
                <LinkList.Link href="#">LOfavør</LinkList.Link>
            </LinkList.Item>
            <LinkList.Item>
                <LinkList.Link href="#">Norsk Sykepleierforbund</LinkList.Link>
            </LinkList.Item>
        </LinkList>
    ),
};
