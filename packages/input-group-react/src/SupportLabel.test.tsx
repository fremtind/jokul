import { render } from "@testing-library/react";
import { axe } from "jest-axe";
import React from "react";
import { SupportLabel } from "./SupportLabel";

describe("SupportLabel", () => {
    const helpLabel = "helpfull text";
    const errorLabel = "error error error, read in a computer voice";

    it("renders with help text when valid", () => {
        const { getByText } = render(<SupportLabel id="test" label={helpLabel} labelType={"help"} />);

        expect(getByText(helpLabel)).toBeInTheDocument();
    });

    it("renders with error text when invalid", () => {
        const { getByText, queryByText } = render(<SupportLabel id="test" label={errorLabel} labelType={"error"} />);

        expect(getByText(errorLabel)).toBeInTheDocument();
        expect(queryByText(helpLabel)).not.toBeInTheDocument();
    });

    it("should pass jest-axe tests in default state", async () => {
        const { container } = render(<SupportLabel id="test" label={helpLabel} />);

        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });

    it("should pass jest-axe tests in error state", async () => {
        const { container } = render(<SupportLabel id="test" label={errorLabel} labelType={"error"} />);

        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });
});
