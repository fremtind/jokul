import React from "react";
import { cleanup, render } from "@testing-library/react";
import { SupportLabel } from "./SupportLabel";

describe("SupportLabel", () => {
    afterEach(cleanup);

    const helpLabel = "helpfull text";
    const errorLabel = "error error error, read in a computer voice";

    it("renders with help text when valid", () => {
        const { getByText } = render(
            <SupportLabel errorLabel={false ? errorLabel : undefined} helpLabel={helpLabel} />,
        );

        expect(getByText(helpLabel)).toBeInTheDocument();
    });

    it("renders with error text when invalid", () => {
        const { getByText } = render(<SupportLabel errorLabel={errorLabel} helpLabel={helpLabel} />);

        expect(getByText(errorLabel)).toBeInTheDocument();
    });

    it("renders with error text when invalid without help text", () => {
        const { getByText } = render(<SupportLabel errorLabel={errorLabel} />);

        expect(getByText(errorLabel)).toBeInTheDocument();
    });

    it("renders with help text when valid without error text", () => {
        const { getByText } = render(<SupportLabel helpLabel={helpLabel} />);

        expect(getByText(helpLabel)).toBeInTheDocument();
    });
});
