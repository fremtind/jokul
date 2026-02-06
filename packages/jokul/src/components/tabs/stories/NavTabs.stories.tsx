import type { Meta, StoryObj } from "@storybook/nextjs";
import React from "react";
import "../styles/_index.scss";
import { NavTab } from "../NavTab.js";
import { NavTabs as Tabs } from "../NavTabs.js";

const meta = {
    title: "Komponenter/Tabs/Nav Tabs",
    component: Tabs,
    subcomponents: {
        NavTab,
    },
    args: {
        children: (
            <Tabs>
                <NavTab aria-selected={true}>Alle</NavTab>
                <NavTab aria-selected={false}>NICE</NavTab>
                <NavTab aria-selected={false}>Prolife</NavTab>
            </Tabs>
        ),
    },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TabsStory: Story = {
    name: "NavTabs",
};
