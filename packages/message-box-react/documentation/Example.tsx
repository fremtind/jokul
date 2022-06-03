import React from "react";
import { DevExample } from "../../../doc-utils";
import { FormErrorMessageBoxExample, formErrorMessageBoxKnobs } from "./FormErrorMessageBoxExample";
import { MessageBoxExample, messageBoxExampleKnobs } from "./MessageBoxExample";
import "../../message-box/message-box.scss";

export default function Example() {
    return (
        <>
            <DevExample component={MessageBoxExample} knobs={messageBoxExampleKnobs} />
            <DevExample component={FormErrorMessageBoxExample} knobs={formErrorMessageBoxKnobs} />
        </>
    );
}
