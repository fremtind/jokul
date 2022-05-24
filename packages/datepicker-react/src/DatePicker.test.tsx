import { jest } from "@jest/globals";
import { act, render, screen, cleanup, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import React from "react";
import { DatePicker } from ".";

describe("Datepicker", () => {
    beforeEach(() => {
        cleanup();
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
            await userEvent.clear(input);
            await userEvent.type(input, "01.12.2019", { delay: 5 });
        });

        expect(input).toHaveProperty("value", "01.12.2019");
        expect(changeHandler).toHaveBeenLastCalledWith(new Date(2019, 11, 1), undefined, {
            error: undefined,
            value: "01.12.2019",
        });
    });

    it("fires onChange method on edit input with wrong format", async () => {
        const changeHandler = jest.fn();
        render(<DatePicker onChange={changeHandler} />);
        const input = screen.getByTestId("jkl-datepicker__input");
        expect(input).toHaveProperty("value", "");

        await act(async () => {
            await userEvent.clear(input);
            await userEvent.type(input, "1.1", { delay: 5 });
        });

        expect(input).toHaveProperty("value", "1.1");

        expect(changeHandler).toHaveBeenLastCalledWith(undefined, undefined, { error: "WRONG_FORMAT", value: "1.1" });
    });

    it("fires onChange method on edit input with date outside lower bound", async () => {
        const changeHandler = jest.fn();
        const lowerBound = new Date(2021, 8, 20);
        render(<DatePicker onChange={changeHandler} disableBeforeDate={lowerBound} />);
        const input = screen.getByTestId("jkl-datepicker__input");
        expect(input).toHaveProperty("value", "");

        await act(async () => {
            await userEvent.clear(input);
            await userEvent.type(input, "19.09.2021", { delay: 5 });
        });

        expect(changeHandler).toHaveBeenLastCalledWith(new Date(2021, 8, 19), undefined, {
            error: "OUTSIDE_LOWER_BOUND",
            value: "19.09.2021",
        });
    });

    it("fires onChange method on edit input with date outside upper bound", async () => {
        const changeHandler = jest.fn();
        const upperBound = new Date(2021, 8, 20);
        render(<DatePicker onChange={changeHandler} disableAfterDate={upperBound} />);
        const input = screen.getByTestId("jkl-datepicker__input");
        expect(input).toHaveProperty("value", "");

        await act(async () => {
            await userEvent.clear(input);
            await userEvent.type(input, "21.09.2021", { delay: 5 });
        });

        expect(changeHandler).toHaveBeenLastCalledWith(new Date(2021, 8, 21), undefined, {
            error: "OUTSIDE_UPPER_BOUND",
            value: "21.09.2021",
        });
    });

    it("fires onChange method with undefined when text input is cleared", async () => {
        const changeHandler = jest.fn();
        render(<DatePicker onChange={changeHandler} />);
        const input = screen.getByTestId("jkl-datepicker__input");
        expect(input).toHaveProperty("value", "");

        await act(async () => {
            await userEvent.clear(input);
            await userEvent.type(input, "01.12.2019", { delay: 5 });
        });

        await act(async () => {
            await userEvent.clear(input);
        });

        expect(input).toHaveProperty("value", "");
        expect(changeHandler).toHaveBeenCalledWith(new Date(2019, 11, 1), undefined, {
            error: undefined,
            value: "01.12.2019",
        });
        expect(changeHandler).toHaveBeenCalledWith(undefined, undefined, { error: undefined, value: "" });
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

    it("resets value when opening calendar, if it is set outside scope from input field", async () => {
        render(<DatePicker disableBeforeDate={new Date("09.12.2020")} />);
        const input = screen.getByTestId("jkl-datepicker__input");

        await act(async () => {
            await userEvent.type(input, "08.12.2019", { delay: 5 });
            await userEvent.click(input);
        });

        expect(input).toHaveProperty("value", "");
    });

    it("element IDs are defined from a root id with the same uniquie identifier", () => {
        render(<DatePicker helpLabel="Help label" />);
        const input = screen.getByTestId("jkl-datepicker__input");
        const label = screen.getByText("Help label");

        const inputId = input.getAttribute("id");

        const idPattern = /jkl-datepicker-.+/;
        expect(inputId?.match(idPattern)).toHaveLength(1);
        expect(label.getAttribute("id")).toEqual(inputId + "-label");
    });

    it("should open the date picker when clicking on the input field", async () => {
        render(<DatePicker label="Some datepicker" />);
        const input = screen.getByLabelText("Some datepicker");

        expect(screen.getByTestId("jkl-calendar__core-datepicker")).toHaveClass("jkl-calendar--hidden");

        await act(async () => {
            await userEvent.click(input);
        });

        expect(screen.getByTestId("jkl-calendar__core-datepicker")).not.toHaveClass("jkl-calendar--hidden");
    });

    it("should close the datepicker when clicking outside the date picker", async () => {
        render(<DatePicker label="Some datepicker" />);
        const input = screen.getByLabelText("Some datepicker");

        expect(screen.getByTestId("jkl-calendar__core-datepicker")).toHaveClass("jkl-calendar--hidden");
        await act(async () => {
            await userEvent.click(input);
        });
        expect(screen.getByTestId("jkl-calendar__core-datepicker")).not.toHaveClass("jkl-calendar--hidden");
        await act(async () => {
            await userEvent.click(document.body);
        });
        expect(screen.getByTestId("jkl-calendar__core-datepicker")).toHaveClass("jkl-calendar--hidden");
    });

    it("should close the datepicker when tab-navigating outside the date picker", async () => {
        render(
            <>
                <DatePicker label="Some datepicker" />
                <button>Test</button>
            </>,
        );
        const input = screen.getByLabelText("Some datepicker");

        expect(screen.getByTestId("jkl-calendar__core-datepicker")).toHaveClass("jkl-calendar--hidden");
        await act(async () => {
            await userEvent.click(input);
        });
        expect(screen.getByTestId("jkl-calendar__core-datepicker")).not.toHaveClass("jkl-calendar--hidden");

        // Run userEvent.tab() 5 times to navigate out of datepicker. Progresses into the <button> element rendered above.
        await act(async () => {
            await userEvent.tab();
            await userEvent.tab();
            await userEvent.tab();
            await userEvent.tab();
            await userEvent.tab();
        });
        expect(screen.getByTestId("jkl-calendar__core-datepicker")).toHaveClass("jkl-calendar--hidden");
    });

    it("should close the calendar when a valid date is entered in the field", async () => {
        render(<DatePicker label="Some datepicker" />);
        const input = screen.getByLabelText("Some datepicker");

        expect(screen.getByTestId("jkl-calendar__core-datepicker")).toHaveClass("jkl-calendar--hidden");
        await act(async () => {
            await userEvent.click(input);
        });
        expect(screen.getByTestId("jkl-calendar__core-datepicker")).not.toHaveClass("jkl-calendar--hidden");
        await act(async () => {
            // Enter a valid date into the field
            await userEvent.type(input, "14.10.1986", { delay: 5 });
        });
        expect(screen.getByTestId("jkl-calendar__core-datepicker")).toHaveClass("jkl-calendar--hidden");
    });

    it("should keep focus on input field when clicking on the input field", async () => {
        render(<DatePicker label="Some datepicker" />);
        const input = screen.getByLabelText("Some datepicker");

        await act(async () => {
            await userEvent.click(input);
        });

        expect(document.activeElement).toBe(input);
    });

    it("should should move focus to calendar button when opening datepicker with button", async () => {
        jest.useFakeTimers().setSystemTime(new Date(2019, 9, 20));

        render(<DatePicker label="Some datepicker" />);
        const openCalendarButtonElement = screen.getByText("Åpne kalender");

        await act(async () => {
            await userEvent.click(openCalendarButtonElement, {
                skipHover: true,
                advanceTimers: () => jest.advanceTimersByTime(0),
            });
        });
        jest.runAllTimers();

        const todayButtonElement = screen.getByText("20");
        expect(document.activeElement).toBe(todayButtonElement);

        jest.useRealTimers();
    });

    it("should reset date if day before 'disableBeforeDate' date is manually typed", async () => {
        render(<DatePicker disableBeforeDate={new Date(2020, 8, 2)} label="Some datepicker" />);

        const input = screen.getByLabelText("Some datepicker");
        const toggleCalendarButtonElement = screen.getByText("Åpne kalender");

        await act(async () => {
            await userEvent.click(input);

            await userEvent.clear(input);
            await userEvent.type(input, "01.09.2020", { delay: 5 });
        });

        expect(input).toHaveValue("01.09.2020");

        await act(async () => {
            await userEvent.click(toggleCalendarButtonElement, {
                skipHover: true,
                advanceTimers: () => jest.advanceTimersByTime(0),
            }); // Close calendar
            await userEvent.click(toggleCalendarButtonElement, {
                skipHover: true,
                advanceTimers: () => jest.advanceTimersByTime(0),
            }); // Open calendar
        });

        expect(input).toHaveValue("");
    });

    it("should not reset date if 'disableBeforeDate' date is manually typed", async () => {
        render(<DatePicker disableBeforeDate={new Date(2020, 8, 1)} label="Some datepicker" />);

        const input = screen.getByLabelText("Some datepicker");
        const toggleCalendarButtonElement = screen.getByText("Åpne kalender");

        await act(async () => {
            await userEvent.click(input);
            await userEvent.clear(input);
            await userEvent.type(input, "01.09.2020", { delay: 5 });
        });

        expect(input).toHaveValue("01.09.2020");

        await act(async () => {
            await userEvent.click(toggleCalendarButtonElement, {
                skipHover: true,
                advanceTimers: () => jest.advanceTimersByTime(0),
            }); // Close calendar
            await userEvent.click(toggleCalendarButtonElement, {
                skipHover: true,
                advanceTimers: () => jest.advanceTimersByTime(0),
            }); // Open calendar
        });

        expect(input).toHaveValue("01.09.2020");
    });

    it("should not reset date if 'disableAfterDate' date is manually typed", async () => {
        render(<DatePicker disableAfterDate={new Date(2020, 8, 1)} label="Some datepicker" />);

        const input = screen.getByLabelText("Some datepicker");
        const toggleCalendarButtonElement = screen.getByText("Åpne kalender");
        await act(async () => {
            await userEvent.click(input);

            await userEvent.clear(input);
            await userEvent.type(input, "01.09.2020", { delay: 5 });
        });

        expect(input).toHaveValue("01.09.2020");

        await act(async () => {
            await userEvent.click(toggleCalendarButtonElement, {
                skipHover: true,
                advanceTimers: () => jest.advanceTimersByTime(0),
            }); // Close calendar
            await userEvent.click(toggleCalendarButtonElement, {
                skipHover: true,
                advanceTimers: () => jest.advanceTimersByTime(0),
            }); // Open calendar
        });

        expect(input).toHaveValue("01.09.2020");
    });

    it("should reset date if day after 'disableAfterDate' is manually typed", async () => {
        render(<DatePicker disableAfterDate={new Date(2020, 8, 1)} label="Some datepicker" />);

        const input = screen.getByLabelText("Some datepicker");
        const toggleCalendarButtonElement = screen.getByText("Åpne kalender");
        await act(async () => {
            await userEvent.click(input);

            await userEvent.clear(input);
            await userEvent.type(input, "02.09.2020", { delay: 5 });
        });

        expect(input).toHaveValue("02.09.2020");

        await act(async () => {
            await userEvent.click(toggleCalendarButtonElement, {
                skipHover: true,
                advanceTimers: () => jest.advanceTimersByTime(0),
            }); // Close calendar
            await userEvent.click(toggleCalendarButtonElement, {
                skipHover: true,
                advanceTimers: () => jest.advanceTimersByTime(0),
            }); // Open calendar
        });

        expect(input).toHaveValue("");
    });

    it("should call onChange once when selecting a date in the date picker", async () => {
        jest.useFakeTimers().setSystemTime(new Date(2019, 9, 20));

        const onChangeFn = jest.fn();
        render(<DatePicker onChange={onChangeFn} />);

        const toggleCalendarButtonElement = screen.getByText("Åpne kalender");

        await act(async () => {
            await userEvent.click(toggleCalendarButtonElement, {
                skipHover: true,
                advanceTimers: () => jest.advanceTimersByTime(0),
            });
            await userEvent.click(screen.getByText("31"), {
                skipHover: true,
                advanceTimers: () => jest.advanceTimersByTime(0),
            });
        });

        expect(onChangeFn).toHaveBeenCalledWith(new Date(2019, 9, 31), undefined, {
            error: undefined,
            value: "31.10.2019",
        });
        expect(onChangeFn).toHaveBeenCalledTimes(1);

        jest.useRealTimers();
    });

    it("should call onFocus when clicking input element", async () => {
        const onFocus = jest.fn();
        render(
            <div>
                <DatePicker onFocus={onFocus} />
                <button>Click</button>
            </div>,
        );

        const input = screen.getByLabelText("Velg dato");
        await act(async () => {
            await userEvent.click(input);
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

        await act(async () => {
            await userEvent.tab();
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

        const input = screen.getByLabelText("Velg dato");
        await act(async () => {
            await userEvent.click(input);
            await userEvent.click(screen.getByText("Click"));
        });

        expect(onBlur).toHaveBeenCalledTimes(1);
    });

    it("should call onFocus when clicking toggle calendar element", async () => {
        const onFocus = jest.fn();
        render(
            <div>
                <DatePicker onFocus={onFocus} />
                <button>Click</button>
            </div>,
        );

        const toggleCalendarButtonElement = screen.getByTitle("Åpne kalender");

        await act(async () => {
            await userEvent.click(toggleCalendarButtonElement, {
                skipHover: true,
                advanceTimers: () => jest.advanceTimersByTime(0),
            });
        });

        expect(onFocus).toHaveBeenCalledTimes(1);
    });

    it("should call onKeyDown after pressing [Enter] on input element", async () => {
        const onKeyDown = jest.fn();
        render(
            <div>
                <DatePicker onKeyDown={onKeyDown} />
            </div>,
        );

        const input = screen.getByLabelText("Velg dato");
        await act(async () => {
            await userEvent.type(input, "{enter}");
        });

        expect(onKeyDown).toHaveBeenCalledTimes(1);
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
        await act(async () => {
            await userEvent.click(toggleCalendarButtonElement, {
                skipHover: true,
                advanceTimers: () => jest.advanceTimersByTime(0),
            });
            await userEvent.click(screen.getByText("Click"));
        });

        expect(onBlur).toHaveBeenCalledTimes(1);
    });

    it("should not call onBlur when focus changes inside the component and be called once when focus leaves component", async () => {
        const onBlur = jest.fn();
        jest.useFakeTimers().setSystemTime(new Date(2019, 9, 20));

        render(
            <div>
                <DatePicker onBlur={onBlur} />
                <button>Click</button>
            </div>,
        );

        const input = screen.getByLabelText("Velg dato");
        const toggleCalendarButtonElement = screen.getByTitle("Åpne kalender");
        await act(async () => {
            await userEvent.click(input, { skipHover: true, advanceTimers: () => jest.advanceTimersByTime(0) });
            await userEvent.click(toggleCalendarButtonElement, {
                skipHover: true,
                advanceTimers: () => jest.advanceTimersByTime(0),
            }); // Close calendar
        });

        expect(onBlur).toHaveBeenCalledTimes(0);

        await act(async () => {
            await userEvent.click(toggleCalendarButtonElement, {
                skipHover: true,
                advanceTimers: () => jest.advanceTimersByTime(0),
            }); // Open calendar
            await userEvent.click(screen.getByText("21"), {
                skipHover: true,
                advanceTimers: () => jest.advanceTimersByTime(0),
            });
        });

        expect(onBlur).toHaveBeenCalledTimes(0);

        await act(async () => {
            await userEvent.click(screen.getByText("Click"), {
                skipHover: true,
                advanceTimers: () => jest.advanceTimersByTime(0),
            }); // Click button outside component
        });

        expect(onBlur).toHaveBeenCalledWith(new Date(2019, 9, 21), expect.anything());
        expect(onBlur).toHaveBeenCalledTimes(1);

        jest.useRealTimers();
    });

    it("should have data-testautoid", () => {
        const thePast = new Date(2019, 11, 24);
        render(<DatePicker initialDate={thePast} data-testautoid="jkl-datepicker__testautoid" />);

        const input = screen.getByTestId("jkl-datepicker__input");
        const testAutoId = input.getAttribute("data-testautoid");
        expect(testAutoId).toEqual("jkl-datepicker__testautoid");
    });

    it("supports label only for screen readers", () => {
        const thePast = new Date(2019, 11, 24);
        render(<DatePicker initialDate={thePast} label="Hello" labelProps={{ srOnly: true }} />);

        const label = screen.getByText("Hello");
        expect(label).toHaveClass("jkl-label--sr-only");
    });
});

describe("after user types string", () => {
    it("should return undefined value for invalid string", async () => {
        const onBlur = jest.fn();
        render(
            <div>
                <DatePicker onBlur={onBlur} />
                <button>Click</button>
            </div>,
        );

        const input = screen.getByLabelText("Velg dato");

        await act(async () => {
            await userEvent.click(input);
            await userEvent.type(input, "1.januar");
            await userEvent.click(screen.getByText("Click")); // Click button outside component
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

        const input = screen.getByLabelText("Velg dato");

        await act(async () => {
            await userEvent.click(input);
            await userEvent.type(input, "01.01.2021", { delay: 5 });
            await userEvent.click(screen.getByText("Click")); // Click button outside component
        });

        expect(onBlur).toHaveBeenCalledTimes(1);
        expect(onBlur.mock.calls[0][0]).toStrictEqual(new Date("01.01.2021"));
    });

    it("should pass forceCompact to all compactable child components", () => {
        const thePast = new Date(2019, 11, 24);
        render(
            <DatePicker
                initialDate={thePast}
                label="Hva er tid?" /* label skal være kompakt */
                helpLabel="Tid er en flat sirkel" /* hjelpeteksten skal være kompakt */
                extended /* extended for å vise inputfelt i kalenderen, som også skal være kompakte */
                forceCompact
            />,
        );

        const label = screen.getByText("Hva er tid?");
        expect(label).toHaveClass("jkl-label--compact");

        const inputWrapper = screen.getByTestId("jkl-datepicker__input-wrapper");
        expect(inputWrapper).toHaveClass("jkl-text-input--compact");

        const helpText = screen.getByText("Tid er en flat sirkel");
        expect(helpText).toHaveClass("jkl-form-support-label--compact");

        const calendarYear = screen.getByTestId("jkl-text-input");
        expect(within(calendarYear).getByLabelText("År")).toBeInTheDocument(); // bekreft at vi tester på riktig element
        expect(calendarYear).toHaveClass("jkl-text-input--compact");

        const calendarMonth = screen.getByTestId("jkl-select");
        expect(within(calendarMonth).getByLabelText("Måned")).toBeInTheDocument(); // bekreft at vi tester på riktig element
        expect(calendarMonth).toHaveClass("jkl-select--compact");
    });
});

describe("a11y", () => {
    it("default datepicker should be a11y compliant", async () => {
        const { container } = render(<DatePicker defaultShow />);
        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });

    it("extended datepicker should be a11y compliant", async () => {
        const { container } = render(<DatePicker extended defaultShow />);
        const results = await axe(container, {
            rules: {
                "form-field-multiple-labels": { enabled: false },
            },
        });

        expect(results).toHaveNoViolations();
    });
});
