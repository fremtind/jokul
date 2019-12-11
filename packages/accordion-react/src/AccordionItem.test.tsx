import React from "react";
import { cleanup, render } from "@testing-library/react";
import { AccordionItem } from ".";

afterEach(cleanup);

describe("AccordionItem", () => {
    it("should render without exploding", () => {
        const { getByTestId } = render(<AccordionItem title="Hello">Something</AccordionItem>);

        expect(getByTestId("jkl-accordion-item")).toBeInTheDocument();
    });
    it("should apply custom classnames", () => {
        const { getByTestId } = render(
            <AccordionItem title="Hello" className="custom-class">
                Something
            </AccordionItem>,
        );

        expect(getByTestId("jkl-accordion-item")).toHaveClass("custom-class");
    });
    it("should render its children", () => {
        const { getByText } = render(<AccordionItem title="Hello">Something</AccordionItem>);
        const child = getByText("Something");

        expect(child).toBeInTheDocument();
    });
    it("should start closed as default", () => {
        const { getByTestId } = render(<AccordionItem title="Hello">Something</AccordionItem>);
        const wrapper = getByTestId("jkl-accordion-item__content-wrapper");

        expect(wrapper).toHaveProperty("hidden", true);
    });
    it("should start open if told to", () => {
        const { getByTestId } = render(
            <AccordionItem startExpanded={true} title="Hello">
                Something
            </AccordionItem>,
        );
        const wrapper = getByTestId("jkl-accordion-item__content-wrapper");

        expect(wrapper).toHaveProperty("hidden", false);
    });
});
