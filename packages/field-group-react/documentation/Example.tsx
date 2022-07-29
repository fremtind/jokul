import React from "react";
import { DevExample } from "../../../doc-utils";
import { FieldGroupExample, fieldGroupExampleCode, fieldGroupExampleKnobs } from "./FieldGroupExample";
import "../../field-group/field-group.scss";

export default function Example() {
    return (
        <DevExample component={FieldGroupExample} knobs={fieldGroupExampleKnobs} codeExample={fieldGroupExampleCode} />
    );
}
