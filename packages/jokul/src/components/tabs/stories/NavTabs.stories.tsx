import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import "../styles/_index.scss";
import { NavTab } from "../NavTab.js";
import { NavTabs as Tabs } from "../NavTabs.js";

const meta = {
    title: "Komponenter/Tabs/NavTabs",
    component: Tabs,
    subcomponents: {
        NavTab,
    },
    tags: ["autodocs"],
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TabsStory: Story = {
    name: "NavTabs",
    args: {
        children: <p>e</p>,
    },
    render: (args) => (
        <Tabs {...args}>
            <NavTab aria-selected={true}>Alle</NavTab>
            <NavTab aria-selected={false}>NICE</NavTab>
            <NavTab aria-selected={false}>Prolife</NavTab>
        </Tabs>
    ),
};
