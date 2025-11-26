import type { Meta, StoryObj } from "@storybook/react";
import { Tag } from "../Tag.js";

import "../styles/_index.scss";

const meta = {
    title: "Komponenter/Tag",
    component: Tag,
    tags: ["autodocs"],
    args: {
        children: "Under behandling",
        variant: "neutral",
    },
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _Story: Story = {};
