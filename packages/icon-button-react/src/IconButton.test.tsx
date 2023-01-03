import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { SearchIcon } from "../../icons-react/src/icons/search/SearchIcon";
import { IconButton } from ".";

describe("IconButton", () => {
    it("calls the onClick handler when clicked", async () => {
        const clickHandler = jest.fn();
        render(
            <IconButton title="Søk" onClick={clickHandler}>
                <SearchIcon />
            </IconButton>,
        );

        const button = screen.getByRole("button");

        await act(async () => {
            await userEvent.click(button);
        });

        expect(clickHandler).toHaveBeenCalled();
    });
});
