import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it } from "vitest";
import { Button } from "./button/Button.js";
import { Card } from "./card/Card.js";
import { DateInput } from "./date-input/DateInput.js";
import { Link } from "./link/Link.js";
import { Select } from "./select/Select.js";
import { TextInput } from "./text-input/TextInput.js";
import { ToggleSwitch } from "./toggle-switch/ToggleSwitch.js";

describe("data-track-attributter", () => {
    it("lar et attributt satt direkte vinne over defaulten", () => {
        render(
            <Button data-testid="knapp" data-track-id="hovedknapp-kjop">
                Kjøp
            </Button>,
        );

        const button = screen.getByTestId("knapp");
        expect(button).toHaveAttribute("data-track-id", "hovedknapp-kjop");
        expect(button).toHaveAttribute("data-track-label", "Kjøp");
        expect(button).toHaveAttribute("data-track-component-name", "Button");
    });

    it("lar et attributt satt direkte vinne over tracking-propen", () => {
        render(
            <Link
                href="#"
                data-testid="lenke"
                data-track-id="direkte"
                tracking={{ id: "fra-prop" }}
            >
                Les mer
            </Link>,
        );

        expect(screen.getByTestId("lenke")).toHaveAttribute(
            "data-track-id",
            "direkte",
        );
    });

    it("lar komponenter som rendrer inndata-elementet nøstet ta imot attributtet", () => {
        render(<TextInput label="E-post" data-track-id="epost-felt" />);

        expect(screen.getByLabelText("E-post")).toHaveAttribute(
            "data-track-id",
            "epost-felt",
        );
    });

    it("rendrer feltene i tracking.extra som egne attributter", () => {
        render(
            <Button
                data-testid="knapp"
                tracking={{ extra: { campaignName: "host-2026" } }}
            >
                Kjøp
            </Button>,
        );

        expect(screen.getByTestId("knapp")).toHaveAttribute(
            "data-track-campaign-name",
            "host-2026",
        );
    });

    it.each([
        [
            "Card",
            <Card key="card" data-track-id="direkte">
                Innhold
            </Card>,
            "jkl-card",
        ],
        [
            "DateInput",
            <DateInput key="date" label="Dato" data-track-id="direkte" />,
            "jkl-date-input__input",
        ],
        [
            "Select",
            <Select
                key="select"
                label="Velg"
                items={[{ value: "1", label: "En" }]}
                data-track-id="direkte"
            />,
            "jkl-select__button",
        ],
        [
            "ToggleSwitch",
            <ToggleSwitch
                key="toggle"
                data-testid="bryter"
                data-track-id="direkte"
            >
                Skru på
            </ToggleSwitch>,
            "bryter",
        ],
    ])(
        "lar %s ta imot attributtet selv om props sendes videre indirekte",
        (_, element, testId) => {
            render(element);

            expect(screen.getByTestId(testId)).toHaveAttribute(
                "data-track-id",
                "direkte",
            );
        },
    );

    it("følger samme regel for komponentnavnet", () => {
        render(
            <Link
                href="#"
                data-testid="lenke"
                data-track-component-name="MinLenke"
            >
                Les mer
            </Link>,
        );

        expect(screen.getByTestId("lenke")).toHaveAttribute(
            "data-track-component-name",
            "MinLenke",
        );
    });
});
