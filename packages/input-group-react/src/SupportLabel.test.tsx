import { render, screen } from "@testing-library/react";
import React from "react";
import { SupportLabel } from "./SupportLabel";

describe("SupportLabel", () => {
    const helpLabel = "helpfull text";
    const errorLabel = "error error error, read in a computer voice";

    it("renders with help text when valid", () => {
        render(<SupportLabel id="test" errorLabel={false ? errorLabel : undefined} helpLabel={helpLabel} />);

        expect(screen.getByText(helpLabel)).toBeInTheDocument();
    });

    it("renders with error text when invalid", () => {
        render(<SupportLabel id="test" errorLabel={errorLabel} helpLabel={helpLabel} />);

        expect(screen.getByText(errorLabel)).toBeInTheDocument();
    });

    it("renders with error text when invalid without help text", () => {
        render(<SupportLabel id="test" errorLabel={errorLabel} />);

        expect(screen.getByText(errorLabel)).toBeInTheDocument();
    });

    it("renders with help text when valid without error text", () => {
        render(<SupportLabel id="test" helpLabel={helpLabel} />);

        expect(screen.getByText(helpLabel)).toBeInTheDocument();
    });
});
