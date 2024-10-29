import { jest } from "@jest/globals";
import { act, render, cleanup, RenderOptions } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import React from "react";
import { DatePicker, formatInput } from ".";

function setup(jsx: JSX.Element, renderOptions?: RenderOptions) {
    return {
        user: userEvent.setup({
            delay: 5,
            advanceTimers: jest.advanceTimersByTime,
            skipHover: true,
        }),
        ...render(jsx, renderOptions),
    };
}

/**
 * When testing our components, we need ensure to flush microtasks immediately after a floating element renders. This will avoid the act warning.
 *
 * @see https://floating-ui.com/docs/react#testing
 */
const waitForPosition = () => act(async () => {});

describe("Datepicker", () => {
    beforeEach(() => {
        cleanup();
        jest.useFakeTimers();
    });

    afterEach(() => {
        jest.useRealTimers();
    });

    it("renders with the correct format", async () => {
        const { getByTestId } = setup(<DatePicker defaultValue="24.12.2019" />);

        await waitForPosition();

        const input = getByTestId("jkl-datepicker__input");

        expect(input).toHaveProperty("value", "24.12.2019");
    });

    it("fires onChange method on edit input", async () => {
        const changeHandler = jest.fn();

        const { user, getByTestId } = setup(
            <DatePicker onChange={changeHandler} />,
        );

        await waitForPosition();

        const input = getByTestId("jkl-datepicker__input");

        expect(input).toHaveProperty("value", "");

        await act(async () => {
            await user.clear(input);
            await user.type(input, "01.12.2019");
        });

        expect(input).toHaveProperty("value", "01.12.2019");
        expect(changeHandler).toHaveBeenLastCalledWith(
            expect.anything(),
            expect.any(Date),
            {
                error: null,
                value: "01.12.2019",
            },
        );
    });

    it("fires onChange method on edit input with wrong format", async () => {
        const changeHandler = jest.fn();

        const { user, getByTestId } = setup(
            <DatePicker onChange={changeHandler} />,
        );

        await waitForPosition();

        const input = getByTestId("jkl-datepicker__input");

        expect(input).toHaveProperty("value", "");

        await act(async () => {
            await user.clear(input);
            await user.type(input, "1.1");
        });

        expect(input).toHaveProperty("value", "1.1");

        expect(changeHandler).toHaveBeenLastCalledWith(
            expect.anything(),
            null,
            {
                error: "WRONG_FORMAT",
                value: "1.1",
            },
        );
    });

    it("fires onChange method on edit input with date outside lower bound", async () => {
        const changeHandler = jest.fn();

        const lowerBound = new Date(2021, 8, 20);

        const { user, getByTestId } = setup(
            <DatePicker
                onChange={changeHandler}
                disableBeforeDate={formatInput(lowerBound)}
            />,
        );

        await waitForPosition();

        const input = getByTestId("jkl-datepicker__input");

        expect(input).toHaveProperty("value", "");

        await act(async () => {
            await user.clear(input);
            await user.type(input, "19.09.2021");
        });

        expect(changeHandler).toHaveBeenLastCalledWith(
            expect.anything(),
            new Date(2021, 8, 19),
            {
                error: "OUTSIDE_LOWER_BOUND",
                value: "19.09.2021",
            },
        );
    });

    it("fires onChange method on edit input with date outside upper bound", async () => {
        const changeHandler = jest.fn();

        const upperBound = new Date(2021, 8, 20);

        const { user, getByTestId } = setup(
            <DatePicker
                onChange={changeHandler}
                disableAfterDate={formatInput(upperBound)}
            />,
        );

        await waitForPosition();

        const input = getByTestId("jkl-datepicker__input");

        expect(input).toHaveProperty("value", "");

        await act(async () => {
            await user.clear(input);
            await user.type(input, "21.09.2021");
        });

        expect(changeHandler).toHaveBeenLastCalledWith(
            expect.anything(),
            new Date(2021, 8, 21),
            {
                error: "OUTSIDE_UPPER_BOUND",
                value: "21.09.2021",
            },
        );
    });

    it("fires onChange method when text input is cleared", async () => {
        const changeHandler = jest.fn();

        const { user, getByTestId } = setup(
            <DatePicker onChange={changeHandler} />,
        );

        await waitForPosition();

        const input = getByTestId("jkl-datepicker__input");

        expect(input).toHaveProperty("value", "");

        await act(async () => {
            await user.clear(input);
            await user.type(input, "01.12.2019");
        });

        expect(changeHandler).toHaveBeenLastCalledWith(
            expect.anything(),
            new Date(2019, 11, 1),
            {
                error: null,
                value: "01.12.2019",
            },
        );

        await act(async () => {
            await user.clear(input);
        });

        expect(input).toHaveProperty("value", "");
        expect(changeHandler).toHaveBeenLastCalledWith(
            expect.anything(),
            null,
            { error: null, value: "" },
        );
    });

    it("should change date on new props", async () => {
        const { container, getByTestId } = setup(
            <DatePicker value="02.02.2019" />,
        );

        setup(<DatePicker value="12.09.2019" />, { container });

        await waitForPosition();

        const input = getByTestId("jkl-datepicker__input");

        expect(input).toHaveProperty("value", "12.09.2019");
    });

    it("should close the datepicker when clicking outside the date picker", async () => {
        const { user, getByTestId, queryByTestId } = setup(
            <DatePicker label="Some datepicker" />,
        );

        expect(queryByTestId("jkl-calendar")).not.toBeInTheDocument();

        const button = getByTestId("jkl-datepicker__trigger");

        await act(async () => {
            await user.click(button);
        });

        expect(getByTestId("jkl-calendar")).toBeInTheDocument();

        await act(async () => {
            await user.click(document.body);
        });

        expect(queryByTestId("jkl-calendar")).not.toBeInTheDocument();
    });

    it("should keep focus on input field when clicking on the input field", async () => {
        const { user, getByLabelText } = setup(
            <DatePicker label="Some datepicker" />,
        );

        await waitForPosition();

        const input = getByLabelText("Some datepicker");

        await act(async () => {
            await user.click(input);
        });

        expect(document.activeElement).toBe(input);
    });

    it("should move focus to calendar button when opening datepicker with button", async () => {
        jest.setSystemTime(new Date(2019, 9, 20));

        const { user, getByRole, getByLabelText } = setup(
            <DatePicker label="Some datepicker" />,
        );

        await waitForPosition();

        const openCalendarButtonElement = getByRole("button");

        await act(async () => {
            await user.click(openCalendarButtonElement);
        });

        jest.runAllTimers();

        const todayButtonElement = getByLabelText("20. oktober");

        expect(document.activeElement).toBe(todayButtonElement);
    });

    it("should call onChange once when selecting a date in the date picker", async () => {
        jest.setSystemTime(new Date(2019, 9, 20));

        const onChangeFn = jest.fn();

        const { user, getByRole, getByLabelText } = setup(
            <DatePicker onChange={onChangeFn} />,
        );

        await waitForPosition();

        const toggleCalendarButtonElement = getByRole("button");

        await act(async () => {
            await user.click(toggleCalendarButtonElement);
            await user.click(getByLabelText("31. oktober"));
        });

        expect(onChangeFn).toHaveBeenCalledWith(
            expect.anything(),
            new Date(2019, 9, 31),
            {
                error: null,
                value: "31.10.2019",
            },
        );
        expect(onChangeFn).toHaveBeenCalledTimes(1);
    });

    it("should call onFocus when clicking input element", async () => {
        const onFocus = jest.fn();

        const { user, getByLabelText } = setup(
            <div>
                <DatePicker onFocus={onFocus} />
                <button>Click</button>
            </div>,
        );

        await waitForPosition();

        const input = getByLabelText("Velg dato");

        await act(async () => {
            await user.click(input);
        });

        expect(onFocus).toHaveBeenCalledTimes(1);
    });

    it("should call onFocus when tabbing to input element", async () => {
        const onFocus = jest.fn();

        const { user } = setup(
            <div>
                <DatePicker onFocus={onFocus} />
                <button>Click</button>
            </div>,
        );

        await waitForPosition();

        await act(async () => {
            await user.tab();
        });

        expect(onFocus).toHaveBeenCalledTimes(1);
    });

    it("should call onBlur when clicking input element then clicking outside", async () => {
        const onBlur = jest.fn();

        const { user, getByLabelText, getByText } = setup(
            <div>
                <DatePicker onBlur={onBlur} />
                <button>Click</button>
            </div>,
        );

        await waitForPosition();

        const input = getByLabelText("Velg dato");

        await act(async () => {
            await user.click(input);
            await user.click(getByText("Click"));
        });

        expect(onBlur).toHaveBeenCalledTimes(1);
    });

    it("should call action.onFocus when clicking toggle calendar element", async () => {
        const onFocus = jest.fn();

        const { user, getByTitle } = setup(
            <div>
                <DatePicker action={{ onFocus }} />
                <button>Click</button>
            </div>,
        );

        await waitForPosition();

        const toggleCalendarButtonElement = getByTitle("Åpne kalender");

        await act(async () => {
            await user.click(toggleCalendarButtonElement);
        });

        expect(onFocus).toHaveBeenCalledTimes(1);
    });

    it("should call action.onBlur when clicking toggle calendar element and then clicking outside", async () => {
        const onBlur = jest.fn();

        const { user, getByTitle, getByText } = setup(
            <div>
                <DatePicker action={{ onBlur }} />
                <button>Click</button>
            </div>,
        );

        await waitForPosition();

        const toggleCalendarButtonElement = getByTitle("Åpne kalender");

        await act(async () => {
            await user.click(toggleCalendarButtonElement);
            await user.click(getByText("Click"));
        });

        expect(onBlur).toHaveBeenCalledTimes(1);
    });

    it("should have data-testautoid", async () => {
        const { getByTestId } = setup(
            <DatePicker
                defaultValue="24.12.2019"
                data-testautoid="jkl-datepicker__testautoid"
            />,
        );

        await waitForPosition();

        const input = getByTestId("jkl-datepicker__input");

        const testAutoId = input.getAttribute("data-testautoid");

        expect(testAutoId).toEqual("jkl-datepicker__testautoid");
    });

    it("supports label only for screen readers", async () => {
        const { getByText } = setup(
            <DatePicker
                defaultValue="24.12.2019"
                label="Hello"
                labelProps={{ srOnly: true }}
            />,
        );

        await waitForPosition();

        const label = getByText("Hello");

        expect(label).toHaveClass("jkl-label--sr-only");
    });

    describe("after user types string", () => {
        it("should return null value for invalid string", async () => {
            const onBlur = jest.fn();

            const { user, getByLabelText, getByText } = setup(
                <div>
                    <DatePicker onBlur={onBlur} />
                    <button>Click</button>
                </div>,
            );

            await waitForPosition();

            const input = getByLabelText("Velg dato");

            await act(async () => {
                await user.click(input);
                await user.type(input, "1.januar");
                await user.click(getByText("Click"));
            });

            expect(onBlur).toHaveBeenCalledTimes(1);
            expect(onBlur.mock.calls[0][1]).toBe(null);
        });

        it("should return date value for valid string", async () => {
            const onBlur = jest.fn();

            const { user, getByLabelText, getByText } = setup(
                <div>
                    <DatePicker onBlur={onBlur} />
                    <button>Click</button>
                </div>,
            );

            await waitForPosition();
            const input = getByLabelText("Velg dato");

            await act(async () => {
                await user.click(input);
                await user.type(input, "01.01.2021");
                await user.click(getByText("Click"));
            });

            expect(onBlur).toHaveBeenCalledTimes(1);
            expect(onBlur.mock.calls[0][1]).toStrictEqual(
                new Date("01.01.2021"),
            );
        });

        it("should return correct date when pasting content", async () => {
            const returnDate = "2021.12.24";
            const variants = [
                "24.12.2021",
                "24-12-2021",
                "24/12/2021",
                "24 12 2021",
                "2021.12.24",
                "2021-12-24",
                "2021/12/24",
                "2021 12 24",
            ];

            const onBlur = jest.fn();

            const { user, getByLabelText, getByText } = setup(
                <div>
                    <DatePicker onBlur={onBlur} />
                    <button>Click</button>
                </div>,
            );

            await waitForPosition();

            for (const variant of variants) {
                const input = getByLabelText("Velg dato");

                await act(async () => {
                    await user.click(input);
                    await user.clear(input);
                    await user.paste(variant);
                    await user.click(getByText("Click"));
                });

                expect(onBlur.mock.lastCall?.[1]).toStrictEqual(
                    new Date(returnDate),
                );
            }
        });
    });

    describe("a11y", () => {
        beforeEach(() => {
            jest.useRealTimers();
        });

        it("default datepicker should be a11y compliant when expanded", async () => {
            const { container } = setup(<DatePicker defaultShow />);

            await waitForPosition();

            const results = await axe(container, {});

            expect(results).toHaveNoViolations();
        });

        it("default datepicker should be a11y compliant when closed", async () => {
            const { container } = setup(<DatePicker />);

            await waitForPosition();

            const results = await axe(container, {});

            expect(results).toHaveNoViolations();
        });
    });
});
