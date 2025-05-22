import { DevExample } from "utils/dev-example/DevExample.js";
import React from "react";
import { SelectExample, selectExampleKnobs } from "./SelectExample.js";

export default function Example() {
    return <DevExample component={SelectExample} knobs={selectExampleKnobs} />;
}
