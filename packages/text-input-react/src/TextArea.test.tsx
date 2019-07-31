import React from "react";
import { cleanup, render } from "@testing-library/react";
import { TextArea } from ".";

describe("TextArea", () => {
    afterEach(cleanup);

    it("renders with correct label", () => {
        const { getByLabelText } = render(<TextArea label="Cool text field" />);

        expect(getByLabelText("Cool text field")).toBeInTheDocument();
    });

    it("uses the passed class name", () => {
        const { getByTestId } = render(<TextArea label="testing" className="test-class" />);

        const component = getByTestId("jkl-text-field");
        expect(component).toHaveClass("test-class");
    });
});
