import React from "react";
import { formatDate } from "../../../utilities/index.js";
import { Text } from "../../typography/index.js";
import { toValidInputValue } from "../utils.js";
import { isDateDisabled } from "./utils.js";

export interface CalendarDayContext {
    year: number;
    month: number;
    name: string;
    selectedIso: string;
    focusedIso: string;
    min?: string;
    max?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface CalendarDayProps extends CalendarDayContext {
    day: number;
}

export const CalendarDay = ({
    day,
    year,
    month,
    name,
    selectedIso,
    focusedIso,
    min,
    max,
    onChange,
}: CalendarDayProps) => {
    const iso = toValidInputValue(`${year}-${month + 1}-${day}`);

    return (
        <td>
            <label className="jkl-button--calendar">
                <input
                    className="day"
                    type="radio"
                    name={name}
                    aria-label={formatDate(new Date(year, month, day))}
                    tabIndex={iso === focusedIso ? 0 : -1}
                    disabled={isDateDisabled(iso, min, max)}
                    value={iso}
                    checked={selectedIso === iso}
                    onChange={(event) => onChange?.(event)}
                    onClick={(event) => {
                        const popover =
                            event.currentTarget.closest<HTMLDivElement>(
                                "[popover]",
                            );
                        setTimeout(() => {
                            popover?.hidePopover();
                        }, 140); // Det ser litt rart ut når kalenderen skjules samtidig som verdien bytter, så vi venter litt
                    }}
                />
                <Text as="span" short aria-hidden="true">
                    {day}
                </Text>
            </label>
        </td>
    );
};
