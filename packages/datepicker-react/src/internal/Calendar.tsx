import React, { forwardRef, useCallback, useEffect, useRef, useState } from "react";
import cn from "classnames";
import { TextInput } from "@fremtind/jkl-text-input-react";
import { NativeSelect } from "@fremtind/jkl-select-react";
import { useCalendar, UseCalendarProps } from "./useCalendar";
import { useId } from "@fremtind/jkl-react-hooks";
import { addMonth, subtractMonth, isBackDisabled, isForwardDisabled } from "./utils";
import { flushSync } from "react-dom";
import isBefore from "date-fns/isBefore";
import isAfter from "date-fns/isAfter";

interface CalendarProps
    extends Omit<UseCalendarProps, "date" | "onOffsetChanged" | "offset" | "firstDayOfWeek" | "selected"> {
    date: Date | null;
    defaultSelected?: Date;
    hidden?: boolean;
    days?: string[];
    months?: string[];
    monthLabel?: string;
    yearLabel?: string;
    extended?: boolean;
    forceCompact?: boolean;
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
        extended,
        forceCompact,
        hidden,
        date,
        defaultSelected,
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

    /// Extended variant state

    const [extendedYear, setExtendedYear] = useState(String((selected || date || new Date()).getFullYear()));
    const [extendedMonth, setExtendedMonth] = useState(String((selected || date || new Date()).getMonth()));

    /// Extended variant events

    const handleYearChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
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
                setSelected(minDate);
                setExtendedYear(String(minDate.getFullYear()));
                setExtendedMonth(String(minDate.getMonth()));
                return;
            }

            const withinUpperBound = !maxDate || isAfter(maxDate, nextDate);
            if (!withinUpperBound) {
                setSelected(maxDate);
                setExtendedYear(String(maxDate.getFullYear()));
                setExtendedMonth(String(maxDate.getMonth()));
                return;
            }

            setSelected(nextDate);
        },
        [setSelected, setExtendedYear, selected, date, minDate, maxDate],
    );

    const handleMonthChange = useCallback<React.ChangeEventHandler<HTMLSelectElement>>(
        (e) => {
            setExtendedMonth(e.target.value);

            if (!selected && !date) {
                return;
            }

            const currentlySelected = new Date(selected || date || new Date());
            const nextDate = new Date(currentlySelected);
            nextDate.setMonth(Number.parseInt(e.target.value));

            const withinLowerBound = !minDate || isBefore(minDate, nextDate);
            if (!withinLowerBound) {
                setSelected(minDate);
                setExtendedYear(String(minDate.getFullYear()));
                setExtendedMonth(String(minDate.getMonth()));
                return;
            }

            const withinUpperBound = !maxDate || isAfter(maxDate, nextDate);
            if (!withinUpperBound) {
                setSelected(maxDate);
                setExtendedYear(String(maxDate.getFullYear()));
                setExtendedMonth(String(maxDate.getMonth()));
                return;
            }

            setSelected(nextDate);
        },
        [setSelected, setExtendedMonth, selected, date, minDate, maxDate],
    );

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
                    <div className="jkl-calendar__navigation">
                        <TextInput
                            label={yearLabel}
                            type="number"
                            className="jkl-calendar__year-selector"
                            inputClassName="jkl-calendar__year-selector-input"
                            width="5rem"
                            variant="small"
                            onChange={handleYearChange}
                            value={extendedYear}
                            forceCompact={forceCompact}
                        />
                        <NativeSelect
                            className="jkl-calendar__month-selector"
                            selectClassName="jkl-calendar__year-selector-select"
                            label={monthLabel}
                            items={months.map((name: string, i: number) => ({
                                value: String(i),
                                label: name,
                            }))}
                            variant="small"
                            value={extendedMonth}
                            onChange={handleMonthChange}
                            forceCompact={forceCompact}
                            width="auto"
                        />
                    </div>
                )}
                {!extended && (
                    <fieldset className="jkl-calendar__month-navigation">
                        <button {...getBackProps({ calendars })} className="jkl-calendar__month-button" type="button">
                            ←
                        </button>
                        <button
                            {...getForwardProps({ calendars })}
                            className="jkl-calendar__month-button jkl-calendar__month-button--right"
                            type="button"
                        >
                            →
                        </button>
                    </fieldset>
                )}
                {calendars.map((calendar) => (
                    <table key={`${calendar.month}${calendar.year}`} data-testid="jkl-datepicker-calendar">
                        <caption>
                            {months[calendar.month]}, {calendar.year}
                        </caption>
                        <thead>
                            <tr>
                                {days.map((weekday) => (
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
                                                <td className="jkl-calendar__date jkl-calendar__date--empty" key={key}>
                                                    {dateInfo}
                                                </td>
                                            );
                                        }
                                        const { date, selected, selectable, today, prevMonth, nextMonth } = dateInfo;
                                        return (
                                            <td key={key}>
                                                <button
                                                    {...getDateProps({
                                                        dateObj: dateInfo,
                                                    })}
                                                    type="button"
                                                    className="jkl-calendar__date"
                                                    tabIndex={selected ? 0 : -1}
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
                ))}
            </div>
        </div>
    );
});

Calendar.displayName = "Calendar";
