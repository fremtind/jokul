import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it, vi } from "vitest";
import { CalendarDay } from "./CalendarDay.js";

const defaultProps = {
    day: 15,
    year: 2020,
    month: 0,
    name: "date",
    selectedDate: "2020-01-10",
    focusedDate: "2020-01-15",
    onChange: vi.fn(),
};

describe("CalendarDay tracking", () => {
    it("renders tracking attributes on the visible label", () => {
        render(
            <table>
                <tbody>
                    <tr>
                        <CalendarDay {...defaultProps} />
                    </tr>
                </tbody>
            </table>,
        );

        const input = screen.getByLabelText("15.01.2020");
        const label = input.closest("label");

        expect(label).toHaveAttribute("data-jkl-tracked", "DateInput");
        expect(label).not.toHaveAttribute("data-jkl-checked");
        expect(input).not.toHaveAttribute("data-jkl-tracked");
    });

    it("reflects the selected state on the visible label", () => {
        render(
            <table>
                <tbody>
                    <tr>
                        <CalendarDay
                            {...defaultProps}
                            selectedDate="2020-01-15"
                        />
                    </tr>
                </tbody>
            </table>,
        );

        expect(
            screen.getByLabelText("15.01.2020").closest("label"),
        ).toHaveAttribute("data-jkl-checked", "true");
    });
});
