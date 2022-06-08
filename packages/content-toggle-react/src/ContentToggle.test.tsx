import { screen, render } from "@testing-library/react";
import { axe } from "jest-axe";
import React from "react";
import { ContentToggle } from "./ContentToggle";

test("should render to the DOM", () => {
    render(
        <ContentToggle secondary="World" showSecondary={false}>
            Hello
        </ContentToggle>,
    );

    const firstChild = screen.getByText("Hello");
    const secondChild = screen.getByText("World");
    expect(firstChild).toBeInTheDocument();
    expect(firstChild).toHaveAttribute("aria-hidden", "false");

    expect(secondChild).toBeInTheDocument();
    expect(secondChild).toHaveAttribute("aria-hidden", "true");
});

test("should render to the DOM", () => {
    render(
        <ContentToggle secondary="World" showSecondary>
            Hello
        </ContentToggle>,
    );

    expect(screen.getByText("Hello")).toHaveAttribute("aria-hidden", "true");
    expect(screen.getByText("World")).toHaveAttribute("aria-hidden", "false");
});

test("should render fade variant to the DOM", () => {
    render(
        <ContentToggle variant="fade" secondary="World" showSecondary={false}>
            Hello
        </ContentToggle>,
    );

    const firstChild = screen.getByText("Hello");
    const secondChild = screen.getByText("World");
    expect(firstChild).toBeInTheDocument();
    expect(firstChild).toHaveAttribute("aria-hidden", "false");

    expect(secondChild).toBeInTheDocument();
    expect(secondChild).toHaveAttribute("aria-hidden", "true");
});

test("should render to fade variant the DOM", () => {
    render(
        <ContentToggle variant="fade" secondary="World" showSecondary>
            Hello
        </ContentToggle>,
    );

    expect(screen.getByText("Hello")).toHaveAttribute("aria-hidden", "true");
    expect(screen.getByText("World")).toHaveAttribute("aria-hidden", "false");
});

test("button should be a11y compliant", async () => {
    const { container } = render(
        <ContentToggle secondary="World" showSecondary={false}>
            Hello
        </ContentToggle>,
    );
    let results = await axe(container);

    const { container: secondaryContainer } = render(
        <ContentToggle secondary="World" showSecondary={true}>
            Hello
        </ContentToggle>,
    );
    results = await axe(secondaryContainer);
    expect(results).toHaveNoViolations();
});
