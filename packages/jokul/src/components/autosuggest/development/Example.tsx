import { DevExample } from "utils/dev-example/DevExample.js";
import React from "react";
import { AutosuggestExample, knobs } from "./AutosuggestExample.js";

export default function Example() {
    return <DevExample component={AutosuggestExample} knobs={knobs} />;
}
