import React from "react";
import { Example } from "../components";
import { DatePicker } from "@fremtind/jkl-datepicker-react";
import "@fremtind/jkl-datepicker/datepicker.min.css";
// @ts-ignore
import datepickerType from "!raw-loader!@fremtind/jkl-datepicker-react/build/DatePicker.d.ts";

const example = `<>
        <DatePicker />
        <DatePicker
            onlyFuture={false}
            label="Example in English"
            yearLabel="Year"
            monthLabel="Month"
            months={[
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
            ]}
            days={[
                "Mon",
                "Tue",
                "Wed",
                "Thu",
                "Fri",
                "Sat",
                "Sun"
            ]}
            onChange={(date) => console.log(date)}
            initialShow
            initialDate={new Date('August 19, 2024 23:15:30')}
        />
    </>`;

const exampleImport = `import { DatePicker } from "@fremtind/jkl-datepicker-react";
import "@fremtind/jkl-datepicker/datepicker.min.css";`;

const DatepickerExample = () => (
    <Example
        exampleComponents={{ DatePicker }}
        exampleCode={example}
        type={datepickerType}
        exampleImport={exampleImport}
    />
);

export default DatepickerExample;
