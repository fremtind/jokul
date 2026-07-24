import type { Meta, StoryObj } from "@storybook/nextjs";
import { Help } from "../Help.js";
import "../styles/_index.scss";

const meta = {
    title: "Komponenter/Help",
    component: Help,
    args: {
        position: "top",
        buttonText: "Hjelp",
        children: "Jeg er en hjelpetekst",
    },
} satisfies Meta<typeof Help>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _Help: Story = {};
