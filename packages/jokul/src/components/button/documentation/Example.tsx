import { DevExample } from "doc-utils/DevExample.js";
import React from "react";
import { AnchorsExample } from "./AnchorsExample.js";
import { ButtonExample, knobs } from "./ButtonExample.js";

export default function Example() {
    return (
        <>
            <DevExample component={AnchorsExample} />
            <DevExample component={ButtonExample} knobs={knobs} />
        </>
    );
}
