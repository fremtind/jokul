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
    onlyFuture?: boolean;
    initialShow?: boolean;
    className?: string;
    bottomText?: string;
    isInvalid?: boolean;
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
    const [datepickerHidden, setDatepickerHidden] = useState(!initialShow);
    const [dateString, setDateString] = useState("");
    const ref = useRef(null);
    useOnClickOutside(ref, closeDatepicker);

    function onDateChange(e: ChangeEvent<ChangeDate>) {
        if (onChange) {
            onChange(e.target.date);
        }
        setDate(e.target.date);
    }

    function closeDatepicker() {
        setDatepickerHidden(true);
    }

    return (
        <div className={`jkl-datepicker ${className}`} ref={ref}>
            <TextField
                isInvalid={isInvalid}
                label={label}
                type="text"
                value={dateString}
                onChange={(event) => setDateString(event.target.value)}
                onFocus={() => setDatepickerHidden(false)}
                data-testid="jkl-datepicker-input"
            />

            <div hidden={datepickerHidden}>
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
            </div>
            <SupportText isInvalid={!!isInvalid} errorText={bottomText} helpText={isInvalid ? undefined : bottomText} />
        </div>
    );
}

function useOnClickOutside<T extends HTMLElement>(ref: MutableRefObject<T | null>, onClickOutside: () => void) {
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
    });
}
