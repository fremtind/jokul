import React from "react";
import { DevExample } from "../../../../../../doc-utils";
import { DatepickerExample, datepickerExampleKnobs } from "./DatepickerExample";

import "../../../../../../packages/webfonts/webfonts.scss";
import "../../../core/styles/core.scss";
import "../../../styles/styles.scss";

export default function Example() {
    return <DevExample title="DatePicker" component={DatepickerExample} knobs={datepickerExampleKnobs} />;
}
