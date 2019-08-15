import { Select } from "@fremtind/jkl-dropdown-react";
import { TextField } from "@fremtind/jkl-text-input-react";
import { SupportText } from "@fremtind/jkl-typography-react";
// @ts-ignore
import CoreDatepicker from "@nrk/core-datepicker/jsx";
import React, { ChangeEvent, MutableRefObject, useEffect, useRef, useState } from "react";

interface ChangeDate {
    date: Date;
}

interface Props {
    label?: string;
    monthLabel?: string;
    yearLabel?: string;
    months?: string[];
    days?: string[];
    initialDate?: Date;
    onChange?: (date: Date) => void;
    initialShow?: boolean;
    className?: string;
    bottomText?: string;
    isInvalid?: boolean;
}

const dayMonthYearRegex = /^(\d\d)\.(\d\d)\.(\d{4})/;

export function DatePicker({
    label = "Velg dato",
    monthLabel = "Måned",
    yearLabel = "År",
    months,
    days,
    initialDate,
    onChange,
    initialShow = false,
    className = "",
    bottomText,
    isInvalid,
}: Props) {
    const [date, setDate] = useState(initialDate);
    const [datepickerHidden, setDatepickerHidden] = useState(!initialShow);
    const [dateString, setDateString] = useState("");
    const ref = useOnClickOutside<HTMLDivElement>(() => setDatepickerHidden(true));

    function onInputChange(event: ChangeEvent<HTMLInputElement>) {
        const newString = event.target.value;
        const dayMonthYearMatch = dayMonthYearRegex.exec(newString);

        // Only set the date if it is a valid date
        if (dayMonthYearMatch) {
            const day = parseInt(dayMonthYearMatch[1], 10);
            const month = parseInt(dayMonthYearMatch[2], 10) - 1;
            const year = parseInt(dayMonthYearMatch[3], 10);

            setDate(new Date(year, month, day, 0, 0, 0));
        }
        setDateString(newString);
    }

    function onClickCalendarDay(event: ChangeEvent<ChangeDate>) {
        const newDate = event.target.date;
        setDatepickerHidden(true);

        if (dateHasChanged(date, newDate)) {
            setDateString(formatDate(newDate));
            setDate(newDate);

            if (onChange) {
                onChange(newDate);
            }
        }
    }

    return (
        <div className={`jkl-datepicker ${className}`} ref={ref}>
            <TextField
                placeholder={"dd.mm.åååå"}
                isInvalid={isInvalid}
                label={label}
                type="text"
                value={dateString}
                onChange={onInputChange}
                onFocus={() => setDatepickerHidden(false)}
                data-testid="jkl-datepicker-input"
            />

            <div hidden={datepickerHidden}>
                <CoreDatepicker
                    timestamp={date ? date.getTime() : undefined}
                    months={months}
                    days={days}
                    onDatepickerClickDay={onClickCalendarDay}
                    className="jkl-datepicker__calendar"
                >
                    <div className="jkl-datepicker__calendar-header">
                        <TextField label={yearLabel} type="year" className="jkl-datepicker__calendar-header--year" />

                        <Select className="jkl-datepicker__calendar-header--month" label={monthLabel} items={[]} />
                    </div>
                    <table data-testid="jkl-datepicker-calendar" />
                </CoreDatepicker>
            </div>
            <SupportText isInvalid={!!isInvalid} errorText={bottomText} helpText={isInvalid ? undefined : bottomText} />
        </div>
    );
}

function useOnClickOutside<T extends HTMLElement>(onClickOutside: () => void): MutableRefObject<T | null> {
    const ref = useRef<T>(null);

    function onMouseDown(e: MouseEvent) {
        if (ref.current && !ref.current.contains(e.target as Node)) {
            onClickOutside();
        }
    }

    useEffect(() => {
        // Bind the event listener
        document.addEventListener("mousedown", onMouseDown);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", onMouseDown);
        };
    }, []);
    return ref;
}

function isSameDay(date1: Date, date2: Date) {
    return (
        date1.getDate() === date2.getDate() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getFullYear() === date2.getFullYear()
    );
}

/**
 *
 * @param date the date to format
 * @return returns a date with "dd.mm.yyyy"-format
 */
function formatDate(date: Date) {
    const day = pad0(date.getDate());
    const month = pad0(date.getMonth() + 1);
    return `${day}.${month}.${date.getFullYear()}`;
}

/**
 * @return returns a string with 0 in front of single digit numbers
 */
function pad0(nr: number) {
    return nr >= 0 && nr <= 9 ? `0${nr}` : nr;
}

function dateHasChanged(date: Date | undefined, newDate: Date) {
    return !date || !isSameDay(date, newDate);
}
