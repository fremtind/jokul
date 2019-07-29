import React from "react";
import { Example } from "../components";
import { DatePicker } from "@fremtind/jkl-datepicker-react";
import "@fremtind/jkl-datepicker/datepicker.min.css";
// @ts-ignore
import datepickerType from "!raw-loader!@fremtind/jkl-datepicker-react/build/DatePicker.d.ts";

const example = `<>
    <DatePicker initialDate={new Date('August 19, 2024 23:15:30')} />
    <DatePicker
        onlyFuture={false}
        label="In english"
        yearLabel="Year"
        monthLabel="Month"
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
