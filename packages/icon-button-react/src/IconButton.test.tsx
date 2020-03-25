import React from "react";
import { cleanup, render } from "@testing-library/react";
import { IconButton } from ".";

afterEach(cleanup);

describe("IconButton", () => {
    it("calls the onClick handler when clicked", () => {
        const clickHandler = jest.fn();
        const { getByTestId } = render(<IconButton iconType="clear" buttonTitle="I am groot!" onClick={clickHandler} />);

        const button = getByTestId("jkl-icon-button");

        button.click();

        expect(clickHandler).toHaveBeenCalled();
    });
});
