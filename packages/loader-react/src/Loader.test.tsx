import { render, screen } from "@testing-library/react";
import React from "react";
import { Loader } from ".";

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

    it("should apply passed aria-label and title", () => {
        render(<Loader textDescription="Loading" />);

        expect(screen.getByTestId("jkl-loader")).toHaveAttribute("aria-label", "Loading");
        expect(screen.getByTestId("jkl-loader")).toHaveAttribute("title", "Loading");
    });
});
