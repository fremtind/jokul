import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import "../styles/_index.scss";
import { Tab } from "../Tab.js";
import { TabList } from "../TabList.js";
import { TabPanel } from "../TabPanel.js";
import { Tabs } from "../Tabs.js";

const meta = {
    title: "Komponenter/Tabs/Tabs",
    component: Tabs,
    subcomponents: {
        TabList,
        TabPanel,
        Tab,
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
    tags: ["autodocs"],
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TabsStory: Story = {
    name: "Tabs",
    args: {
        children: <p></p>,
    },
    render: (args) => (
        <div style={{ maxWidth: "300px" }}>
            <Tabs {...args}>
                <TabList aria-label="Avtale-filter">
                    <Tab>Alle avtaler</Tab>
                    <Tab>NICE</Tab>
                    <Tab>Prolife</Tab>
                    <Tab>Paris</Tab>
                </TabList>

                <TabPanel>Alle avtaler</TabPanel>

                <TabPanel>NICE-avtaler</TabPanel>

                <TabPanel>Prolife-avtaler</TabPanel>

                <TabPanel>Paris-avtaler</TabPanel>
            </Tabs>
        </div>
    ),
};
