import React from "react";
import { Example } from "../components";
import { DatePicker } from "@fremtind/jkl-datepicker-react";
import "@fremtind/jkl-datepicker/datepicker.min.css";

import datepickerType from "!raw-loader!@fremtind/jkl-datepicker-react/build/DatePicker.d.ts";

const example = `<>
        <DatePicker label="Når skjedde skaden?" initialDate={new Date('August 19, 2024 23:15:30')} />
        <DatePicker
            variant="large"
            onlyFuture={true}
            label="On what date will you take ownership of the apartment?"
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
                "December"
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
        />
        <DatePicker className="jkl-spacing--top-2" variant="small" />
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
