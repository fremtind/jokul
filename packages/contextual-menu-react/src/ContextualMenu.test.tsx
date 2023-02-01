import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import React from "react";
import { ContextualMenu } from ".";

describe("ContextualMenu", () => {
    it("should render", () => {
        render(<ContextualMenu>Edit me!</ContextualMenu>);

        screen.getByText("Edit me!");
    });
});

describe("a11y", () => {
    test("ContextualMenu should be a11y compliant", async () => {
        const { container } = render(<ContextualMenu>I am special</ContextualMenu>);
        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });
});
