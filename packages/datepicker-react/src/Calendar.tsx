import React, { ChangeEvent, forwardRef } from "react";
import classNames from "classnames";
// @ts-ignore: wait for nrk to supply types
import CoreDatepicker from "@nrk/core-datepicker/jsx";
import { TextInput } from "@fremtind/jkl-text-input-react";
import { NativeSelect } from "@fremtind/jkl-select-react";

import { ChangeDate } from "./DatePicker";

interface Props {
    hidden?: boolean;
    extended?: boolean;
    forceCompact?: boolean;
    inverted?: boolean;
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
            inverted,
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
        const componentClassName = classNames("jkl-calendar", {
            "jkl-calendar--hidden": hidden,
            "jkl-calendar--extended": extended,
            "jkl-calendar--inverted": inverted,
        });

        return (
            <CoreDatepicker
                timestamp={currentDate ? currentDate.getTime() : new Date()}
                months={months}
                days={days}
                onDatepickerClickDay={onClickDate}
                disabled={disableDate}
                forwardRef={ref}
                className={componentClassName}
            >
                <div className="jkl-calendar__padding">
                    {extended && (
                        <div className="jkl-calendar__navigation">
                            <TextInput
                                inverted={inverted}
                                label={yearLabel}
                                type="year"
                                className="jkl-calendar__year-selector"
                                width="5rem"
                                variant="small"
                                forceCompact={forceCompact}
                            />
                            <NativeSelect
                                inverted={inverted}
                                className="jkl-calendar__month-selector"
                                label={monthLabel}
                                items={[]}
                                variant="small"
                                forceCompact={forceCompact}
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
