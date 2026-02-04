import type { Meta, StoryObj } from "@storybook/nextjs";
import React from "react";
import { Tab } from "../Tab.js";
import { TabList } from "../TabList.js";
import { TabPanel } from "../TabPanel.js";
import { Tabs } from "../Tabs.js";
import { fewTabsLength, manyTabsLength, tabContents } from "./tabs.data.js";

import "../styles/_index.scss";

const meta = {
    title: "Komponenter/Tabs",
    component: Tabs,
    subcomponents: {
        TabList,
        TabPanel,
        Tab,
    },
    args: {
        children: (
            <Tabs>
                <TabList>
                    {[...Array(fewTabsLength)].map((_, i) => (
                        <Tab key={i}>Tab {i}</Tab>
                    ))}
                </TabList>

                {[...Array(fewTabsLength)].map((_, i) => tabContents(i))}
            </Tabs>
        ),
    },
    argTypes: {
        defaultTab: {
            control: "number",
            table: {
                defaultValue: {
                    summary: undefined,
                },
            },
        },
    },
    parameters: {
        layout: "fullscreen",
    },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TabsStory: Story = {
    name: "Tabs",
};

export const ManyTabsStory: Story = {
    name: "Mange tabs",
    args: {
        children: (
            <Tabs>
                <TabList>
                    {[...Array(manyTabsLength)].map((_, i) => (
                        <Tab key={i}>Tab {i}</Tab>
                    ))}
                </TabList>

                {[...Array(manyTabsLength)].map((_, i) => tabContents(i))}
            </Tabs>
        ),
    },
};
