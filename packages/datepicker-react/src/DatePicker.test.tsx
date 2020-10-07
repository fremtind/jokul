import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { DatePicker } from ".";
import { axe } from "jest-axe";

describe("Datepicker", () => {
    it("renders with the correct format", () => {
        const thePast = new Date(2019, 11, 24);
        render(<DatePicker initialDate={thePast} />);

        const date = screen.getByTestId("jkl-datepicker__input");
        expect(date).toHaveProperty("value", "24.12.2019");
    });

    it("fires onChange method on edit input with valid date", () => {
        const changeHandler = jest.fn();
        render(<DatePicker onChange={changeHandler} />);
        const input = screen.getByTestId("jkl-datepicker__input");
        expect(input).toHaveProperty("value", "");
        fireEvent.change(input, { target: { value: "01.12.2019" } });
        expect(input).toHaveProperty("value", "01.12.2019");
        expect(changeHandler).toHaveBeenCalledTimes(1);
    });

    it("fires onChange method with undefined when text input is cleared", () => {
        const changeHandler = jest.fn();
        render(<DatePicker onChange={changeHandler} />);
        const input = screen.getByTestId("jkl-datepicker__input");
        expect(input).toHaveProperty("value", "");
        fireEvent.change(input, { target: { value: "some value to be cleared" } });
        fireEvent.change(input, { target: { value: "" } });
        expect(input).toHaveProperty("value", "");
        expect(changeHandler).toHaveBeenCalledTimes(1);
    });

    it("does not fire onChange on edit input with invalid date", () => {
        const changeHandler = jest.fn();
        render(<DatePicker onChange={changeHandler} />);
        const input = screen.getByTestId("jkl-datepicker__input");
        expect(input).toHaveProperty("value", "");
        fireEvent.change(input, { target: { value: "a random string" } });
        expect(input).toHaveProperty("value", "a random string");
        expect(changeHandler).toHaveBeenCalledTimes(0);
    });

    it("should change date on new props", () => {
        // New date takes MM.DD.YYYY values
        const { container } = render(<DatePicker value={new Date("02.02.2019")} />);
        render(<DatePicker value={new Date("09.12.2019")} />, { container });

        const input = screen.getByTestId("jkl-datepicker__input");

        // Check for date formatted as DD.MM.YYYY
        expect(input).toHaveProperty("value", "12.09.2019");
    });

    it("resets initialDate if it's outside scope", () => {
        render(<DatePicker initialDate={new Date("07.10.1992")} disableBeforeDate={new Date("09.12.2019")} />);

        const input = screen.getByTestId("jkl-datepicker__input");
        expect(input).toHaveProperty("value", "");
    });

    it("resets value when opening calendar, if it is set outside scope from input field", () => {
        render(<DatePicker initialDate={new Date("10.12.2020")} disableBeforeDate={new Date("09.12.2020")} />);
        const input = screen.getByTestId("jkl-datepicker__input");

        fireEvent.change(input, { target: { value: "08.12.2019" } });
        fireEvent.click(input);

        expect(input).toHaveProperty("value", "");
    });

    it("element IDs are defined from a root id with the same uniquie identifier", () => {
        render(<DatePicker helpLabel="Help label" />);
        const input = screen.getByTestId("jkl-datepicker__input");
        const label = screen.getByText("Help label");

        const inputId = input.getAttribute("id");

        const idPattern = /jkl-datepicker-[A-Za-z0-9\-_]{8}/;
        expect(inputId?.match(idPattern)).toHaveLength(1);
        expect(label.getAttribute("id")).toEqual(inputId + "-label");
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
