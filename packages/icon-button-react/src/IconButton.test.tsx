import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { IconButton } from ".";

describe("IconButton", () => {
    it("calls the onClick handler when clicked", async () => {
        const clickHandler = jest.fn();
        render(<IconButton iconType="calendar" buttonTitle="Åpne kalender" onClick={clickHandler} />);

        const button = screen.getByTestId("jkl-icon-button");

        await act(async () => {
            await userEvent.click(button);
        });

        expect(clickHandler).toHaveBeenCalled();
    });

    it("has search icon", () => {
        const clickHandler = jest.fn();
        render(<IconButton iconType="calendar" buttonTitle="Åpne kalender" onClick={clickHandler} />);

        const svg = screen.getByTestId("jkl-calendar-icon");

        expect(svg).toBeInTheDocument();
    });
});
