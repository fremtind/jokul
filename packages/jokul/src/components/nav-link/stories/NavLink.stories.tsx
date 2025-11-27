import type { Meta, StoryObj } from "@storybook/nextjs";
import { NavLink } from "../NavLink.js";
import "../styles/_index.scss";

const meta: Meta = {
    title: "Komponenter/NavLink",
    component: NavLink,
    args: {
        children: "NavLink",
        href: "https://www.fremtind.no",
        active: false,
        back: false,
    },
} satisfies Meta<typeof NavLink>;

export default meta;

type Story = StoryObj<typeof NavLink>;

export const _NavLink: Story = {};
