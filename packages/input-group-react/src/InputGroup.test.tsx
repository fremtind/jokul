import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import React from "react";
import { InputGroup } from ".";

describe("InputGroup", () => {
    it("should render", () => {
        render(
            <InputGroup label="Test av InputGroup">
                <input type="text" />
            </InputGroup>,
        );

        screen.getByLabelText("Test av InputGroup");
    });
});

describe("a11y", () => {
    test("InputGroup should be a11y compliant", async () => {
        const { container } = render(
            <InputGroup label="Test av InputGroup">
                <input type="text" />
            </InputGroup>,
        );
        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });
});
