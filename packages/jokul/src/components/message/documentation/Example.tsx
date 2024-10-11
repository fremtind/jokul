import React from "react";
import { DevExample } from "../../../../../../utils/dev-example";
import { FormErrorMessageExample, formErrorMessageKnobs } from "./FormErrorMessageExample";
import { MessageExample, messageExampleKnobs } from "./MessageExample";

export default function Example() {
    return (
        <>
            <DevExample component={MessageExample} knobs={messageExampleKnobs} />
            <DevExample component={FormErrorMessageExample} knobs={formErrorMessageKnobs} />
        </>
    );
}
