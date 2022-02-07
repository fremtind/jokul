import React, { ChangeEvent, forwardRef } from "react";
import cn from "classnames";
// @ts-ignore: wait for nrk to supply types
import CoreDatepicker from "@nrk/core-datepicker/jsx";
import { TextInput } from "@fremtind/jkl-text-input-react";
import { NativeSelect } from "@fremtind/jkl-select-react";

import { ChangeDate } from "./DatePicker";

interface Props {
    hidden?: boolean;
    extended?: boolean;
    forceCompact?: boolean;
    onClickDate?: (e: ChangeEvent<ChangeDate>) => void;
    currentDate?: Date;
    months?: string[];
    days?: string[];
    yearLabel?: string;
    monthLabel?: string;
    disableDate?: (date: Date) => void;
}

export const Calendar = forwardRef<HTMLElement, Props>(
    (
        {
            hidden,
            extended,
            forceCompact,
            onClickDate,
            currentDate,
            monthLabel = "Måned",
            yearLabel = "År",
            days,
            months,
            disableDate,
        },
        ref,
    ) => {
        const componentClassName = cn("jkl-calendar", {
            "jkl-calendar--hidden": hidden,
            "jkl-calendar--extended": extended,
        });

        return (
            <CoreDatepicker
                date={currentDate || new Date()}
                months={months}
                days={days}
                onDatepickerClickDay={onClickDate}
                disabled={disableDate}
                forwardRef={ref}
                className={componentClassName}
                data-testid="jkl-calendar__core-datepicker"
            >
                <div className="jkl-calendar__padding">
                    {extended && (
                        <div className="jkl-calendar__navigation">
                            <TextInput
                                label={yearLabel}
                                type="year"
                                className="jkl-calendar__year-selector"
                                width="5rem"
                                variant="small"
                                forceCompact={forceCompact}
                            />
                            <NativeSelect
                                className="jkl-calendar__month-selector"
                                label={monthLabel}
                                items={[]}
                                variant="small"
                                forceCompact={forceCompact}
                                width="auto"
                            />
                        </div>
                    )}
                    {!extended && (
                        <fieldset className="jkl-calendar__month-navigation">
                            <button
                                title="forrige måned"
                                aria-label="forrige måned"
                                className="jkl-calendar__month-button"
                                value="- 1 month"
                            >
                                ←
                            </button>
                            <button
                                title="neste måned"
                                aria-label="neste måned"
                                className="jkl-calendar__month-button jkl-calendar__month-button--right"
                                value="+ 1 month"
                            >
                                →
                            </button>
                        </fieldset>
                    )}
                    <table data-testid="jkl-datepicker-calendar" />
                </div>
            </CoreDatepicker>
        );
    },
);
Calendar.displayName = "Calendar";
