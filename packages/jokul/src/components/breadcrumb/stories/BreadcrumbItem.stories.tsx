import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { BreadcrumbItem as BreadcrumbItemComponent } from "../BreadcrumbItem.js";
import "../styles/_index.scss";
import { Breadcrumb } from "../Breadcrumb.js";

const meta = {
    title: "Komponenter/Breadcrumb/BreadcrumbItem",
    component: BreadcrumbItemComponent,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        isLastElement: {
            control: "boolean",
        },
    },
} satisfies Meta<typeof BreadcrumbItemComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BreadcrumbItem: Story = {
    args: {
        children: <a href="/komponenter/accordion">Komponenter</a>,
    },
    decorators: (Story) => (
        <Breadcrumb>
            <Story />
        </Breadcrumb>
    ),
};
