/***
 * MIT License
 *
 * Copyright (c) 2017 Deseret Digital Media. 2022 Fremtind Forsikring AS.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
import startOfDay from "date-fns/startOfDay";
import React, { useState } from "react";
import {
    composeEventHandlers,
    subtractMonth,
    addMonth,
    isBackDisabled,
    isForwardDisabled,
    getCalendars,
    DateInfo,
    CalendarMonth,
} from "./utils";

function isOffsetControlled(propOffset: number | undefined): boolean {
    return propOffset !== undefined;
}

function getOffset(prop: number, state: number): number {
    return isOffsetControlled(prop) ? prop : state;
}

type BoundGetDateProps = (dateInfo: DateInfo, event: React.MouseEvent) => void;

type GetDateProps = {
    onClick?: React.MouseEventHandler;
    dateObj: DateInfo;
};

type GetDatePropsResult = {
    onClick: React.MouseEventHandler;
    disabled: boolean;
    "aria-pressed": boolean;
    role: "button";
};

function getDateProps(onDateSelected: BoundGetDateProps, { onClick, dateObj }: GetDateProps): GetDatePropsResult {
    return {
        onClick: composeEventHandlers(onClick, (event) => {
            onDateSelected(dateObj, event);
        }),
        disabled: !dateObj.selectable,
        "aria-pressed": dateObj.selected,
        role: "button",
    };
}

type BoundGetBackProps = {
    handleOffsetChanged: (newOffset: number) => void;
    offsetMonth: number;
    minDate?: Date;
};

type GetBackProps = {
    onClick?: React.MouseEventHandler;
    offset?: number;
    calendars: CalendarMonth[];
};

type GetBackPropsResult = {
    onClick: React.MouseEventHandler;
    disabled: boolean;
    "aria-label": string;
    title: string;
};

function getBackProps(
    { minDate, offsetMonth, handleOffsetChanged }: BoundGetBackProps,
    { onClick, offset = 1, calendars }: GetBackProps,
): GetBackPropsResult {
    const label = `Gå tilbake ${offset} måned${offset === 1 ? "" : "er"}`;
    return {
        onClick: composeEventHandlers(onClick, () => {
            handleOffsetChanged(offsetMonth - subtractMonth({ calendars, offset, minDate }));
        }),
        disabled: isBackDisabled({ calendars, minDate }),
        "aria-label": label,
        title: label,
    };
}

type BoundGetForwardProps = {
    handleOffsetChanged: (newOffset: number) => void;
    offsetMonth: number;
    maxDate?: Date;
};

type GetForwardProps = {
    onClick?: React.MouseEventHandler;
    offset?: number;
    calendars: CalendarMonth[];
};

type GetForwardPropsResult = {
    onClick: React.MouseEventHandler;
    disabled: boolean;
    "aria-label": string;
    title: string;
};

function getForwardProps(
    { maxDate, offsetMonth, handleOffsetChanged }: BoundGetForwardProps,
    { onClick, offset = 1, calendars }: GetForwardProps,
): GetForwardPropsResult {
    const label = `Gå frem ${offset} måned${offset === 1 ? "" : "er"}`;
    return {
        onClick: composeEventHandlers(onClick, () => {
            handleOffsetChanged(offsetMonth + addMonth({ calendars, offset, maxDate }));
        }),
        disabled: isForwardDisabled({ calendars, maxDate }),
        "aria-label": label,
        title: label,
    };
}

export interface UseCalendarProps {
    date?: Date;
    maxDate?: Date;
    minDate?: Date;
    monthsToDisplay?: number;
    firstDayOfWeek?: number;
    showOutsideDays?: boolean;
    offset: number;
    onDateSelected: (dateObj: DateInfo, event: React.MouseEvent) => void;
    onOffsetChanged: (newOffset: number) => void;
    selected?: Date | Date[];
}

export type GetDatePropsFunc = (props: GetDateProps) => GetDatePropsResult;
export type GetBackPropsFunc = (props: GetBackProps) => GetBackPropsResult;
export type GetForwardPropsFunc = (props: GetForwardProps) => GetForwardPropsResult;
export type HandleOffsetFunc = (newOffset: number) => void;

export type UseCalendarResult = {
    calendars: CalendarMonth[];
    getDateProps: GetDatePropsFunc;
    getBackProps: GetBackPropsFunc;
    getForwardProps: GetForwardPropsFunc;
    handleOffsetChanged: HandleOffsetFunc;
};

export function useCalendar({
    date = startOfDay(new Date()),
    maxDate,
    minDate,
    monthsToDisplay = 1,
    firstDayOfWeek = 0,
    showOutsideDays = true,
    offset,
    onDateSelected,
    onOffsetChanged,
    selected,
}: UseCalendarProps): UseCalendarResult {
    const [stateOffset, setStateOffset] = useState(0);
    const offsetMonth = getOffset(offset, stateOffset);

    function handleOffsetChanged(newOffset: number) {
        if (!isOffsetControlled(offset)) {
            setStateOffset(newOffset);
        }
        onOffsetChanged(newOffset);
    }

    const calendars = getCalendars({
        date,
        selected,
        monthsToDisplay,
        minDate,
        maxDate,
        offset: offsetMonth,
        firstDayOfWeek,
        showOutsideDays,
    });
    return {
        calendars,
        getDateProps: getDateProps.bind(null, onDateSelected),
        getBackProps: getBackProps.bind(null, {
            minDate,
            offsetMonth,
            handleOffsetChanged,
        }),
        getForwardProps: getForwardProps.bind(null, {
            maxDate,
            offsetMonth,
            handleOffsetChanged,
        }),
        handleOffsetChanged,
    };
}
