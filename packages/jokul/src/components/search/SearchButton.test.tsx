import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it } from "vitest";
import { SearchButton } from "./SearchButton.js";

describe("SearchButton", () => {
    it("marks the button as trackable", () => {
        render(<SearchButton />);

        expect(screen.getByRole("button", { name: "Søk" })).toHaveAttribute(
            "data-jkl-tracked",
            "SearchButton",
        );
    });
});
