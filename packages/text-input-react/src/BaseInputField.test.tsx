import React from "react";
import { cleanup, render } from "@testing-library/react";
import { BaseInputField } from ".";
import { axe } from "jest-axe";

afterEach(cleanup);

describe("BaseInputField", () => {
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

describe("a11y", () => {
    test("base-input-field should be a11y compliant", async () => {
        const { container } = render(<BaseInputField />);
        const results = await axe(container, {
            rules: {
                label: { enabled: false }, //This component renders without a label because it's not intended for standalone usage. See the documentation for a usage pattern.
            },
        });

        expect(results).toHaveNoViolations();
    });

    test("compact base-input-field should be a11y compliant", async () => {
        const { container } = render(<BaseInputField forceCompact />);
        const results = await axe(container, {
            rules: {
                label: { enabled: false }, //This component renders without a label because it's not intended for standalone usage. See the documentation for a usage pattern.
            },
        });

        expect(results).toHaveNoViolations();
    });
});
