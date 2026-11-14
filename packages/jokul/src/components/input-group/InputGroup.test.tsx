import { render, screen } from "@testing-library/react";
import UserEventModule from "@testing-library/user-event";
import React from "react";
import { describe, expect, it } from "vitest";
import { axe } from "vitest-axe";
import { PopupTip } from "../tooltip/PopupTip.js";
import { InputGroup } from "./InputGroup.js";

// https://github.com/testing-library/user-event/issues/1146
// @ts-ignore typecheck liker ikke at default muligens ikke finnes
const userEvent = UserEventModule.default ?? UserEventModule;

describe("InputGroup", () => {
    it("should render a visible label", () => {
        render(
            <InputGroup label="Test av InputGroup">
                <input type="text" />
            </InputGroup>,
        );

        expect(screen.getByLabelText("Test av InputGroup")).toBeVisible();
    });

    it("should render the label as a page heading when pageHeading is set", () => {
        render(
            <InputGroup
                label="Hva heter du?"
                labelProps={{ pageHeading: true }}
            >
                <input type="text" />
            </InputGroup>,
        );

        const heading = screen.getByRole("heading", { level: 1 });
        expect(heading).toHaveTextContent("Hva heter du?");

        expect(heading.querySelector("label")).toHaveAttribute(
            "for",
            screen.getByRole("textbox").id,
        );
        expect(
            screen.getByRole("textbox", { name: "Hva heter du?" }),
        ).toBeInTheDocument();
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
    it("InputGroup should be a11y compliant", async () => {
        const { container } = render(
            <InputGroup label="Test av InputGroup">
                <input type="text" />
            </InputGroup>,
        );
        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });
});
