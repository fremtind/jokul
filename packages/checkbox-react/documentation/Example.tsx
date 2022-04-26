import React from "react";
import { DevExample } from "../../../doc-utils";
import { CheckboxExample } from "./CheckboxExample";
import "../../checkbox/checkbox.scss";

export default function Example() {
    return (
        <DevExample
            component={CheckboxExample}
            knobs={{
                boolProps: ["Compact", "Med feil"],
            }}
        />
    );
}
