import React from "react";
import { cleanup, render } from "@testing-library/react";
import { Loader } from ".";

afterEach(cleanup);

describe("Loader", () => {
    it("should render to document", () => {
        const { getByTestId } = render(<Loader textDescription="Laster inn" />);

        expect(getByTestId("jkl-loader")).toBeInTheDocument();
    });
    it("should render negative to document", () => {
        const { getByTestId } = render(<Loader textDescription="Laster inn" negative />);

        expect(getByTestId("jkl-loader")).toBeInTheDocument();
    });
    it("should render inline negative to document", () => {
        const { getByTestId } = render(<Loader textDescription="Laster inn" negative inline />);

        expect(getByTestId("jkl-loader")).toBeInTheDocument();
    });
    it("should render inline to document", () => {
        const { getByTestId } = render(<Loader textDescription="Laster inn" inline />);

        expect(getByTestId("jkl-loader")).toBeInTheDocument();
    });
    it("should apply passed className prop", () => {
        const { getByTestId } = render(<Loader textDescription="Laster inn" className="testclass" />);

        expect(getByTestId("jkl-loader")).toHaveClass("testclass");
    });
    it("should apply passed aria-label and title", () => {
        const { getByTestId } = render(<Loader textDescription="Loading" />);

        expect(getByTestId("jkl-loader")).toHaveAttribute("aria-label", "Loading");
        expect(getByTestId("jkl-loader")).toHaveAttribute("title", "Loading");
    });
});
