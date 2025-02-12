import type { Meta, StoryObj } from "@storybook/react";
import { Breadcrumb as BreadcrumbComponent } from "../Breadcrumb.js";
import { BreadcrumbItem } from "../BreadcrumbItem.js";
import "../styles/_index.scss";
import React from "react";

const meta = {
    title: "Komponenter/Breadcrumb/Breadcrumb",
    component: BreadcrumbComponent,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof BreadcrumbComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Breadcrumb: Story = {
    args: {
        children: [
            <BreadcrumbItem key={0}>
                <a href="/">Hjem</a>
            </BreadcrumbItem>,
            <BreadcrumbItem key={1}>
                <a href="/komponenter/accordion">Komponenter</a>
            </BreadcrumbItem>,
            <BreadcrumbItem key={2}>
                <a href="/komponenter/breadcrumb">Breadcrumb</a>
            </BreadcrumbItem>,
        ],
    },
};
