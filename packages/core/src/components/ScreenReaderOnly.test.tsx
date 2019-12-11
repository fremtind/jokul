import React from "react";
import { render } from "@testing-library/react";
import { ScreenReaderOnly } from "./ScreenReaderOnly";

test("should show content with correct className", () => {
    const { getByText } = render(<ScreenReaderOnly>invisible for normal people</ScreenReaderOnly>);

    const hiddenText = getByText("invisible for normal people");

    expect(hiddenText).toHaveAttribute("class", "jkl-sr-only ");
});

test("should show content with correct className", () => {
    const { getByText } = render(<ScreenReaderOnly showOnFocus>invisible for normal people</ScreenReaderOnly>);

    const hiddenText = getByText("invisible for normal people");

    expect(hiddenText).toHaveAttribute("class", "jkl-sr-only jkl-sr-only--focusable");
});
