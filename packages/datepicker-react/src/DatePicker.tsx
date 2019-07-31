import React, { useState, ChangeEvent } from "react";
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
}: Props) {
    const [today] = useState(Date.now() - (Date.now() % 864e3));
    const [date, setDate] = useState(initialDate);
    const [showPicker, togglePicker] = useState(initialShow);

    const onDateChange = (e: ChangeEvent<ChangeDate>) => {
        if (onChange) {
            onChange(e.target.date);
        }
        setDate(e.target.date);
    };
    const toggle = () => togglePicker(!showPicker);

    return (
        <div className="jkl-datepicker">
            <button type="button" className="jkl-datepicker__toggler" data-testid="jkl-datepicker-toggler">
                <TextField
                    label={label}
                    type="text"
                    readOnly
                    value={date.toLocaleDateString()}
                    data-testid="jkl-datepicker-input"
                />
            </button>
            <CoreToggle hidden={!showPicker} popup onToggle={toggle}>
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
                    <table data-testid="jkl-datepicker-calendar" />
                </CoreDatepicker>
            </CoreToggle>
        </div>
    );
}
