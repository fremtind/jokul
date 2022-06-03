import React from "react";
import { DevExample } from "../../../doc-utils";
import { MessageBoxExample, messageBoxExampleKnobs } from "./MessageBoxExample";
import "../../message-box/message-box.scss";
import { FormErrorMessageBoxExample, formErrorMessageBoxKnobs } from "./FormErrorMessageBoxExample";

export default function Example() {
    return (
        <>
            <DevExample component={MessageBoxExample} knobs={messageBoxExampleKnobs} />
            <DevExample component={FormErrorMessageBoxExample} knobs={formErrorMessageBoxKnobs} />
        </>
    );
}
