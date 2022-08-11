import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import React from "react";
import { Dropdown } from ".";

describe("Dropdown", () => {
    it("should render", () => {
        render(<Dropdown>Edit me!</Dropdown>);

        screen.getByText("Edit me!");
    });
});

describe("a11y", () => {
    test("Dropdown should be a11y compliant", async () => {
        const { container } = render(<Dropdown>I am special</Dropdown>);
        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });
});
