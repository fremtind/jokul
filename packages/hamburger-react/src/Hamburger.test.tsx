import React from "react";
import { cleanup, render } from "@testing-library/react";
import { Hamburger } from ".";

afterEach(cleanup);

describe("Hamburger", () => {
    it("should render to document", () => {
        const { getByTestId } = render(<Hamburger />);

        expect(getByTestId("jkl-hamburger")).toBeInTheDocument();
    });
    it("should render set is active on click", () => {
        const { getByTestId } = render(<Hamburger negative />);

        const burger = getByTestId("jkl-hamburger");
        burger.click();

        const classNames = burger.getAttribute("class");
        expect(classNames).toContain("--is-active");
    });
    it("should render negative to document", () => {
        const { getByTestId } = render(<Hamburger negative />);

        const classNames = getByTestId("jkl-hamburger").getAttribute("class");
        expect(classNames).toContain("--negative");
    });
    it("should render active if initialactive is true", () => {
        const { getByTestId } = render(<Hamburger initialIsActive />);
        const burger = getByTestId("jkl-hamburger");

        const classNames = burger.getAttribute("class");
        expect(classNames).toContain("--is-active");
    });
    it("should render call onClick and set is active", () => {
        const fn = jest.fn();
        const { getByTestId } = render(<Hamburger onClick={fn} />);
        const burger = getByTestId("jkl-hamburger");
        burger.click();

        expect(fn).toHaveBeenCalledTimes(1);

        const classNames = burger.getAttribute("class");
        expect(classNames).toContain("--is-active");
    });
    it("should render have correct description", () => {
        const { getByTestId } = render(<Hamburger description="max is better than micky d" />);
        const burger = getByTestId("jkl-hamburger");

        const classNames = burger.getAttribute("aria-label");
        expect(classNames).toBe("max is better than micky d");
    });
});
