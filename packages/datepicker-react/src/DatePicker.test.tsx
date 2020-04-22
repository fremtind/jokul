import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { DatePicker } from ".";
import { formatDate, isSameDay } from "./DatePicker";
import { axe } from "jest-axe";

beforeEach(cleanup);

describe("Datepicker", () => {
    it("renders with the correct format", () => {
        const thePast = new Date(2019, 11, 24);
        const { getByTestId } = render(<DatePicker initialDate={thePast} />);

        const date = getByTestId("jkl-datepicker__input");
        expect(date).toHaveProperty("value", "24.12.2019");
    });

    it("fires onChange method on edit input with valid date", () => {
        const changeHandler = jest.fn();
        const { getByTestId } = render(<DatePicker onChange={changeHandler} />);
        const input = getByTestId("jkl-datepicker__input");
        expect(input).toHaveProperty("value", "");
        fireEvent.change(input, { target: { value: "01.12.2019" } });
        expect(input).toHaveProperty("value", "01.12.2019");
        expect(changeHandler).toHaveBeenCalledTimes(1);
    });

    it("fires onChange method with undefined when text input is cleared", () => {
        const changeHandler = jest.fn();
        const { getByTestId } = render(<DatePicker onChange={changeHandler} />);
        const input = getByTestId("jkl-datepicker__input");
        expect(input).toHaveProperty("value", "");
        fireEvent.change(input, { target: { value: "some value to be cleared" } });
        fireEvent.change(input, { target: { value: "" } });
        expect(input).toHaveProperty("value", "");
        expect(changeHandler).toHaveBeenCalledWith(undefined);
    });

    it("does not fire onChange on edit input with invalid date", () => {
        const changeHandler = jest.fn();
        const { getByTestId } = render(<DatePicker onChange={changeHandler} />);
        const input = getByTestId("jkl-datepicker__input");
        expect(input).toHaveProperty("value", "");
        fireEvent.change(input, { target: { value: "a random string" } });
        expect(input).toHaveProperty("value", "a random string");
        expect(changeHandler).toHaveBeenCalledTimes(0);
    });

    it("should change date on new props", () => {
        // New date takes MM.DD.YYYY values
        const { container, getByTestId } = render(<DatePicker initialDate={new Date("02.02.2019")} />);
        render(<DatePicker initialDate={new Date("09.12.2019")} />, { container });

        const input = getByTestId("jkl-datepicker__input");

        // Check for date formatted as DD.MM.YYYY
        expect(input).toHaveProperty("value", "12.09.2019");
    });
});

describe("formatDate", () => {
    it("renders the given date correctly", () => {
        const date = new Date("1986-10-14");
        const formattedDate = formatDate(date);

        expect(formattedDate).toEqual("14.10.1986");
    });
});

describe("isSameDay", () => {
    it("returns true for equal dates", () => {
        const date = new Date("1986-10-14");

        expect(isSameDay(date, date)).toBeTruthy();
    });
    it("returns false for different dates", () => {
        const date1 = new Date("1986-10-14");
        const date2 = new Date("2001-10-14");

        expect(isSameDay(date1, date2)).toBeFalsy();
    });
});

describe("a11y", () => {
    it("default datepicker should be a11y compliant", async () => {
        const { container } = render(<DatePicker initialShow />);
        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });

    it("extended datepicker should be a11y compliant", async () => {
        const { container } = render(<DatePicker extended initialShow />);
        const results = await axe(container, {
            rules: {
                "form-field-multiple-labels": { enabled: false },
            },
        });

        expect(results).toHaveNoViolations();
    });
});
