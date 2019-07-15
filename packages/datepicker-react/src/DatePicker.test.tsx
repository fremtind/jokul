import React from "react";
import { render, cleanup } from "@testing-library/react";
import { DatePicker } from ".";

beforeEach(cleanup);

it("datepicker should render to dom with todays date as default", () => {
    const { getByTestId } = render(<DatePicker />);

    const today = new Date();

    const date = getByTestId("jkl-datepicker-input");
    expect(date).toHaveProperty("value", today.toLocaleDateString());
});

it("datepicker should render to dom with date in the past", () => {
    const thePast = new Date(new Date().setFullYear(new Date().getFullYear() - 1));
    const { getByTestId } = render(<DatePicker onlyFuture={false} initialDate={thePast} />);

    const date = getByTestId("jkl-datepicker-input");
    expect(date).toHaveProperty("value", thePast.toLocaleDateString());
});

it("datepicker should render to dom with date in the future", () => {
    const theFuture = new Date(new Date().setFullYear(new Date().getFullYear() + 1));
    const { getByTestId } = render(<DatePicker initialDate={theFuture} />);

    const date = getByTestId("jkl-datepicker-input");
    expect(date).toHaveProperty("value", theFuture.toLocaleDateString());
});

it("datepicker should render to dom with custom labels", () => {
    const custom = {
        label: "Select date",
        yearLabel: "Year",
        monthLabel: "Month",
    };
    const { getByLabelText } = render(
        <DatePicker label={custom.label} yearLabel={custom.yearLabel} monthLabel={custom.monthLabel} />,
    );

    const labels = [getByLabelText(custom.label), getByLabelText(custom.yearLabel), getByLabelText(custom.monthLabel)];

    labels.forEach((label) => expect(label).toBeInTheDocument());
});
