import React from "react";
import { cleanup, render } from "@testing-library/react";
import { TextArea } from ".";

describe("TextArea", () => {
    afterEach(cleanup);

    it("renders with correct label", () => {
        const { getByLabelText } = render(<TextArea label="Cool text field" value="" onChange={() => {}} />);

        expect(getByLabelText("Cool text field")).toBeInTheDocument();
    });
});
