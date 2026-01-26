import type { Meta, StoryObj } from "@storybook/nextjs";
import React from "react";
import {
    DescriptionDetail,
    DescriptionList,
    DescriptionTerm,
} from "../DescriptionList.js";
import "../styles/_index.scss";

const meta: Meta = {
    title: "Komponenter/DescriptionList",
    component: DescriptionList,
    subcomponents: {
        DescriptionDetail,
        DescriptionTerm,
    },
    args: {
        alignment: "horizontal",
        separators: false,
    },
    argTypes: {
        alignment: {
            options: ["horizontal", "vertical", "justified"],
        },
    },
} satisfies Meta<typeof DescriptionList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DescriptionListStory: Story = {
    name: "DescriptionList",
    parameters: {
        layout: "padded",
    },
    args: {
        separators: true,
    },
    render: (args) => (
        <DescriptionList {...args}>
            <DescriptionTerm>Dekning</DescriptionTerm>
            <DescriptionDetail>Kasko</DescriptionDetail>

            <DescriptionTerm>Egenandel</DescriptionTerm>
            <DescriptionTerm>Egenandel</DescriptionTerm>
            <DescriptionTerm>Egenandel</DescriptionTerm>
            <DescriptionDetail>2 000 kr for glass</DescriptionDetail>
            <DescriptionDetail>6 000 kr for øvrige skader</DescriptionDetail>
            <DescriptionDetail>6 000 kr for øvrige skader</DescriptionDetail>
            <DescriptionDetail>6 000 kr for øvrige skader</DescriptionDetail>
            <DescriptionDetail>6 000 kr for øvrige skader</DescriptionDetail>
            <DescriptionDetail>6 000 kr for øvrige skader</DescriptionDetail>

            <DescriptionTerm>Sjåfør under 23 år</DescriptionTerm>
            <DescriptionDetail>Nei</DescriptionDetail>
        </DescriptionList>
    ),
};
