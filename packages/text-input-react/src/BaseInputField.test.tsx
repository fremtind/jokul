import React from "react";
import { cleanup, render } from "@testing-library/react";
import { BaseInputField } from ".";

describe("BaseInputField", () => {
    afterEach(cleanup);

    it("has the max-length given", () => {
        const { getByTestId } = render(<BaseInputField maxLength={10} />);

        const component = getByTestId("jkl-text-field__input");
        expect(component).toHaveAttribute("maxlength", "10");
    });

    it("is read-only when specified", () => {
        const { getByTestId } = render(<BaseInputField readOnly />);

        const component = getByTestId("jkl-text-field__input");
        expect(component).toHaveAttribute("readonly");
    });
});
