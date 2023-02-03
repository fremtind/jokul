import React from "react";
import { DevExample } from "../../../doc-utils";
import { NewDatepickerExample, newDatepickerExampleCode, newDatepickerExampleKnobs } from "./NewDatepickerExample";
import "../../new-datepicker/new-datepicker.scss";

export default function Example() {
    return (
        <DevExample
            component={NewDatepickerExample}
            codeExample={newDatepickerExampleCode}
            knobs={newDatepickerExampleKnobs}
        />
    );
}
