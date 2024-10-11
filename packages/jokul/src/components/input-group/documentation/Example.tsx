import React from "react";
import { DevExample } from "../../../../../../utils/dev-example";
import { InputGroupExample, inputGroupExampleKnobs } from "./InputGroupExample";

export default function Example() {
    return <DevExample component={InputGroupExample} knobs={inputGroupExampleKnobs} />;
}
