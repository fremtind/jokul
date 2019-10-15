import React from "react";
import { cleanup, render } from "@testing-library/react";
import { Icon } from ".";

afterEach(cleanup);

describe("Icon", () => {
    it("should render to document", () => {
        const { getByTestId } = render(<Icon textDescription="Laster inn" />);

        expect(getByTestId("jkl-icon")).toBeInTheDocument();
    });
    it("should render negative to document", () => {
        const { getByTestId } = render(<Icon textDescription="Laster inn" negative />);

        expect(getByTestId("jkl-icon")).toBeInTheDocument();
    });
    it("should render inline negative to document", () => {
        const { getByTestId } = render(<Icon textDescription="Laster inn" negative inline />);

        expect(getByTestId("jkl-icon")).toBeInTheDocument();
    });
    it("should render inline to document", () => {
        const { getByTestId } = render(<Icon textDescription="Laster inn" inline />);

        expect(getByTestId("jkl-icon")).toBeInTheDocument();
    });
    it("should apply passed className prop", () => {
        const { getByTestId } = render(<Icon textDescription="Laster inn" className="testclass" />);

        expect(getByTestId("jkl-icon")).toHaveClass("testclass");
    });
    it("should apply passed aria-label and title", () => {
        const { getByTestId } = render(<Icon textDescription="Loading" />);

        expect(getByTestId("jkl-icon")).toHaveAttribute("aria-label", "Loading");
        expect(getByTestId("jkl-icon")).toHaveAttribute("title", "Loading");
    });
});
