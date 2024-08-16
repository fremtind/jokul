import { render, RenderOptions } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import React from "react";
import { Popover } from ".";

function setup(jsx: JSX.Element, renderOptions?: RenderOptions) {
    return {
        user: userEvent.setup(),
        ...render(jsx, renderOptions),
    };
}

describe("Popover", () => {
    it("should render", () => {
        const { getByText } = setup(<Popover>Edit me!</Popover>);

        getByText("Edit me!");
    });

    it("should pass jest-axe tests in default state", async () => {
        const { container } = setup(<Popover>Edit me!</Popover>);

        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });
});
