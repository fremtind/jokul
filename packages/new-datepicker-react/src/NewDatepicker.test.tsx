import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import React from "react";
import { NewDatepicker } from ".";

describe("NewDatepicker", () => {
    it("should render", () => {
        render(<NewDatepicker>Edit me!</NewDatepicker>);

        screen.getByText("Edit me!");
    });
});

describe("a11y", () => {
    test("NewDatepicker should be a11y compliant", async () => {
        const { container } = render(<NewDatepicker>I am special</NewDatepicker>);
        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });
});
