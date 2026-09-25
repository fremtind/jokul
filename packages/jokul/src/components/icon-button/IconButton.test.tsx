import { act, render, screen } from "@testing-library/react";
import UserEventModule from "@testing-library/user-event";
import React from "react";
import { describe, expect, it, vi } from "vitest";
import { SearchIcon } from "../icon/index.js";
import { IconButton } from "./IconButton.js";

// https://github.com/testing-library/user-event/issues/1146
// @ts-ignore typecheck liker ikke at default muligens ikke finnes
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

    describe("tracking", () => {
        it("merker ikonknappen som sporbar", () => {
            render(
                <IconButton title="Søk">
                    <SearchIcon />
                </IconButton>,
            );

            const button = screen.getByRole("button");
            expect(button).toHaveAttribute("data-jkl-tracked", "IconButton");
        });

        it("setter data-jkl-has-icon kun når ikonknappen har innhold", () => {
            const { rerender } = render(<IconButton title="Søk" />);

            expect(screen.getByRole("button")).not.toHaveAttribute(
                "data-jkl-has-icon",
            );

            rerender(
                <IconButton title="Søk">
                    <SearchIcon />
                </IconButton>,
            );

            expect(screen.getByRole("button")).toHaveAttribute(
                "data-jkl-has-icon",
                "true",
            );
        });

        it("setter data-jkl-tracking som JSON kun når tracking-propen er gitt", () => {
            const { rerender } = render(<IconButton title="Søk" />);

            expect(screen.getByRole("button")).not.toHaveAttribute(
                "data-jkl-tracking",
            );

            rerender(
                <IconButton title="Søk" tracking={{ source: "search" }}>
                    <SearchIcon />
                </IconButton>,
            );

            expect(screen.getByRole("button")).toHaveAttribute(
                "data-jkl-tracking",
                JSON.stringify({ source: "search" }),
            );
        });
    });
});
