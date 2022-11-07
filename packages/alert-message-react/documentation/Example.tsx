import { DevExample } from "@fremtind/jkl-internal-doc-utils";
import React from "react";
import { AlertMessageExample, alertMessageExampleCode, alertMessageKnobs } from "./AlertMessageExample";
import "../../alert-message/alert-message.scss";

export default function Example() {
    return (
        <DevExample component={AlertMessageExample} knobs={alertMessageKnobs} codeExample={alertMessageExampleCode} />
    );
}
