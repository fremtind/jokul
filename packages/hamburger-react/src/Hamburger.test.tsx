import React from "react";
import { cleanup, render } from "@testing-library/react";
import { Hamburger } from ".";

afterEach(cleanup);

describe("Hamburger", () => {
    it("should render to document", () => {
        render(<Hamburger />);
    });

    it("should get class jkl-hamburger--is-active on click", () => {
        const { getByTestId } = render(<Hamburger />);

        const burger = getByTestId("jkl-hamburger");
        burger.click();

        expect(burger).toHaveClass("jkl-hamburger--is-active");
    });

    it("should get class jkl-hamburger--negative when specified", () => {
        const { getByTestId } = render(<Hamburger negative />);

        const component = getByTestId("jkl-hamburger");
        expect(component).toHaveClass("jkl-hamburger--negative");
    });

    it("should have class jkl-hamburger--is-active if initialactive is true", () => {
        const { getByTestId } = render(<Hamburger initialIsActive />);

        const component = getByTestId("jkl-hamburger");
        expect(component).toHaveClass("jkl-hamburger--is-active");
    });

    it("should render call onClick and set is active", () => {
        const fn = jest.fn();
        const { getByTestId } = render(<Hamburger onClick={fn} />);
        const burger = getByTestId("jkl-hamburger");
        burger.click();

        expect(fn).toHaveBeenCalledTimes(1);

        expect(burger).toHaveClass("jkl-hamburger--is-active");
    });

    it("should render have correct description", () => {
        const { getByTestId } = render(<Hamburger description="max is better than micky d" />);
        const burger = getByTestId("jkl-hamburger");

        expect(burger).toHaveAttribute("aria-label", "max is better than micky d");
    });
});
