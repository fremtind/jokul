import React from "react";
import { DevExample } from "../../../doc-utils";
import {
    FormErrorMessageExample,
    formErrorMessageExampleCode,
    formErrorMessageKnobs,
} from "./FormErrorMessageExample";
import {
    MessageExample,
    messageExampleCode,
    messageExampleKnobs,
} from "./MessageExample";
import "../../message/message.scss";

export default function Example() {
    return (
        <>
            <DevExample
                component={MessageExample}
                knobs={messageExampleKnobs}
                codeExample={messageExampleCode}
            />
            <DevExample
                component={FormErrorMessageExample}
                knobs={formErrorMessageKnobs}
                codeExample={formErrorMessageExampleCode}
            />
        </>
    );
}
