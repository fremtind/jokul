import React from "react";
import { DevExample } from "../../../../../../utils/dev-example";
import { AnchorsExample } from "./AnchorsExample";
import { ButtonExample, knobs } from "./ButtonExample";

export default function Example() {
    return (
        <>
            <DevExample component={AnchorsExample} />
            <DevExample component={ButtonExample} knobs={knobs} />
        </>
    );
}
