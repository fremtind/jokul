import { DevExample } from "utils/dev-example/DevExample.js";
import React from "react";
import { AnchorsExample } from "./AnchorsExample.js";
import { ButtonExample, knobs } from "./ButtonExample.js";

export default function Example() {
    return (
        <>
            <DevExample component={ButtonExample} knobs={knobs} />
            <DevExample component={AnchorsExample} />
        </>
    );
}
