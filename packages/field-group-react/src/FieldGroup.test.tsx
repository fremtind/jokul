import React from "react";
import { cleanup, render } from "@testing-library/react";
import { FieldGroup } from "./FieldGroup";
import { axe } from "jest-axe";

afterEach(cleanup);

describe("FieldGroup", () => {
    it("should render the correct legend", () => {
        const { getByText } = render(<FieldGroup legend="Hello"></FieldGroup>);

        expect(getByText("Hello")).toBeInTheDocument;
    });
    it("should render the correct help text", () => {
        const { getByText } = render(<FieldGroup legend="Hello" helpLabel="Helpful text"></FieldGroup>);

        expect(getByText("Helpful text")).toBeInTheDocument;
    });
    it("should render the correct error text", () => {
        const { getByText } = render(<FieldGroup legend="Hello" errorLabel="Helpful suggestion"></FieldGroup>);

        expect(getByText("Helpful suggestion")).toBeInTheDocument;
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
});

describe("a11y", () => {
    it("field group should be a11y compliant", async () => {
        const { container } = render(<FieldGroup legend="hello"></FieldGroup>);
        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });

    it("compact field group should be a11y compliant", async () => {
        const { container } = render(<FieldGroup legend="hello" forceCompact></FieldGroup>);
        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });
});
