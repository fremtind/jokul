import React from "react";
import { cleanup, render } from "@testing-library/react";
import { TextField } from ".";

describe("TextField", () => {
    afterEach(cleanup);

    it("renders with correct label", () => {
        const { getByLabelText } = render(<TextField label="Cool text field" value="" onChange={() => {}} />);

        expect(getByLabelText("Cool text field")).toBeInTheDocument();
    });
});
