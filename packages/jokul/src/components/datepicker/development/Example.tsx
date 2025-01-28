import { DevExample } from "doc-utils/DevExample.js";
import React from "react";
import {
    DatepickerExample,
    datepickerExampleKnobs,
} from "./DatepickerExample.js";

export default function Example() {
    return (
        <DevExample
            title="DatePicker"
            component={DatepickerExample}
            knobs={datepickerExampleKnobs}
        />
    );
}
