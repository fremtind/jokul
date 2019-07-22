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
        label="Label kan endres"
        yearLabel="Denne også"
        monthLabel="Og denne"
        onChange={(date) => console.log(date)}
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
