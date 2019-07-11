import React, { useState, ChangeEvent } from "react";
// @ts-ignore
import CoreDatepicker from "@nrk/core-datepicker/jsx";
// @ts-ignore
import CoreToggle from "@nrk/core-toggle/jsx";
import { TextField } from "@fremtind/jkl-text-input-react";

interface ChangeDate {
    date: Date;
}

interface Props {
    label?: string;
    monthLabel?: string;
    yearLabel?: string;
    initialDate?: Date;
    onChange?: (date: Date) => void;
    onlyFuture?: boolean;
}

export function DatePicker({
    label = "Velg dato",
    monthLabel = "Måned",
    yearLabel = "År",
    initialDate = new Date(),
    onChange,
    onlyFuture = true,
}: Props) {
    const [today] = useState(Date.now() - (Date.now() % 864e3));
    const [date, setDate] = useState(initialDate);

    const onDateChange = (e: ChangeEvent<ChangeDate>) => {
        if (onChange) {
            onChange(e.target.date);
        }
        setDate(e.target.date);
    };

    return (
        <div className="jkl-datepicker">
            <button className="jkl-datepicker__toggler" data-testid="jkl-datepicker-toggler">
                <TextField
                    label={label}
                    type="text"
                    readOnly
                    value={date.toLocaleDateString()}
                    data-testid="jkl-datepicker-input"
                />
            </button>
            <CoreToggle hidden popup>
                <CoreDatepicker
                    timestamp={date.getTime()}
                    disabled={onlyFuture ? (date: number) => date <= today : onlyFuture}
                    onDatepickerChange={onDateChange}
                    className="jkl-datepicker__calendar"
                >
                    <div className="jkl-datepicker__calendar__header">
                        <TextField label={yearLabel} type="year" className="jkl-datepicker__calendar__header--year" />
                        <label className="jkl-datepicker__calendar__header--month">
                            {monthLabel}
                            <select />
                        </label>
                    </div>
                    <table data-testid="jkl-datepicker-calendar" />
                </CoreDatepicker>
            </CoreToggle>
        </div>
    );
}
