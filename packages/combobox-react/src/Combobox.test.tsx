import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import React from "react";
import { Combobox } from ".";

describe("Combobox", () => {
    it("should render", () => {
        render(<Combobox>Edit me!</Combobox>);

        screen.getByText("Edit me!");
    });
});

describe("a11y", () => {
    test("Combobox should be a11y compliant", async () => {
        const { container } = render(<Combobox>I am special</Combobox>);
        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });
});
