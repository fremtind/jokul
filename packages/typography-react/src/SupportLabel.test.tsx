import React from "react";
import { render, screen } from "@testing-library/react";
import { SupportLabel } from "./SupportLabel";

describe("SupportLabel", () => {
    const helpLabel = "helpfull text";
    const errorLabel = "error error error, read in a computer voice";

    it.skip("renders with help text when valid", () => {
        render(<SupportLabel errorLabel={false ? errorLabel : undefined} helpLabel={helpLabel} />);

        expect(screen.getByText(helpLabel)).toBeInTheDocument();
    });

    it.skip("renders with error text when invalid", () => {
        render(<SupportLabel errorLabel={errorLabel} helpLabel={helpLabel} />);

        expect(screen.getByText(errorLabel)).toBeInTheDocument();
    });

    it.skip("renders with error text when invalid without help text", () => {
        render(<SupportLabel errorLabel={errorLabel} />);

        expect(screen.getByText(errorLabel)).toBeInTheDocument();
    });

    it.skip("renders with help text when valid without error text", () => {
        render(<SupportLabel helpLabel={helpLabel} />);

        expect(screen.getByText(helpLabel)).toBeInTheDocument();
    });
});
