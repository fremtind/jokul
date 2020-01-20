import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { DatePicker } from ".";
import { formatDate, isSameDay } from "./DatePicker";
import { axe, toHaveNoViolations } from "jest-axe";

beforeEach(cleanup);

describe("Datepicker", () => {
    it("should render with the correct format", () => {
        const thePast = new Date(2019, 11, 24);
        const { getByTestId } = render(<DatePicker initialDate={thePast} />);

        const date = getByTestId("jkl-datepicker__input");
        expect(date).toHaveProperty("value", "24.12.2019");
    });

    it("should fire onChange on edit input with valid date", () => {
        const changeHandler = jest.fn();
        const { getByTestId } = render(<DatePicker onChange={changeHandler} />);
        const input = getByTestId("jkl-datepicker__input");
        expect(input).toHaveProperty("value", "");
        fireEvent.change(input, { target: { value: "01.12.2019" } });
        expect(input).toHaveProperty("value", "01.12.2019");
        expect(changeHandler).toHaveBeenCalledTimes(1);
    });

    it("should not fire onChange on edit input with invalid date", () => {
        const changeHandler = jest.fn();
        const { getByTestId } = render(<DatePicker onChange={changeHandler} />);
        const input = getByTestId("jkl-datepicker__input");
        expect(input).toHaveProperty("value", "");
        fireEvent.change(input, { target: { value: "a random string" } });
        expect(input).toHaveProperty("value", "a random string");
        expect(changeHandler).toHaveBeenCalledTimes(0);
    });
});

describe("formatDate", () => {
    it("should render the given date correctly", () => {
        const date = new Date("1986-10-14");
        const formattedDate = formatDate(date);

        expect(formattedDate).toEqual("14.10.1986");
    });
});

describe("isSameDay", () => {
    it("should return true for equal dates", () => {
        const date = new Date("1986-10-14");

        expect(isSameDay(date, date)).toBeTruthy();
    });
    it("should return false for different dates", () => {
        const date1 = new Date("1986-10-14");
        const date2 = new Date("2001-10-14");

        expect(isSameDay(date1, date2)).toBeFalsy();
    });
});

expect.extend(toHaveNoViolations);

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
