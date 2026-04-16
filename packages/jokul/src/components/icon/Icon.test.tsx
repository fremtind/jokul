import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it } from "vitest";
import { GreenCheckIcon, Icon, RedCrossIcon } from "./index.js";

describe("Icon", () => {
    it("renders as the requested element type", () => {
        render(
            <Icon as="div" data-testid="icon">
                {"\ue5ca"}
            </Icon>,
        );

        const icon = screen.getByTestId("icon");

        expect(icon.tagName.toLowerCase()).toBe("div");
        expect(icon).not.toHaveAttribute("as");
    });

    it("GreenCheckIcon forwards the as prop without leaking it to the DOM", () => {
        render(<GreenCheckIcon as="div" data-testid="green-check" />);

        const icon = screen.getByTestId("green-check");

        expect(icon.tagName.toLowerCase()).toBe("div");
        expect(icon).not.toHaveAttribute("as");
    });

    it("RedCrossIcon forwards the as prop without leaking it to the DOM", () => {
        render(<RedCrossIcon as="div" data-testid="red-cross" />);

        const icon = screen.getByTestId("red-cross");

        expect(icon.tagName.toLowerCase()).toBe("div");
        expect(icon).not.toHaveAttribute("as");
    });
});
