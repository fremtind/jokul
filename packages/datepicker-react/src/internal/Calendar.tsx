import React, { forwardRef, useCallback, useEffect, useRef, useState } from "react";
import cn from "classnames";
import { formatDate } from "@fremtind/jkl-formatters-util";
import { TextInput } from "@fremtind/jkl-text-input-react";
import { NativeSelect } from "@fremtind/jkl-select-react";
import { useCalendar, UseCalendarProps } from "./useCalendar";
import { useId } from "@fremtind/jkl-react-hooks";
import { addMonth, subtractMonth, isBackDisabled, isForwardDisabled } from "./utils";
import { flushSync } from "react-dom";
import { FieldGroup } from "@fremtind/jkl-field-group-react";
import isBefore from "date-fns/isBefore";
import isAfter from "date-fns/isAfter";
import { SupportLabel } from "@fremtind/jkl-core";

interface CalendarProps
    extends Omit<UseCalendarProps, "date" | "onOffsetChanged" | "offset" | "firstDayOfWeek" | "selected"> {
    date: Date | null;
    defaultSelected?: Date;
    hidden?: boolean;
    extended?: boolean;
    forceCompact?: boolean;
}

const monthNames = [
    "Januar",
    "Februar",
    "Mars",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Desember",
];

const weekdayNames = ["man", "tir", "ons", "tor", "fre", "lør", "søn"];

export const Calendar = forwardRef<HTMLDivElement, CalendarProps>(
    ({ extended, forceCompact, hidden, date, defaultSelected, minDate, maxDate, ...rest }, ref) => {
        const id = useId("jkl-calendar");
        const extendedSupportLabelId = useId("jkl-calendar-error-label");

        /// Calendar state

        const [offset, setOffset] = useState(0);
        const [selected, setSelected] = useState(date || defaultSelected);
        useEffect(() => {
            setOffset(0);
            setSelected(date || defaultSelected);
        }, [setOffset, date, defaultSelected]);

        const onOffsetChanged = useCallback(
            (newOffset: number) => {
                setOffset(newOffset);
            },
            [setOffset],
        );

        const { calendars, getBackProps, getDateProps, getForwardProps, handleOffsetChanged } = useCalendar({
            date: selected,
            selected,
            minDate,
            maxDate,
            offset,
            onOffsetChanged,
            firstDayOfWeek: 1,
            ...rest,
        });

        /// Calendar keyboard navigation

        const calendarPaddingRef = useRef<HTMLDivElement>(null);
        const doFocusChange = useCallback(
            (offsetDiff: number) => {
                if (!calendarPaddingRef.current) {
                    return;
                }

                const e = document.activeElement;
                const buttons = calendarPaddingRef.current.querySelectorAll<HTMLButtonElement>(
                    'button.jkl-calendar__date:not([data-adjacent="true"]',
                );

                buttons.forEach((el, i) => {
                    const newNodeKey = i + offsetDiff;
                    if (el == e) {
                        if (newNodeKey <= buttons.length - 1 && newNodeKey >= 0) {
                            (buttons[newNodeKey] as HTMLButtonElement).focus();
                        } else if (offsetDiff < 0) {
                            if (isBackDisabled({ calendars, minDate })) {
                                return;
                            }

                            // Hvis newNodeKey er utenfor samlingen med knapper så har vi prøvd å gå til
                            // en dag utenfor måneden. Er offsetDiff negativ så har vi gått tilbake en
                            // måned.
                            flushSync(() => {
                                handleOffsetChanged(offset - subtractMonth({ calendars, offset: 1, minDate }));
                            });
                            if (!calendarPaddingRef.current) {
                                return;
                            }
                            const newButtons = calendarPaddingRef.current.querySelectorAll<HTMLButtonElement>(
                                'button.jkl-calendar__date:not([data-adjacent="true"]',
                            );
                            // + - = -
                            if (newButtons[newButtons.length + newNodeKey]) {
                                newButtons[newButtons.length + newNodeKey].focus();
                            }
                        } else {
                            if (isForwardDisabled({ calendars, maxDate })) {
                                return;
                            }

                            // Hvis newNodeKey er utenfor samlingen med knapper så har vi prøvd å gå til
                            // en dag utenfor måneden. Er offsetDiff positiv så har vi gått frem en
                            // måned.
                            flushSync(() => {
                                handleOffsetChanged(offset + addMonth({ calendars, offset: 1, maxDate }));
                            });
                            if (!calendarPaddingRef.current) {
                                return;
                            }
                            const newButtons = calendarPaddingRef.current.querySelectorAll<HTMLButtonElement>(
                                'button.jkl-calendar__date:not([data-adjacent="true"]',
                            );
                            // NewNodeKey er basert på forrige måneds liste med knapper. For at verdien skal bli
                            // riktig i vår nye måned må vi trekke fra anntal dager fra forrige måned.
                            if (newButtons[newNodeKey - buttons.length]) {
                                newButtons[newNodeKey - buttons.length].focus();
                            }
                        }
                    }
                });
            },
            [handleOffsetChanged, calendarPaddingRef, offset, calendars, maxDate, minDate],
        );

        const onArrowNavigation = useCallback(
            (event: React.KeyboardEvent) => {
                switch (event.key) {
                    case "ArrowUp":
                        doFocusChange(-7);
                        event.preventDefault();
                        break;
                    case "ArrowRight":
                        doFocusChange(1);
                        event.preventDefault();
                        break;
                    case "ArrowDown":
                        doFocusChange(7);
                        event.preventDefault();
                        break;
                    case "ArrowLeft":
                        doFocusChange(-1);
                        event.preventDefault();
                        break;
                    default:
                        break;
                }
            },
            [doFocusChange],
        );

        /// Extended variant state

        const [extendedYear, setExtendedYear] = useState(String((selected || date || new Date()).getFullYear()));
        const [extendedMonth, setExtendedMonth] = useState(String((selected || date || new Date()).getMonth()));
        const [extendedError, setExtendedError] = useState("");

        /// Extended variant events

        const handleYearChange = useCallback(
            (e: React.ChangeEvent<HTMLInputElement>) => {
                setExtendedError("");
                setExtendedYear(e.target.value);

                if (e.target.value.length !== 4) {
                    return;
                }

                const year: number = Number.parseInt(e.target.value);
                if (Number.isNaN(year)) {
                    return;
                }

                const currentlySelected = new Date(selected || date || new Date());
                const nextDate = new Date(currentlySelected);
                nextDate.setFullYear(year);

                const withinLowerBound = !minDate || isBefore(minDate, nextDate);
                if (!withinLowerBound) {
                    setExtendedError(`Minimum ${formatDate(minDate)}`);
                    return;
                }

                const withinUpperBound = !maxDate || isAfter(maxDate, nextDate);
                if (!withinUpperBound) {
                    setExtendedError(`Maksimum ${formatDate(maxDate)}`);
                    return;
                }

                setSelected(nextDate);
            },
            [setSelected, setExtendedYear, setExtendedError, selected, date, minDate, maxDate],
        );

        const handleYearBlur = useCallback(() => {
            if (extendedError && selected) {
                // Reset to current selection since the calendar refuses to update to the given input
                setExtendedYear(String(selected.getFullYear()));
            }
        }, [setExtendedYear, extendedError, selected]);

        const handleMonthChange = useCallback<React.ChangeEventHandler<HTMLSelectElement>>(
            (e) => {
                setExtendedError("");
                setExtendedMonth(e.target.value);

                if (!selected && !date) {
                    return;
                }

                const currentlySelected = new Date(selected || date || new Date());
                const nextDate = new Date(currentlySelected);
                nextDate.setMonth(Number.parseInt(e.target.value));

                const withinLowerBound = !minDate || isBefore(minDate, nextDate);
                if (!withinLowerBound) {
                    setExtendedError(`Minimum ${formatDate(minDate)}`);
                    return;
                }

                const withinUpperBound = !maxDate || isAfter(maxDate, nextDate);
                if (!withinUpperBound) {
                    setExtendedError(`Maksimum ${formatDate(maxDate)}`);
                    return;
                }

                setSelected(nextDate);
            },
            [setSelected, setExtendedMonth, setExtendedError, selected, date, minDate, maxDate],
        );

        const handleMonthBlur = useCallback(() => {
            if (extendedError && selected) {
                // Reset to current selection since the calendar refuses to update to the given input
                setExtendedMonth(String(selected.getMonth()));
            }
        }, [setExtendedMonth, extendedError, selected]);

        return (
            <div
                ref={ref}
                id={id}
                className={cn("jkl-calendar", {
                    "jkl-calendar--hidden": hidden,
                    "jkl-calendar--extended": extended,
                })}
                data-testid="jkl-calendar"
            >
                <div className="jkl-calendar__padding" ref={calendarPaddingRef}>
                    {extended && (
                        <FieldGroup className="jkl-calendar__navigation-fieldset" legend="År og måned">
                            <div className="jkl-calendar__navigation">
                                <TextInput
                                    label="År"
                                    labelProps={{ srOnly: true }}
                                    type="year"
                                    className="jkl-calendar__year-selector"
                                    width="5rem"
                                    variant="small"
                                    onChange={handleYearChange}
                                    onBlur={handleYearBlur}
                                    value={extendedYear}
                                    forceCompact={forceCompact}
                                    aria-describedby={extendedError ? extendedSupportLabelId : undefined}
                                    invalid={Boolean(extendedError)}
                                />
                                <NativeSelect
                                    className="jkl-calendar__month-selector"
                                    label="Måned"
                                    labelProps={{ srOnly: true }}
                                    items={monthNames.map((name: string, i: number) => ({
                                        value: String(i),
                                        label: name,
                                    }))}
                                    variant="small"
                                    value={extendedMonth}
                                    onChange={handleMonthChange}
                                    onBlur={handleMonthBlur}
                                    forceCompact={forceCompact}
                                    aria-describedby={extendedError ? extendedSupportLabelId : undefined}
                                    invalid={Boolean(extendedError)}
                                    width="auto"
                                />
                            </div>
                            <SupportLabel
                                id={extendedSupportLabelId}
                                forceCompact={forceCompact}
                                errorLabel={extendedError}
                            />
                        </FieldGroup>
                    )}
                    {!extended && (
                        <fieldset className="jkl-calendar__month-navigation">
                            <button {...getBackProps({ calendars })} className="jkl-calendar__month-button">
                                ←
                            </button>
                            <button
                                {...getForwardProps({ calendars })}
                                className="jkl-calendar__month-button jkl-calendar__month-button--right"
                            >
                                →
                            </button>
                        </fieldset>
                    )}
                    {calendars.map((calendar) => (
                        <table key={`${calendar.month}${calendar.year}`} data-testid="jkl-datepicker-calendar">
                            <caption>
                                {monthNames[calendar.month]}, {calendar.year}
                            </caption>
                            <thead>
                                <tr>
                                    {weekdayNames.map((weekday) => (
                                        <th key={`${calendar.month}${calendar.year}${weekday}`}>{weekday}</th>
                                    ))}
                                </tr>
                            </thead>
                            {/* The <div> element handles keyboard events that bubble up from <button> elements inside */}
                            {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/no-noninteractive-element-interactions */}
                            <tbody data-testid="jkl-datepicker-dates" onKeyDown={onArrowNavigation}>
                                {calendar.weeks.map((week, weekIndex) => (
                                    <tr key={`${calendar.month}${calendar.year}${weekIndex}`}>
                                        {week.map((dateInfo, index) => {
                                            const key = `${calendar.month}${calendar.year}${weekIndex}${index}`;
                                            if (typeof dateInfo === "string") {
                                                return (
                                                    <td
                                                        className="jkl-calendar__date jkl-calendar__date--empty"
                                                        key={key}
                                                    >
                                                        {dateInfo}
                                                    </td>
                                                );
                                            }
                                            const { date, selected, selectable, today, prevMonth, nextMonth } =
                                                dateInfo;
                                            return (
                                                <td key={key}>
                                                    <button
                                                        {...getDateProps({
                                                            dateObj: dateInfo,
                                                        })}
                                                        className="jkl-calendar__date"
                                                        tabIndex={selected ? 0 : -1}
                                                        aria-label={`${date.getDate()}. ${monthNames[
                                                            date.getMonth()
                                                        ].toLowerCase()}`}
                                                        aria-current={today ? "date" : undefined}
                                                        data-adjacent={prevMonth || nextMonth ? "true" : undefined}
                                                        disabled={!selectable || prevMonth || nextMonth}
                                                    >
                                                        <span aria-hidden="true">{date.getDate()}</span>
                                                    </button>
                                                </td>
                                            );
                                        })}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ))}
                </div>
            </div>
        );
    },
);

Calendar.displayName = "Calendar";
