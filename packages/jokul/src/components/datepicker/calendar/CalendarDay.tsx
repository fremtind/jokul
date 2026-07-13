import { Text } from "../../typography/index.js";
import type { CalendarProps } from "../types.js";
import { formatInput } from "../utils/index.js";
import { locale } from "./utils.js";

type CalendarDayProps = Pick<
    CalendarProps,
    | "onChange"
    | "min"
    | "max"
    | "disableWeekends"
    | "value"
    | "onBlur"
    | "onFocus"
    | "onKeyDown"
> & {
    name: string;
    checked: boolean;
};

const isDisabled = (
    value: string,
    min?: string,
    max?: string,
    disableWeekends?: boolean,
) => {
    if (!value) {
        return false;
    }
    const parsedDate = new Date(value);
    if (min) {
        const minStart = new Date(min);
        minStart.setHours(0, 0, 0, 0);
        if (parsedDate < minStart) return true;
    }
    if (max) {
        const maxEnd = new Date(max);
        maxEnd.setHours(0, 0, 0, 0);
        if (parsedDate > maxEnd) return true;
    }
    if (disableWeekends) {
        const day = parsedDate.getDay();
        if (day === 0 || day === 6) return true;
    }
    return false;
};

export const CalendarDay = (props: CalendarDayProps) => {
    const {
        onChange,
        min,
        max,
        disableWeekends,
        value,
        name,
        onBlur,
        onFocus,
        onKeyDown,
    } = props;

    if (!value) return null;

    const date = new Date(value);

    return (
        <label className="day">
            <input
                type="radio"
                name={name}
                disabled={isDisabled(value, min, max, disableWeekends)}
                aria-label={date.toLocaleDateString(locale)}
                value={date.toLocaleDateString(locale)}
                onChange={(e) => {
                    const selected = new Date(
                        date.getFullYear(),
                        date.getMonth(),
                        date.getDate(),
                    );
                    onChange?.(e, selected, {
                        error: null,
                        value: formatInput(selected),
                    });
                }}
                onBlur={(e) => {
                    const selected = new Date(
                        date.getFullYear(),
                        date.getMonth(),
                        date.getDate(),
                    );
                    onBlur?.(e, selected, {
                        error: null,
                        value: formatInput(selected),
                    });
                }}
                onFocus={(e) => {
                    const selected = new Date(
                        date.getFullYear(),
                        date.getMonth(),
                        date.getDate(),
                    );
                    onFocus?.(e, selected, {
                        error: null,
                        value: formatInput(selected),
                    });
                }}
                onKeyDown={(e) => {
                    const selected = new Date(
                        date.getFullYear(),
                        date.getMonth(),
                        date.getDate(),
                    );
                    onKeyDown?.(e, selected, {
                        error: null,
                        value: formatInput(selected),
                    });
                }}
            />
            <Text as="span" short aria-hidden>
                {date.getDate()}
            </Text>
        </label>
    );
};
