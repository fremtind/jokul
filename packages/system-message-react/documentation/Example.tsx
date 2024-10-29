import React from "react";
import { DevExample } from "../../../doc-utils";
import {
    SystemMessageExample,
    systemMessageExampleCode,
    systemMessageKnobs,
} from "./SystemMessageExample";
import "../../system-message/system-message.scss";

export default function Example() {
    return (
        <DevExample
            component={SystemMessageExample}
            knobs={systemMessageKnobs}
            codeExample={systemMessageExampleCode}
        />
    );
}
