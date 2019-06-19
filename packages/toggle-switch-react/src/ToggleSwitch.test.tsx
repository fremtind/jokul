import React from "react";
import { cleanup, render } from "@testing-library/react";
import { ToggleSwitch } from ".";

describe("ToggleSwitch", () => {
    afterEach(cleanup);

    it("renders with correct label", () => {
        const { getByLabelText } = render(<ToggleSwitch label="Cool text field" value="" onChange={() => {}} />);

        expect(getByLabelText("Cool text field")).toBeInTheDocument();
    });
});
