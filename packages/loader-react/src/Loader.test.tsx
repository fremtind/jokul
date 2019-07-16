import React from "react";
import { cleanup, render } from "@testing-library/react";
import { Loader } from ".";

afterEach(cleanup);

describe("Loader", () => {
    it("should render to document", () => {
        const { getByTestId } = render(<Loader />);

        expect(getByTestId("jkl-loader")).toBeInTheDocument();
    });
    it("should render negative to document", () => {
        const { getByTestId } = render(<Loader negative />);

        expect(getByTestId("jkl-loader")).toBeInTheDocument();
    });
});
