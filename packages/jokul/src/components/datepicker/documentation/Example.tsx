import React from "react";
import { DevExample } from "../../../../../../utils/dev-example";
import { DatepickerExample, datepickerExampleKnobs } from "./DatepickerExample";

export default function Example() {
    return <DevExample title="DatePicker" component={DatepickerExample} knobs={datepickerExampleKnobs} />;
}
