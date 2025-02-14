import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import {
    DescriptionDetail as DD,
    DescriptionList,
    DescriptionTerm as DT,
} from "../DescriptionList.js";
import "../styles/_index.scss";

const meta: Meta = {
    title: "Komponenter/DescriptionList",
    component: DescriptionList,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof DescriptionList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DescriptionListStory: Story = {
    name: "DescriptionList",
    render: () => (
        <DescriptionList>
            <DT>Dekning</DT>
            <DD>Kasko</DD>

            <DT>Egenandel</DT>
            <DD>2 000 kr for glass</DD>
            <DD>6 000 kr for øvrige skader</DD>

            <DT>Sjåfør under 23 år</DT>
            <DD>Nei</DD>
        </DescriptionList>
    ),
};
