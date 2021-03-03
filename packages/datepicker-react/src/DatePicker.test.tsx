import { act, fireEvent, render, screen, cleanup } from "@testing-library/react";

import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import React from "react";
import { SinonFakeTimers, useFakeTimers } from "sinon";
import { DatePicker } from ".";

describe("Datepicker", () => {
    let clock: SinonFakeTimers;

    beforeEach(() => {
        cleanup();
        const now = new Date(2019, 9, 20);
        clock = useFakeTimers(now);
    });

    afterEach(() => {
        clock.restore();
        jest.useRealTimers();
    });

    it("renders with the correct format", () => {
        const thePast = new Date(2019, 11, 24);
        render(<DatePicker initialDate={thePast} />);

        const input = screen.getByTestId("jkl-datepicker__input");
        expect(input).toHaveProperty("value", "24.12.2019");
    });

    it("fires onChange method on edit input with valid date", async () => {
        const changeHandler = jest.fn();
        render(<DatePicker onChange={changeHandler} />);
        const input = screen.getByTestId("jkl-datepicker__input");
        expect(input).toHaveProperty("value", "");
        await act(async () => {
            await userEvent.type(input, "");
            await userEvent.type(input, "01.12.2019");
        });

        expect(input).toHaveProperty("value", "01.12.2019");
        expect(changeHandler).toHaveBeenCalledWith(new Date(2019, 11, 1));
    });

    it("fires onChange method with undefined when text input is cleared", async () => {
        const changeHandler = jest.fn();
        render(<DatePicker onChange={changeHandler} />);
        const input = screen.getByTestId("jkl-datepicker__input");
        expect(input).toHaveProperty("value", "");

        await act(async () => {
            await userEvent.type(input, "");
            await userEvent.type(input, "01.12.2019");
        });

        act(() => {
            userEvent.clear(input);
        });
        expect(input).toHaveProperty("value", "");
        expect(changeHandler).toHaveBeenCalledWith(new Date(2019, 11, 1));
        expect(changeHandler).toHaveBeenCalledWith(undefined);
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

    it("should open the date picker when clicking on the input field", async () => {
        jest.useFakeTimers();

        render(<DatePicker label="Some datepicker" />);
        const inputElement = screen.getByLabelText("Some datepicker");

        expect(screen.getByTestId("jkl-calendar__core-datepicker")).toHaveClass("jkl-calendar--hidden");

        await act(async () => {
            userEvent.click(inputElement);
            jest.runAllTimers();
        });

        expect(screen.getByTestId("jkl-calendar__core-datepicker")).not.toHaveClass("jkl-calendar--hidden");
    });

    it("should close the datepicker when clicking outside the date picker", async () => {
        jest.useFakeTimers();

        render(<DatePicker label="Some datepicker" />);
        const inputElement = screen.getByLabelText("Some datepicker");

        expect(screen.getByTestId("jkl-calendar__core-datepicker")).toHaveClass("jkl-calendar--hidden");

        await act(async () => {
            userEvent.click(inputElement);
            jest.runAllTimers();
        });

        expect(screen.getByTestId("jkl-calendar__core-datepicker")).not.toHaveClass("jkl-calendar--hidden");

        await act(async () => {
            userEvent.click(document.body);
            jest.runAllTimers();
        });

        expect(screen.getByTestId("jkl-calendar__core-datepicker")).toHaveClass("jkl-calendar--hidden");
    });

    it("should keep focus on input field when clicking on the input field", async () => {
        jest.useFakeTimers();

        render(<DatePicker label="Some datepicker" />);
        const inputElement = screen.getByLabelText("Some datepicker");

        await act(async () => {
            userEvent.click(inputElement);
            jest.runAllTimers();
        });

        expect(document.activeElement).toBe(inputElement);
    });

    it("should should move focus to calendar button when opening datepicker with button", async () => {
        jest.useFakeTimers();

        render(<DatePicker label="Some datepicker" />);
        const openCalendarButtonElement = screen.getByText("Åpne kalender");

        await act(async () => {
            userEvent.click(openCalendarButtonElement);
            jest.runAllTimers();
        });

        const todayButtonElement = screen.getByText("20");
        expect(document.activeElement).toBe(todayButtonElement);
    });

    it("should reset date if day before 'disableBeforeDate' date is manually typed", async () => {
        render(<DatePicker disableBeforeDate={new Date(2020, 8, 2)} label="Some datepicker" />);

        const inputElement = screen.getByLabelText("Some datepicker");
        const toggleCalendarButtonElement = screen.getByText("Åpne kalender");

        await act(async () => {
            userEvent.click(inputElement);

            await userEvent.type(inputElement, "");
            await userEvent.type(inputElement, "01.09.2020");
        });

        expect(inputElement).toHaveValue("01.09.2020");

        act(() => {
            userEvent.click(toggleCalendarButtonElement); // Close calendar
            userEvent.click(toggleCalendarButtonElement); // Open calendar
        });

        expect(inputElement).toHaveValue("");
    });

    it("should not reset date if 'disableBeforeDate' date is manually typed", async () => {
        render(<DatePicker disableBeforeDate={new Date(2020, 8, 1)} label="Some datepicker" />);

        const inputElement = screen.getByLabelText("Some datepicker");
        const toggleCalendarButtonElement = screen.getByText("Åpne kalender");

        await act(async () => {
            userEvent.click(inputElement);

            await userEvent.type(inputElement, "");
            await userEvent.type(inputElement, "01.09.2020");
        });

        expect(inputElement).toHaveValue("01.09.2020");

        act(() => {
            userEvent.click(toggleCalendarButtonElement); // Close calendar
            userEvent.click(toggleCalendarButtonElement); // Open calendar
        });

        expect(inputElement).toHaveValue("01.09.2020");
    });

    it("should not reset date if 'disableAfterDate' date is manually typed", async () => {
        render(<DatePicker disableAfterDate={new Date(2020, 8, 1)} label="Some datepicker" />);

        const inputElement = screen.getByLabelText("Some datepicker");
        const toggleCalendarButtonElement = screen.getByText("Åpne kalender");
        await act(async () => {
            userEvent.click(inputElement);

            await userEvent.type(inputElement, "");
            await userEvent.type(inputElement, "01.09.2020");
        });

        expect(inputElement).toHaveValue("01.09.2020");

        await act(async () => {
            userEvent.click(toggleCalendarButtonElement); // Close calendar
            userEvent.click(toggleCalendarButtonElement); // Open calendar
        });

        expect(inputElement).toHaveValue("01.09.2020");
    });

    it("should reset date if day after 'disableAfterDate' is manually typed", async () => {
        render(<DatePicker disableAfterDate={new Date(2020, 8, 1)} label="Some datepicker" />);

        const inputElement = screen.getByLabelText("Some datepicker");
        const toggleCalendarButtonElement = screen.getByText("Åpne kalender");
        await act(async () => {
            userEvent.click(inputElement);

            await userEvent.type(inputElement, "");
            await userEvent.type(inputElement, "02.09.2020");
        });

        expect(inputElement).toHaveValue("02.09.2020");

        act(() => {
            userEvent.click(toggleCalendarButtonElement); // Close calendar
            userEvent.click(toggleCalendarButtonElement); // Open calendar
        });

        expect(inputElement).toHaveValue("");
    });

    it("should call onChange once when selecting a date in the date picker", async () => {
        const onChangeFn = jest.fn();
        render(<DatePicker onChange={onChangeFn} />);

        const toggleCalendarButtonElement = screen.getByText("Åpne kalender");

        act(() => {
            userEvent.click(toggleCalendarButtonElement);
            userEvent.click(screen.getByText("31"));
        });

        expect(onChangeFn).toHaveBeenCalledWith(new Date(2019, 9, 31));
        expect(onChangeFn).toHaveBeenCalledTimes(1);
    });

    it("should call onFocus when clicking input element", async () => {
        const onFocus = jest.fn();
        render(
            <div>
                <DatePicker onFocus={onFocus} />
                <button>Click</button>
            </div>,
        );

        const inputElement = screen.getByLabelText("Velg dato");
        act(() => {
            userEvent.click(inputElement);
        });

        expect(onFocus).toHaveBeenCalledTimes(1);
    });

    it("should call onFocus when tabbing to input element", async () => {
        const onFocus = jest.fn();
        render(
            <div>
                <DatePicker onFocus={onFocus} />
                <button>Click</button>
            </div>,
        );

        act(() => {
            userEvent.tab();
        });

        expect(onFocus).toHaveBeenCalledTimes(1);
    });

    it("should call onBlur when clicking input element then clicking outside", async () => {
        const onBlur = jest.fn();
        render(
            <div>
                <DatePicker onBlur={onBlur} />
                <button>Click</button>
            </div>,
        );

        const inputElement = screen.getByLabelText("Velg dato");
        act(() => {
            userEvent.click(inputElement);
            userEvent.click(screen.getByText("Click"));
        });

        expect(onBlur).toHaveBeenCalledTimes(1);
    });

    it("should call onFocus when clicking toggle calendar element", async () => {
        jest.useFakeTimers();
        const onFocus = jest.fn();
        render(
            <div>
                <DatePicker onFocus={onFocus} />
                <button>Click</button>
            </div>,
        );

        const toggleCalendarButtonElement = screen.getByTitle("Åpne kalender");
        act(() => {
            userEvent.click(toggleCalendarButtonElement);
        });

        expect(onFocus).toHaveBeenCalledTimes(1);
    });

    it("should call onBlur when clicking toggle calendar element and then clicking outside", async () => {
        const onBlur = jest.fn();
        render(
            <div>
                <DatePicker onBlur={onBlur} />
                <button>Click</button>
            </div>,
        );

        const toggleCalendarButtonElement = screen.getByTitle("Åpne kalender");
        act(() => {
            userEvent.click(toggleCalendarButtonElement);
            userEvent.click(screen.getByText("Click"));
        });

        expect(onBlur).toHaveBeenCalledTimes(1);
    });

    it("should not call onBlur when focus changes inside the component and be called once when focus leaves component", async () => {
        const onBlur = jest.fn();
        render(
            <div>
                <DatePicker onBlur={onBlur} />
                <button>Click</button>
            </div>,
        );

        const inputElement = screen.getByLabelText("Velg dato");
        const toggleCalendarButtonElement = screen.getByTitle("Åpne kalender");
        await act(async () => {
            userEvent.click(inputElement);
            await userEvent.type(inputElement, "");
            await userEvent.type(inputElement, "01.02.2020");
            userEvent.click(toggleCalendarButtonElement); // Close calendar
        });

        expect(onBlur).toHaveBeenCalledTimes(0);

        act(() => {
            userEvent.click(toggleCalendarButtonElement); // Open calendar
            userEvent.click(screen.getByText("31"));
        });

        expect(onBlur).toHaveBeenCalledTimes(0);

        act(() => {
            userEvent.click(screen.getByText("Click")); // Click button outside component
        });

        expect(onBlur).toHaveBeenCalledWith(new Date(2020, 0, 31), expect.anything());
        expect(onBlur).toHaveBeenCalledTimes(1);
    });
});

describe("after user types string", () => {
    it("should return undefined value for invalid string", () => {
        const onBlur = jest.fn();
        render(
            <div>
                <DatePicker onBlur={onBlur} />
                <button>Click</button>
            </div>,
        );

        const inputElement = screen.getByLabelText("Velg dato");

        act(() => {
            userEvent.click(inputElement);
            userEvent.type(inputElement, "1.januar");
            userEvent.click(screen.getByText("Click")); // Click button outside component
        });
        expect(onBlur).toHaveBeenCalledTimes(1);
        expect(onBlur.mock.calls[0][0]).toBe(undefined);
    });

    it("should return date value for valid string", async () => {
        const onBlur = jest.fn();
        render(
            <div>
                <DatePicker onBlur={onBlur} />
                <button>Click</button>
            </div>,
        );

        const inputElement = screen.getByLabelText("Velg dato");

        await act(async () => {
            await userEvent.click(inputElement);
            await userEvent.type(inputElement, "01.01.2021");
            await userEvent.click(screen.getByText("Click")); // Click button outside component
        });

        expect(onBlur).toHaveBeenCalledTimes(1);
        expect(onBlur.mock.calls[0][0]).toStrictEqual(new Date("01.01.2021"));
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
