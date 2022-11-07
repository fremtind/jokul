import React from "react";
import { DevExample } from "../../../doc-utils";
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
