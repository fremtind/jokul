import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import { IconButton } from ".";

afterEach(cleanup);

describe("IconButton", () => {
    it("calls the onClick handler when clicked", () => {
        const clickHandler = jest.fn();
        render(<IconButton iconType="clear" buttonTitle="I am groot!" onClick={clickHandler} />);

        const button = screen.getByTestId("jkl-icon-button");

        button.click();

        expect(clickHandler).toHaveBeenCalled();
    });

    it("has search icon", () => {
        const clickHandler = jest.fn();
        render(<IconButton iconType="search" buttonTitle="I am groot!" onClick={clickHandler} />);

        const svg = screen.getByTestId("jkl-search-icon");

        expect(svg).toBeInTheDocument();
    });
});
