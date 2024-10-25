import { DevExample } from "doc-utils/DevExample.js";
import React from "react";
import { knobs, ListExamples } from "./ListExample.js";

export default function Example() {
    return (
        <>
            <DevExample component={ListExamples} knobs={knobs} style={{ minWidth: "30ch" }} />
        </>
    );
}
