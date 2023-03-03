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
                'button.jkl-calendar-date-button:not([data-adjacent="true"]',
            );
            console.log(buttons);

            const changeFocusTo = async (nextButton: HTMLButtonElement) => {
                e?.setAttribute("tabindex", "-1");
                nextButton.setAttribute("tabindex", "0");
                nextButton.focus();
            };

            buttons.forEach((el, i) => {
                const newNodeKey = i + offsetDiff;

                if (el == e) {
                    if (newNodeKey <= buttons.length - 1 && newNodeKey >= 0) {
                        changeFocusTo(buttons[newNodeKey]);
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
                            'button.jkl-calendar-date-button:not([data-adjacent="true"]',
                        );
                        // + - = -
                        if (newButtons[newButtons.length + newNodeKey]) {
                            // Sørg for at ikke både 1. i måneden og valgt dag er fokuserbare
                            newButtons[0].setAttribute("tabindex", "-1");
                            changeFocusTo(newButtons[newButtons.length + newNodeKey]);
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
                            'button.jkl-calendar-date-button:not([data-adjacent="true"]',
                        );
                        // NewNodeKey er basert på forrige måneds liste med knapper. For at verdien skal bli
                        // riktig i vår nye måned må vi trekke fra anntal dager fra forrige måned.
                        if (newButtons[newNodeKey - buttons.length]) {
                            // Sørg for at ikke både 1. i måneden og valgt dag er fokuserbare
                            newButtons[0].setAttribute("tabindex", "-1");
                            changeFocusTo(newButtons[newNodeKey - buttons.length]);
                        }
                    }
                }
            });
        },
        [handleOffsetChanged, calendarPaddingRef, offset, calendars, maxDate, minDate],
    );

    const handleArrowNavigation = useCallback(
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

    const handleTabInside: React.KeyboardEventHandler = useCallback((event) => {
        if (event.key !== "Tab") return;

        const focusableElements = calendarPaddingRef.current?.querySelectorAll<HTMLElement>(
            'button:not([disabled]):not([tabindex="-1"]), select',
        );

        if (!focusableElements) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (!event.shiftKey && document.activeElement === lastElement) {
            firstElement.focus();
            event.preventDefault();
        } else if (event.shiftKey && document.activeElement === firstElement) {
            lastElement.focus();
            event.preventDefault();
        }
    }, []);

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
            {/* Vi lytter på på trykk på Tab inne i kalenderen for å håndtere fokus */}
            {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
            <div className="jkl-calendar__padding" ref={calendarPaddingRef} onKeyDown={handleTabInside}>
                {calendars.map((calendar) => (
                    <>
                        <fieldset className="jkl-calendar-navigation">
                            <div>
                                <button
                                    {...getBackProps({ calendars })}
                                    className="jkl-calendar-navigation__arrow"
                                    type="button"
                                >
                                    <ArrowLeftIcon bold />
                                </button>
                                <button
                                    {...getForwardProps({ calendars })}
                                    className="jkl-calendar-navigation__arrow"
                                    type="button"
                                >
                                    <ArrowRightIcon bold />
                                </button>
                            </div>
                            <div>
                                <div className="jkl-calendar-navigation-dropdown">
                                    <select
                                        onChange={handleMonthChange}
                                        className="jkl-calendar-navigation-dropdown__select"
                                        aria-label={monthLabel}
                                        value={shownMonth.toString()}
                                    >
                                        {monthSelectOptions.map(({ label, value }) => (
                                            <option key={value} value={value}>
                                                {label}
                                            </option>
                                        ))}
                                    </select>
                                    <ChevronDownIcon bold className="jkl-calendar-navigation-dropdown__chevron" />
                                </div>
                                <div className="jkl-calendar-navigation-dropdown">
                                    <select
                                        onChange={handleYearChange}
                                        className="jkl-calendar-navigation-dropdown__select"
                                        aria-label={yearLabel}
                                        value={shownYear.toString()}
                                    >
                                        {yearSelectOptions.map((year) => (
                                            <option key={year} value={year}>
                                                {year}
                                            </option>
                                        ))}
                                    </select>
                                    <ChevronDownIcon bold className="jkl-calendar-navigation-dropdown__chevron" />
                                </div>
                            </div>
                        </fieldset>
                        <table
                            className="jkl-calendar-table"
                            key={`${calendar.month}${calendar.year}`}
                            data-testid="jkl-datepicker-calendar"
                        >
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
                            <tbody data-testid="jkl-datepicker-dates">
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
                                                (!isSelectedMonth &&
                                                    date.getMonth() === shownMonth &&
                                                    date.getDate() === 1);

                                            return (
                                                <td key={key}>
                                                    <button
                                                        {...getDateProps({
                                                            dateObj: dateInfo,
                                                        })}
                                                        type="button"
                                                        className="jkl-calendar-date-button"
                                                        tabIndex={isFocusableDate ? 0 : -1}
                                                        aria-label={`${date.getDate()}. ${months[
                                                            date.getMonth()
                                                        ].toLowerCase()}`}
                                                        aria-current={today ? "date" : undefined}
                                                        data-adjacent={prevMonth || nextMonth ? "true" : undefined}
                                                        disabled={!selectable}
                                                        onKeyDown={handleArrowNavigation}
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
