import { cleanup, render, waitFor } from "@testing-library/react";
import UserEventModule from "@testing-library/user-event";
import React from "react";
import {
    type MockInstance,
    afterEach,
    beforeEach,
    describe,
    expect,
    it,
    vi,
} from "vitest";
import { axe } from "vitest-axe";
import { formatInput } from "../utils/index.js";
import { DatePicker } from "./DatePicker.js";

// https://github.com/testing-library/user-event/issues/1146
// @ts-ignore typecheck liker ikke at default muligens ikke finnes
const userEvent = UserEventModule.default ?? UserEventModule;

describe("Datepicker", () => {
    beforeEach(() => {
        cleanup();
        // vi.useFakeTimers();
    });

    afterEach(() => {
        // vi.useRealTimers();
    });

    it("renders with the correct format", async () => {
        const { getByTestId } = render(
            <DatePicker defaultValue="24.12.2019" />,
        );

        const input = getByTestId("jkl-datepicker__input");

        expect(input).toHaveProperty("value", "24.12.2019");
    });

    it("fires onChange method on edit input", async () => {
        const changeHandler = vi.fn();

        const { getByTestId } = render(<DatePicker onChange={changeHandler} />);

        const input = getByTestId("jkl-datepicker__input");

        expect(input).toHaveProperty("value", "");

        await waitFor(async () => {
            await userEvent.clear(input);
            await userEvent.type(input, "01.12.2019");
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
        const changeHandler = vi.fn();

        const { getByTestId } = render(<DatePicker onChange={changeHandler} />);

        const input = getByTestId("jkl-datepicker__input");

        expect(input).toHaveProperty("value", "");

        await waitFor(async () => {
            await userEvent.clear(input);
            await userEvent.type(input, "1.1");
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
        const changeHandler = vi.fn();

        const lowerBound = new Date(2021, 8, 20);

        const { getByTestId } = render(
            <DatePicker
                onChange={changeHandler}
                disableBeforeDate={formatInput(lowerBound)}
            />,
        );

        const input = getByTestId("jkl-datepicker__input");

        expect(input).toHaveProperty("value", "");

        await waitFor(async () => {
            await userEvent.clear(input);
            await userEvent.type(input, "19.09.2021");
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
        const changeHandler = vi.fn();

        const upperBound = new Date(2021, 8, 20);

        const { getByTestId } = render(
            <DatePicker
                onChange={changeHandler}
                disableAfterDate={formatInput(upperBound)}
            />,
        );

        const input = getByTestId("jkl-datepicker__input");

        expect(input).toHaveProperty("value", "");

        await waitFor(async () => {
            await userEvent.clear(input);
            await userEvent.type(input, "21.09.2021");
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
        const changeHandler = vi.fn();

        const { getByTestId } = render(<DatePicker onChange={changeHandler} />);

        const input = getByTestId("jkl-datepicker__input");

        expect(input).toHaveProperty("value", "");

        await waitFor(async () => {
            await userEvent.clear(input);
            await userEvent.type(input, "01.12.2019");
        });

        expect(changeHandler).toHaveBeenLastCalledWith(
            expect.anything(),
            new Date(2019, 11, 1),
            {
                error: null,
                value: "01.12.2019",
            },
        );

        await waitFor(async () => {
            await userEvent.clear(input);
        });

        expect(input).toHaveProperty("value", "");
        expect(changeHandler).toHaveBeenLastCalledWith(
            expect.anything(),
            null,
            { error: null, value: "" },
        );
    });

    it("should change date on new props", async () => {
        const { container, getByTestId } = render(
            <DatePicker value="02.02.2019" />,
        );
        const input = getByTestId("jkl-datepicker__input");

        expect(input).toHaveProperty("value", "02.02.2019");

        render(<DatePicker value="12.09.2019" />, { container });

        expect(input).toHaveProperty("value", "12.09.2019");
    });

    it("should close the datepicker when clicking outside the date picker", async () => {
        const { getByTestId, queryByTestId } = render(
            <DatePicker label="Some datepicker" />,
        );

        expect(queryByTestId("jkl-calendar")).not.toBeInTheDocument();

        const button = getByTestId("jkl-datepicker__trigger");

        await waitFor(async () => {
            await userEvent.click(button);
        });

        expect(getByTestId("jkl-calendar")).toBeInTheDocument();

        await waitFor(async () => {
            await userEvent.click(document.body);
        });

        expect(queryByTestId("jkl-calendar")).not.toBeInTheDocument();
    });

    it("should keep focus inside the calendar when open", async () => {
        let spy: MockInstance | null = null;

        try {
            spy = vi
                .spyOn(window, "requestAnimationFrame")
                .mockImplementation(
                    (callback: FrameRequestCallback): number => {
                        callback(0);
                        return 0;
                    },
                );
            const { getByTestId, queryByTestId, getByTitle } = render(
                <DatePicker label="Some datepicker" />,
            );

            const button = getByTestId("jkl-datepicker__trigger");

            expect(queryByTestId("jkl-calendar")).not.toBeInTheDocument();

            await waitFor(async () => {
                await userEvent.click(button);
            });

            expect(getByTestId("jkl-calendar")).toBeInTheDocument();

            // Tab inn i kalenderen
            await waitFor(async () => {
                await userEvent.tab();
            });

            expect(getByTitle("Gå tilbake 1 måned")).toHaveFocus();

            // Tab forbi alle kontroller og selve kalenderen
            await waitFor(async () => {
                await userEvent.tab();
                await userEvent.tab();
                await userEvent.tab();
                await userEvent.tab();
                await userEvent.tab();
            });

            expect(getByTitle("Gå tilbake 1 måned")).toHaveFocus();
        } finally {
            spy?.mockRestore();
        }
    });

    it("should keep focus on input field when clicking on the input field", async () => {
        const { getByLabelText } = render(
            <DatePicker label="Some datepicker" />,
        );

        const input = getByLabelText("Some datepicker");

        await waitFor(async () => {
            await userEvent.click(input);
        });

        expect(document.activeElement).toBe(input);
    });

    it.skip("should move focus to calendar button when opening datepicker with button", async () => {
        vi.setSystemTime(new Date(2019, 9, 20));

        const { getByRole, getByLabelText } = render(
            <DatePicker label="Some datepicker" />,
        );

        const openCalendarButtonElement = getByRole("button");

        await waitFor(async () => {
            await userEvent.click(openCalendarButtonElement);
        });

        const todayButtonElement = getByLabelText("20. oktober");

        expect(document.activeElement).toBe(todayButtonElement);
    });

    it("should call onChange once when selecting a date in the date picker", async () => {
        vi.setSystemTime(new Date(2019, 9, 20));

        const onChangeFn = vi.fn();

        const { getByRole, getByLabelText } = render(
            <DatePicker onChange={onChangeFn} />,
        );

        const toggleCalendarButtonElement = getByRole("button");

        await waitFor(async () => {
            await userEvent.click(toggleCalendarButtonElement);
            await userEvent.click(getByLabelText("31. oktober"));
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
        const onFocus = vi.fn();

        const { getByLabelText } = render(
            <div>
                <DatePicker onFocus={onFocus} />
                <button type="button">Click</button>
            </div>,
        );

        const input = getByLabelText("Velg dato");

        await waitFor(async () => {
            await userEvent.click(input);
        });

        expect(onFocus).toHaveBeenCalledTimes(1);
    });

    it("should call onFocus when tabbing to input element", async () => {
        const onFocus = vi.fn();

        render(
            <div>
                <DatePicker onFocus={onFocus} />
                <button type="button">Click</button>
            </div>,
        );

        await waitFor(async () => {
            await userEvent.tab();
        });

        expect(onFocus).toHaveBeenCalledTimes(1);
    });

    it("should call onBlur when clicking input element then clicking outside", async () => {
        const onBlur = vi.fn();

        const { getByLabelText, getByText } = render(
            <div>
                <DatePicker onBlur={onBlur} />
                <button type="button">Click</button>
            </div>,
        );

        const input = getByLabelText("Velg dato");

        await waitFor(async () => {
            await userEvent.click(input);
            await userEvent.click(getByText("Click"));
        });

        expect(onBlur).toHaveBeenCalledTimes(1);
    });

    it("should have data-testautoid", async () => {
        const { getByTestId } = render(
            <DatePicker
                defaultValue="24.12.2019"
                data-testautoid="jkl-datepicker__testautoid"
            />,
        );

        const input = getByTestId("jkl-datepicker__input");

        const testAutoId = input.getAttribute("data-testautoid");

        expect(testAutoId).toEqual("jkl-datepicker__testautoid");
    });

    it("supports label only for screen readers", async () => {
        const { getByText } = render(
            <DatePicker
                defaultValue="24.12.2019"
                label="Hello"
                labelProps={{ srOnly: true }}
            />,
        );

        const label = getByText("Hello");

        expect(label).toHaveClass("jkl-label--sr-only");
    });

    describe("a11y", () => {
        beforeEach(() => {
            vi.useRealTimers();
        });

        it("default datepicker should be a11y compliant when expanded", async () => {
            const { container } = render(<DatePicker />);

            const results = await axe(container, {});

            expect(results).toHaveNoViolations();
        });

        it("default datepicker should be a11y compliant when closed", async () => {
            const { container } = render(<DatePicker />);

            const results = await axe(container, {});

            expect(results).toHaveNoViolations();
        });
    });
});
