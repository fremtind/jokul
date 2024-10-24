import { render, waitFor } from "@testing-library/react";
import UserEventModule from "@testing-library/user-event";
import React from "react";
import { act } from "react-dom/test-utils";
import { describe, expect, it } from "vitest";
import { axe } from "vitest-axe";
import { Accordion } from "./Accordion.js";
import { AccordionItem } from "./AccordionItem.js";

// https://github.com/testing-library/user-event/issues/1146
// @ts-ignore typecheck liker ikke at default muligens ikke finnes
const userEvent = UserEventModule.default ?? UserEventModule;

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

        expect(getByTestId("jkl-accordion-item")).toHaveProperty("open", false);
    });

    it("should start open if told to", () => {
        const { getByTestId } = render(
            <Accordion>
                <AccordionItem startExpanded title="Hello">
                    Something
                </AccordionItem>
            </Accordion>,
        );

        expect(getByTestId("jkl-accordion-item")).toHaveProperty("open", true);
    });

    it("onClick sends the open/closed state as an argument", async () => {
        let openingAccordion = false;

        const { getByText } = render(
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
            await userEvent.click(getByText("Hello"));
        });

        await waitFor(() => expect(openingAccordion).toBe(true));
    });

    it("should pass vitest-axe tests in default state", async () => {
        const { container } = render(
            <Accordion>
                <AccordionItem title="Hello">Something</AccordionItem>
            </Accordion>,
        );

        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });

    it("should pass vitest-axe tests in open state", async () => {
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
