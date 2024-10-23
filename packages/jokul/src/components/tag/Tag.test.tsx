import { render, screen, waitFor } from "@testing-library/react";
import UserEventModule from "@testing-library/user-event";
import React from "react";
import { Tag } from "./Tag.js";

// https://github.com/testing-library/user-event/issues/1146
const userEvent = UserEventModule.default ?? UserEventModule;

describe("Tag", () => {
    it("handles clicking the dismiss button", async () => {
        const dismissed = jest.fn();
        render(<Tag dismissAction={{ label: "Fjern", onClick: dismissed }} />);

        const button = screen.getByRole("button");
        userEvent.click(button);

        await waitFor(() => {
            expect(dismissed).toHaveBeenCalled();
        });
    });
});
