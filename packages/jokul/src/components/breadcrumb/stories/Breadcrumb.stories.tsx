import type { Meta, StoryObj } from "@storybook/react";
import { Breadcrumb } from "../Breadcrumb.js";
import { BreadcrumbItem } from "../BreadcrumbItem.js";
import "../styles/_index.scss";
import React from "react";

const meta = {
    title: "Komponenter/Breadcrumb",
    component: Breadcrumb,
    subcomponents: { BreadcrumbItem },
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs", "links"],
} satisfies Meta<typeof Breadcrumb>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Story: Story = {
    name: "Breadcrumb",
    tags: ["visual"],
    args: {
        children: [
            <BreadcrumbItem key={0}>
                <a href="#top">Hjem</a>
            </BreadcrumbItem>,
            <BreadcrumbItem key={1}>
                <a href="#top">Komponenter</a>
            </BreadcrumbItem>,
            <BreadcrumbItem key={2}>
                <a href="#top" aria-current="page">
                    Breadcrumb
                </a>
            </BreadcrumbItem>,
        ],
    },
};

export const BreadCrumbItems: Story = {
    name: "Breadcrumb Item",
    args: {
        children: (
            <a href="#top" aria-current="page">
                Breadcrumb
            </a>
        ),
    },
    render: (args) => (
        <Breadcrumb>
            <BreadcrumbItem {...args} />
        </Breadcrumb>
    ),
};
