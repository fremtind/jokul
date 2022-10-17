import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import React from "react";
import { Transitions } from ".";

describe("Transitions", () => {
    it("should render", () => {
        render(<Transitions>Edit me!</Transitions>);

        screen.getByText("Edit me!");
    });
});

describe("a11y", () => {
    test("Transitions should be a11y compliant", async () => {
        const { container } = render(<Transitions>I am special</Transitions>);
        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });
});
