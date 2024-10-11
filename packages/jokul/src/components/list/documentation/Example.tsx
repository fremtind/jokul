import React from "react";
import { DevExample } from "../../../../../../utils/dev-example";
import { ListExamples, knobs } from "./ListExample";

export default function Example() {
    return (
        <>
            <DevExample component={ListExamples} knobs={knobs} style={{ minWidth: "30ch" }} />
        </>
    );
}
