import React from "react";
import { screen, render } from "@testing-library/react";
import { Flipper } from "./Flipper";
import { axe } from "jest-axe";

test("should render to the DOM", () => {
    render(<Flipper firstBorn="Hello" lastBorn="World" screenReaderText="Hello World" showFirst />);

    expect(screen.getByText("Hello World")).toHaveClass("jkl-sr-only");
    expect(screen.getByText("Hello")).toBeInTheDocument();
    expect(screen.getByText("World")).toBeInTheDocument();
});

test("button should be a11y compliant", async () => {
    const { container } = render(
        <Flipper firstBorn="Hello" lastBorn="World" screenReaderText="Hello World" showFirst />,
    );
    const results = await axe(container);

    expect(results).toHaveNoViolations();
});
