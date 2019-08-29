import React from "react";
import { render, cleanup } from "@testing-library/react";
import { DatePicker } from ".";
import { formatDate, isSameDay } from "./DatePicker";

beforeEach(cleanup);

describe("Datepicker", () => {
    it("should render with the correct format", () => {
        const thePast = new Date(2019, 11, 24);
        const { getByTestId } = render(<DatePicker initialDate={thePast} />);

        const date = getByTestId("jkl-datepicker-input");
        expect(date).toHaveProperty("value", "24.12.2019");
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
