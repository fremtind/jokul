import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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

    it("should render tooltip when passed as a prop", async () => {
        const user = userEvent.setup();
        render(
            <InputGroup
                label={"En labell"}
                tooltip={<PopupTip content="Dette er hjelpen" />}
            />,
        );

        await user.click(screen.getByText("Vis hjelpetekst"));

        await waitFor(() =>
            expect(screen.getByText("Dette er hjelpen")).toBeVisible(),
        );
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
