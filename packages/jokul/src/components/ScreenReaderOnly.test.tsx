import { render } from "@testing-library/react";
import React from "react";
import { describe, expect, it } from "vitest";
import { axe } from "vitest-axe";
import { ScreenReaderOnly } from "./ScreenReaderOnly.js";

describe("ScreenReaderOnly", () => {
    it("should show content with correct className", () => {
        const { getByText } = render(<ScreenReaderOnly>Visually hidden</ScreenReaderOnly>);

        const hiddenText = getByText("Visually hidden");

        expect(hiddenText).toHaveAttribute("class", "jkl-sr-only");
    });

    it("should show content with correct className", () => {
        const { getByText } = render(<ScreenReaderOnly showOnFocus>Visually hidden, unless focused</ScreenReaderOnly>);

        const hiddenText = getByText("Visually hidden, unless focused");

        expect(hiddenText).toHaveAttribute("class", "jkl-sr-only jkl-sr-only--focusable");
    });

    it("should pass vi-axe tests in default state", async () => {
        const { container } = render(<ScreenReaderOnly>Visually hidden</ScreenReaderOnly>);

        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });

    it("should pass vi-axe tests when focusable", async () => {
        const { container } = render(<ScreenReaderOnly showOnFocus>Visually hidden, unless focused</ScreenReaderOnly>);

        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });
});
