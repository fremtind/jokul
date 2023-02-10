import { render } from "@testing-library/react";
import { axe } from "jest-axe";
import React from "react";
import { Scaffold } from ".";

describe("Scaffold", () => {
    it("should render", () => {
        const { getByText } = render(<Scaffold>Edit me!</Scaffold>);

        getByText("Edit me!");
    });

    it("should pass jest-axe tests in default state", async () => {
        const { container } = render(<Scaffold>Edit me!</Scaffold>);

        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });
});
