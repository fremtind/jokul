import React from "react";
import { CalendarDay, type CalendarDayContext } from "./CalendarDay.js";

interface CalendarWeekProps extends CalendarDayContext {
    week: Array<number | null>;
    weekIndex: number;
}

export const CalendarWeek = ({
    week,
    weekIndex,
    ...dayContext
}: CalendarWeekProps) => (
    <tr>
        {week.map((day, dayIndex) =>
            day ? (
                <CalendarDay
                    key={`cell-${weekIndex}-${dayIndex}`}
                    day={day}
                    {...dayContext}
                />
            ) : (
                <td key={`cell-${weekIndex}-${dayIndex}`} />
            ),
        )}
    </tr>
);
