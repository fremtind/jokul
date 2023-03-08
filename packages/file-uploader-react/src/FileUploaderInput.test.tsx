import { render, RenderOptions } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import React from "react";
import { FileUploaderInput } from ".";

function setup(jsx: JSX.Element, renderOptions?: RenderOptions) {
    return {
        user: userEvent.setup(),
        ...render(jsx, renderOptions),
    };
}

describe("FileUploaderInput", () => {
    it("should render", () => {
        const onChange = jest.fn();
        const { getByText } = setup(<FileUploaderInput onChange={onChange} />);

        expect(getByText("Legg til fil")).toBeInTheDocument();
    });

    it("should pass jext-axe tests in default state", async () => {
        const onChange = jest.fn();
        const { container } = setup(<FileUploaderInput onChange={onChange} />);

        const result = await axe(container);

        expect(result).toHaveNoViolations();
    });
});
