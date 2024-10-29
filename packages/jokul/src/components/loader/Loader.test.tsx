import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it } from "vitest";
import { axe } from "vitest-axe";
import { Loader } from "./Loader.js";

describe("Loader", () => {
    it("should render to document", () => {
        render(<Loader textDescription="Laster inn" />);

        expect(screen.getByTestId("jkl-loader")).toBeInTheDocument();
    });

    it("should render medium to document", () => {
        render(<Loader textDescription="Laster inn" variant="medium" />);

        expect(screen.getByTestId("jkl-loader")).toBeInTheDocument();
    });

    it("should apply passed className prop", () => {
        render(<Loader textDescription="Laster inn" className="testclass" />);

        expect(screen.getByTestId("jkl-loader")).toHaveClass("testclass");
    });

    it("should apply passed title", () => {
        render(<Loader textDescription="Loading" />);

        expect(screen.getByTestId("jkl-loader")).toHaveTextContent("Loading");
        expect(screen.getByTestId("jkl-loader")).toHaveAttribute(
            "title",
            "Loading",
        );
    });
});

describe("a11y", () => {
    it("should have no axe errors", async () => {
        const { container } = render(<Loader textDescription="Laster inn" />);

        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });
});
