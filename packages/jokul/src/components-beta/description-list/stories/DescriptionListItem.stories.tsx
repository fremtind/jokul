import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { formatNumber } from "../../../utilities/index.js";
import { DescriptionListItem } from "../DescriptionListItem.jsx";
import { BETA_DescriptionList } from "../index.js";

import "../styles/_index.scss";

const meta: Meta = {
    title: "Beta/Description List/Description List Item",
    component: DescriptionListItem,
    parameters: {
        layout: "padded",
        docs: {
            controls: {
                sort: "requiredFirst",
            },
        },
    },
    args: {
        title: "Supergavekort fra GoGift",
        value: `${formatNumber(100150)} kr`,
        supportText: "",
    },
    decorators: [
        (Story) => (
            <BETA_DescriptionList alignment="horizontal">
                {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
                <Story />
            </BETA_DescriptionList>
        ),
    ],
    tags: ["autodocs", "grouping content"],
} satisfies Meta<typeof DescriptionListItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
