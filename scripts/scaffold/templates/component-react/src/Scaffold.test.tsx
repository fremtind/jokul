import { render, RenderOptions } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import React from "react";
import { Scaffold } from ".";

function setup(jsx: JSX.Element, renderOptions?: RenderOptions) {
    return {
        user: userEvent.setup(),
        ...render(jsx, renderOptions),
    };
}

describe("Scaffold", () => {
    it("should render", () => {
        const { getByText } = setup(<Scaffold>Edit me!</Scaffold>);

        getByText("Edit me!");
    });

    it("should pass jest-axe tests in default state", async () => {
        const { container } = setup(<Scaffold>Edit me!</Scaffold>);

        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });
});
