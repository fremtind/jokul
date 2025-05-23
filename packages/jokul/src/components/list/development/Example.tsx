import React from "react";
import { DevExample } from "utils/dev-example/DevExample.js";
import { ListExamples, knobs } from "./ListExample.js";

export default function Example() {
    return (
        <>
            <DevExample
                component={ListExamples}
                knobs={knobs}
                style={{ minWidth: "30ch" }}
            />
        </>
    );
}
