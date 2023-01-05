import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import React from "react";
import { act } from "react-dom/test-utils";
import { Accordion, AccordionItem } from ".";

describe("Accordion", () => {
    it("should render without exploding", () => {
        const { getByTestId, getByText } = render(
            <Accordion>
                <AccordionItem title="Hello">Something</AccordionItem>
            </Accordion>,
        );

        expect(getByTestId("jkl-accordion")).toBeInTheDocument();
        expect(getByText("Hello")).toBeInTheDocument();
        expect(getByText("Something")).toBeInTheDocument();
    });

    it("should apply custom classnames", () => {
        const { getByTestId } = render(
            <Accordion>
                <AccordionItem title="Hello" className="custom-class">
                    Something
                </AccordionItem>
            </Accordion>,
        );

        expect(getByTestId("jkl-accordion-item")).toHaveClass("custom-class");
    });

    it("should start closed as default", () => {
        const { getByTestId } = render(
            <Accordion>
                <AccordionItem title="Hello">Something</AccordionItem>
            </Accordion>,
        );

        expect(getByTestId("jkl-accordion-item__content-wrapper")).toHaveProperty("hidden", true);
    });

    it("should start open if told to", () => {
        const { getByTestId } = render(
            <Accordion>
                <AccordionItem startExpanded title="Hello">
                    Something
                </AccordionItem>
            </Accordion>,
        );

        expect(getByTestId("jkl-accordion-item__content-wrapper")).toHaveProperty("hidden", false);
    });

    it("onClick sends the open/closed state as an argument", async () => {
        let openingAccordion = false;

        const { getByRole } = render(
            <Accordion>
                <AccordionItem
                    title="Hello"
                    onClick={(e, isOpen) => {
                        openingAccordion = isOpen;
                    }}
                >
                    Something
                </AccordionItem>
            </Accordion>,
        );

        await act(async () => {
            await userEvent.click(getByRole("button"));
        });

        expect(openingAccordion).toBe(true);
    });

    it("should pass jest-axe tests in default state", async () => {
        const { container } = render(
            <Accordion>
                <AccordionItem title="Hello">Something</AccordionItem>
            </Accordion>,
        );

        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });

    it("should pass jest-axe tests in open state", async () => {
        const { container } = render(
            <Accordion>
                <AccordionItem startExpanded title="Hello">
                    Something
                </AccordionItem>
            </Accordion>,
        );

        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });
});
