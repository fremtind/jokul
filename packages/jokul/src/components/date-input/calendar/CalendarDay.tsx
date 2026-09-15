import React from "react";
import { formatDate } from "../../../utilities/index.js";
import { Text } from "../../typography/index.js";
import { toValidInputValue } from "../utils.js";
import { isDateDisabled } from "./utils.js";

export interface CalendarDayContext {
    year: number;
    month: number;
    name: string;
    selectedDate: string;
    focusedDate: string;
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
    selectedDate,
    focusedDate,
    min,
    max,
    onChange,
}: CalendarDayProps) => {
    const date = toValidInputValue(`${year}-${month + 1}-${day}`);

    return (
        <td>
            <label className="jkl-button--calendar">
                <input
                    className="day"
                    type="radio"
                    name={name}
                    // Radioene grupperes bare internt i kalenderen. `form` peker
                    // bevisst på en id som ikke finnes, slik at de ikke får en
                    // form owner og dermed ikke sendes med i en omkringliggende
                    // <form>. Grupperingen består siden alle radioene er uten
                    // form owner i samme tre.
                    form={`${name}-standalone`}
                    aria-label={formatDate(new Date(year, month, day))}
                    tabIndex={date === focusedDate ? 0 : -1}
                    disabled={isDateDisabled(date, min, max)}
                    value={date}
                    checked={selectedDate === date}
                    onChange={(event) => onChange?.(event)}
                    onClick={(event) => {
                        const popover =
                            event.currentTarget.closest<HTMLDivElement>(
                                "[popover]",
                            );
                        setTimeout(() => {
                            if (typeof popover?.hidePopover === "function") {
                                popover.hidePopover();
                            }
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
