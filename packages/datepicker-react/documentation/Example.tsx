import { DevExample } from "@fremtind/jkl-internal-doc-utils";
import React from "react";
import { DatepickerExample, datepickerExampleKnobs, datepickerExampleCode } from "./DatepickerExample";
import "../../core/core.scss";
import "../../datepicker/datepicker.scss";
import "../../icon-button/icon-button.scss";
import "../../text-input/text-input.scss";
import "../../select/select.scss";

export default function Example() {
    return (
        <DevExample
            title="DatePicker"
            component={DatepickerExample}
            knobs={datepickerExampleKnobs}
            codeExample={datepickerExampleCode}
        />
    );
}
