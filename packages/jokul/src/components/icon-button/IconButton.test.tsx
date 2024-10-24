import { act, render, screen } from "@testing-library/react";
import UserEventModule from "@testing-library/user-event";
import React from "react";
import { describe, expect, it, vi } from "vitest";
import { SearchIcon } from "../icon/index.js";
import { IconButton } from "./IconButton.js";

// https://github.com/testing-library/user-event/issues/1146
const userEvent = UserEventModule.default ?? UserEventModule;

describe("IconButton", () => {
    it("calls the onClick handler when clicked", async () => {
        const clickHandler = vi.fn();
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
