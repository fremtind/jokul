import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Hamburger } from ".";
import { axe } from "jest-axe";

describe("Hamburger", () => {
    it("should render to document", () => {
        render(<Hamburger isOpen={false} onClick={() => {}} />);
    });

    it("should get class jkl-hamburger--is-open when isOpen is true", () => {
        render(<Hamburger isOpen onClick={() => {}} />);

        const burger = screen.getByTestId("jkl-hamburger");

        expect(burger).toHaveClass("jkl-hamburger--is-open");
    });

    it("should get class jkl-hamburger--inverted when specified", () => {
        render(<Hamburger inverted isOpen={false} onClick={() => {}} />);

        const component = screen.getByTestId("jkl-hamburger");
        expect(component).toHaveClass("jkl-hamburger--inverted");
    });

    it("should render call onClick", () => {
        const fn = jest.fn();
        render(<Hamburger isOpen={false} onClick={fn} />);
        const burger = screen.getByTestId("jkl-hamburger");
        fireEvent.click(burger);

        expect(fn).toHaveBeenCalledTimes(1);
    });

    it("should set class to jkl-hamburger--is-open when changing isOpen state", () => {
        const { rerender } = render(<Hamburger isOpen={false} onClick={() => {}} />);
        const burger = screen.getByTestId("jkl-hamburger");

        expect(burger).not.toHaveClass("jkl-hamburger--is-open");

        rerender(<Hamburger isOpen={true} onClick={() => {}} />);
        expect(burger).toHaveClass("jkl-hamburger--is-open");
    });

    it("should render have correct description", () => {
        render(<Hamburger isOpen={false} onClick={() => {}} description="max is better than micky d" />);
        const burger = screen.getByTestId("jkl-hamburger");

        expect(burger).toHaveAttribute("aria-label", "max is better than micky d");
    });

    it("should show open text when closed", () => {
        render(<Hamburger isOpen={false} onClick={() => {}} actionLabel={{ open: "Open me", close: "Close me" }} />);
        expect(screen.getByText("Open me")).toBeInTheDocument();
    });

    it("should show close text when the hamburger is open", () => {
        render(<Hamburger isOpen onClick={() => {}} actionLabel={{ open: "Open me", close: "Close me" }} />);
        expect(screen.getByText("Close me")).toBeInTheDocument();
    });
});

describe("a11y", () => {
    it("hamburger should be a11y compliant", async () => {
        const { container } = render(<Hamburger isOpen={false} onClick={() => {}} />);
        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });
});
