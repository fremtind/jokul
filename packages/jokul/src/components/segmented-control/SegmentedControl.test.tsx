import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it } from "vitest";
import { axe } from "vitest-axe";
import { SegmentedControl } from "./SegmentedControl.js";
import { SegmentedControlButton } from "./SegmentedControlButton.js";

describe("SegmentedControl", () => {
    it("renders legend and buttons", () => {
        render(
            <SegmentedControl legend="Temavelger">
                <SegmentedControlButton name="tema" value="light">
                    Light
                </SegmentedControlButton>
                <SegmentedControlButton name="tema" value="dark">
                    Dark
                </SegmentedControlButton>
            </SegmentedControl>,
        );

        expect(screen.getByText("Temavelger")).toBeInTheDocument();
        expect(screen.getByLabelText("Light")).toBeInTheDocument();
        expect(screen.getByLabelText("Dark")).toBeInTheDocument();
    });

    it("should pass vi-axe tests", async () => {
        const { container } = render(
            <SegmentedControl legend="Temavelger">
                <SegmentedControlButton
                    name="tema"
                    value="light"
                    defaultChecked
                >
                    Light
                </SegmentedControlButton>
                <SegmentedControlButton name="tema" value="dark">
                    Dark
                </SegmentedControlButton>
            </SegmentedControl>,
        );

        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });

    describe("tracking", () => {
        it("merker hvert valg som sporbart med komponentnavn", () => {
            render(
                <SegmentedControl legend="Temavelger">
                    <SegmentedControlButton name="tema" value="light">
                        Light
                    </SegmentedControlButton>
                    <SegmentedControlButton name="tema" value="dark">
                        Dark
                    </SegmentedControlButton>
                </SegmentedControl>,
            );

            expect(screen.getByLabelText("Light")).toHaveAttribute(
                "data-jkl-tracked",
                "SegmentedControlButton",
            );
            expect(screen.getByLabelText("Dark")).toHaveAttribute(
                "data-jkl-tracked",
                "SegmentedControlButton",
            );
        });

        it("setter data-jkl-selected når valget er checked", () => {
            render(
                <SegmentedControl legend="Temavelger">
                    <SegmentedControlButton
                        name="tema"
                        value="light"
                        checked
                        onChange={() => {}}
                    >
                        Light
                    </SegmentedControlButton>
                    <SegmentedControlButton
                        name="tema"
                        value="dark"
                        checked={false}
                        onChange={() => {}}
                    >
                        Dark
                    </SegmentedControlButton>
                </SegmentedControl>,
            );

            expect(screen.getByLabelText("Light")).toHaveAttribute(
                "data-jkl-selected",
                "true",
            );
            expect(screen.getByLabelText("Dark")).not.toHaveAttribute(
                "data-jkl-selected",
            );
        });

        it("setter data-jkl-selected når valget er defaultChecked", () => {
            render(
                <SegmentedControl legend="Temavelger">
                    <SegmentedControlButton
                        name="tema"
                        value="light"
                        defaultChecked
                    >
                        Light
                    </SegmentedControlButton>
                    <SegmentedControlButton name="tema" value="dark">
                        Dark
                    </SegmentedControlButton>
                </SegmentedControl>,
            );

            expect(screen.getByLabelText("Light")).toHaveAttribute(
                "data-jkl-selected",
                "true",
            );
            expect(screen.getByLabelText("Dark")).not.toHaveAttribute(
                "data-jkl-selected",
            );
        });

        it("setter data-jkl-tracking som JSON kun når tracking-propen er gitt", () => {
            const { rerender } = render(
                <SegmentedControl legend="Temavelger">
                    <SegmentedControlButton name="tema" value="light">
                        Light
                    </SegmentedControlButton>
                </SegmentedControl>,
            );

            expect(screen.getByLabelText("Light")).not.toHaveAttribute(
                "data-jkl-tracking",
            );

            rerender(
                <SegmentedControl legend="Temavelger">
                    <SegmentedControlButton
                        name="tema"
                        value="light"
                        tracking={{ source: "settings" }}
                    >
                        Light
                    </SegmentedControlButton>
                </SegmentedControl>,
            );

            expect(screen.getByLabelText("Light")).toHaveAttribute(
                "data-jkl-tracking",
                JSON.stringify({ source: "settings" }),
            );
        });
    });
});
