import { render, screen } from "@testing-library/react";
import React from "react";
import { NavLink } from "./NavLink";

describe("NavLink", () => {
    it("should render with the correct text and style", () => {
        render(<NavLink>Some link</NavLink>);

        expect(screen.getByText("Some link")).toBeInTheDocument();
        expect(screen.getByText("Some link")).toHaveClass("jkl-nav-link");
    });

    it("should have the correct href attribute", () => {
        render(<NavLink href="somepage.com">Some link</NavLink>);

        expect(screen.getByText("Some link")).toHaveAttribute("href", "somepage.com");
    });

    it("should get the correct style when active", () => {
        render(<NavLink active>Some link</NavLink>);

        expect(screen.getByText("Some link")).toHaveClass("jkl-nav-link--active");
    });

    it("should get the supplied className", () => {
        render(<NavLink className="my-class">Some link</NavLink>);

        expect(screen.getByText("Some link")).toHaveClass("my-class");
    });
});
