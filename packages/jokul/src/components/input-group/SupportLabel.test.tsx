import { render } from "@testing-library/react";
import React from "react";
import { describe, expect, it } from "vitest";
import { axe } from "vitest-axe";
import { SupportLabel } from "./SupportLabel.js";

describe("SupportLabel", () => {
    const helpLabel = "helpfull text";
    const errorLabel = "error error error, read in a computer voice";

    it("renders with help text when valid", () => {
        const { getByText } = render(<SupportLabel id="test" helpLabel={helpLabel} />);

        expect(getByText(helpLabel)).toBeInTheDocument();
    });

    it("renders with error text when invalid", () => {
        const { getByText, queryByText } = render(
            <SupportLabel id="test" errorLabel={errorLabel} helpLabel={helpLabel} />,
        );

        expect(getByText(errorLabel)).toBeInTheDocument();
        expect(queryByText(helpLabel)).not.toBeInTheDocument();
    });

    it("should pass vi-axe tests in default state", async () => {
        const { container } = render(<SupportLabel id="test" helpLabel={helpLabel} />);

        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });

    it("should pass vi-axe tests in error state", async () => {
        const { container } = render(<SupportLabel id="test" errorLabel={errorLabel} helpLabel={helpLabel} />);

        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });
});
