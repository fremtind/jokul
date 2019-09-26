import React, { ChangeEvent, useRef, useState } from "react";
import { Select } from "@fremtind/jkl-dropdown-react";
import { SupportLabel } from "@fremtind/jkl-typography-react";
import { useClickOutside, useFocusOutside, useKeyListener } from "@fremtind/jkl-react-hooks";
import { labelVariant } from "@fremtind/jkl-core";
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
    variant?: labelVariant;
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
    errorLabel,
    helpLabel,
    variant,
}: Props) {
    const [date, setDate] = useState(initialDate);
    const [datepickerHidden, setDatepickerHidden] = useState(!initialShow);
    const [dateString, setDateString] = useState(initialDate ? formatDate(initialDate) : "");
    const openDatepicker = (e: React.FocusEvent<HTMLInputElement>) => {
        // Workaround for loosing focus when opening in chrome:
        // https://github.com/nrkno/core-components/issues/322
        e.persist();
        setTimeout(() => e.target.focus(), 0);
        setDatepickerHidden(false);
    };
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
            <div className="jkl-datepicker__outer-wrapper">
                <label className={`jkl-text-field`}>
                    <span className={`jkl-label ${variant ? `jkl-label--${variant}` : ""}`}>{label}</span>
                    <input
                        placeholder={placeholder}
                        type="text"
                        aria-invalid={!!errorLabel}
                        className={`jkl-text-field__input`}
                        data-testid="jkl-datepicker__input"
                        value={dateString}
                        onChange={onInputChange}
                        onFocus={openDatepicker}
                    />
                </label>

                <div hidden={datepickerHidden}>
                    <CoreDatepicker
                        timestamp={date ? date.getTime() : undefined}
                        months={months}
                        days={days}
                        onDatepickerClickDay={onClickCalendarDay}
                        className="jkl-datepicker__calendar"
                    >
                        <div className="jkl-datepicker__calendar-header">
                            <label className={`jkl-text-field jkl-datepicker__calendar-header--year`}>
                                <span className="jkl-label jkl-label--small">{yearLabel}</span>
                                <input type="year" className={`jkl-text-field__input`} />
                            </label>

                            <Select
                                variant="small"
                                className="jkl-datepicker__calendar-header--month"
                                label={monthLabel}
                                items={[]}
                            />
                        </div>
                        <table data-testid="jkl-datepicker-calendar" />
                    </CoreDatepicker>
                </div>
            </div>
            <SupportLabel errorLabel={errorLabel} helpLabel={helpLabel} />
        </div>
    );
}
