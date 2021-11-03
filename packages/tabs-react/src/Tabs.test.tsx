import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Tabs, Tab, TabList, TabPanel } from ".";
import { axe } from "jest-axe";

const renderComponent = () =>
    render(
        <Tabs>
            <TabList aria-label="testlist">
                <Tab>Tab 1</Tab>
                <Tab>Tab 2</Tab>
                <Tab>Tab 3</Tab>
            </TabList>
            <TabPanel>Tabpanel 1</TabPanel>
            <TabPanel>Tabpanel 2</TabPanel>
            <TabPanel>Tabpanel 3</TabPanel>
        </Tabs>,
    );

describe("Tabs", () => {
    it("should render", async () => {
        renderComponent();

        ["Tab 1", "Tab 2", "Tab 3"].forEach((text) => screen.getByText(text));

        screen.getByText("Tabpanel 1");
        expect(screen.queryByText("Tabpanel 2")).toBeNull();

        fireEvent.click(screen.getByText("Tab 2"));

        screen.getByText("Tabpanel 2");
        expect(screen.queryByText("Tabpanel 1")).toBeNull();
    });
});

describe("a11y", () => {
    test("Tabs should be a11y compliant", async () => {
        const { container } = renderComponent();

        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });
});
