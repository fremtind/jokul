import type { Meta, StoryObj } from "@storybook/react";
import { DescriptionListItem } from "../DescriptionListItem.jsx";

import "../styles/_index.scss";

const meta: Meta = {
    title: "Beta/Description List/Description List Item",
    component: DescriptionListItem,
    parameters: {
        layout: "padded",
    },
    args: {
        title: "Forsikring",
        value: "Hundeforsikring",
    },
    tags: ["autodocs", "grouping content"],
} satisfies Meta<typeof DescriptionListItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DescriptionListStory: Story = {
    name: "DescriptionList",
};
