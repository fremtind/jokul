import type { Meta, StoryObj } from "@storybook/nextjs";
import React from "react";
import { formatNumber } from "../../../utilities/index.js";
import { DescriptionList, DescriptionListItem } from "../index.js";

import "../styles/_index.scss";

const meta: Meta = {
    title: "Komponenter/Description List/Item",
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
        terms: "Supergavekort fra GoGift",
        details: `${formatNumber(100150)} kr`,
        supportText: "",
    },
    decorators: [
        (Story) => (
            <DescriptionList alignment="horizontal">
                {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
                <Story />
            </DescriptionList>
        ),
    ],
    tags: ["autodocs", "grouping content"],
} satisfies Meta<typeof DescriptionListItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
