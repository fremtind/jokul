import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it, vi } from "vitest";
import { axe } from "vitest-axe";
import { DateInput } from "./DateInput.js";

describe("DateInput", () => {
    it("renders a labeled native date input", () => {
        render(<DateInput label="Velg dato" />);

        const input = screen.getByTestId("jkl-date-input__input");
        expect(input).toHaveAttribute("type", "date");
        expect(screen.getByLabelText("Velg dato")).toBe(input);
    });

    it("forwards the ref to the native input", () => {
        const ref = React.createRef<HTMLInputElement>();
        render(<DateInput label="Dato" ref={ref} />);

        expect(ref.current).toBe(screen.getByTestId("jkl-date-input__input"));
        expect(ref.current?.tagName).toBe("INPUT");
    });

    it("reflects an ISO defaultValue on the input", () => {
        render(<DateInput label="Dato" defaultValue="2019-12-24" />);

        expect(screen.getByTestId("jkl-date-input__input")).toHaveValue(
            "2019-12-24",
        );
    });

    it("forwards min and max to the native input", () => {
        render(<DateInput label="Dato" min="2020-01-01" max="2020-12-31" />);

        const input = screen.getByTestId("jkl-date-input__input");
        expect(input).toHaveAttribute("min", "2020-01-01");
        expect(input).toHaveAttribute("max", "2020-12-31");
    });

    it("fires onChange with the ISO value from the native input", () => {
        const onChange = vi.fn();
        render(
            <DateInput
                label="Dato"
                defaultValue="2022-01-01"
                onChange={onChange}
            />,
        );

        const input = screen.getByTestId("jkl-date-input__input");
        fireEvent.change(input, { target: { value: "2022-11-11" } });

        expect(onChange).toHaveBeenCalledTimes(1);
        expect(onChange.mock.calls[0][0].target.value).toBe("2022-11-11");
        expect(input).toHaveValue("2022-11-11");
    });

    it("renders a trigger button that opens the calendar", () => {
        render(<DateInput label="Dato" />);

        expect(
            screen.getByTestId("jkl-date-input__trigger"),
        ).toHaveAccessibleName("Åpne kalender");
    });

    it("selects a day from the calendar and reports the ISO value", () => {
        const onChange = vi.fn();
        render(
            <DateInput
                label="Dato"
                defaultValue="2020-01-10"
                onChange={onChange}
            />,
        );

        const day = document.querySelector(
            'input[type="radio"][value="2020-01-15"]',
        );
        expect(day).not.toBeNull();
        fireEvent.click(day as Element);

        const [event] = onChange.mock.calls.at(-1) ?? [];
        expect(event?.target.value).toBe("2020-01-15");
    });

    it("updates the native input when a day is picked in the calendar", () => {
        render(<DateInput label="Dato" defaultValue="2020-01-10" />);

        const input = screen.getByTestId("jkl-date-input__input");
        const day = document.querySelector(
            'input[type="radio"][value="2020-01-15"]',
        ) as HTMLInputElement;

        fireEvent.click(day);

        expect(input).toHaveValue("2020-01-15");
        expect(day).toBeChecked();
    });

    it("reflects a native input change in the calendar selection", () => {
        render(<DateInput label="Dato" defaultValue="2020-01-10" />);

        const input = screen.getByTestId("jkl-date-input__input");
        fireEvent.change(input, { target: { value: "2020-01-20" } });

        const previous = document.querySelector(
            'input[type="radio"][value="2020-01-10"]',
        ) as HTMLInputElement;
        const next = document.querySelector(
            'input[type="radio"][value="2020-01-20"]',
        ) as HTMLInputElement;

        expect(next).toBeChecked();
        expect(previous).not.toBeChecked();
    });

    it("navigates the calendar to the month typed in the input", () => {
        render(<DateInput label="Dato" defaultValue="2020-01-10" />);

        const input = screen.getByTestId("jkl-date-input__input");
        fireEvent.change(input, { target: { value: "2020-03-05" } });

        const marchDay = document.querySelector(
            'input[type="radio"][value="2020-03-05"]',
        ) as HTMLInputElement | null;

        expect(marchDay).not.toBeNull();
        expect(marchDay).toBeChecked();
    });

    it("applies min and max to both the input and the calendar", () => {
        render(
            <DateInput
                label="Dato"
                defaultValue="2020-01-15"
                min="2020-01-10"
                max="2020-01-20"
            />,
        );

        const input = screen.getByTestId("jkl-date-input__input");
        expect(input).toHaveAttribute("min", "2020-01-10");
        expect(input).toHaveAttribute("max", "2020-01-20");

        expect(
            document.querySelector('input[type="radio"][value="2020-01-05"]'),
        ).toBeDisabled();
        expect(
            document.querySelector('input[type="radio"][value="2020-01-10"]'),
        ).not.toBeDisabled();
        expect(
            document.querySelector('input[type="radio"][value="2020-01-20"]'),
        ).not.toBeDisabled();
    });

    it("marks the field as invalid and shows the error message", () => {
        render(<DateInput label="Dato" errorLabel="Ugyldig dato" />);

        expect(screen.getByTestId("jkl-date-input__input")).toHaveAttribute(
            "aria-invalid",
            "true",
        );
        expect(screen.getByText("Ugyldig dato")).toBeInTheDocument();
    });

    it("has no a11y violations", async () => {
        const { container } = render(
            <DateInput label="Velg dato" defaultValue="2020-01-10" />,
        );

        expect(await axe(container)).toHaveNoViolations();
    });

    it("navigates to the next and previous month with the arrow buttons", () => {
        render(<DateInput label="Dato" defaultValue="2020-01-10" />);

        fireEvent.click(screen.getByRole("button", { name: "Neste måned" }));
        expect(
            document.querySelector('input[type="radio"][value="2020-02-15"]'),
        ).not.toBeNull();

        fireEvent.click(screen.getByRole("button", { name: "Forrige måned" }));
        fireEvent.click(screen.getByRole("button", { name: "Forrige måned" }));
        expect(
            document.querySelector('input[type="radio"][value="2019-12-15"]'),
        ).not.toBeNull();
    });

    it("changes month via the month select", () => {
        render(<DateInput label="Dato" defaultValue="2020-01-10" />);

        fireEvent.change(screen.getByLabelText("Måned"), {
            target: { value: "mars" },
        });

        expect(
            document.querySelector('input[type="radio"][value="2020-03-15"]'),
        ).not.toBeNull();
    });

    it("changes year via the year select", () => {
        render(<DateInput label="Dato" defaultValue="2020-01-10" />);

        fireEvent.change(screen.getByLabelText("År"), {
            target: { value: "2021" },
        });

        expect(
            document.querySelector('input[type="radio"][value="2021-01-15"]'),
        ).not.toBeNull();
    });

    const queryDay = (iso: string) =>
        document.querySelector<HTMLInputElement>(
            `input[type="radio"][value="${iso}"]`,
        );

    const getDay = (iso: string): HTMLInputElement => {
        const element = queryDay(iso);
        if (!element) {
            throw new Error(`Fant ingen datocelle for ${iso}`);
        }
        return element;
    };

    it("moves focus one day with the left/right arrows", () => {
        render(<DateInput label="Dato" defaultValue="2020-01-15" />);
        const start = getDay("2020-01-15");
        start.focus();

        fireEvent.keyDown(start, { key: "ArrowRight" });
        expect(getDay("2020-01-16")).toHaveFocus();

        fireEvent.keyDown(getDay("2020-01-16"), { key: "ArrowLeft" });
        fireEvent.keyDown(getDay("2020-01-15"), { key: "ArrowLeft" });
        expect(getDay("2020-01-14")).toHaveFocus();
    });

    it("moves focus one week with the up/down arrows", () => {
        render(<DateInput label="Dato" defaultValue="2020-01-15" />);
        const start = getDay("2020-01-15");
        start.focus();

        fireEvent.keyDown(start, { key: "ArrowDown" });
        expect(getDay("2020-01-22")).toHaveFocus();

        fireEvent.keyDown(getDay("2020-01-22"), { key: "ArrowUp" });
        fireEvent.keyDown(getDay("2020-01-15"), { key: "ArrowUp" });
        expect(getDay("2020-01-08")).toHaveFocus();
    });

    it("moves to the previous month when navigating past the first of the month", () => {
        render(<DateInput label="Dato" defaultValue="2020-01-01" />);
        const start = getDay("2020-01-01");
        start.focus();

        fireEvent.keyDown(start, { key: "ArrowLeft" });
        expect(getDay("2019-12-31")).toHaveFocus();
    });

    it("moves to the start and end of the week with Home and End", () => {
        // 2020-01-15 er en onsdag, uken starter mandag
        render(<DateInput label="Dato" defaultValue="2020-01-15" />);
        const start = getDay("2020-01-15");
        start.focus();

        fireEvent.keyDown(start, { key: "Home" });
        expect(getDay("2020-01-13")).toHaveFocus(); // mandag

        fireEvent.keyDown(getDay("2020-01-13"), { key: "End" });
        expect(getDay("2020-01-19")).toHaveFocus(); // søndag
    });

    it("changes month with Page Up/Down and year when Shift is held", () => {
        render(<DateInput label="Dato" defaultValue="2020-06-15" />);
        const start = getDay("2020-06-15");
        start.focus();

        fireEvent.keyDown(start, { key: "PageDown" });
        expect(getDay("2020-07-15")).toHaveFocus();

        fireEvent.keyDown(getDay("2020-07-15"), { key: "PageUp" });
        expect(getDay("2020-06-15")).toHaveFocus();

        fireEvent.keyDown(getDay("2020-06-15"), {
            key: "PageDown",
            shiftKey: true,
        });
        expect(getDay("2021-06-15")).toHaveFocus();

        fireEvent.keyDown(getDay("2021-06-15"), {
            key: "PageUp",
            shiftKey: true,
        });
        expect(getDay("2020-06-15")).toHaveFocus();
    });

    it("does not move focus past min/max when navigating with the keyboard", () => {
        render(
            <DateInput
                label="Dato"
                defaultValue="2020-01-11"
                min="2020-01-10"
                max="2020-01-20"
            />,
        );
        const start = getDay("2020-01-11");
        start.focus();

        // to steg bakover, men skal klampe på min (10.)
        fireEvent.keyDown(start, { key: "ArrowLeft" });
        fireEvent.keyDown(getDay("2020-01-10"), { key: "ArrowLeft" });
        expect(getDay("2020-01-10")).toHaveFocus();
        expect(getDay("2020-01-09")).toBeDisabled();
    });

    it("selects the focused date with Enter", () => {
        const onChange = vi.fn();
        render(
            <DateInput
                label="Dato"
                defaultValue="2020-01-15"
                onChange={onChange}
            />,
        );
        const start = getDay("2020-01-15");
        start.focus();

        fireEvent.keyDown(start, { key: "ArrowRight" });
        fireEvent.keyDown(getDay("2020-01-16"), { key: "Enter" });

        const [event] = onChange.mock.calls.at(-1) ?? [];
        expect(event?.target.value).toBe("2020-01-16");
        expect(getDay("2020-01-16")).toBeChecked();
    });
});
