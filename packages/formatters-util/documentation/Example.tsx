import { DevExample } from "@fremtind/jkl-internal-doc-utils";
import React from "react";
import { FormattersExample } from "./FormattersExample";
import { InputMaskExample } from "./InputMaskExample";

export default function Example() {
    return (
        <>
            <DevExample component={FormattersExample} />
            <DevExample component={InputMaskExample} />
        </>
    );
}
