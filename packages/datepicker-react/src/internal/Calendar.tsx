import React, { forwardRef, useCallback, useEffect, useRef, useState } from "react";
import cn from "classnames";
import { TextInput } from "@fremtind/jkl-text-input-react";
import { NativeSelect } from "@fremtind/jkl-select-react";
import { useCalendar, UseCalendarProps } from "./useCalendar";
import { useId } from "@fremtind/jkl-react-hooks";
import { addMonth, subtractMonth, isBackDisabled, isForwardDisabled } from "./utils";
import { flushSync } from "react-dom";

interface CalendarProps extends Omit<UseCalendarProps, "onOffsetChanged" | "offset" | "firstDayOfWeek"> {
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
    ({ extended, forceCompact, hidden, date, minDate, maxDate, ...rest }, ref) => {
        const id = useId("jkl-calendar");
        const [offset, setOffset] = useState(0);
        useEffect(() => {
            // Reset offset when date changes
            setOffset(0);
        }, [setOffset, date]);

        const onOffsetChanged = useCallback(
            (newOffset: number) => {
                setOffset(newOffset);
            },
            [setOffset],
        );

        const { calendars, getBackProps, getDateProps, getForwardProps, handleOffsetChanged } = useCalendar({
            date,
            minDate,
            maxDate,
            offset,
            onOffsetChanged,
            firstDayOfWeek: 1,
            ...rest,
        });

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
            [calendarPaddingRef, offset, calendars, maxDate, minDate],
        );

        const onArrowNavigation = useCallback(
            (event: React.KeyboardEvent) => {
                switch (event.key) {
                    case "ArrowUp":
                        doFocusChange(-7);
                        break;
                    case "ArrowRight":
                        doFocusChange(1);
                        break;
                    case "ArrowDown":
                        doFocusChange(7);
                        break;
                    case "ArrowLeft":
                        doFocusChange(-1);
                        break;
                    default:
                        break;
                }
            },
            [doFocusChange],
        );

        return (
            <>
                <div
                    ref={ref}
                    id={id}
                    className={cn("jkl-calendar", {
                        "jkl-calendar--hidden": hidden,
                        "jkl-calendar--extended": extended,
                    })}
                >
                    <div className="jkl-calendar__padding" ref={calendarPaddingRef}>
                        {extended && (
                            <div className="jkl-calendar__navigation">
                                {/* TODO: oppdater offset ved endring til gyldig dato */}
                                {/* TODO: refactor ut i egen komponent så vi ikke re-rendrer hele kalenderen ved input change */}
                                <TextInput
                                    label="År"
                                    type="year"
                                    className="jkl-calendar__year-selector"
                                    width="5rem"
                                    variant="small"
                                    forceCompact={forceCompact}
                                />
                                {/* TODO: hvorfor er dette en nativeselect? */}
                                {/* TODO: oppdater offset ved valg */}
                                <NativeSelect
                                    className="jkl-calendar__month-selector"
                                    label="Måned"
                                    items={[]}
                                    variant="small"
                                    forceCompact={forceCompact}
                                    width="auto"
                                />
                            </div>
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
                                    {monthNames[calendar.month]} {calendar.year}
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
                                                            aria-current={today ? "date" : undefined}
                                                            data-adjacent={prevMonth || nextMonth ? "true" : undefined}
                                                            disabled={!selectable || prevMonth || nextMonth}
                                                        >
                                                            {date.getDate()}
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
                <span className="jkl-sr-only" aria-live="polite" aria-atomic="true">
                    {date ? date.getFullYear() : ""}
                </span>
            </>
        );
    },
);

Calendar.displayName = "Calendar";
