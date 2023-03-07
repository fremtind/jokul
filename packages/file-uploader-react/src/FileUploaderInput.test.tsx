import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import React from "react";
import { FileUploaderInput } from ".";

describe("FileUploaderInput", () => {
    it("should render", () => {
        const onChange = jest.fn();
        render(<FileUploaderInput onChange={onChange} />);

        screen.getByText("Edit me!");
    });
});

describe("a11y", () => {
    test("FileUploaderInput should be a11y compliant", async () => {
        const onChange = jest.fn();

        const { container } = render(<FileUploaderInput onChange={onChange} />);

        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });
});
