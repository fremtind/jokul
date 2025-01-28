import { DevExample } from "doc-utils/DevExample.js";
import React from "react";
import { SelectExample, selectExampleKnobs } from "./SelectExample.js";

export default function Example() {
    return <DevExample component={SelectExample} knobs={selectExampleKnobs} />;
}
