import type { Meta, StoryObj } from "@storybook/nextjs";
import { Link } from "../../../components/link/Link.js";
import { Breadcrumb } from "../Breadcrumb.js";
import { BreadcrumbItem } from "../BreadcrumbItem.js";
import "../styles/_index.scss";
import React from "react";

const meta = {
    title: "Komponenter/Breadcrumb",
    component: Breadcrumb,
    subcomponents: { BreadcrumbItem },
} satisfies Meta<typeof Breadcrumb>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _Breadcrumb: Story = {
    args: {
        children: [
            <BreadcrumbItem key={0}>
                <Link target="#top">Hjem</Link>
            </BreadcrumbItem>,
            <BreadcrumbItem key={1}>
                <Link target="#top">Komponenter</Link>
            </BreadcrumbItem>,
            <BreadcrumbItem key={2}>
                <Link target="#top">Breadcrumb</Link>
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
