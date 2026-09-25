import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it } from "vitest";
import { DismissButton } from "./DismissButton.js";

describe("DismissButton", () => {
    describe("tracking", () => {
        it("merker lukkeknappen som sporbar", () => {
            render(<DismissButton />);

            expect(
                screen.getByRole("button", { name: "Lukk" }),
            ).toHaveAttribute("data-jkl-tracked", "DismissButton");
        });
    });
});
