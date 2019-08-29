import React from "react";
import { render, cleanup } from "@testing-library/react";
import { DatePicker } from ".";

beforeEach(cleanup);

test("datepicker should render with the correct format", () => {
    const thePast = new Date(2019, 11, 24);
    const { getByTestId } = render(<DatePicker initialDate={thePast} />);

    const date = getByTestId("jkl-datepicker-input");
    expect(date).toHaveProperty("value", "24.12.2019");
});
