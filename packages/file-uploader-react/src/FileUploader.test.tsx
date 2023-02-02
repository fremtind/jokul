import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import React from "react";
import { FileUploader } from ".";

describe("FileUploader", () => {
    it("should render", () => {
        render(<FileUploader>Edit me!</FileUploader>);

        screen.getByText("Edit me!");
    });
});

describe("a11y", () => {
    test("FileUploader should be a11y compliant", async () => {
        const { container } = render(<FileUploader>I am special</FileUploader>);
        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });
});
