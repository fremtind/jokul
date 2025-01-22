import { Meta, StoryObj } from "@storybook/react";
import { Link } from "../packages/jokul/src/components/link/Link";

const meta = {
    title: "Link",
    component: Link,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Regular: Story = {
    args: { external: false, children: "Lenke", as: "a" },
};
