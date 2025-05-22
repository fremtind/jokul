import { DevExample } from "utils/dev-example/DevExample.js";
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
