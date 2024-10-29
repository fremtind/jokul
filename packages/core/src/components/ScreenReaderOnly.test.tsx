import { render } from "@testing-library/react";
import { axe } from "jest-axe";
import React from "react";
import { ScreenReaderOnly } from "./ScreenReaderOnly";

describe("ScreenReaderOnly", () => {
    it("should show content with correct className", () => {
        const { getByText } = render(
            <ScreenReaderOnly>Visually hidden</ScreenReaderOnly>,
        );

        const hiddenText = getByText("Visually hidden");

        expect(hiddenText).toHaveAttribute("class", "jkl-sr-only");
    });

    it("should show content with correct className", () => {
        const { getByText } = render(
            <ScreenReaderOnly showOnFocus>
                Visually hidden, unless focused
            </ScreenReaderOnly>,
        );

        const hiddenText = getByText("Visually hidden, unless focused");

        expect(hiddenText).toHaveAttribute(
            "class",
            "jkl-sr-only jkl-sr-only--focusable",
        );
    });

    it("should pass jest-axe tests in default state", async () => {
        const { container } = render(
            <ScreenReaderOnly>Visually hidden</ScreenReaderOnly>,
        );

        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });

    it("should pass jest-axe tests when focusable", async () => {
        const { container } = render(
            <ScreenReaderOnly showOnFocus>
                Visually hidden, unless focused
            </ScreenReaderOnly>,
        );

        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });
});
