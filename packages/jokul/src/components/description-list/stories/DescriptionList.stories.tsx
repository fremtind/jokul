import type { Meta, StoryObj } from "@storybook/react";
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
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs", "grouping content"],
} satisfies Meta<typeof DescriptionList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DescriptionListStory: Story = {
    name: "DescriptionList",
    render: () => (
        <DescriptionList>
            <DescriptionTerm>Dekning</DescriptionTerm>
            <DescriptionDetail>Kasko</DescriptionDetail>

            <DescriptionTerm>Egenandel</DescriptionTerm>
            <DescriptionDetail>2 000 kr for glass</DescriptionDetail>
            <DescriptionDetail>6 000 kr for øvrige skader</DescriptionDetail>

            <DescriptionTerm>Sjåfør under 23 år</DescriptionTerm>
            <DescriptionDetail>Nei</DescriptionDetail>
        </DescriptionList>
    ),
};
