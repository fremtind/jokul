import { render, screen } from "@testing-library/react";
import React from "react";
import { ScreenReaderOnly } from "./ScreenReaderOnly";

test("should show content with correct className", () => {
    render(<ScreenReaderOnly>invisible for normal people</ScreenReaderOnly>);

    const hiddenText = screen.getByText("invisible for normal people");

    expect(hiddenText).toHaveAttribute("class", "jkl-sr-only ");
});

test("should show content with correct className", () => {
    render(<ScreenReaderOnly showOnFocus>invisible for normal people</ScreenReaderOnly>);

    const hiddenText = screen.getByText("invisible for normal people");

    expect(hiddenText).toHaveAttribute("class", "jkl-sr-only jkl-sr-only--focusable");
});
