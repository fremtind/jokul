import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import React from "react";
import { FieldGroup } from "./FieldGroup.js";

describe("FieldGroup", () => {
    it("should render the correct legend", () => {
        render(<FieldGroup legend="Hello"></FieldGroup>);

        expect(screen.getByText("Hello")).toBeInTheDocument;
    });
    it("supports legend only for screen readers", () => {
        render(<FieldGroup legend="Hello" labelProps={{ srOnly: true }}></FieldGroup>);

        const label = screen.getByText("Hello");
        expect(label).toHaveClass("jkl-label--sr-only");
    });
    it("should render the correct help text", () => {
        render(<FieldGroup legend="Hello" helpLabel="Helpful text"></FieldGroup>);

        expect(screen.getByText("Helpful text")).toBeInTheDocument;
    });
    it("should render the correct error text", () => {
        render(<FieldGroup legend="Hello" errorLabel="Helpful suggestion"></FieldGroup>);

        expect(screen.getByText("Helpful suggestion")).toBeInTheDocument;
    });
    it("should not render help text when there is an error text", () => {
        const { queryByText } = render(
            <FieldGroup legend="Hello" helpLabel="Helpful text" errorLabel="Helpful suggestion"></FieldGroup>,
        );

        expect(queryByText("Helpful text")).not.toBeInTheDocument;
        expect(queryByText("Helpful suggestion")).toBeInTheDocument;
    });
    it("should render supplied className", () => {
        const { container } = render(<FieldGroup legend="Hello" className="this-is--a-class"></FieldGroup>);
        expect(container.firstChild).toHaveClass("this-is--a-class");
    });
    it("should have data-testautoid", () => {
        render(
            <FieldGroup
                legend="Hello"
                className="this-is--a-class"
                data-testautoid="jkl-fieldgroup__testautoid"
            ></FieldGroup>,
        );
        const fieldGroup = document.getElementsByClassName("this-is--a-class")[0];
        const testAutoId = fieldGroup.getAttribute("data-testautoid");
        expect(testAutoId).toEqual("jkl-fieldgroup__testautoid");
    });
});

describe("a11y", () => {
    it("field group should be a11y compliant", async () => {
        const { container } = render(<FieldGroup legend="hello"></FieldGroup>);
        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });

    it("compact field group should be a11y compliant", async () => {
        const { container } = render(<FieldGroup legend="hello" density="compact"></FieldGroup>);
        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });
});
