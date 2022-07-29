import React from "react";
import { DevExample } from "../../../doc-utils";
import { AlertMessageExample, alertMessageExampleCode, alertMessageKnobs } from "./AlertMessageExample";
import "../../alert-message/alert-message.scss";

export default function Example() {
    return (
        <DevExample component={AlertMessageExample} knobs={alertMessageKnobs} codeExample={alertMessageExampleCode} />
    );
}
