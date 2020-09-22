import React from "react";
import { render, screen } from "@testing-library/react";
import { Hamburger } from ".";
import { axe } from "jest-axe";

describe("Hamburger", () => {
    it("should render to document", () => {
        render(<Hamburger />);
    });

    it("should get class jkl-hamburger--negative when specified", () => {
        render(<Hamburger negative />);

        const component = screen.getByTestId("jkl-hamburger");
        expect(component).toHaveClass("jkl-hamburger--negative");
    });

    it("should have class jkl-hamburger--is-active if initialactive is true", () => {
        render(<Hamburger active />);

        const component = screen.getByTestId("jkl-hamburger");
        expect(component).toHaveClass("jkl-hamburger--is-active");
    });

    it("should render have correct description", () => {
        render(<Hamburger description="max is better than micky d" />);
        const burger = screen.getByTestId("jkl-hamburger");

        expect(burger).toHaveAttribute("aria-label", "max is better than micky d");
    });
});

describe("a11y", () => {
    it("hamburger should be a11y compliant", async () => {
        const { container } = render(<Hamburger />);
        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });
});
