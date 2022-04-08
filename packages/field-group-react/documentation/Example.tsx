import React from "react";
import { DevExample } from "../../../doc-utils";
import { FieldGroupExample } from "./FieldGroupExample";
import "../../field-group/field-group.scss";

export default function Example() {
    return (
        <DevExample
            component={FieldGroupExample}
            knobs={{
                boolProps: ["Compact", "Med hjelpetekst", "Med feil"],
                choiceProps: [
                    {
                        name: "Variant",
                        values: ["small", "medium", "large"],
                        defaultValue: 1,
                    },
                ],
            }}
        />
    );
}
