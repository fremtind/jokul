import React from "react";
import { DevExample } from "../../../doc-utils";
import { DatepickerExample, datepickerExampleKnobs, datepickerExampleCode } from "./DatepickerExample";
import "../../core/core.scss";
import "../../datepicker/datepicker.scss";
import "../../icon-button/icon-button.scss";
import "../../input-group/input-group.scss";
import "../../select/select.scss";
import "../../text-input/text-input.scss";
import "../../tooltip/tooltip.scss";

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
