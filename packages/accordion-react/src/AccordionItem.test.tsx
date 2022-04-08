import React from "react";
import { render, screen } from "@testing-library/react";
import { AccordionItem } from ".";
import { axe } from "jest-axe";
import { act } from "react-dom/test-utils";
import userEvent from "@testing-library/user-event";

describe("AccordionItem", () => {
    it("should render without exploding", () => {
        render(<AccordionItem title="Hello">Something</AccordionItem>);

        expect(screen.getByTestId("jkl-accordion-item")).toBeInTheDocument();
    });
    it("should apply custom classnames", () => {
        render(
            <AccordionItem title="Hello" className="custom-class">
                Something
            </AccordionItem>,
        );

        expect(screen.getByTestId("jkl-accordion-item")).toHaveClass("custom-class");
    });
    it("should render its children", () => {
        render(<AccordionItem title="Hello">Something</AccordionItem>);
        const child = screen.getByText("Something");

        expect(child).toBeInTheDocument();
    });
    it("should start closed as default", () => {
        render(<AccordionItem title="Hello">Something</AccordionItem>);
        const wrapper = screen.getByTestId("jkl-accordion-item__content-wrapper");

        expect(wrapper).toHaveProperty("hidden", true);
    });
    it("should return click event", async () => {
        let openingAccordion = false;
        render(
            <AccordionItem
                title="Hello"
                onClick={(e, isOpen) => {
                    openingAccordion = isOpen;
                }}
            >
                Something
            </AccordionItem>,
        );

        const button = screen.getByRole("button");
        await act(async () => {
            await userEvent.click(button);
        });

        expect(openingAccordion).toBe(true);
    });
    it("should start open if told to", () => {
        render(
            <AccordionItem startExpanded={true} title="Hello">
                Something
            </AccordionItem>,
        );
        const wrapper = screen.getByTestId("jkl-accordion-item__content-wrapper");

        expect(wrapper).toHaveProperty("hidden", false);
    });
});

describe("a11y", () => {
    it("accordion-item should be a11y compliant", async () => {
        const { container } = render(
            <AccordionItem title="Hello" startExpanded>
                Something
            </AccordionItem>,
        );
        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });
});
