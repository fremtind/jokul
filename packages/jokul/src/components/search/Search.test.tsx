import { render, screen } from "@testing-library/react";
import UserEventModule from "@testing-library/user-event";
import React from "react";
import { describe, expect, it } from "vitest";
import { Search } from "./Search.js";

// https://github.com/testing-library/user-event/issues/1146
// @ts-ignore typecheck liker ikke at default muligens ikke finnes
const userEvent = UserEventModule.default ?? UserEventModule;

const clearButton = () =>
    screen.getByRole("button", { name: "Tilbakestill søkefeltet" });

describe("Search", () => {
    it("clears the field when the reset button is clicked", async () => {
        render(<Search label="Søk" defaultValue="Reiseforsikring" />);

        await userEvent.click(clearButton());

        expect(screen.getByRole("searchbox")).toHaveValue("");
    });

    it("does not clear a read-only field", async () => {
        render(<Search label="Søk" defaultValue="Reiseforsikring" readOnly />);

        expect(clearButton()).toBeDisabled();

        await userEvent.click(clearButton());

        expect(screen.getByRole("searchbox")).toHaveValue("Reiseforsikring");
    });

    it("does not clear a disabled field", async () => {
        render(<Search label="Søk" defaultValue="Reiseforsikring" disabled />);

        expect(clearButton()).toBeDisabled();

        await userEvent.click(clearButton());

        expect(screen.getByRole("searchbox")).toHaveValue("Reiseforsikring");
    });
});
