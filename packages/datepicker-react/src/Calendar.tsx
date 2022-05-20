import React, { forwardRef, useCallback, useEffect, useState } from "react";
import cn from "classnames";
import { TextInput } from "@fremtind/jkl-text-input-react";
import { NativeSelect } from "@fremtind/jkl-select-react";
import { useCalendar, UseCalendarProps } from "./internal/use-calendar";

// TODO: lån kode fra arrow-keys-react
// ArrowKeysReact.config({
// left: () => {
//     this.getKeyOffset(-1);
// },
// right: () => {
//     this.getKeyOffset(1);
// },
// up: () => {
//     this.getKeyOffset(-7);
// },
// down: () => {
//     this.getKeyOffset(7);
// }
// });
// getKeyOffset(number) {
//     const e = document.activeElement;
//     let buttons = document.querySelectorAll('button'); // TODO: gi datoknapper et data-attribut å selecte i stedet
//     buttons.forEach((el, i) => {
//       const newNodeKey = i + number;
//       if (el == e) {
//         if (newNodeKey <= buttons.length - 1 && newNodeKey >= 0) {
//           buttons[newNodeKey].focus();
//         } else {
//           buttons[0].focus();
//         }
//       }
//     });
//   }

interface Props extends Omit<UseCalendarProps, "onOffsetChanged" | "offset" | "firstDayOfWeek"> {
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
const weekdayNames = ["man", "tir", "ons", "fre", "lør", "søn"];

export const Calendar = forwardRef<HTMLDivElement, Props>(({ hidden, extended, forceCompact, date, ...rest }, ref) => {
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

    const { calendars, getBackProps, getDateProps, getForwardProps } = useCalendar({
        date,
        offset,
        onOffsetChanged,
        firstDayOfWeek: 1,
        ...rest,
    });

    if (!calendars.length) {
        return null;
    }

    return (
        <>
            <div
                ref={ref}
                className={cn("jkl-calendar", {
                    "jkl-calendar--hidden": hidden,
                    "jkl-calendar--extended": extended,
                })}
            >
                <div className="jkl-calendar__padding">
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
                        <div key={`${calendar.month}${calendar.year}`} data-testid="jkl-datepicker-calendar">
                            <div data-testid="jkl-datepicker-month-year">
                                {monthNames[calendar.month]} {calendar.year}
                            </div>
                            <div data-testid="jkl-datepicker-weekdays">
                                {weekdayNames.map((weekday) => (
                                    <div key={`${calendar.month}${calendar.year}${weekday}`}>{weekday}</div>
                                ))}
                            </div>
                            <div data-testid="jkl-datepicker-dates">
                                {calendar.weeks.map((week, weekIndex) =>
                                    week.map((dateInfo, index) => {
                                        const key = `${calendar.month}${calendar.year}${weekIndex}${index}`;
                                        if (typeof dateInfo === "string") {
                                            return (
                                                <div className="jkl-calendar__date jkl-calendar__date--empty" key={key}>
                                                    {dateInfo}
                                                </div>
                                            );
                                        }
                                        const { date, selected, selectable, today, prevMonth, nextMonth } = dateInfo;
                                        return (
                                            <button
                                                key={key}
                                                {...getDateProps({
                                                    dateObj: dateInfo,
                                                })}
                                                className={cn("jkl-calendar__date", {
                                                    "jkl-calendar__date--today": today,
                                                    "jkl-calendar__date--selected": selected,
                                                    "jkl-calendar__date--adjacent": prevMonth || nextMonth,
                                                })}
                                                disabled={!selectable}
                                            >
                                                {date.getDate()}
                                            </button>
                                        );
                                    }),
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <span className="jkl-sr-only" aria-live="polite" aria-atomic="true">
                {date ? date.getFullYear() : ""}
            </span>
        </>
    );
});

Calendar.displayName = "Calendar";
