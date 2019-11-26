import React from "react";
import { cleanup, render } from "@testing-library/react";
import { InlineTextField } from ".";

describe("InlineTextField", () => {
    afterEach(cleanup);

    it("renders with correct label", () => {
        const { getByLabelText } = render(<InlineTextField label="The best label" />);

        const component = getByLabelText("The best label");
        expect(component).toBeInTheDocument();
    });

    it("uses the passed class name", () => {
        const { getByTestId } = render(<InlineTextField label="testing" className="test-class" />);

        const component = getByTestId("jkl-text-field");
        expect(component).toHaveClass("test-class");
    });

    it("renders as inline", () => {
        const { getByTestId } = render(<InlineTextField label="testing" />);

        const component = getByTestId("jkl-text-field");
        expect(component).toHaveClass("jkl-text-field--inline");
    });

    it("renders as compact when specified", () => {
        const { getByTestId } = render(<InlineTextField label="testing" forceCompact />);

        const component = getByTestId("jkl-text-field");
        expect(component).toHaveClass("jkl-text-field--compact");
    });

    it("has the max-length given", () => {
        const { getByLabelText } = render(<InlineTextField label="testing" maxLength={10} />);

        const component = getByLabelText("testing");
        expect(component).toHaveAttribute("maxlength", "10");
    });

    it("has the placeholder given", () => {
        const { getByLabelText } = render(<InlineTextField label="testing" placeholder="33" />);

        const component = getByLabelText("testing");
        expect(component).toHaveAttribute("placeholder", "33");
    });

    it("is read-only when specified", () => {
        const { getByLabelText } = render(<InlineTextField label="testing" readOnly />);

        const component = getByLabelText("testing");
        expect(component).toHaveAttribute("readonly");
    });

    it("has the value given", () => {
        const { getByLabelText } = render(<InlineTextField label="testing" value="3" onChange={() => {}} />);

        const component = getByLabelText("testing");
        expect(component).toHaveValue("3");
    });

    it("renders as invalid when specified", () => {
        const { getByLabelText } = render(<InlineTextField label="testing" invalid />);

        const component = getByLabelText("testing");
        expect(component).toHaveAttribute("aria-invalid", "true");
    });
});
