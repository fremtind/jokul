import React, { ChangeEvent, useState, useEffect, useRef } from "react";
import nanoid from "nanoid";
import { Label, SupportLabel } from "@fremtind/jkl-typography-react";
import { LabelVariant } from "@fremtind/jkl-core";
// @ts-ignore
import CoreDatepicker from "@nrk/core-datepicker/jsx";
// @ts-ignore
import CoreToggle from "@nrk/core-toggle/jsx";
import classNames from "classnames";
import { IconButton } from "@fremtind/jkl-icon-button-react";

interface ChangeDate {
    date: Date;
}

interface CoreToggleSelectEvent {
    detail: { textContent: string; value: string; classList: DOMTokenList };
    target: { hidden: boolean; button: HTMLButtonElement; value: { textContent: string } };
}

interface Props {
    label?: string;
    monthLabel?: string;
    yearLabel?: string;
    placeholder?: string;
    months?: string[];
    days?: string[];
    calendarButtonTitle?: string;
    initialDate?: Date;
    onChange?: (date?: Date) => void;
    extended?: boolean;
    initialShow?: boolean;
    className?: string;
    helpLabel?: string;
    errorLabel?: string;
    variant?: LabelVariant;
    forceCompact?: boolean;
    disableBeforeDate?: Date;
    disableAfterDate?: Date;
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
    calendarButtonTitle = "Vis kalender",
    initialDate,
    onChange,
    extended = false,
    initialShow = false,
    className = "",
    errorLabel,
    helpLabel,
    variant,
    forceCompact,
    disableBeforeDate,
    disableAfterDate,
}: Props) {
    const { current: uuid } = useRef(`jkl-datepicker-${nanoid(8)}`);
    const [date, setDate] = useState(initialDate);
    const [datepickerHidden, setDatepickerHidden] = useState(!initialShow);
    const [dateString, setDateString] = useState(initialDate ? formatDate(initialDate) : "");
    const componentClassName = classNames(
        "jkl-datepicker",
        {
            "jkl-datepicker--extended": extended,
            "jkl-datepicker--open": !datepickerHidden,
        },
        className,
    );

    const inputClassName = classNames("jkl-datepicker-text-input", {
        "jkl-datepicker--compact": forceCompact,
    });

    useEffect(() => {
        disableAfterDate && disableAfterDate.setHours(23, 59, 59, 999);
        const now = new Date();

        if (disableAfterDate && now > disableAfterDate) {
            setDate(disableAfterDate);
        }
        if (disableBeforeDate && now < disableBeforeDate) {
            setDate(disableBeforeDate);
        }
    }, [disableBeforeDate, disableAfterDate]);

    useEffect(() => {
        setDateString(initialDate ? formatDate(initialDate) : "");
        setDate(initialDate);
    }, [initialDate]);

    const toggleDatepicker = () => setDatepickerHidden(!datepickerHidden);
    const handleCalendarClick = (e: CoreToggleSelectEvent) => {
        if (!e.detail.classList.contains("jkl-datepicker__month-button")) {
            e.target.hidden = true;
        }
    };

    function onInputChange(event: ChangeEvent<HTMLInputElement>) {
        const newDateString = event.target.value;
        const dayMonthYearMatch = dayMonthYearRegex.exec(newDateString);
        // Only set the date if it is a valid date
        if (dayMonthYearMatch) {
            const day = parseInt(dayMonthYearMatch[1], 10);
            const month = parseInt(dayMonthYearMatch[2], 10) - 1;
            const year = parseInt(dayMonthYearMatch[3], 10);

            const newDate = new Date(year, month, day, 0, 0, 0);
            if (dateHasChanged(date, newDate)) {
                setDate(newDate);
                if (onChange) {
                    onChange(newDate);
                }
            }
        } else if (newDateString === "") {
            setDate(undefined);
            if (onChange) {
                onChange(undefined);
            }
        }
        setDateString(newDateString);
    }

    function dateHasChanged(date: Date | undefined, newDate: Date) {
        return !date || !isSameDay(date, newDate);
    }

    function onClickCalendarDay(event: ChangeEvent<ChangeDate>) {
        const newDate = event.target.date;

        if (dateHasChanged(date, newDate)) {
            setDateString(formatDate(newDate));
            setDate(newDate);

            if (onChange) {
                onChange(newDate);
            }
        }
    }

    function disableDate(date: Date) {
        return (disableAfterDate && date > disableAfterDate) || (disableBeforeDate && date < disableBeforeDate);
    }

    return (
        <div className={componentClassName}>
            <Label htmlFor={uuid} standAlone variant={variant} forceCompact={forceCompact}>
                {label}
            </Label>
            <div className={inputClassName}>
                <input
                    id={uuid}
                    placeholder={placeholder}
                    type="text"
                    aria-invalid={!!errorLabel}
                    className="jkl-datepicker-text-input__input"
                    data-testid="jkl-datepicker__input"
                    value={dateString}
                    onChange={onInputChange}
                />
                <IconButton
                    className="jkl-datepicker__action-button"
                    iconType="calendar"
                    buttonTitle={calendarButtonTitle}
                />
                <CoreToggle
                    popup
                    hidden={datepickerHidden}
                    onToggle={toggleDatepicker}
                    onToggleSelect={handleCalendarClick}
                >
                    <CoreDatepicker
                        timestamp={date ? date.getTime() : new Date()}
                        months={months}
                        days={days}
                        onDatepickerClickDay={onClickCalendarDay}
                        className="jkl-datepicker__calendar"
                        disabled={disableDate}
                    >
                        {extended && (
                            <div className="jkl-datepicker__calendar-navigation">
                                <label className="jkl-datepicker__year-selector">
                                    <Label variant="small">{yearLabel}</Label>
                                    <input
                                        type="year"
                                        className="jkl-datepicker-text-input__input jkl-datepicker__year-value"
                                    />
                                </label>

                                <label className="jkl-select jkl-datepicker__month-selector">
                                    <Label variant="small">{monthLabel}</Label>
                                    <select className="jkl-select__value jkl-datepicker__month-value"></select>
                                    <span className="jkl-select__chevron" />
                                </label>
                            </div>
                        )}
                        {!extended && (
                            <fieldset className="jkl-datepicker__month-navigation">
                                <button
                                    title="forrige måned"
                                    aria-label="forrige måned"
                                    className="jkl-datepicker__month-button"
                                    value="- 1 month"
                                >
                                    <span className="jkl-datepicker__month-arrow jkl-datepicker__month-arrow--left" />
                                </button>
                                <button
                                    title="neste måned"
                                    aria-label="neste måned"
                                    className="jkl-datepicker__month-button jkl-datepicker__month-button--right"
                                    value="+ 1 month"
                                >
                                    <span className="jkl-datepicker__month-arrow jkl-datepicker__month-arrow--right" />
                                </button>
                            </fieldset>
                        )}
                        <table data-testid="jkl-datepicker-calendar" />
                    </CoreDatepicker>
                </CoreToggle>
            </div>
            <SupportLabel errorLabel={errorLabel} helpLabel={helpLabel} forceCompact={forceCompact} />
        </div>
    );
}
