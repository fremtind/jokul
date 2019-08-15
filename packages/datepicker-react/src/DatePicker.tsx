import { SupportText } from "@fremtind/jkl-typography-react";
import React, { useState, ChangeEvent, useRef } from "react";
// @ts-ignore
import CoreDatepicker from "@nrk/core-datepicker/jsx";
// @ts-ignore
import CoreToggle from "@nrk/core-toggle/jsx";
import { TextField } from "@fremtind/jkl-text-input-react";
import { Select } from "@fremtind/jkl-dropdown-react";

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
    onlyFuture?: boolean;
    initialShow?: boolean;
    className?: string;
    bottomText?: string;
    isInvalid?: boolean;
}

interface HTMLElementOrCoreToggleElement<T extends HTMLElementOrCoreToggleElement<T>> extends HTMLElement {
    el?: T; // Hack and workaround until https://github.com/nrkno/custom-element-to-react/pull/17 has landed
}

interface CoreToggleElement extends HTMLElement {
    hidden: boolean;
}

export function DatePicker({
    label = "Velg dato",
    monthLabel = "Måned",
    yearLabel = "År",
    months,
    days,
    initialDate = new Date(),
    onChange,
    onlyFuture = true,
    initialShow = false,
    className = "",
    bottomText,
    isInvalid,
}: Props) {
    const [today] = useState(Date.now() - (Date.now() % 864e3));
    const [date, setDate] = useState(initialDate);
    const ref = useRef<HTMLElementOrCoreToggleElement<CoreToggleElement>>(null);

    function onDateChange(e: ChangeEvent<ChangeDate>) {
        if (onChange) {
            onChange(e.target.date);
        }
        setDate(e.target.date);
    }

    function closeDatepicker() {
        if (ref.current && ref.current.el) {
            ref.current.el.hidden = true;
        }
    }

    return (
        <div className={`jkl-datepicker ${className}`}>
            <button type="button" className="jkl-datepicker__toggler" data-testid="jkl-datepicker-toggler">
                <TextField
                    isInvalid={isInvalid}
                    label={label}
                    type="text"
                    readOnly
                    value={date.toLocaleDateString()}
                    data-testid="jkl-datepicker-input"
                />
            </button>
            <CoreToggle ref={ref} hidden={initialShow} popup>
                <CoreDatepicker
                    timestamp={date.getTime()}
                    months={months}
                    days={days}
                    disabled={onlyFuture ? (date: number) => date <= today : onlyFuture}
                    onDatepickerChange={onDateChange}
                    className="jkl-datepicker__calendar"
                >
                    <div className="jkl-datepicker__calendar-header">
                        <TextField label={yearLabel} type="year" className="jkl-datepicker__calendar-header--year" />

                        <Select className="jkl-datepicker__calendar-header--month" label={monthLabel} items={[]} />
                    </div>
                    {/* CoreDatepicker handles accessibility interactions */}
                    {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
                    <table onClick={closeDatepicker} data-testid="jkl-datepicker-calendar" />
                </CoreDatepicker>
            </CoreToggle>
            <SupportText isInvalid={!!isInvalid} errorText={bottomText} helpText={isInvalid ? undefined : bottomText} />
        </div>
    );
}
