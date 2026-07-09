import { render } from "@testing-library/react";
import UserEventModule from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { Calendar } from "./Calendar.js";

// https://github.com/testing-library/user-event/issues/1146
// @ts-ignore typecheck liker ikke at default muligens ikke finnes
const userEvent = UserEventModule.default ?? UserEventModule;

describe("Calendar", () => {
    it("calls onChange once when selecting a date", async () => {
        const onChange = vi.fn();
        const { getByLabelText } = render(
            <Calendar defaultValue="01.03.2026" onChange={onChange} />,
        );

        await userEvent.click(getByLabelText("15.3.2026"));

        expect(onChange).toHaveBeenCalledTimes(1);
        expect(onChange).toHaveBeenCalledWith(expect.anything(), "15.03.2026");
    });

    it("disables weekends when disableWeekends is set", () => {
        const { getByLabelText } = render(
            <Calendar defaultValue="01.03.2026" disableWeekends />,
        );

        expect(getByLabelText("14.3.2026")).toBeDisabled();
        expect(getByLabelText("16.3.2026")).not.toBeDisabled();
    });

    it("disables dates outside min and max", () => {
        const { getByLabelText } = render(
            <Calendar
                defaultValue="01.03.2026"
                min="10.03.2026"
                max="20.03.2026"
            />,
        );

        expect(getByLabelText("9.3.2026")).toBeDisabled();
        expect(getByLabelText("10.3.2026")).not.toBeDisabled();
        expect(getByLabelText("20.3.2026")).not.toBeDisabled();
        expect(getByLabelText("21.3.2026")).toBeDisabled();
    });

    it("supports legacy disableBeforeDate and disableAfterDate", () => {
        const { getByLabelText } = render(
            <Calendar
                defaultValue="01.03.2026"
                disableBeforeDate="10.03.2026"
                disableAfterDate="20.03.2026"
            />,
        );

        expect(getByLabelText("9.3.2026")).toBeDisabled();
        expect(getByLabelText("10.3.2026")).not.toBeDisabled();
        expect(getByLabelText("20.3.2026")).not.toBeDisabled();
        expect(getByLabelText("21.3.2026")).toBeDisabled();
    });
});
