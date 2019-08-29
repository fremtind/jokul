import React, { ChangeEvent, useRef, useState } from "react";
import { Select } from "@fremtind/jkl-dropdown-react";
import { TextField } from "@fremtind/jkl-text-input-react";
import { SupportLabel } from "@fremtind/jkl-typography-react";
import { useClickOutside, useFocusOutside, useKeyListener } from "@fremtind/jkl-react-hooks";
// @ts-ignore
import CoreDatepicker from "@nrk/core-datepicker/jsx";

interface ChangeDate {
    date: Date;
}

interface Props {
    label?: string;
    monthLabel?: string;
    yearLabel?: string;
    placeholder?: string;
    months?: string[];
    days?: string[];
    initialDate?: Date;
    onChange?: (date: Date) => void;
    initialShow?: boolean;
    className?: string;
    helpLabel?: string;
    errorLabel?: string;
}

const dayMonthYearRegex = /^(\d\d)\.(\d\d)\.(\d{4})/;

export function isSameDay(date1: Date, date2: Date) {
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
export function formatDate(date: Date) {
    const day = `${date.getDate()}`.padStart(2, "0");
    const month = `${date.getMonth() + 1}`.padStart(2, "0");
    return `${day}.${month}.${date.getFullYear()}`;
}

export function DatePicker({
    label = "Velg dato",
    monthLabel = "Måned",
    yearLabel = "År",
    placeholder = "dd.mm.åååå",
    months,
    days,
    initialDate,
    onChange,
    initialShow = false,
    className = "",
    helpLabel,
    errorLabel,
}: Props) {
    const [date, setDate] = useState(initialDate);
    const [datepickerHidden, setDatepickerHidden] = useState(!initialShow);
    const [dateString, setDateString] = useState(initialDate ? formatDate(initialDate) : "");
    const openDatepicker = () => setDatepickerHidden(false);
    const closeDatepicker = () => setDatepickerHidden(true);

    const datepickerRef = useRef<HTMLDivElement>(null);
    useClickOutside(datepickerRef, closeDatepicker);
    useFocusOutside(datepickerRef, closeDatepicker);
    useKeyListener(datepickerRef, ["Enter", "Escape"], closeDatepicker);

    function onInputChange(event: ChangeEvent<HTMLInputElement>) {
        const newDateString = event.target.value;
        const dayMonthYearMatch = dayMonthYearRegex.exec(newDateString);

        // Only set the date if it is a valid date
        if (dayMonthYearMatch) {
            const day = parseInt(dayMonthYearMatch[1], 10);
            const month = parseInt(dayMonthYearMatch[2], 10) - 1;
            const year = parseInt(dayMonthYearMatch[3], 10);

            setDate(new Date(year, month, day, 0, 0, 0));
        }
        setDateString(newDateString);
    }

    function dateHasChanged(date: Date | undefined, newDate: Date) {
        return !date || !isSameDay(date, newDate);
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
        <div className={`jkl-datepicker ${className}`} ref={datepickerRef}>
            <TextField
                placeholder={placeholder}
                label={label}
                type="text"
                value={dateString}
                onChange={onInputChange}
                onFocus={openDatepicker}
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
            <SupportLabel errorLabel={errorLabel} helpLabel={helpLabel} />
        </div>
    );
}
