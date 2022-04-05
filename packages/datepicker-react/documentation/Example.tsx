import React from "react";
import { DevExample } from "../../../doc-utils";
import { DatepickerExample } from "./DatepickerExample";
import "../../core/core.scss";
import "../../datepicker/datepicker.scss";
import "../../icon-button/icon-button.scss";
import "../../text-input/text-input.scss";
import "../../select/select.scss";

export default function Client() {
    return (
        <DevExample
            component={DatepickerExample}
            knobs={{
                boolProps: ["Utvidet velger", "Compact", "Med feil", "Med hjelpetekst"],
                choiceProps: [
                    {
                        name: "Variant",
                        values: ["small", "medium", "large"],
                        defaultValue: 1,
                    },
                ],
            }}
        />
    );
}
