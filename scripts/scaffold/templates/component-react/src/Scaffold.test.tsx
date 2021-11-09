import React from "react";
import { render, screen } from "@testing-library/react";
import { Scaffold } from ".";
import { axe } from "jest-axe";

describe("Scaffold", () => {
    it("should render", () => {
        render(<Scaffold>Edit me!</Scaffold>);

        screen.findByText("Edit me!");
    });
});

describe("a11y", () => {
    test("Scaffold should be a11y compliant", async () => {
        const { container } = render(<Scaffold>I am special</Scaffold>);
        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });
});
