import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import React from "react";
import { PopupTip } from "../../tooltip-react/src";
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

    it("should render popup-tip when passed as a prop", async () => {
        render(
            <InputGroup
                label={"En labell"}
                tooltip={<PopupTip content="Dette er hjelpen" />}
            />,
        );

        expect(screen.getByText("Vis hjelpetekst")).toBeVisible();
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
