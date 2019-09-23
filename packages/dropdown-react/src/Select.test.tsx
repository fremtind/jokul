import React from "react";
import { cleanup, render } from "@testing-library/react";
import { Select } from ".";

describe("Select", () => {
    afterEach(cleanup);

    it("should render the correct label", () => {
        const { getByText } = render(<Select label="testing" items={[]} />);

        expect(getByText("testing")).toBeInTheDocument();
    });

    it("should render the correct number of options", () => {
        const { getAllByTestId } = render(<Select label="testing" items={["1", "2", "3"]} />);

        expect(getAllByTestId("jkl-dropdown__option")).toHaveLength(3);
    });
});
