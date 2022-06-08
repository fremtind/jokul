import { Select } from "@fremtind/jkl-select-react";
import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { Accordion, AccordionItem } from ".";

describe("Accordion", () => {
    it("should render without exploding", () => {
        render(<Accordion>Hello</Accordion>);

        expect(screen.getByTestId("jkl-accordion")).toBeInTheDocument();
    });
    it("should render its children", () => {
        render(<Accordion>Hello</Accordion>);

        expect(screen.getByText("Hello")).toBeInTheDocument();
    });
    it("should support toggling a Select inside an AccordionItem without getting stuck in a render-loop (#1466)", async () => {
        render(
            <Accordion>
                <AccordionItem title="Velg tingen" startExpanded>
                    <Select name="ting" items={[{ label: "Item 3", value: "3" }]} label="Ting" />
                </AccordionItem>
            </Accordion>,
        );

        await act(async () => {
            const button = screen.getByTestId("jkl-select__button");
            await userEvent.click(button);
        });

        expect(screen.getByTestId("jkl-select__button")).toBeVisible();
    });
});
