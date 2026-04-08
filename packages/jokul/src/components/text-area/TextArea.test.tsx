import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it } from "vitest";
import { axe } from "vitest-axe";
import { TextArea } from "./TextArea.js";

describe("TextArea", () => {
    it("renders with correct label", () => {
        render(<TextArea label="Cool text area" />);

        expect(screen.getByLabelText("Cool text area")).toBeInTheDocument();
    });

    it("uses the passed class name", () => {
        render(<TextArea label="testing" className="test-class" />);

        const component = screen.getByTestId("jkl-text-area");
        expect(component).toHaveClass("test-class");
    });

    it("supports labels only for screen readers", () => {
        render(<TextArea label="testing" labelProps={{ srOnly: true }} />);

        const label = screen.getByText("testing");
        expect(label).toHaveClass("jkl-label--sr-only");
    });

    it("renders with an empty placeholder for CSS selector reasons, so expand animation works", () => {
        const { getByRole } = render(<TextArea label="Cool text area" />);

        const textArea = getByRole("textbox");

        expect(textArea.getAttribute("placeholder")).toEqual(" ");
    });

    it("uses character counting by default", () => {
        render(
            <TextArea
                label="testing"
                counter={{ maxLength: 4 }}
                value="😀😀"
                readOnly
            />,
        );

        expect(screen.getByText(/4\s*\/\s*4/)).toBeInTheDocument();
    });

    it("supports counting UTF-8 bytes", () => {
        render(
            <TextArea
                label="testing"
                counter={{ maxLength: 4, strategy: "bytes" }}
                value="😀"
                readOnly
            />,
        );

        expect(screen.getByText(/4\s*\/\s*4/)).toBeInTheDocument();
    });

    it("updates the counter when a controlled value changes", () => {
        const { rerender } = render(
            <TextArea
                label="testing"
                counter={{ maxLength: 10 }}
                value="hei"
                readOnly
            />,
        );

        expect(screen.getByText(/3\s*\/\s*10/)).toBeInTheDocument();

        rerender(
            <TextArea
                label="testing"
                counter={{ maxLength: 10 }}
                value="heihei"
                readOnly
            />,
        );

        expect(screen.getByText(/6\s*\/\s*10/)).toBeInTheDocument();
    });

    it("updates the counter when the strategy changes for a controlled value", () => {
        const { rerender } = render(
            <TextArea
                label="testing"
                counter={{ maxLength: 6 }}
                value="æøå"
                readOnly
            />,
        );

        expect(screen.getByText(/3\s*\/\s*6/)).toBeInTheDocument();

        rerender(
            <TextArea
                label="testing"
                counter={{ maxLength: 6, strategy: "bytes" }}
                value="æøå"
                readOnly
            />,
        );

        expect(screen.getByText(/6\s*\/\s*6/)).toBeInTheDocument();
    });

    it("uses defaultValue for the counter in uncontrolled mode", () => {
        render(
            <TextArea
                label="testing"
                counter={{ maxLength: 10, strategy: "bytes" }}
                defaultValue="æøå"
            />,
        );

        expect(screen.getByText(/6\s*\/\s*10/)).toBeInTheDocument();
    });
});

describe("a11y", () => {
    it("text-area should be a11y compliant", async () => {
        const { container } = render(
            <TextArea label="testing" helpLabel="tips" />,
        );
        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });

    it("text-area with counter should be a11y compliant", async () => {
        const { container } = render(
            <TextArea
                label="testing"
                helpLabel="tips"
                counter={{ maxLength: 200 }}
            />,
        );
        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });
});
