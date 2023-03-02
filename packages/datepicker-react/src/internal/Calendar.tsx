import { Density } from "@fremtind/jkl-core";
import { ArrowLeftIcon, ArrowRightIcon, ChevronDownIcon } from "@fremtind/jkl-icons-react";
import { useId } from "@fremtind/jkl-react-hooks";
import cn from "classnames";
import React, { forwardRef, useCallback, useEffect, useReducer, useRef } from "react";
import { flushSync } from "react-dom";
import { calendarInitializer, calendarReducer } from "./calendarReducer";
import { useCalendar, UseCalendarProps } from "./useCalendar";
import {
    addMonth,
    subtractMonth,
    isBackDisabled,
    isForwardDisabled,
    getYearSelectOptions,
    getMonthSelectOptions,
} from "./utils";

interface CalendarProps
    extends Omit<UseCalendarProps, "date" | "onOffsetChanged" | "offset" | "firstDayOfWeek" | "selected"> {
    date: Date | null;
    density?: Density;
    defaultSelected?: Date;
    hidden?: boolean;
    days?: string[];
    months?: string[];
    monthLabel?: string;
    yearLabel?: string;
    onTabOutside: React.KeyboardEventHandler;
}

const defaultMonths = [
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

const defaultDays = ["man", "tir", "ons", "tor", "fre", "lør", "søn"];

export const Calendar = forwardRef<HTMLDivElement, CalendarProps>((props, ref) => {
    const {
        hidden,
        date,
        defaultSelected,
        density,
        minDate,
        maxDate,
        days = defaultDays,
        months = defaultMonths,
        monthLabel = "Måned",
        yearLabel = "År",
        onTabOutside,
        ...rest
    } = props;

    const id = useId("jkl-calendar");

    const [{ offset, selectedDate, shownDate }, dispatch] = useReducer(
        calendarReducer,
        date || defaultSelected || new Date(),
        calendarInitializer,
    );

    const shownMonth = shownDate.getMonth();
    const shownYear = shownDate.getFullYear();

    useEffect(() => {
        dispatch({
            type: "SET_SELECTED_DATE",
            newDate: date || defaultSelected || new Date(),
        });
    }, [date, defaultSelected]);

    const onOffsetChanged = useCallback((newOffset: number) => {
        dispatch({
            type: "SET_OFFSET",
            newOffset,
        });
    }, []);

    const { calendars, getBackProps, getDateProps, getForwardProps, handleOffsetChanged } = useCalendar({
        date: selectedDate,
        selected: selectedDate,
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

    const handleTabOutside = useCallback(
        (event: React.KeyboardEvent) => {
            if (event.key === "Tab") {
                // Shift + Tab flytter fokus til månedsvelger, noe vi ikke bryr oss om
                if (event.shiftKey) {
                    return;
                }
                // Når brukeren trykker på Tab fra en fokusert dato ønsker vi å lukke kalenderen
                // og flytte fokus tilbake til IconButton
                onTabOutside(event);
            }
        },
        [onTabOutside],
    );

    /// Extended variant events

    const handleYearChange = useCallback<React.ChangeEventHandler<HTMLSelectElement>>(
        (event) => {
            if (event.target.value.length !== 4) {
                return;
            }

            const year: number = Number.parseInt(event.target.value);
            if (Number.isNaN(year)) {
                return;
            }

            const yearDiff = year - shownDate.getFullYear();
            dispatch({
                type: "ADD_OFFSET",
                addedOffset: yearDiff * 12,
            });

            return;
        },
        [shownDate],
    );

    const handleMonthChange = useCallback<React.ChangeEventHandler<HTMLSelectElement>>(
        (event) => {
            if (!selectedDate && !date) {
                return;
            }

            const yearDiff = shownDate.getFullYear() - (selectedDate || new Date()).getFullYear();
            const monthDiff = Number.parseInt(event.target.value) - (selectedDate || new Date()).getMonth();

            dispatch({
                type: "SET_OFFSET",
                newOffset: yearDiff * 12 + monthDiff,
            });

            return;
        },
        [selectedDate, date, shownDate],
    );

    const yearSelectOptions = getYearSelectOptions(
        selectedDate ? selectedDate.getFullYear() : new Date().getFullYear(),
        minDate,
        maxDate,
    );

    const monthSelectOptions = getMonthSelectOptions(Number(shownYear), months, minDate, maxDate).map(
        (name: string, i: number) => ({
            value: String(i),
            label: name,
        }),
    );

    return (
        <div
            ref={ref}
            id={id}
            className={cn("jkl-calendar", {
                "jkl-calendar--hidden": hidden,
            })}
            data-testid="jkl-calendar"
        >
            <div className="jkl-calendar__padding" ref={calendarPaddingRef}>
                {calendars.map((calendar) => (
                    <>
                        <fieldset className="jkl-calendar-controls">
                            <div className="jkl-calendar-controls__arrows">
                                <button
                                    {...getBackProps({ calendars })}
                                    className="jkl-calendar__month-button"
                                    type="button"
                                >
                                    <ArrowLeftIcon bold />
                                </button>
                                <button
                                    {...getForwardProps({ calendars })}
                                    className="jkl-calendar__month-button jkl-calendar__month-button--right"
                                    type="button"
                                >
                                    <ArrowRightIcon bold />
                                </button>
                            </div>
                            <div>
                                <div className="jkl-calendar-month-selector">
                                    <select
                                        onChange={handleMonthChange}
                                        className="jkl-calendar-month-selector__button"
                                        aria-label={monthLabel}
                                        value={shownMonth.toString()}
                                    >
                                        {monthSelectOptions.map(({ label, value }) => (
                                            <option key={value} value={value}>
                                                {label}
                                            </option>
                                        ))}
                                    </select>
                                    <ChevronDownIcon bold className="jkl-calendar-month-selector__chevron" />
                                </div>
                                <div className="jkl-calendar-year-selector">
                                    <select
                                        onChange={handleYearChange}
                                        className="jkl-calendar-year-selector__button"
                                        aria-label={yearLabel}
                                        value={shownYear.toString()}
                                    >
                                        {yearSelectOptions.map((year) => (
                                            <option key={year} value={year}>
                                                {year}
                                            </option>
                                        ))}
                                    </select>
                                    <ChevronDownIcon bold className="jkl-calendar-month-selector__chevron" />
                                </div>
                            </div>
                        </fieldset>
                        <table key={`${calendar.month}${calendar.year}`} data-testid="jkl-datepicker-calendar">
                            <caption className="jkl-sr-only">
                                {months[calendar.month]}, {calendar.year}
                            </caption>
                            <thead>
                                <tr>
                                    {days.map((weekday) => (
                                        <th key={`${calendar.month}${calendar.year}${weekday}`}>{weekday}</th>
                                    ))}
                                </tr>
                            </thead>
                            {/* The <tbody> element handles keyboard events that bubble up from <button> elements inside */}
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
                                            const isSelectedMonth =
                                                selectedDate &&
                                                selectedDate.getMonth() === shownMonth &&
                                                selectedDate.getFullYear() === shownYear;
                                            const isFocusableDate =
                                                (isSelectedMonth && selected) ||
                                                (!isSelectedMonth && date.getDate() === 1);

                                            return (
                                                <td key={key}>
                                                    <button
                                                        {...getDateProps({
                                                            dateObj: dateInfo,
                                                        })}
                                                        type="button"
                                                        className="jkl-calendar__date"
                                                        tabIndex={isFocusableDate ? 0 : -1}
                                                        aria-label={`${date.getDate()}. ${months[
                                                            date.getMonth()
                                                        ].toLowerCase()}`}
                                                        aria-current={today ? "date" : undefined}
                                                        data-adjacent={prevMonth || nextMonth ? "true" : undefined}
                                                        disabled={!selectable}
                                                        onKeyDown={handleTabOutside}
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
                    </>
                ))}
            </div>
        </div>
    );
});

Calendar.displayName = "Calendar";
