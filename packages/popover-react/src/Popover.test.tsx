import { render, screen } from "@testing-library/react";
import React from "react";
import { Popover } from ".";

describe("Popover", () => {
    test("open", () => {
        render(
            <Popover open data-testid="popover-id">
                <div />
            </Popover>,
        );

        expect(screen.getByTestId("popover-id")).toBeVisible();
    });
});
