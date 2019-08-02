import React from "react";
import { cleanup, render } from "@testing-library/react";
import { SupportText } from "./SupportText";

describe("SupportText", () => {
    afterEach(cleanup);

    const helpText = "helpfull text";
    const errorText = "error error error, read in a computer voice";

    it("renders with help text when valid", () => {
        const { getByText } = render(<SupportText errorText={errorText} helpText={helpText} isInvalid={false} />);

        expect(getByText(helpText)).toBeInTheDocument();
    });

    it("renders with error text when invalid", () => {
        const { getByText } = render(<SupportText errorText={errorText} helpText={helpText} isInvalid={true} />);

        expect(getByText(errorText)).toBeInTheDocument();
    });

    it("renders with error text when invalid without help text", () => {
        const { getByText } = render(<SupportText errorText={errorText} isInvalid={true} />);

        expect(getByText(errorText)).toBeInTheDocument();
    });

    it("renders with help text when valid without error text", () => {
        const { getByText } = render(<SupportText helpText={helpText} isInvalid={false} />);

        expect(getByText(helpText)).toBeInTheDocument();
    });
});
