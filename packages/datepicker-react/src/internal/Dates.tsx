import React from "react";
import cn from "classnames";
import { CalendarMonth } from "./utils";
import { GetDatePropsFunc } from "./use-calendar";

export interface DatesProps {
    calendar: CalendarMonth;
    getDateProps: GetDatePropsFunc;
}

export const Dates: React.FC<DatesProps> = ({ calendar, getDateProps }) => {
    return (
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
    );
};
