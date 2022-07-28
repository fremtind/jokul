import React from "react";
import { DevExample } from "../../../doc-utils";
import {
    FormErrorMessageBoxExample,
    formErrorMessageBoxExampleCode,
    formErrorMessageBoxKnobs,
} from "./FormErrorMessageBoxExample";
import { MessageBoxExample, messageBoxExampleCode, messageBoxExampleKnobs } from "./MessageBoxExample";
import "../../message-box/message-box.scss";

export default function Example() {
    return (
        <>
            <DevExample
                component={MessageBoxExample}
                knobs={messageBoxExampleKnobs}
                codeExample={messageBoxExampleCode}
            />
            <DevExample
                component={FormErrorMessageBoxExample}
                knobs={formErrorMessageBoxKnobs}
                codeExample={formErrorMessageBoxExampleCode}
            />
        </>
    );
}
