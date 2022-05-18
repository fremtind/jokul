import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import React from "react";
import { Tabs, Tab, TabList, TabPanel } from ".";

const renderComponent = (onChange?: () => void) =>
    render(
        <Tabs onChange={onChange}>
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

        await act(async () => {
            await userEvent.click(screen.getByText("Tab 2"));
        });

        screen.getByText("Tabpanel 2");
        expect(screen.queryByText("Tabpanel 1")).toBeNull();
    });

    it("triggers onChange when changing tabs", async () => {
        const onChange = jest.fn();

        renderComponent(onChange);

        expect(onChange).not.toHaveBeenCalled();

        await act(async () => {
            await userEvent.click(screen.getByText("Tab 2"));
        });

        expect(onChange).toHaveBeenCalledWith(1);
    });
});

describe("a11y", () => {
    test("Tabs should be a11y compliant", async () => {
        const { container } = renderComponent();

        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });
});
