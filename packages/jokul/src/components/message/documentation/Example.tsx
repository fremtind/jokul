import { DevExample } from "doc-utils/DevExample.js";
import React from "react";
import { FormErrorMessageExample, formErrorMessageKnobs } from "./FormErrorMessageExample.js";
import { MessageExample, messageExampleKnobs } from "./MessageExample.js";

export default function Example() {
    return (
        <>
            <DevExample component={MessageExample} knobs={messageExampleKnobs} />
            <DevExample component={FormErrorMessageExample} knobs={formErrorMessageKnobs} />
        </>
    );
}
